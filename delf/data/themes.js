/* themes.js — 주제/소주제 원본 데이터
   출처(확인됨):
   - B2: https://communfrancais.com/2017/01/13/les-themes-du-delf-b2/ (2022-06-22 갱신본)
   - C1: https://communfrancais.com/2017/05/21/themes-du-dalf-c1/
   프랑스어 표기는 원문 그대로. 한국어 테마명은 Claude 번역(참고용).
*/
window.THEMES = {
  B2: [
    { id:'b2-etudes', fr:"Les études", ko:"학업·교육", subs:[
      "les punitions à l'école","les ordinateurs portables à l'université","les MOOC","créer une émission de radio à l'école","l'école à la maison","la suppression des notes","l'éducation musicale des enfants","l'éducation globale","le téléphone portable à l'école","la sécurité à l'école","le handicap à l'école","la précarité des étudiants","les problèmes de concentration en classe","les stages en entreprise","les rythmes scolaires","la formation aux premiers secours à l'école","le redoublement","les devoirs pendant le week-end","l'école à partir de 2 ans","l'accompagnement personnalisé","la formation professionnelle à l'université","le port de l'uniforme","la mode du « gongbang »","l'apprentissage des langues étrangères dès l'école maternelle","la classe flexible (aménagement flexible)","les cours sur YouTube","la vidéosurveillance dans les établissements scolaires"] },
    { id:'b2-travail', fr:"Le monde du travail", ko:"노동·직업", subs:[
      "le bien-être au travail","le télétravail","le travail hybride","la robotisation","les réseaux sociaux","la génération Y","les fêtes dans l'entreprise","le travail des séniors","la messagerie professionnelle pendant les congés","la maîtrise de l'orthographe","le temps de travail","les discriminations à l'embauche","les CV anonymes","les logiciels pour surveiller les ordinateurs","les emplois non rémunérés","le recrutement par le jeu","la semaine de 4 jours","les cours de sport dans l'entreprise","la baisse de productivité liée aux smartphones"] },
    { id:'b2-sante', fr:"La santé", ko:"건강", subs:[
      "la télémédecine","la cigarette électronique","les régimes détox","l'impact des écrans sur la santé mentale et physique des enfants","l'obésité","le traitement de maladies par les jeux vidéos","le sommeil","la lutte contre le vieillissement","la sédentarité","le mois sans alcool"] },
    { id:'b2-loisirs', fr:"Les loisirs et la culture", ko:"여가·문화", subs:[
      "le jeu vidéo","le pass culture","les bienfaits de la lecture","les événements culturels en ville","les prix littéraires","les jeux de société","l'audiolivre (le livre audio)","la fréquentation des musées","le livre numérique","l'autoédition","les cirques sans animaux","la fermeture des cinémas","la gratuité des musées et des monuments","convaincre le maire de ne pas fermer le cinéma de la ville","la cuisine comme loisir","les séries télé"] },
    { id:'b2-consommation', fr:"Les habitudes de consommation", ko:"소비", subs:[
      "les nouvelles tendances","les achats en ligne","l'obsolescence programmée","les repair cafés","la récupération","l'achat de musique sur Internet","le téléchargement illégal","les séries télévisées","l'argent liquide","l'autoproduction"] },
    { id:'b2-alimentation', fr:"Les comportements alimentaires", ko:"식생활", subs:[
      "le gaspillage alimentaire","le véganisme","les produits locaux (le locavorisme)","les plats végétariens à l'école","la malbouffe","la gastronomie","le gaspillage alimentaire dans les restaurants à Paris"] },
    { id:'b2-social', fr:"Les relations sociales", ko:"사회적 관계", subs:[
      "la colocation","la solidarité entre générations","les associations","organiser une course en faveur des personnes âgées","l'action humanitaire à l'étranger"] },
    { id:'b2-egalite', fr:"L'égalité homme/femme", ko:"양성평등", subs:[
      "le congé paternité","les inégalités salariales","les carrières des femmes","les femmes célèbres","le sport féminin","la femme dans les métiers du bâtiment"] },
    { id:'b2-famille', fr:"Les relations familiales", ko:"가족 관계", subs:[
      "les punitions corporelles","la répartition des tâches ménagères","la surveillance des ados sur Internet","les repas en famille","les animaux domestiques","les jeux vidéo en famille","la génération « boomerang »"] },
    { id:'b2-environnement', fr:"L'environnement", ko:"환경", subs:[
      "le réchauffement climatique","le lundi sans viande","la dépendance à la voiture","les énergies propres","les espaces verts en ville","la biodiversité","les sacs plastiques","la création d'une réserve protégée","les économies d'énergie","le tri sélectif","le développement durable","le recyclage des déchets","la permaculture","la journée sans voiture","le biomimétisme","la pollution dans les jardins publics"] },
    { id:'b2-medias', fr:"Les médias & Internet", ko:"미디어·인터넷", subs:[
      "vivre sans Internet","la journée sans portable","les fausses informations","les radios amateurs","les jeunes et la presse","les jeunes et les réseaux sociaux","la protection des données personnelles","l'impact d'Internet sur l'intelligence","la publicité","les impacts d'Internet sur l'économie","l'interdiction des smartphones dans les restaurants","les textos"] },
    { id:'b2-transports', fr:"Les transports", ko:"교통", subs:[
      "la sécurité routière","le vélo électrique","l'interdiction des voitures en ville","les taxis partagés","le covoiturage","la voiture autonome","la gratuité des transports publics","la voiture en libre service","les rues scolaires","les péages urbains"] },
    { id:'b2-francophonie', fr:"Le français et la francophonie", ko:"프랑스어·프랑코포니", subs:[
      "la place du français dans le monde","la féminisation des noms de métiers","la simplification de l'orthographe","le français standard","les bienfaits de l'apprentissage d'une langue","les anglicismes"] },
    { id:'b2-tourisme', fr:"Le tourisme", ko:"관광", subs:[
      "l'influence d'Instagram","les nuisances du tourisme","l'écotourisme","le tourisme solidaire","les nouveaux modes de voyage","la préservation du patrimoine"] }
  ],
  C1: [
    { id:'c1-famille', fr:"La famille", ko:"가족", subs:[
      "l'éducation moderne","la garde des enfants","la génération « boomerang »","l'entraide familiale","l'éducation bienveillante","le congé paternité","le rôle des grands-parents"] },
    { id:'c1-societe', fr:"La vie en société", ko:"사회생활", subs:[
      "le bonheur","le handicap","les problèmes de logement","les différences entre générations","la citoyenneté","le vote des jeunes","l'altruisme","le féminisme","la colocation entre retraités","le changement de prénom","mémoire individuelle et collective"] },
    { id:'c1-ecole', fr:"L'école", ko:"학교", subs:[
      "l'apprentissage par le jeu vidéo","l'évaluation des professeurs","l'égalité des chances","le soutien scolaire","la créativité","la réforme du bac","les cours à distance","la classe inversée","les usages du numérique","le cartable numérique","l'école à la maison","ChatGPT à l'école"] },
    { id:'c1-travail', fr:"Le monde du travail", ko:"노동", subs:[
      "les bureaux partagés","la robotisation","les nouvelles valeurs du travail","la dégradation des conditions de travail","la reconversion professionnelle","les travailleurs indépendants","le droit à la déconnexion","le télétravail","la semaine de 4 jours"] },
    { id:'c1-urbanisme', fr:"L'urbanisme", ko:"도시계획", subs:[
      "les potagers collectifs urbains","les nouveaux modes de transport","les espaces verts","l'urbanisme éthique","les péages urbains","l'art urbain","l'habitat participatif"] },
    { id:'c1-environnement', fr:"L'environnement", ko:"환경", subs:[
      "le changement climatique","la voiture électrique","la déforestation","les énergies renouvelables","l'énergie nucléaire","le droit des animaux","la transition énergétique","l'agriculture biologique"] },
    { id:'c1-numerique', fr:"Le numérique", ko:"디지털", subs:[
      "la fracture numérique","l'identité numérique","les ados et réseaux sociaux","l'hyperconnexion","la protection des données","la nomophobie","l'anonymat sur Internet"] },
    { id:'c1-consommation', fr:"La consommation", ko:"소비", subs:[
      "l'obsolescence programmée","les jeux d'argent","les cyberachats","le black friday","la chirurgie esthétique","le streaming","la consommation responsable"] },
    { id:'c1-alimentation', fr:"L'alimentation", ko:"식생활", subs:[
      "le véganisme","le steak végétal","les aliments de synthèse","les aliments bio","la consommation de viande","les circuits courts"] },
    { id:'c1-medias', fr:"Les médias", ko:"미디어", subs:[
      "la domination d'Internet","la surcharge informationnelle","les fausses informations","l'éducation aux médias","les théories du complot"] },
    { id:'c1-culture', fr:"Les loisirs et la culture", ko:"여가·문화", subs:[
      "la littérature de jeunesse","le piratage des livres","les festivals","les jeux vidéo","la défense des librairies","le pass culture"] },
    { id:'c1-tourisme', fr:"Le tourisme", ko:"관광", subs:[
      "l'écotourisme","le tourisme vert","les vacances humanitaires","l'hyperfréquentation touristique","le tourisme durable"] },
    { id:'c1-economie', fr:"L'économie", ko:"경제", subs:[
      "l'ubérisation","le revenu universel","les monnaies virtuelles","la gratuité des services","la précarité des étudiants"] },
    { id:'c1-sante', fr:"La santé", ko:"건강", subs:[
      "les médecines alternatives","la vaccination obligatoire","l'obésité","les allergies","les addictions","l'automédication","la méditation"] },
    { id:'c1-espace', fr:"La recherche spatiale", ko:"우주 연구", subs:[
      "la vie extraterrestre","la colonisation de Mars","les femmes astronautes","le tourisme spatial"], option:"sciences" },
    { id:'c1-science', fr:"Les progrès et dangers de la science", ko:"과학의 진보와 위험", subs:[
      "le transhumanisme","l'intelligence artificielle","le clonage","la génétique","les robots","la reconnaissance faciale"], option:"sciences" },
    { id:'c1-langues', fr:"Les langues et la francophonie", ko:"언어·프랑코포니", subs:[
      "la disparition des langues","la réforme de l'orthographe","la diversité linguistique","l'enseignement des langues régionales","la glottophobie","le bilinguisme"] }
  ]
};

