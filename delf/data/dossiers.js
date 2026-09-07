/* dossiers.js — 소주제별 자료집
   구조는 영상(8-5 Le subjonctif, 29분~)에서 제시한 ChatGPT 프롬프트 결과물 순서를 그대로 따름:
   ① 전문 용어 ② 왜 오늘날 problématique인가 ③ 상반되는 의견 ④ 프랑스 vs 한국
   ⑤ 균형 잡힌 결론 표현 ⑥ 읽을/볼 자료 ⑦ 작문 구조 예시
   ⚠ 프랑스어 문장과 논거는 Claude가 작성한 것(원어민 검수 전). 링크는 검색으로 확인한 실제 URL.
   키 = "테마id::소주제" 형식.
*/
window.DOSSIERS = {

"b2-travail::le travail hybride": {
  ko: "하이브리드 근무",
  updated: "2026-09-06",
  problematique: "Le travail hybride est-il un véritable progrès social ou une nouvelle façon, plus discrète, de faire porter aux salariés la charge de l'organisation du travail ?",
  contexte: [
    "2020 : la crise sanitaire impose le télétravail massif et improvisé.",
    "2021-2022 : les accords d'entreprise fixent un « socle » de 2 à 3 jours à distance ; le télétravail devient un argument de recrutement.",
    "2023-2024 : premières marches arrière — plusieurs grands groupes exigent un retour au bureau, au nom de la cohésion et de l'innovation.",
    "2025 : le travail hybride est décrit comme une pratique désormais ancrée, mais très inégalement répartie selon les métiers et les catégories socioprofessionnelles.",
    "Enjeu actuel : on ne discute plus de son existence, mais de qui décide des jours de présence."
  ],
  pour: [
    "Il réduit la fatigue et le temps perdu dans les transports, donc améliore la qualité de vie au travail.",
    "Il permet une meilleure conciliation entre vie professionnelle et vie familiale, en particulier pour les parents.",
    "Il élargit le bassin de recrutement : l'entreprise n'est plus limitée à une seule ville.",
    "Il diminue l'empreinte carbone liée aux déplacements quotidiens et le coût des locaux.",
    "Il responsabilise les salariés : on évalue le résultat plutôt que la présence."
  ],
  contre: [
    "Il fragilise la cohésion d'équipe et la transmission informelle des savoirs, surtout pour les jeunes recrues.",
    "Il accentue l'isolement professionnel et brouille la frontière entre vie privée et vie professionnelle.",
    "Il crée une inégalité entre les métiers « télétravaillables » et ceux qui ne le sont pas (industrie, soin, commerce).",
    "Il justifie une surveillance numérique accrue : logiciels de suivi, indicateurs de connexion.",
    "Il transfère au salarié des coûts que l'employeur assumait (électricité, matériel, espace)."
  ],
  fr_kr: {
    fr: "En France, le débat passe par la négociation collective : accords d'entreprise, rôle des syndicats, droit à la déconnexion inscrit dans la loi. La question est présentée comme un droit à défendre.",
    kr: "한국에서는 제도보다 기업 방침으로 결정되는 경우가 많고, 재택근무를 복지·인재 유치 수단으로 보는 시각이 강합니다. 대면 근무 복귀도 노사 교섭보다는 경영 판단으로 이뤄지는 편이라, '권리'가 아니라 '혜택'으로 논의된다는 점이 프랑스와 대조됩니다."
  },
  lexique: ["le travail hybride","le présentiel","le distanciel","la cohésion d'équipe","l'isolement professionnel","le droit à la déconnexion","la charge mentale","l'accord d'entreprise","la surveillance numérique","les métiers télétravaillables"],
  expressions: [
    { fr: "Cette évolution soulève plusieurs questions.", ko: "문제 제기" },
    { fr: "Il convient de s'interroger sur les effets à long terme de cette organisation.", ko: "문제 제기 (conditionnel)" },
    { fr: "S'il est vrai que le travail hybride séduit les salariés, il n'en demeure pas moins qu'il fragilise les collectifs.", ko: "양보 후 반박" },
    { fr: "Tout dépend de la manière dont il est mis en place.", ko: "균형 잡힌 결론" },
    { fr: "Un encadrement clair semble indispensable.", ko: "균형 잡힌 결론" },
    { fr: "Il s'agit moins d'un choix que d'une adaptation aux mutations contemporaines.", ko: "재정의형 결론" }
  ],
  ressources: [
    { type:"étude", titre:"Insee Analyses n°105 — Télétravail et présentiel : le travail hybride, une pratique désormais ancrée", url:"https://www.insee.fr/fr/statistiques/8379375" },
    { type:"article", titre:"Espaces de travail : le retour au bureau à l'épreuve de l'hybride (myRHline)", url:"https://myrhline.com/type-article/teletravail-retour-bureau/" },
    { type:"radio", titre:"France Culture — émissions « travail » (débats de société)", url:"https://www.radiofrance.fr/franceculture" },
    { type:"vidéo", titre:"YouTube 검색어: « travail hybride débat France »", url:"https://www.youtube.com/results?search_query=travail+hybride+d%C3%A9bat+France" }
  ],
  plan: {
    type: "Essai argumenté (문제 제기형)",
    steps: [
      "Introduction : partir d'un fait d'actualité (le retour au bureau imposé par certaines entreprises) → poser la problématique.",
      "I. Les bénéfices reconnus : qualité de vie, autonomie, attractivité de l'entreprise.",
      "II. Les limites : isolement, inégalité entre métiers, surveillance, report des coûts.",
      "III. (option B2 : intégrer dans la II) Les conditions d'un hybride réussi : accord négocié, jours fixes collectifs, droit à la déconnexion.",
      "Conclusion : réponse nuancée + ouverture (et si la vraie question était le temps de travail lui-même ?)."
    ]
  }
},

"b2-travail::la semaine de 4 jours": {
  ko: "주 4일제",
  updated: "2026-09-06",
  problematique: "Réduire la semaine à quatre jours, est-ce une avancée pour la santé des salariés ou une simple compression du même travail sur moins de jours ?",
  contexte: [
    "2019-2022 : les essais islandais et britanniques relancent le débat en Europe.",
    "2023 : plusieurs entreprises françaises passent à 4 jours, le plus souvent à 35 heures compressées et non à temps réduit.",
    "2024-2025 : une expérimentation à plus grande échelle est lancée en France ; le débat porte sur la distinction entre « semaine en 4 jours » (mêmes heures) et « semaine de 4 jours » (heures réduites).",
    "2025-2026 : l'automatisation et l'IA sont mobilisées comme argument nouveau — gagner en productivité pour financer la réduction du temps de travail."
  ],
  pour: [
    "Une journée libérée améliore le repos, la santé mentale et la vie familiale.",
    "Les expérimentations rapportent une baisse de l'absentéisme et du turnover.",
    "Moins de trajets domicile-travail : gain écologique et financier.",
    "C'est un argument d'attractivité dans les secteurs en pénurie de main-d'œuvre.",
    "La productivité horaire peut augmenter grâce à des réunions plus courtes et mieux préparées."
  ],
  contre: [
    "Le plus souvent, il s'agit de compresser les mêmes heures : les journées deviennent plus lourdes.",
    "Le modèle est difficilement transposable aux services continus : hôpitaux, écoles, commerces, industrie.",
    "Il peut désorganiser la relation client et créer des tensions entre services.",
    "Le coût est élevé si la rémunération est maintenue à temps réduit.",
    "Le risque est de creuser l'écart entre les cadres, qui en profitent, et les autres."
  ],
  fr_kr: {
    fr: "En France, le débat s'inscrit dans une longue histoire de réduction du temps de travail (les 35 heures) et passe par la loi et la négociation collective.",
    kr: "한국은 주 52시간제 논의가 여전히 중심이고, 주 4일제는 일부 기업의 실험이나 정치권 공약 수준에서 다뤄집니다. '노동시간 단축=임금 손실'로 인식되는 경향이 강한 점이 프랑스와의 대조 포인트입니다."
  },
  lexique: ["la semaine de quatre jours","le temps de travail","la réduction du temps de travail","la productivité horaire","l'absentéisme","la compression des horaires","la charge de travail","la négociation collective","l'attractivité des métiers","les services continus"],
  expressions: [
    { fr: "Ce dispositif fait aujourd'hui l'objet de vifs débats.", ko: "문제 제기" },
    { fr: "Encore faudrait-il que la charge de travail soit réellement réduite.", ko: "조건 제시 (conditionnel + subjonctif)" },
    { fr: "À moins que l'organisation ne soit repensée, la mesure risque de rester symbolique.", ko: "반전 가능성 (subjonctif)" },
    { fr: "Dans la mesure où elle respecte la santé des salariés, cette réforme mérite d'être généralisée.", ko: "조건부 지지" }
  ],
  ressources: [
    { type:"article", titre:"franceinfo — Semaine de quatre jours : où en est la France ?", url:"https://www.franceinfo.fr/economie/entreprises/semaine-de-quatre-jours-ou-en-est-la-france_6843590.html" },
    { type:"article", titre:"Novethic — Semaine de quatre jours : une expérimentation nationale bientôt menée en France", url:"https://www.novethic.fr/economie-et-social/transformation-de-leconomie/semaine-de-quatre-jours-une-experimentation-nationale-bientot-menee-en-france" },
    { type:"vidéo", titre:"YouTube 검색어: « semaine de 4 jours débat France »", url:"https://www.youtube.com/results?search_query=semaine+de+4+jours+d%C3%A9bat+France" }
  ],
  plan: {
    type: "Essai argumenté (찬반형)",
    steps: [
      "Introduction : le fait d'actualité (l'expérimentation française) → problématique.",
      "I. Les arguments des partisans : santé, attractivité, écologie.",
      "II. Les objections : compression des horaires, secteurs exclus, coût.",
      "Conclusion : position personnelle nuancée + condition de réussite."
    ]
  }
},

"c1-science::l'intelligence artificielle": {
  ko: "인공지능",
  updated: "2026-09-06",
  problematique: "L'essor de l'intelligence artificielle constitue-t-il un simple outil au service de l'humain, ou déplace-t-il la frontière de ce que nous acceptons de déléguer à la machine ?",
  contexte: [
    "2022-2023 : la diffusion grand public des IA génératives fait basculer le débat du laboratoire à la sphère publique.",
    "2023-2024 : l'Union européenne adopte un cadre réglementaire fondé sur le niveau de risque ; la France mise sur la souveraineté numérique.",
    "2024-2025 : l'IA entre à l'école, dans le recrutement, dans la production culturelle ; la question des droits d'auteur et de la rémunération des créateurs devient centrale.",
    "2025-2026 : le débat se déplace vers le coût énergétique des modèles et vers la dépendance des institutions à quelques acteurs privés."
  ],
  pour: [
    "Elle décharge l'humain des tâches répétitives et libère du temps pour les activités à forte valeur ajoutée.",
    "Elle rend possibles des avancées considérables en recherche médicale et en prévention des risques.",
    "Elle démocratise l'accès à l'information, à la traduction et à l'apprentissage.",
    "Bien encadrée, elle peut réduire certains biais humains dans les procédures administratives."
  ],
  contre: [
    "Elle reproduit et amplifie les biais contenus dans les données qui l'ont entraînée.",
    "Elle fragilise des professions entières et accélère la polarisation de l'emploi.",
    "Elle brouille la distinction entre le vrai et le vraisemblable : hypertrucages, contenus synthétiques.",
    "Elle concentre un pouvoir considérable entre les mains de quelques entreprises.",
    "Son coût énergétique entre en contradiction avec les engagements climatiques."
  ],
  fr_kr: {
    fr: "La France aborde l'IA par le droit et la régulation (encadrement européen, protection des données, exception culturelle) et par la crainte d'une dépossession culturelle.",
    kr: "한국은 산업 경쟁력·국가 전략 관점에서 접근하는 논조가 우세하고, 규제보다 육성이 먼저 언급되는 경향이 있습니다. 프랑스의 '문화·노동 보호' 프레임과 한국의 '기술 주권·성장' 프레임을 대조하면 C1 논술에서 강한 축이 됩니다."
  },
  lexique: ["l'intelligence artificielle générative","l'apprentissage automatique","le biais algorithmique","l'opacité des algorithmes","la boîte noire","l'hypertrucage (deepfake)","la souveraineté numérique","l'encadrement réglementaire","la propriété intellectuelle","l'empreinte énergétique des modèles"],
  expressions: [
    { fr: "Il conviendrait d'encadrer ces usages avant qu'ils ne deviennent irréversibles.", ko: "conditionnel + subjonctif" },
    { fr: "Quelque puissants que soient ces outils, ils demeurent le produit de choix humains.", ko: "양보 (subjonctif)" },
    { fr: "Loin de constituer une rupture, cette évolution prolonge une tendance déjà ancienne.", ko: "통념 반박" },
    { fr: "Tout porte à croire que la question n'est plus technique, mais politique.", ko: "논점 전환" },
    { fr: "Il ne s'agit pas tant de freiner l'innovation que d'en définir les finalités.", ko: "재정의형 결론" }
  ],
  ressources: [
    { type:"radio", titre:"France Culture — dossiers « intelligence artificielle »", url:"https://www.radiofrance.fr/franceculture" },
    { type:"télévision", titre:"ARTE — documentaires société / technologie", url:"https://www.arte.tv/fr/" },
    { type:"presse", titre:"Le Monde — rubrique Pixels / Sciences", url:"https://www.lemonde.fr/pixels/" },
    { type:"vidéo", titre:"YouTube 검색어: « intelligence artificielle débat France Culture »", url:"https://www.youtube.com/results?search_query=intelligence+artificielle+d%C3%A9bat+France+Culture" }
  ],
  plan: {
    type: "Essai argumenté C1 (변증법형 thèse / antithèse / synthèse)",
    steps: [
      "Introduction : accroche (un usage concret et récent) → définition du terme → problématique → annonce du plan.",
      "I. Thèse : l'IA comme prolongement de l'outil, facteur de progrès et de démocratisation.",
      "II. Antithèse : l'IA comme instrument de dépossession — biais, emploi, vérité, concentration du pouvoir.",
      "III. Synthèse : déplacer la question de la technique vers la gouvernance et les finalités collectives.",
      "Conclusion : bilan + ouverture (le rôle de l'école et de l'esprit critique)."
    ]
  }
}

};
