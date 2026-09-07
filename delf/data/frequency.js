/* frequency.js — 기출 문제 근거 (signaux d'occurrence)
   ─────────────────────────────────────────────────────────────
   ⚠ 중요: DELF/DALF는 공식 기출을 공개하지 않습니다. 시험지는 회수되고
   France Éducation International이 내놓는 것은 "sujets d'exemple"(예시 문제) 몇 종뿐입니다.
   따라서 아래는 공식 문제지가 아니라, 공개된 2차 자료 세 종류를 교차시켜 복원한 **기출 문제 근거**입니다.

   kind 값:
     temoignage  = 응시자 후기 취합 (연도 표기, 검증 불가 — 자체 면책 문구 있음)
     prepa       = 시험 대비 전문 사이트가 '자주 나온다'고 지목한 주제
     officiel    = FEI/공식 배포 sujet d'exemple  (현재 미수집 — 아래 TODO)

   점수: temoignage 2점 · prepa 1점 · officiel 3점
   등급: 3점 이상 A · 2점 B · 1점 C
   exact:false = 후기의 표현이 우리 소주제와 완전히 같지는 않고 인접한 경우
*/
window.SIGNALS = {

  /* ================= DELF B2 ================= */
  "b2-travail::la semaine de 4 jours":[
    {kind:"temoignage",label:"응시자 후기 2023–2026 (« La semaine de 4 jours »)",src:"french-exam.com",exact:true},
    {kind:"prepa",label:"PO 빈출 15주제 (« Faut-il travailler quatre jours ou cinq jours par semaine ? »)",src:"French School TV",exact:true}
  ],
  "b2-etudes::le téléphone portable à l'école":[
    {kind:"temoignage",label:"응시자 후기 2023–2026 (« Le smartphone à l'école primaire »)",src:"french-exam.com",exact:true},
    {kind:"prepa",label:"PO 빈출 15주제 (« Faut-il interdire le téléphone portable à l'école ? »)",src:"French School TV",exact:true}
  ],
  "b2-etudes::le port de l'uniforme":[
    {kind:"temoignage",label:"응시자 후기 2023–2026 (« L'uniforme scolaire »)",src:"french-exam.com",exact:true}
  ],
  "b2-travail::le télétravail":[
    {kind:"temoignage",label:"응시자 후기 2023–2026 (« Les nomades numériques en zone rurale »)",src:"french-exam.com",exact:false},
    {kind:"prepa",label:"PO 빈출 15주제 (« Le télétravail et les espaces de coworking »)",src:"French School TV",exact:true}
  ],
  "b2-travail::les logiciels pour surveiller les ordinateurs":[
    {kind:"prepa",label:"PO 빈출 15주제 (« La vidéosurveillance au travail est-elle une bonne idée ? »)",src:"French School TV",exact:true}
  ],
  "b2-consommation::l'obsolescence programmée":[
    {kind:"temoignage",label:"응시자 후기 2023–2026 (« Le droit à la réparation »)",src:"french-exam.com",exact:false}
  ],
  "b2-consommation::les repair cafés":[
    {kind:"temoignage",label:"응시자 후기 2023–2026 (« Le droit à la réparation »)",src:"french-exam.com",exact:false}
  ],
  "b2-social::la solidarité entre générations":[
    {kind:"temoignage",label:"응시자 후기 2023–2026 (« L'habitat intergénérationnel »)",src:"french-exam.com",exact:false}
  ],
  "b2-medias::les jeunes et les réseaux sociaux":[
    {kind:"temoignage",label:"응시자 후기 2023–2026 (« La régulation des enfants influenceurs »)",src:"french-exam.com",exact:false}
  ],
  "b2-sante::l'impact des écrans sur la santé mentale et physique des enfants":[
    {kind:"prepa",label:"PO 빈출 15주제 (« Les écrans sont-ils vraiment nocifs pour les enfants ? »)",src:"French School TV",exact:true}
  ],
  "b2-etudes::le redoublement":[
    {kind:"prepa",label:"PO 빈출 15주제 (« Le redoublement est-il utile ? »)",src:"French School TV",exact:true}
  ],
  "b2-environnement::le lundi sans viande":[
    {kind:"prepa",label:"PO 빈출 15주제 (« Le lundi vert : être végétarien une fois par semaine ? »)",src:"French School TV",exact:true}
  ],
  "b2-tourisme::l'écotourisme":[
    {kind:"prepa",label:"PO 빈출 15주제 (« Le tourisme vert a-t-il un avenir ? »)",src:"French School TV",exact:false}
  ],
  "b2-consommation::les nouvelles tendances":[
    {kind:"prepa",label:"PO 빈출 15주제 (« Faut-il louer ses vêtements plutôt que les acheter ? »)",src:"French School TV",exact:false}
  ],
  "b2-transports::l'interdiction des voitures en ville":[
    {kind:"temoignage",label:"응시자 후기 2023–2026 (« L'interdiction des vols courts » — 이동수단 규제 계열)",src:"french-exam.com",exact:false}
  ],

  /* ================= DALF C1 ================= */
  "c1-travail::le droit à la déconnexion":[
    {kind:"temoignage",label:"응시자 후기 2017 CE",src:"chitvanbindal (2016–2021 취합)",exact:true}
  ],
  "c1-travail::le télétravail":[
    {kind:"temoignage",label:"응시자 후기 2021 CO",src:"chitvanbindal (2016–2021 취합)",exact:true}
  ],
  "c1-travail::la semaine de 4 jours":[
    {kind:"prepa",label:"PO 예시 (« Travailler moins pour vivre mieux : utopie ou nécessité ? »)",src:"Français avec Pierre",exact:false}
  ],
  "c1-ecole::les usages du numérique":[
    {kind:"temoignage",label:"응시자 후기 2019 PO (« L'école et le numérique »)",src:"chitvanbindal (2016–2021 취합)",exact:true}
  ],
  "c1-societe::l'altruisme":[
    {kind:"temoignage",label:"응시자 후기 2019 PO (« le bonheur dans l'acte de donner »)",src:"chitvanbindal (2016–2021 취합)",exact:false}
  ],
  "c1-societe::le féminisme":[
    {kind:"temoignage",label:"응시자 후기 2019 PO (« stéréotypes de genre chez les enfants »)",src:"chitvanbindal (2016–2021 취합)",exact:false}
  ],
  "c1-societe::le changement de prénom":[
    {kind:"temoignage",label:"응시자 후기 2021 CO (« changement de prénom et identité »)",src:"chitvanbindal (2016–2021 취합)",exact:true}
  ],
  "c1-tourisme::l'hyperfréquentation touristique":[
    {kind:"temoignage",label:"응시자 후기 2020 PE (« le tourisme de masse »)",src:"chitvanbindal (2016–2021 취합)",exact:true},
    {kind:"prepa",label:"PE 예시 (« effets du tourisme de masse »)",src:"Français avec Pierre",exact:true}
  ],
  "c1-science::le transhumanisme":[
    {kind:"temoignage",label:"응시자 후기 2020 PE",src:"chitvanbindal (2016–2021 취합)",exact:true}
  ],
  "c1-science::l'intelligence artificielle":[
    {kind:"temoignage",label:"응시자 후기 2023–2026 B2 (« L'IA dans la création artistique »)",src:"french-exam.com",exact:false},
    {kind:"prepa",label:"CE 예시 (« L'IA est-elle un bon psy ? »)",src:"Français avec Pierre",exact:false}
  ],
  "c1-economie::l'ubérisation":[
    {kind:"temoignage",label:"응시자 후기 2020 PE (« synthèse : économie de partage et économie circulaire »)",src:"chitvanbindal (2016–2021 취합)",exact:false}
  ],
  "c1-culture::la littérature de jeunesse":[
    {kind:"temoignage",label:"응시자 후기 2019 PO (« la lecture chez les jeunes »)",src:"chitvanbindal (2016–2021 취합)",exact:false}
  ],
  "c1-culture::le pass culture":[
    {kind:"prepa",label:"PO 예시 (« La culture doit-elle être gratuite pour tous ? »)",src:"Français avec Pierre",exact:false}
  ],
  "c1-espace::le tourisme spatial":[
    {kind:"temoignage",label:"응시자 후기 2023–2026 B2 (« Le tourisme spatial »)",src:"french-exam.com",exact:false}
  ],
  "c1-alimentation::le véganisme":[
    {kind:"temoignage",label:"응시자 후기 2020 PE (« les OGM » — 식품·과학 계열)",src:"chitvanbindal (2016–2021 취합)",exact:false}
  ],
  "c1-ecole::l'évaluation des professeurs":[
    {kind:"temoignage",label:"응시자 후기 2021 CO (« la notation dans le système scolaire »)",src:"chitvanbindal (2016–2021 취합)",exact:false}
  ]
};

