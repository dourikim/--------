/* config.js — 배포 설정
   accessCode  : 공용 접속 코드 (학생 코드가 없는 사람용)
   teacherCode : 선생님 전용 코드 (admin.html) — 학생에게는 절대 노출되지 않습니다
   ⚠ 브라우저에서 보이는 값이므로 진짜 보안이 아닙니다. 검색 노출 차단 + 우연한 접속 차단용입니다.
*/
window.CONFIG = {
  accessCode: "douri-delf",
  teacherCode: "DK26",
  siteName: "김두우리 프랑스어",
  contact: "문의: @douri.french",
  /* 진도 자동 저장 서버. 비워두면 예전처럼 브라우저에만 저장됩니다.
     학생 코드(SY26)가 곧 서버 키입니다. */
  syncUrl: "/api/progress"
};

/* 학생별 접속 코드.
   학생마다 한 줄씩 추가하세요. 학생은 자기 코드만 입력하면 이름·거주지를 다시 쓰지 않고 바로 들어갑니다.
   - code      : 그 학생만 쓰는 코드 (대소문자 구분 없음)
   - name      : 비워두면 첫 접속 때 학생이 직접 입력합니다
   - tz / city : 거주지. 인사말과 «공부 N일차»가 이 시간대로 계산됩니다
   - cert      : 마지막 취득 자격증 (없으면 빈칸)
   진도는 이 코드를 키로 서버에 자동 저장됩니다 (syncUrl). 기기를 바꾸거나 브라우저 기록을 지워도
   같은 코드로 들어오면 그대로 이어집니다. 서버를 끄면(syncUrl 빈칸) 그 브라우저에만 저장됩니다. */
window.STUDENTS = [
  {code:"SY26", name:"서윤", city:"제네바", tz:"Europe/Zurich", cert:"", certDate:""}
];

/* 거주지 → 시간대. 학생의 현지 시각으로 인사말과 «공부 N일차»를 계산합니다. */
window.CITIES = [
  ["서울","Asia/Seoul"],["부산","Asia/Seoul"],["도쿄","Asia/Tokyo"],["베이징·상하이","Asia/Shanghai"],
  ["하노이·호치민","Asia/Ho_Chi_Minh"],["싱가포르","Asia/Singapore"],["두바이","Asia/Dubai"],
  ["파리","Europe/Paris"],["리옹","Europe/Paris"],["브뤼셀","Europe/Brussels"],["제네바","Europe/Zurich"],
  ["런던","Europe/London"],["베를린","Europe/Berlin"],["마드리드","Europe/Madrid"],["로마","Europe/Rome"],
  ["몬트리올·퀘벡","America/Toronto"],["뉴욕","America/New_York"],["로스앤젤레스","America/Los_Angeles"],
  ["시드니","Australia/Sydney"],["기타 (한국 시간 기준)","Asia/Seoul"]
];
