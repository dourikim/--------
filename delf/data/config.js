/* config.js — 공개 설정
   ⚠ 접속 코드는 여기에 두지 않습니다. 브라우저에서 그대로 읽히기 때문입니다.
      학생 코드·선생님 코드·학생 명단은 서버 환경변수(DELF_STUDENTS 등)에만 있고,
      /api/auth 가 확인한 뒤 토큰만 브라우저에 내려줍니다.
*/
window.CONFIG = {
  siteName: "김두우리 프랑스어",
  contact: "문의: @douri.french",
  authUrl: "/api/auth",      /* 접속 코드 확인 */
  syncUrl: "/api/progress"   /* 진도 자동 저장 */
};

/* 거주지 → 시간대. 학생의 현지 시각으로 인사말과 «공부 N일차»를 계산합니다. */
window.CITIES = [
  ["서울","Asia/Seoul"],["부산","Asia/Seoul"],["도쿄","Asia/Tokyo"],["베이징·상하이","Asia/Shanghai"],
  ["하노이·호치민","Asia/Ho_Chi_Minh"],["싱가포르","Asia/Singapore"],["두바이","Asia/Dubai"],
  ["파리","Europe/Paris"],["리옹","Europe/Paris"],["브뤼셀","Europe/Brussels"],["제네바","Europe/Zurich"],
  ["런던","Europe/London"],["베를린","Europe/Berlin"],["마드리드","Europe/Madrid"],["로마","Europe/Rome"],
  ["몬트리올·퀘벡","America/Toronto"],["뉴욕","America/New_York"],["로스앤젤레스","America/Los_Angeles"],
  ["시드니","Australia/Sydney"],["기타 (한국 시간 기준)","Asia/Seoul"]
];