/* 후기 목록에는 있는데 우리 소주제 표에 대응 항목이 없는 것들.
   → 표에 새 소주제로 추가할지 검토용. */
window.SIGNALS_ORPHAN = [
  {level:"B2", sujet:"Le « Ghosting » numérique", src:"french-exam.com 후기 2023–2026", suggest:"Les médias & Internet"},
  {level:"B2", sujet:"L'interdiction des vols courts", src:"french-exam.com 후기 2023–2026", suggest:"Les transports / L'environnement"},
  {level:"B2", sujet:"Le « Quiet Quitting »", src:"french-exam.com 후기 2023–2026", suggest:"Le monde du travail"},
  {level:"B2", sujet:"L'IA dans la création artistique", src:"french-exam.com 후기 2023–2026", suggest:"Les loisirs et la culture"},
  {level:"B2", sujet:"Vivre en centre-ville ou en banlieue ?", src:"French School TV", suggest:"(새 주제) Le logement"},
  {level:"B2", sujet:"Faut-il fermer les zoos ?", src:"French School TV", suggest:"L'environnement"},
  {level:"B2", sujet:"Les salons d'orientation", src:"French School TV", suggest:"Les études"},
  {level:"C1", sujet:"Faut-il abolir l'héritage ?", src:"Français avec Pierre", suggest:"L'économie"},
  {level:"C1", sujet:"Les OGM", src:"chitvanbindal 후기 2020 PE", suggest:"L'alimentation"},
  {level:"C1", sujet:"La journée sans voiture à Paris", src:"chitvanbindal 후기 2017 CE", suggest:"L'urbanisme"}
];

window.SIG_SCORE = {temoignage:2, prepa:1, officiel:3};
window.SIG_SOURCES = [
  {kind:"temoignage", nom:"french-exam.com — 응시자 후기 기반 최근 출제 주제 (2023–2026)", url:"https://www.french-exam.com/12-delf-b2-topics-from-recent-exams-reported-by-candidates-2025-2026/"},
  {kind:"temoignage", nom:"chitvanbindal — LISTE DES SUJETS RÉCENTS : DALF C1 (2016–2021, 후기 취합, 저자 자체 면책 문구 있음)", url:"https://chitvanbindal.wordpress.com/2021/01/22/liste-des-sujets-recents-dalf-c1/"},
  {kind:"prepa", nom:"French School TV — DELF B2 production orale 빈출 15주제", url:"https://frenchschooltv.com/blogs/blog/les-themes-production-orale-delf-b2"},
  {kind:"prepa", nom:"Français avec Pierre — DALF C1 예시 문제", url:"https://www.francaisavecpierre.com/exemple-dalf-c1/"},
  {kind:"officiel", nom:"France Éducation International — sujets d'exemple (공식, 현재 사이트 접근 차단으로 미수집)", url:"https://www.france-education-international.fr/"}
];