/* 시험 형식 — 출처: Manuel du candidat DELF B2 / DALF C1 (France Éducation International 배포본) */
window.EXAMS = {
  B2: {
    label:"DELF B2", total:"100점 만점 / 합격 50점 / 각 영역 5점 미만 시 과락",
    epreuves:[
      { id:'co', nom:"Compréhension de l'oral", ko:"듣기", min:30, note:"2~3개 문서, 문항 응답", bareme:"/25" },
      { id:'ce', nom:"Compréhension des écrits", ko:"읽기", min:60, note:"2~3개 지문", bareme:"/25" },
      { id:'pe', nom:"Production écrite", ko:"작문", min:60, note:"1개 과제 · 250 mots minimum", bareme:"/25", words:250, wordsLabel:"250단어 이상" },
      { id:'po', nom:"Production orale", ko:"말하기", min:20, prep:30, note:"준비 30분 → 발표 5~7분 + 심사위원과 토론", bareme:"/25", speak:[5,7] }
    ]
  },
  C1: {
    label:"DALF C1", total:"100점 만점 / 합격 50점 / 각 영역 5점 미만 시 과락",
    epreuves:[
      { id:'co', nom:"Compréhension de l'oral", ko:"듣기", min:40, note:"긴 문서 1개(2회 청취) + 짧은 문서 2~3개(1회)", bareme:"/25" },
      { id:'ce', nom:"Compréhension des écrits", ko:"읽기", min:50, note:"1,500~2,000단어 지문 1개", bareme:"/25" },
      { id:'pe', nom:"Production écrite", ko:"작문", min:150, note:"Synthèse 200~240 mots + Essai 250 mots minimum", bareme:"/25", words:490, wordsLabel:"synthèse 200~240 + essai 250 이상" },
      { id:'po', nom:"Production orale", ko:"말하기", min:30, prep:60, note:"준비 60분 → Exposé 8~10분 + 토론", bareme:"/25", speak:[8,10] }
    ]
  }
};
