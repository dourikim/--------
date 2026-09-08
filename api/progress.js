/* /api/progress — 학생 진도 자동 저장 (dourikim.com/api/progress)
 *
 *   GET  /api/progress?code=SY26   → {at, data}   (헤더 Authorization: Bearer <token> 필요)
 *   POST /api/progress  {code, data, token}       → {ok, at}
 *
 * 접근 제어: /api/auth 가 발급한 토큰만 받습니다.
 *   · 학생 토큰 → 자기 코드의 기록만 읽고 쓸 수 있습니다.
 *   · 선생님 토큰 → 모든 학생의 기록을 읽을 수 있습니다 (쓰기는 불가).
 * 코드 목록은 DELF_STUDENTS 환경변수에만 있고 브라우저에는 없습니다.
 *
 * 저장소: Upstash Redis — Vercel → Storage 에서 연결하면 환경변수가 자동으로 들어옵니다.
 */
const AUTH = require('./auth.js');

function pick(re, ...names) {
  const e = process.env;
  for (const n of names) if (e[n]) return e[n];
  const k = Object.keys(e).filter(k => re.test(k) && e[k]);
  return k.length ? e[k[0]] : '';
}
const URL_  = pick(/REST_(API_)?URL$/,   'KV_REST_API_URL',   'UPSTASH_REDIS_REST_URL');
const TOKEN = pick(/REST_(API_)?TOKEN$/, 'KV_REST_API_TOKEN', 'UPSTASH_REDIS_REST_TOKEN');
const MAX = 900000; /* 약 900KB */

const known = c => AUTH.students().some(s => String(s.code || '').toUpperCase() === String(c || '').trim().toUpperCase());
const key   = c => 'delf:' + String(c).trim().toUpperCase();

function bearer(req, body) {
  const h = req.headers && (req.headers.authorization || req.headers.Authorization);
  if (h && /^Bearer /i.test(h)) return AUTH.verify(h.slice(7).trim());
  if (body && body.token) return AUTH.verify(String(body.token));
  return null;
}

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  if (req.query && req.query.diag) return res.status(200).json({ store: !!(URL_ && TOKEN) });
  if (!URL_ || !TOKEN) return res.status(503).json({ error: 'store not configured' });

  try {
    if (req.method === 'GET') {
      const code = String((req.query && req.query.code) || '').trim().toUpperCase();
      const t = bearer(req, null);
      if (!t) return res.status(401).json({ error: 'no token' });
      if (t.r === 's' && t.sid !== code) return res.status(403).json({ error: 'forbidden' });
      if (t.r !== 's' && t.r !== 't') return res.status(403).json({ error: 'forbidden' });
      if (!known(code)) return res.status(404).json({ error: 'unknown code' });
      const r = await fetch(`${URL_}/get/${encodeURIComponent(key(code))}`,
        { headers: { Authorization: `Bearer ${TOKEN}` } });
      const j = await r.json();
      if (!j || !j.result) return res.status(404).json({ error: 'empty' });
      return res.status(200).json(JSON.parse(j.result));
    }

    if (req.method === 'POST') {
      let body = req.body;
      if (typeof body === 'string') { try { body = JSON.parse(body) } catch (e) { body = null } }
      if (!body) {
        body = await new Promise(resolve => {
          let d = ''; req.on('data', c => d += c);
          req.on('end', () => { try { resolve(JSON.parse(d)) } catch (e) { resolve(null) } });
        });
      }
      if (!body) return res.status(400).json({ error: 'no body' });
      const code = String(body.code || '').trim().toUpperCase();
      const t = bearer(req, body);
      if (!t) return res.status(401).json({ error: 'no token' });
      if (t.r !== 's' || t.sid !== code) return res.status(403).json({ error: 'forbidden' });
      if (!known(code)) return res.status(404).json({ error: 'unknown code' });
      const at = Date.now();
      const payload = JSON.stringify({ at, data: body.data || {} });
      if (payload.length > MAX) return res.status(413).json({ error: 'too large' });
      const r = await fetch(`${URL_}/set/${encodeURIComponent(key(code))}`,
        { method: 'POST', headers: { Authorization: `Bearer ${TOKEN}` }, body: payload });
      if (!r.ok) return res.status(502).json({ error: 'store write failed' });
      return res.status(200).json({ ok: true, at });
    }

    return res.status(405).json({ error: 'method not allowed' });
  } catch (e) {
    return res.status(500).json({ error: String((e && e.message) || e) });
  }
};
