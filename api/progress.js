/* /api/progress — 학생 진도 자동 저장 (dourikim.com/api/progress)
 *
 *   GET  /api/progress?code=SY26   → {at, data}   저장된 진도 (없으면 404)
 *   POST /api/progress  {code, data} → {ok, at}   진도 저장
 *
 * 저장소: Upstash Redis (Vercel → Storage 에서 연결하면 환경변수가 자동으로 들어옵니다)
 *   KV_REST_API_URL / KV_REST_API_TOKEN  또는  UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN
 * 허용 코드: 환경변수 DELF_CODES ("SY26,MJ26" 처럼 쉼표로) — 없으면 아래 기본값
 *
 * 환경변수가 없으면 503을 돌려주고, 학습 페이지는 예전처럼 브라우저 저장으로만 동작합니다.
 */
/* 통합(마켓플레이스)마다 변수 이름이 조금씩 다르므로 널리 쓰이는 이름을 모두 받아들입니다 */
function pick(re, ...names) {
  const e = process.env;
  for (const n of names) if (e[n]) return e[n];
  const k = Object.keys(e).filter(k => re.test(k) && e[k]);
  return k.length ? e[k[0]] : '';
}
const URL_  = pick(/REST_(API_)?URL$/,   'KV_REST_API_URL',   'UPSTASH_REDIS_REST_URL');
const TOKEN = pick(/REST_(API_)?TOKEN$/, 'KV_REST_API_TOKEN', 'UPSTASH_REDIS_REST_TOKEN');
const CODES = (process.env.DELF_CODES || 'SY26').split(',').map(s => s.trim().toUpperCase()).filter(Boolean);
const MAX = 900000; /* 약 900KB */

const ok = c => CODES.includes(String(c || '').trim().toUpperCase());
const key = c => 'delf:' + String(c).trim().toUpperCase();

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  /* 설정 점검용 — 값은 노출하지 않고 «있다/없다»만 알려줍니다 */
  if (req.query && req.query.diag) return res.status(200).json({ store: !!(URL_ && TOKEN), codes: CODES });
  if (!URL_ || !TOKEN) return res.status(503).json({ error: 'store not configured' });

  try {
    if (req.method === 'GET') {
      const code = (req.query && req.query.code) || '';
      if (!ok(code)) return res.status(404).json({ error: 'unknown code' });
      const r = await fetch(`${URL_}/get/${encodeURIComponent(key(code))}`,
        { headers: { Authorization: `Bearer ${TOKEN}` } });
      const j = await r.json();
      if (!j || !j.result) return res.status(404).json({ error: 'empty' });
      return res.status(200).json(JSON.parse(j.result));
    }

    if (req.method === 'POST') {
      let body = req.body;
      if (typeof body === 'string') { try { body = JSON.parse(body) } catch (e) { body = null } }
      if (!body) {                                   /* sendBeacon 등 파싱 전 원문 */
        body = await new Promise(resolve => {
          let d = ''; req.on('data', c => d += c);
          req.on('end', () => { try { resolve(JSON.parse(d)) } catch (e) { resolve(null) } });
        });
      }
      if (!body || !ok(body.code)) return res.status(404).json({ error: 'unknown code' });
      const at = Date.now();
      const payload = JSON.stringify({ at, data: body.data || {} });
      if (payload.length > MAX) return res.status(413).json({ error: 'too large' });
      const r = await fetch(`${URL_}/set/${encodeURIComponent(key(body.code))}`,
        { method: 'POST', headers: { Authorization: `Bearer ${TOKEN}` }, body: payload });
      if (!r.ok) return res.status(502).json({ error: 'store write failed' });
      return res.status(200).json({ ok: true, at });
    }

    return res.status(405).json({ error: 'method not allowed' });
  } catch (e) {
    return res.status(500).json({ error: String((e && e.message) || e) });
  }
};
