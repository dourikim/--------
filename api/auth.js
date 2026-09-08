/* /api/auth — 접속 코드 확인 (코드는 서버 환경변수에만 있습니다)
 *
 *   GET  /api/auth?diag=1   → {configured, students, hasTeacher}   설정 점검 (코드는 노출하지 않음)
 *   POST /api/auth {code}   → {role:"student", token, sid, profile:{...}}
 *                             {role:"teacher", token}
 *                             401 {error:"bad code"}
 *
 * 환경변수 (Vercel → Settings → Environment Variables)
 *   DELF_SECRET        토큰 서명용 임의 문자열 (32자 이상 권장)
 *   DELF_TEACHER_CODE  선생님 코드
 *   DELF_STUDENTS      학생 명단 JSON 배열
 *        [{"code":"SY26","name":"서윤","city":"제네바","tz":"Europe/Zurich","cert":"","certDate":""}]
 *   DELF_ACCESS_CODE   (선택) 공용 코드. 비워두면 공용 접속이 아예 막힙니다.
 *
 * 토큰은 HMAC-SHA256으로 서명됩니다. 브라우저에는 코드가 저장되지 않고 토큰만 남습니다.
 */
const crypto = require('crypto');

const SECRET  = process.env.DELF_SECRET || '';
const TEACHER = (process.env.DELF_TEACHER_CODE || '').trim();
const SHARED  = (process.env.DELF_ACCESS_CODE || '').trim();
const DAYS    = 180;

function students() {
  try { const a = JSON.parse(process.env.DELF_STUDENTS || '[]'); return Array.isArray(a) ? a : [] }
  catch (e) { return [] }
}
const b64u = s => Buffer.from(s, 'utf8').toString('base64url');

function sign(payload) {
  const p = b64u(JSON.stringify(payload));
  const m = crypto.createHmac('sha256', SECRET).update(p).digest('base64url');
  return p + '.' + m;
}
/* 다른 함수(api/progress)에서도 씁니다 */
function verify(tok) {
  if (!SECRET || typeof tok !== 'string' || tok.indexOf('.') < 0) return null;
  const [p, m] = tok.split('.');
  const want = crypto.createHmac('sha256', SECRET).update(p).digest('base64url');
  const a = Buffer.from(m || '', 'utf8'), b = Buffer.from(want, 'utf8');
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;
  let o; try { o = JSON.parse(Buffer.from(p, 'base64url').toString('utf8')) } catch (e) { return null }
  if (!o || !o.exp || Date.now() > o.exp) return null;
  return o;
}
const eq = (a, b) => {
  if (!a || !b) return false;
  const x = Buffer.from(String(a), 'utf8'), y = Buffer.from(String(b), 'utf8');
  return x.length === y.length && crypto.timingSafeEqual(x, y);
};

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');

  if (req.query && req.query.diag) {
    return res.status(200).json({
      configured: !!(SECRET && (TEACHER || students().length)),
      students: students().length, hasTeacher: !!TEACHER, hasShared: !!SHARED
    });
  }
  /* 선생님 토큰으로 학생 명단 조회 (코드 포함 — 선생님만) */
  if (req.query && req.query.roster) {
    const h = req.headers && (req.headers.authorization || req.headers.Authorization);
    const t = h && /^Bearer /i.test(h) ? verify(h.slice(7).trim()) : null;
    if (!t || t.r !== 't') return res.status(401).json({ error: 'teacher token required' });
    return res.status(200).json({ students: students().map(x => ({
      code: String(x.code || '').toUpperCase(), name: x.name || '', city: x.city || '', tz: x.tz || '' })) });
  }
  if (req.method !== 'POST') return res.status(405).json({ error: 'method not allowed' });
  if (!SECRET) return res.status(503).json({ error: 'auth not configured' });

  let body = req.body;
  if (typeof body === 'string') { try { body = JSON.parse(body) } catch (e) { body = null } }
  if (!body) {
    body = await new Promise(r => { let d = ''; req.on('data', c => d += c);
      req.on('end', () => { try { r(JSON.parse(d)) } catch (e) { r(null) } }) });
  }
  const code = String((body && body.code) || '').trim();
  if (!code) return res.status(400).json({ error: 'no code' });

  /* 무차별 대입을 조금이라도 늦춥니다 */
  await new Promise(r => setTimeout(r, 400));

  if (TEACHER && eq(code.toUpperCase(), TEACHER.toUpperCase())) {
    return res.status(200).json({ role: 'teacher',
      token: sign({ r: 't', exp: Date.now() + DAYS * 864e5 }) });
  }
  const s = students().find(x => eq(String(x.code || '').toUpperCase(), code.toUpperCase()));
  if (s) {
    const sid = String(s.code).toUpperCase();
    return res.status(200).json({ role: 'student', sid,
      token: sign({ r: 's', sid, exp: Date.now() + DAYS * 864e5 }),
      profile: { name: s.name || '', city: s.city || '', tz: s.tz || 'Asia/Seoul',
                 cert: s.cert || '', certDate: s.certDate || '' } });
  }
  if (SHARED && eq(code, SHARED)) {
    return res.status(200).json({ role: 'shared',
      token: sign({ r: 'g', sid: '', exp: Date.now() + DAYS * 864e5 }) });
  }
  return res.status(401).json({ error: 'bad code' });
};

module.exports.verify = verify;
module.exports.students = students;
