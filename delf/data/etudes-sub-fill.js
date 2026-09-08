/* etudes-sub-fill.js — « Les études » 소주제 어휘 100개 보정
   각 세트를 정확히 100개로 맞춥니다. 형식: [프랑스어, 한국어, 예문]
*/
(function(){
var F = {

"b2-etudes::les MOOC":[
["le taux d'abandon","중도 포기율","Le taux d'abandon des MOOC dépasse souvent 90 % des inscrits."],
["l'attestation de suivi","수료 확인증","L'attestation de suivi n'a pas la même valeur qu'un diplôme reconnu."],
["la classe inversée","거꾸로 교실","Le MOOC est parfois utilisé comme support d'une classe inversée."],
["l'autodiscipline","자기 규율","Suivre un MOOC jusqu'au bout suppose une réelle autodiscipline."],
["la validation des acquis","기존 학습 인정","Certains établissements acceptent le MOOC dans la validation des acquis."],
["le contenu à la demande","주문형 콘텐츠","Le contenu à la demande permet d'apprendre à son propre rythme."],
["le décrochage en ligne","온라인 학습 이탈","Le décrochage en ligne s'explique souvent par l'absence de cadre collectif."],
["la scénarisation pédagogique","교수 설계","La scénarisation pédagogique fait toute la différence entre deux MOOC."],
["le badge numérique","디지털 배지","Le badge numérique atteste d'une compétence précise, pas d'un cursus complet."],
["la formation certifiante","자격 인증 과정","Une formation certifiante rassure davantage les recruteurs qu'un simple suivi."]
],

"b2-etudes::l'éducation globale":[
["l'ouverture sur le monde","세계에 대한 개방성","L'éducation globale vise avant tout l'ouverture sur le monde."],
["la compétence interculturelle","상호문화 역량","La compétence interculturelle ne se décrète pas : elle se construit par l'expérience."]
],

"b2-etudes::les rythmes scolaires":[
["le chronotype","생체 리듬 유형","À l'adolescence, le chronotype se décale naturellement de deux heures."],
["la vigilance matinale","오전 각성도","La vigilance matinale des lycéens est plus faible qu'on ne le croit."],
["l'aménagement du temps scolaire","학사 시간 편성","L'aménagement du temps scolaire relève à la fois de l'État et des communes."],
["la coupure estivale","여름 방학 단절","Une coupure estivale trop longue accentue les écarts entre les élèves."]
]

};
for (var k in F) {
  if (!window.SUBVOCAB[k]) { window.SUBVOCAB[k] = F[k]; continue; }
  var have = {};
  window.SUBVOCAB[k].forEach(function(x){ have[x[0]] = 1; });
  F[k].forEach(function(x){ if (!have[x[0]] && window.SUBVOCAB[k].length < 100) window.SUBVOCAB[k].push(x); });
}
})();
