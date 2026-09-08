/* etudes-dossiers-c.js — « Les études » 소주제 자료집 (DELF B2, 9개)
   구조: ①problématique+최근 흐름 ②POUR/CONTRE ③프랑스 vs 한국 ④전문 어휘 ⑤표현 ⑥자료 ⑦작문 플랜
*/
Object.assign(window.DOSSIERS, {

/* ================= DELF B2 — Les études ================= */

"b2-etudes::l'école à partir de 2 ans":{
 ko:"만 2세 취학", updated:"2026-09-08",
 problematique:"Scolariser les enfants dès deux ans : un levier d'égalité des chances ou une entrée trop précoce dans la logique scolaire ?",
 contexte:[
  "Depuis les années 2010, la scolarisation des moins de trois ans est présentée comme une priorité dans les quartiers défavorisés, à travers les classes de toute petite section.",
  "2019 : l'instruction devient obligatoire dès trois ans ; la question des deux ans se déplace donc vers l'éducation prioritaire et les territoires ruraux isolés.",
  "Les recherches en sciences de l'éducation soulignent que l'écart de vocabulaire entre les enfants est déjà installé à l'entrée en maternelle.",
  "Dans le même temps, les professionnels de la petite enfance rappellent qu'un enfant de deux ans n'a ni le rythme, ni l'autonomie, ni les besoins affectifs d'un élève de trois ans.",
  "Enjeu actuel : faut-il avancer l'école pour corriger les inégalités, ou renforcer d'abord les modes d'accueil adaptés à cet âge ?"],
 pour:[
  "Une exposition précoce au langage réduit les écarts lexicaux entre milieux sociaux avant même le CP.",
  "L'école est gratuite, ce qui la rend plus accessible que les modes de garde payants pour les familles modestes.",
  "La socialisation en collectivité prépare les apprentissages et le rapport aux règles communes.",
  "La scolarisation précoce facilite le repérage des troubles du langage et des difficultés sensorielles.",
  "Elle permet à des parents, souvent des mères, de reprendre un emploi ou une formation."],
 contre:[
  "À deux ans, l'enfant a besoin de sécurité affective et d'un adulte référent, non d'un groupe de vingt-cinq.",
  "Les locaux et les effectifs des écoles maternelles ne sont pas conçus pour cet âge (sieste, propreté, motricité).",
  "Le nombre d'ATSEM reste insuffisant pour un accompagnement individualisé.",
  "Une entrée trop précoce dans le cadre scolaire peut créer une fatigue et un rejet durables de l'école.",
  "Le dispositif risque de servir de solution de garde à bas coût plutôt que de projet pédagogique."],
 fr_kr:{
  fr:"En France, le débat ne porte plus sur l'obligation — fixée à trois ans — mais sur l'opportunité d'ouvrir l'école aux tout-petits dans les zones d'éducation prioritaire, avec des moyens humains adaptés ; il oppose une logique de compensation des inégalités à une logique de respect du développement de l'enfant.",
  kr:"한국은 만 3세 이하 아이를 어린이집(보육)에서 맡는 것이 이미 보편적이고, 무상보육 정책 덕분에 취원율이 매우 높습니다. 즉 '기관에 일찍 보내느냐'가 아니라 '보육이냐 조기 학습이냐'가 쟁점이며, 유아 영어·한글 사교육이 일찍 시작된다는 점을 프랑스와 대조해 말할 수 있습니다."},
 lexique:["la scolarisation précoce","la toute petite section","l'école maternelle","l'éducation prioritaire","l'ATSEM","l'éveil au langage","le mode d'accueil","l'égalité des chances","le développement de l'enfant","la sécurité affective"],
 expressions:[
  {fr:"La question mérite d'être posée autrement : à quelles conditions cette scolarisation est-elle bénéfique ?",ko:"문제 제기 (재정의형)"},
  {fr:"Il faudrait d'abord garantir un encadrement suffisant avant d'élargir le dispositif.",ko:"conditionnel"},
  {fr:"Encore faut-il que les locaux soient adaptés aux besoins des tout-petits.",ko:"조건 (subjonctif)"},
  {fr:"Certes, l'école réduit les inégalités langagières ; il n'en reste pas moins qu'elle ne remplace pas un accueil individualisé.",ko:"양보 후 반박"},
  {fr:"Tout dépend donc des moyens engagés, et non du seul âge d'entrée.",ko:"균형 결론"}],
 ressources:[
  {type:"officiel",titre:"Ministère de l'Éducation nationale — la scolarisation des enfants de moins de trois ans",url:"https://www.education.gouv.fr/"},
  {type:"article",titre:"Le Monde — dossier sur l'école maternelle et la scolarisation précoce",url:"https://www.lemonde.fr/"},
  {type:"vidéo",titre:"YouTube 검색어: « école dès 2 ans débat »",url:"https://www.youtube.com/results?search_query=%C3%A9cole+d%C3%A8s+2+ans+d%C3%A9bat"}],
 plan:{type:"Essai argumenté (찬반형)",steps:[
  "Introduction : l'obligation d'instruction à trois ans a relancé la question des tout-petits → problématique.",
  "I. Un instrument de justice sociale : langage, gratuité, repérage précoce.",
  "II. Les limites : besoins affectifs, encadrement insuffisant, risque de garderie déguisée.",
  "Conclusion : une scolarisation souhaitable, mais seulement là où les moyens suivent."]}
},

"b2-etudes::l'accompagnement personnalisé":{
 ko:"개별 맞춤 학습 지원", updated:"2026-09-08",
 problematique:"L'accompagnement personnalisé permet-il réellement de réduire les écarts entre élèves, ou masque-t-il l'incapacité de la classe ordinaire à différencier ?",
 contexte:[
  "Depuis une quinzaine d'années, l'accompagnement personnalisé s'est installé dans les emplois du temps du collège et du lycée sous des formes variables.",
  "Des dispositifs de soutien gratuits après les cours ont été généralisés au collège afin de limiter le recours aux cours particuliers payants.",
  "Les évaluations nationales en début d'année servent désormais à cibler les élèves fragiles en français et en mathématiques.",
  "Sur le terrain, les enseignants signalent des heures parfois utilisées comme heures de cours ordinaires, faute de groupes réduits et de formation à la différenciation.",
  "Enjeu actuel : personnaliser sans stigmatiser, et sans transformer l'aide en tri précoce entre les élèves."],
 pour:[
  "Le suivi individualisé permet d'identifier précisément l'origine d'une difficulté plutôt que de constater un échec global.",
  "Il offre gratuitement à tous ce que seules les familles aisées obtenaient par le soutien scolaire privé.",
  "Les groupes réduits redonnent la parole aux élèves qui n'osent pas s'exprimer en classe entière.",
  "Il permet aussi d'approfondir pour les élèves rapides, et non seulement de remédier.",
  "Il prépare à l'autonomie : méthode de travail, organisation, préparation aux examens."],
 contre:[
  "Sans dédoublement réel, l'accompagnement se réduit à une heure de cours de plus.",
  "Regrouper les élèves en difficulté peut créer des filières de fait et enfermer dans une étiquette.",
  "Les enseignants sont rarement formés à la pédagogie différenciée et manquent de temps de concertation.",
  "L'aide est souvent proposée en fin de journée, quand les élèves fatigués en profitent le moins.",
  "Le dispositif traite les symptômes sans toucher aux causes : effectifs, programmes, conditions sociales."],
 fr_kr:{
  fr:"En France, l'accompagnement personnalisé est pensé comme un service public de soutien : il doit compenser les inégalités devant les cours particuliers et rester intégré à l'établissement, ce qui suppose des moyens en heures et en formation des enseignants.",
  kr:"한국은 학교 밖 사교육(학원·과외)이 사실상 개별 지도의 역할을 하고 있어, 방과후학교나 기초학력 보장 프로그램은 보조적 위치에 머무릅니다. 즉 프랑스가 '학교 안에서 격차를 메우려' 한다면 한국은 '시장이 메우고 있다'는 점이 대조 포인트입니다."},
 lexique:["l'accompagnement personnalisé","la pédagogie différenciée","le groupe à effectif réduit","la remédiation","l'aide aux devoirs","les évaluations nationales","le décrochage scolaire","le soutien scolaire privé","la méthodologie de travail","la stigmatisation"],
 expressions:[
  {fr:"Le principe fait consensus ; c'est sa mise en oeuvre qui divise.",ko:"쟁점 정리"},
  {fr:"Il conviendrait de réduire les effectifs avant d'ajouter de nouveaux dispositifs.",ko:"conditionnel"},
  {fr:"Pour que cette aide soit efficace, il faut qu'elle intervienne dès les premières difficultés.",ko:"조건 (subjonctif)"},
  {fr:"On peut saluer l'intention sans pour autant en surestimer les résultats.",ko:"양보 후 반박"},
  {fr:"Personnaliser n'a de sens que si l'on donne aux enseignants le temps de le faire.",ko:"균형 결론"}],
 ressources:[
  {type:"officiel",titre:"Éduscol — accompagnement personnalisé et différenciation pédagogique",url:"https://eduscol.education.fr/"},
  {type:"officiel",titre:"Ministère de l'Éducation nationale — dispositifs de soutien et devoirs faits",url:"https://www.education.gouv.fr/"},
  {type:"vidéo",titre:"YouTube 검색어: « accompagnement personnalisé collège »",url:"https://www.youtube.com/results?search_query=accompagnement+personnalis%C3%A9+coll%C3%A8ge"}],
 plan:{type:"Essai argumenté (찬반형)",steps:[
  "Introduction : la généralisation du soutien gratuit au collège → problématique.",
  "I. Une réponse publique à une inégalité privée : gratuité, ciblage, autonomie.",
  "II. Les conditions non remplies : effectifs, formation, horaires, risque d'étiquetage.",
  "Conclusion : un dispositif juste dans son principe, à refonder dans ses moyens."]}
},

"b2-etudes::la formation professionnelle à l'université":{
 ko:"대학의 직업 교육", updated:"2026-09-08",
 problematique:"L'université doit-elle former à un métier, ou reste-t-elle d'abord le lieu d'une formation intellectuelle désintéressée ?",
 contexte:[
  "Depuis une vingtaine d'années, l'insertion professionnelle des diplômés est devenue un critère officiel d'évaluation des formations universitaires.",
  "Les stages obligatoires, l'alternance et les licences professionnelles se sont multipliés dans presque toutes les filières.",
  "Le développement de l'apprentissage dans le supérieur a rapproché l'université du monde de l'entreprise et de ses financements.",
  "Les filières de lettres et de sciences humaines s'inquiètent d'une hiérarchie implicite entre études « utiles » et études « inutiles ».",
  "Enjeu actuel : professionnaliser sans réduire l'université à un fournisseur de main-d'oeuvre adaptée au marché du moment."],
 pour:[
  "Les stages et l'alternance réduisent la durée de recherche du premier emploi.",
  "L'expérience en entreprise donne du sens aux savoirs théoriques et motive les étudiants.",
  "L'alternance offre une rémunération, donc une autonomie financière aux étudiants modestes.",
  "Le lien avec les employeurs permet d'actualiser des maquettes de formation parfois figées.",
  "La professionnalisation lutte contre l'échec en première année en clarifiant les débouchés."],
 contre:[
  "Former pour un métier précis expose au risque d'obsolescence rapide des compétences.",
  "La logique d'employabilité fragilise les disciplines qui ne mènent pas à un secteur identifié.",
  "L'université n'a pas vocation à assumer le coût d'une formation que les entreprises devraient assurer.",
  "Les stages non ou peu rémunérés reproduisent les inégalités : les mieux placés sont les mieux introduits.",
  "La recherche fondamentale, sans débouché immédiat, est la première sacrifiée."],
 fr_kr:{
  fr:"En France, l'université reste un service public gratuit ou peu coûteux, ce qui nourrit une exigence particulière : elle doit à la fois transmettre un savoir critique et rendre des comptes sur l'insertion de ses diplômés ; le débat oppose donc universitaires et acteurs économiques sur la finalité même du diplôme.",
  kr:"한국 대학은 취업률이 학과 평가와 구조조정에 직접 반영되어 왔고, 그 결과 인문계열 축소와 계약학과·산학협력 확대가 이어졌습니다. 학비를 가계가 부담한다는 점 때문에 '투자 대비 취업'이라는 압력이 프랑스보다 훨씬 직접적이라는 점을 대조로 들 수 있습니다."},
 lexique:["la professionnalisation","l'insertion professionnelle","l'alternance","le contrat d'apprentissage","le stage en entreprise","la licence professionnelle","l'employabilité","les débouchés","la recherche fondamentale","les savoirs critiques"],
 expressions:[
  {fr:"Poser la question de l'utilité des études revient à interroger la mission même de l'université.",ko:"문제 제기 (재정의형)"},
  {fr:"On aurait tort d'opposer culture générale et compétences professionnelles.",ko:"conditionnel (통념 반박)"},
  {fr:"Bien que l'alternance favorise l'insertion, elle ne saurait devenir la norme unique.",ko:"양보 후 반박 (subjonctif)"},
  {fr:"À condition qu'ils soient correctement encadrés, les stages constituent un apport réel.",ko:"조건 (subjonctif)"},
  {fr:"L'université gagnerait à assumer les deux missions plutôt qu'à choisir entre elles.",ko:"균형 결론"}],
 ressources:[
  {type:"officiel",titre:"Onisep — formations en alternance et poursuite d'études",url:"https://www.onisep.fr/"},
  {type:"référence",titre:"Céreq — enquêtes sur l'insertion professionnelle des diplômés",url:"https://www.cereq.fr/"},
  {type:"vidéo",titre:"YouTube 검색어: « professionnalisation université débat »",url:"https://www.youtube.com/results?search_query=professionnalisation+universit%C3%A9+d%C3%A9bat"}],
 plan:{type:"Essai argumenté (찬반형)",steps:[
  "Introduction : la place croissante de l'alternance et des stages dans le supérieur → problématique.",
  "I. Les arguments de la professionnalisation : insertion, motivation, autonomie financière.",
  "II. Les risques : obsolescence, hiérarchie des filières, affaiblissement de la recherche.",
  "Conclusion : une université qui professionnalise sans renoncer à sa fonction critique."]}
},

"b2-etudes::le port de l'uniforme":{
 ko:"교복 착용", updated:"2026-09-08",
 problematique:"Imposer une tenue unique à l'école : est-ce effacer les inégalités ou seulement les rendre invisibles ?",
 contexte:[
  "L'uniforme scolaire, disparu de l'école publique française depuis des décennies, revient régulièrement dans le débat politique comme symbole d'ordre et d'égalité.",
  "2024 : une expérimentation de la tenue unique est lancée dans un nombre limité d'établissements volontaires, avec l'accord des collectivités.",
  "Les partisans y voient une réponse au harcèlement lié aux vêtements de marque et une manière d'apaiser le climat scolaire.",
  "Les opposants rappellent qu'aucune évaluation solide ne montre d'effet sur les résultats et que l'inégalité se déplace vers le téléphone, les chaussures ou les vacances.",
  "Enjeu actuel : mesurer les effets réels de l'expérimentation avant toute généralisation."],
 pour:[
  "La tenue unique réduit la visibilité des marques et donc une source directe de moqueries.",
  "Elle simplifie le quotidien des familles et supprime la négociation matinale sur les vêtements.",
  "Elle matérialise l'appartenance à une communauté scolaire et un cadre commun.",
  "Elle limite les conflits sur les tenues jugées inadaptées et le temps que l'école y consacre.",
  "Elle peut représenter, à l'usage, un coût inférieur à celui d'une garde-robe de marque."],
 contre:[
  "L'inégalité sociale ne disparaît pas : elle se reporte sur d'autres signes extérieurs.",
  "L'achat initial de plusieurs tenues pèse lourdement sur les budgets les plus modestes.",
  "Le vêtement est un mode d'expression de soi à un âge où l'identité se construit.",
  "Aucune donnée ne relie l'uniforme à une amélioration des résultats ou à une baisse du harcèlement.",
  "La mesure fonctionne surtout comme un symbole politique, au détriment des vrais moyens éducatifs."],
 fr_kr:{
  fr:"En France, l'uniforme touche à une question de principe : l'école laïque et républicaine doit-elle imposer une apparence commune ou garantir la liberté d'expression des élèves ? L'expérimentation en cours dans des établissements volontaires vise justement à trancher par l'évaluation plutôt que par le symbole.",
  kr:"한국에서는 교복이 이미 중·고등학교의 기본 규범이라 논쟁의 위치가 다릅니다. 쟁점은 착용 여부가 아니라 가격, 디자인, 활동성, 성별 이분법(치마 강제), 생활복 도입 같은 문제입니다. '이미 교복을 입는 사회에서 무엇이 문제가 되는가'를 프랑스 논쟁에 대한 반례로 제시할 수 있습니다."},
 lexique:["la tenue unique","l'uniforme scolaire","l'expérimentation","le climat scolaire","le harcèlement scolaire","les vêtements de marque","le sentiment d'appartenance","la liberté d'expression","l'inégalité sociale","le coût pour les familles"],
 expressions:[
  {fr:"Derrière une mesure vestimentaire se joue en réalité une conception de l'école.",ko:"문제 제기"},
  {fr:"Il serait prématuré de généraliser un dispositif encore en cours d'évaluation.",ko:"conditionnel"},
  {fr:"Quoique séduisante, cette idée ne résout pas les inégalités qu'elle prétend gommer.",ko:"양보 후 반박 (subjonctif)"},
  {fr:"À supposer même que l'uniforme apaise le climat scolaire, il ne remplacera pas un travail éducatif de fond.",ko:"조건 (subjonctif)"},
  {fr:"La vraie question n'est pas de savoir comment les élèves s'habillent, mais dans quelles conditions ils apprennent.",ko:"균형 결론 (재정의형)"}],
 ressources:[
  {type:"officiel",titre:"Ministère de l'Éducation nationale — expérimentation de la tenue unique",url:"https://www.education.gouv.fr/"},
  {type:"article",titre:"France Info — dossier uniforme et tenue unique à l'école",url:"https://www.francetvinfo.fr/"},
  {type:"vidéo",titre:"YouTube 검색어: « uniforme à l'école expérimentation »",url:"https://www.youtube.com/results?search_query=uniforme+%C3%A0+l%27%C3%A9cole+exp%C3%A9rimentation"}],
 plan:{type:"Essai argumenté (찬반형)",steps:[
  "Introduction : le retour de la tenue unique dans des établissements volontaires → problématique.",
  "I. Ce que l'uniforme promet : égalité visible, apaisement, appartenance.",
  "II. Ce qu'il déplace : coût, expression de soi, absence de preuves.",
  "Conclusion : une mesure symbolique utile seulement si elle accompagne une politique éducative."]}
},

"b2-etudes::la mode du « gongbang »":{
 ko:"공부방 · 공스타그램 (공부 실황 공유 유행)", updated:"2026-09-08",
 problematique:"Étudier sous le regard des autres : le « gongbang » aide-t-il à se concentrer, ou transforme-t-il le travail scolaire en performance permanente ?",
 contexte:[
  "Née en Corée du Sud, la pratique du gongbang consiste à diffuser ou à regarder en direct de longues séances de travail silencieuses, mains et cahiers filmés en gros plan.",
  "Le phénomène s'est diffusé en Europe sous le nom de study with me, sur les plateformes de vidéo et de streaming, puis dans les groupes de révision entre lycéens et étudiants.",
  "Les confinements successifs ont accéléré cette diffusion : les bibliothèques fermées, beaucoup ont cherché en ligne la présence des autres pour tenir un rythme de travail.",
  "S'y sont ajoutés des outils de mesure du temps de travail, des minuteurs partagés et des classements entre participants.",
  "Enjeu actuel : distinguer une ritualisation utile du travail d'une mise en scène de l'effort qui alimente la comparaison et l'anxiété."],
 pour:[
  "La présence virtuelle d'autres travailleurs recrée l'effet d'entraînement de la bibliothèque.",
  "Le format minuté impose une structure et limite la dispersion sur les réseaux.",
  "Les étudiants isolés géographiquement ou socialement y trouvent une forme de compagnie sans conversation.",
  "Rendre son temps de travail visible engage à tenir ses objectifs devant témoins.",
  "L'échange de méthodes et d'organisation entre pairs y est souvent plus concret qu'en cours."],
 contre:[
  "La caméra transforme l'étude en spectacle : on soigne l'image du travail plus que le travail lui-même.",
  "Le décompte des heures valorise la quantité au détriment de la compréhension.",
  "La comparaison permanente avec des durées affichées nourrit la culpabilité et l'anxiété de performance.",
  "Cette autosurveillance intériorise une pression que l'on croit avoir choisie.",
  "La sociabilité y reste unilatérale : on est entouré d'écrans, mais seul devant sa table."],
 fr_kr:{
  fr:"En France, le study with me est reçu comme une méthode d'organisation parmi d'autres : les lycéens et les étudiants l'associent surtout à la préparation du bac ou des concours, et le discours dominant y voit un outil de motivation plutôt qu'une norme sociale. La critique, quand elle existe, porte moins sur la performance affichée que sur le temps passé devant les écrans et sur l'isolement de révisions menées sans professeur ni camarade réel.",
  kr:"한국에서 공부방·공스타그램은 단순한 공부 방법이 아니라 하나의 문화이자 시선의 체계입니다. 수능·자격증 준비생이 순공 시간을 인증하고 서로 감시하듯 확인하며, 학원과 스터디카페의 경쟁 구조가 그대로 온라인으로 옮겨진 형태입니다. 프랑스 학생에게는 동기부여 도구인 것이 한국에서는 자기감시와 수행 압박의 장치로 작동한다는 점을 대조로 쓸 수 있습니다."},
 lexique:["le gongbang","le study with me","la diffusion en direct","la séance de travail minutée","la concentration","l'autosurveillance","la pression de la performance","la comparaison sociale","l'isolement","la ritualisation du travail"],
 expressions:[
  {fr:"Ce phénomène venu de Corée révèle un rapport nouveau au travail scolaire.",ko:"문제 제기"},
  {fr:"On pourrait y voir une simple méthode d'organisation ; c'est en réalité une manière de se surveiller soi-même.",ko:"conditionnel (재정의형)"},
  {fr:"Bien qu'il rompe l'isolement, ce format installe une comparaison permanente entre les élèves.",ko:"양보 후 반박 (subjonctif)"},
  {fr:"Il faudrait que le temps de travail affiché cesse d'être un critère de valeur.",ko:"조건 (subjonctif)"},
  {fr:"Se donner un cadre est utile ; se donner en spectacle l'est beaucoup moins.",ko:"균형 결론"}],
 ressources:[
  {type:"article",titre:"Le Monde — dossier sur les pratiques de révision en ligne des lycéens et étudiants",url:"https://www.lemonde.fr/"},
  {type:"référence",titre:"Radio France — émissions sur les usages numériques et le travail scolaire",url:"https://www.radiofrance.fr/"},
  {type:"vidéo",titre:"YouTube 검색어: « study with me révisions »",url:"https://www.youtube.com/results?search_query=study+with+me+r%C3%A9visions"}],
 plan:{type:"Exposé (구술)",steps:[
  "Introduction : présenter le gongbang coréen et son équivalent français, le study with me → problématique.",
  "I. Ce que la pratique apporte : cadre, régularité, sentiment de présence.",
  "II. Ce qu'elle produit : mise en scène de l'effort, comparaison, autosurveillance.",
  "Conclusion : garder le rituel, refuser le classement — et rappeler ce que la Corée révèle de la pression scolaire."]}
},

"b2-etudes::l'apprentissage des langues étrangères dès l'école maternelle":{
 ko:"유치원부터 시작하는 외국어 교육", updated:"2026-09-08",
 problematique:"Commencer une langue étrangère dès la maternelle : profiter d'un âge favorable ou surcharger des enfants qui construisent encore leur langue maternelle ?",
 contexte:[
  "La France a progressivement avancé l'enseignement des langues vivantes, désormais présent dès les premières années de l'école élémentaire.",
  "En maternelle, il prend la forme d'un éveil aux langues : comptines, jeux, sonorités, sans apprentissage formel de la grammaire.",
  "Les recherches sur la plasticité du cerveau alimentent l'idée qu'il existerait une fenêtre favorable à la discrimination des sons.",
  "Dans le même temps, les enseignants du premier degré signalent un manque de formation en langue et une exposition trop courte pour être efficace.",
  "Enjeu actuel : un éveil précoce mal doté vaut-il mieux qu'un enseignement plus tardif mais réellement encadré ?"],
 pour:[
  "Avant six ans, l'enfant reproduit les sons d'une langue étrangère avec une aisance qu'il perdra ensuite.",
  "L'éveil aux langues développe la conscience phonologique, utile aussi pour la langue maternelle.",
  "Le contact précoce avec d'autres langues construit une ouverture culturelle et lutte contre les préjugés.",
  "Dans un cadre ludique, l'enfant apprend sans peur de l'erreur, ce qui prévient le blocage à l'oral.",
  "L'école publique compense ainsi l'avantage des familles qui offrent déjà des séjours ou des cours privés."],
 contre:[
  "À trois ans, beaucoup d'enfants ne maîtrisent pas encore le français, notamment dans les familles allophones.",
  "Quelques minutes hebdomadaires ne produisent aucun bilinguisme et créent surtout une illusion d'apprentissage.",
  "Les professeurs des écoles ne sont pas des spécialistes de langue et leur prononciation est rarement corrigée.",
  "Le temps consacré aux langues est pris sur le langage, le jeu et la motricité, essentiels à cet âge.",
  "Commencer tôt sans continuité pédagogique conduit à recommencer de zéro au collège."],
 fr_kr:{
  fr:"En France, la question est moins celle de l'âge que celle des moyens : le pays reconnaît son retard historique en langues et cherche à y remédier par la précocité, alors que le débat porte surtout sur la formation des professeurs des écoles et sur la continuité entre les niveaux.",
  kr:"한국은 유아 영어 사교육이 이미 거대한 시장이고, 영어유치원(사실상 학원)의 비용과 과열이 사회 문제로 다뤄집니다. 공교육에서는 초등 3학년부터 영어를 배우지만 실제 출발선은 훨씬 앞당겨져 있어, '조기 교육이 좋으냐'가 아니라 '조기 사교육 격차를 어떻게 할 것이냐'가 쟁점이라는 점이 대조됩니다."},
 lexique:["l'éveil aux langues","la langue vivante étrangère","le bilinguisme précoce","la conscience phonologique","la langue maternelle","l'accent et la prononciation","l'approche ludique","la continuité pédagogique","la formation des enseignants","l'ouverture culturelle"],
 expressions:[
  {fr:"Le débat ne porte pas sur l'intérêt des langues, mais sur l'âge et les conditions de leur enseignement.",ko:"문제 제기 (쟁점 한정)"},
  {fr:"Il vaudrait mieux former solidement les enseignants que multiplier les heures symboliques.",ko:"conditionnel"},
  {fr:"Pour que cet éveil porte ses fruits, il faut qu'il soit poursuivi tout au long de la scolarité.",ko:"조건 (subjonctif)"},
  {fr:"S'il est vrai que les jeunes enfants imitent mieux les sons, encore faut-il qu'ils les entendent régulièrement.",ko:"양보 후 반박"},
  {fr:"Mieux vaut donc une exposition modeste mais continue qu'un démarrage précoce sans suite.",ko:"균형 결론"}],
 ressources:[
  {type:"officiel",titre:"Éduscol — l'éveil aux langues et les langues vivantes à l'école",url:"https://eduscol.education.fr/"},
  {type:"officiel",titre:"Ministère de l'Éducation nationale — enseignement des langues vivantes",url:"https://www.education.gouv.fr/"},
  {type:"vidéo",titre:"YouTube 검색어: « anglais dès la maternelle débat »",url:"https://www.youtube.com/results?search_query=anglais+d%C3%A8s+la+maternelle+d%C3%A9bat"}],
 plan:{type:"Essai argumenté (찬반형)",steps:[
  "Introduction : l'avancée progressive des langues vivantes vers la maternelle → problématique.",
  "I. Les atouts de la précocité : oreille, prononciation, ouverture, égalité d'accès.",
  "II. Les conditions manquantes : maîtrise du français, formation, continuité.",
  "Conclusion : commencer tôt oui, à condition de ne pas s'arrêter là."]}
},

"b2-etudes::la classe flexible (aménagement flexible)":{
 ko:"유연한 교실 (자유 좌석·가변형 교실)", updated:"2026-09-08",
 problematique:"Réorganiser l'espace de la classe change-t-il vraiment la manière d'apprendre, ou déplace-t-il le problème pédagogique vers le mobilier ?",
 contexte:[
  "Depuis quelques années, des enseignants du premier degré remplacent les rangées de tables par des espaces variés : tapis, tables basses, assises mobiles, coins de travail autonome.",
  "L'idée s'appuie sur le constat que rester assis immobile plusieurs heures convient mal à de jeunes élèves et nuit à l'attention.",
  "La démarche s'est diffusée par les réseaux d'enseignants et les blogs pédagogiques plus que par une instruction officielle.",
  "Elle se heurte au coût du mobilier, souvent financé par la commune ou par les enseignants eux-mêmes, et à la taille réelle des salles.",
  "Enjeu actuel : distinguer un véritable changement de pédagogie d'un simple réaménagement esthétique."],
 pour:[
  "Le droit de bouger et de choisir sa posture améliore l'attention des élèves les plus agités.",
  "Les espaces différenciés permettent de faire travailler en même temps des groupes à des rythmes distincts.",
  "La disposition en îlots favorise la coopération et l'entraide entre élèves.",
  "Un environnement moins frontal réduit l'anxiété scolaire et rend la parole plus facile.",
  "L'aménagement bénéficie particulièrement aux élèves à besoins éducatifs particuliers."],
 contre:[
  "Sans changement des pratiques d'enseignement, un nouveau mobilier ne modifie rien aux apprentissages.",
  "Le bruit et les déplacements peuvent désorienter les élèves qui ont besoin d'un cadre stable.",
  "Les évaluations et les examens se déroulent toujours assis, seul, face à une feuille.",
  "Le coût crée une inégalité entre écoles selon les moyens de la commune.",
  "L'effet observé tient souvent à l'enthousiasme de l'enseignant plus qu'au dispositif lui-même."],
 fr_kr:{
  fr:"En France, la classe flexible progresse par initiative des enseignants, ce qui en fait un bon exemple d'innovation venue du terrain : le débat porte sur son évaluation scientifique et sur l'équité entre écoles, puisque le financement dépend largement des communes.",
  kr:"한국에서도 혁신학교나 미래교실 사업을 중심으로 가변형 교실·모둠 책상이 도입되었지만, 중·고등학교로 갈수록 수능과 내신 대비 강의식 수업으로 되돌아가는 경향이 강합니다. 즉 공간을 바꿔도 평가 방식이 바뀌지 않으면 한계가 있다는 점을 구체적 사례로 들 수 있습니다."},
 lexique:["l'aménagement flexible","le mobilier scolaire","la disposition en îlots","l'espace de travail autonome","la posture de travail","l'attention et la concentration","le travail coopératif","les besoins éducatifs particuliers","l'innovation pédagogique","l'équipement des écoles"],
 expressions:[
  {fr:"Changer l'espace ne suffit pas : encore faut-il changer ce que l'on y fait.",ko:"문제 제기 (조건 강조)"},
  {fr:"Ce dispositif mériterait d'être évalué avant d'être présenté comme une solution générale.",ko:"conditionnel"},
  {fr:"Bien que séduisante, cette organisation suppose que l'enseignant maîtrise le travail en groupes.",ko:"양보 후 반박 (subjonctif)"},
  {fr:"À moins que les communes n'aident au financement, l'écart entre écoles se creusera.",ko:"조건 (subjonctif)"},
  {fr:"L'aménagement n'est donc pas une fin, mais l'outil d'une pédagogie déjà repensée.",ko:"균형 결론"}],
 ressources:[
  {type:"officiel",titre:"Éduscol — organisation de la classe et pratiques pédagogiques",url:"https://eduscol.education.fr/"},
  {type:"article",titre:"France Info — reportages sur les classes flexibles à l'école primaire",url:"https://www.francetvinfo.fr/"},
  {type:"vidéo",titre:"YouTube 검색어: « classe flexible aménagement »",url:"https://www.youtube.com/results?search_query=classe+flexible+am%C3%A9nagement"}],
 plan:{type:"Essai argumenté (찬반형)",steps:[
  "Introduction : la diffusion des classes flexibles par les enseignants eux-mêmes → problématique.",
  "I. Les bénéfices annoncés : attention, coopération, inclusion.",
  "II. Les réserves : coût, évaluation, absence de changement des pratiques.",
  "Conclusion : un aménagement utile s'il accompagne une transformation pédagogique réelle."]}
},

"b2-etudes::les cours sur YouTube":{
 ko:"유튜브 강의", updated:"2026-09-08",
 problematique:"Les cours diffusés gratuitement en ligne démocratisent-ils le savoir, ou renforcent-ils ceux qui savent déjà apprendre seuls ?",
 contexte:[
  "Depuis une dizaine d'années, des chaînes tenues par des enseignants ou des vulgarisateurs proposent gratuitement des cours de mathématiques, d'histoire ou de langues.",
  "Les périodes de fermeture des établissements ont installé durablement ces vidéos dans les habitudes de révision des lycéens et des étudiants.",
  "L'institution scolaire a elle-même diffusé des cours en ligne, tandis que des plateformes commerciales ont développé des abonnements payants.",
  "Les enseignants observent que les élèves arrivent en classe avec des explications parfois approximatives, mais aussi avec de vraies questions.",
  "Enjeu actuel : articuler cette ressource libre avec le cours du professeur, sans la laisser devenir un marché de substitution."],
 pour:[
  "L'accès est gratuit, immédiat et indépendant du lieu de résidence.",
  "L'élève peut mettre en pause, revoir dix fois une démonstration et avancer à son rythme.",
  "Une explication différente débloque parfois une notion que le cours n'avait pas fait passer.",
  "Ces vidéos donnent aux familles éloignées de l'école un moyen d'accompagner leurs enfants.",
  "Elles ouvrent sur des domaines absents des programmes et nourrissent la curiosité."],
 contre:[
  "Rien ne garantit la validité scientifique ni la conformité au programme de ce qui est diffusé.",
  "La vidéo ne corrige pas les erreurs de l'élève : elle explique, elle n'évalue pas.",
  "Comprendre en regardant donne l'illusion de savoir, sans le travail d'appropriation.",
  "Le format court et spectaculaire pousse à simplifier au point de déformer.",
  "Seuls les élèves déjà autonomes en tirent profit, ce qui creuse les écarts au lieu de les réduire."],
 fr_kr:{
  fr:"En France, le sujet est traité comme une question de complémentarité et de fiabilité : l'institution reconnaît l'utilité des ressources en ligne mais rappelle que le professeur reste le garant de la progression, de la correction et de l'évaluation.",
  kr:"한국은 인터넷 강의(인강) 시장이 일찍부터 산업화되어 EBS와 대형 사교육 플랫폼이 경쟁하고 있으며, 유튜브 무료 강의는 그 시장의 홍보·입문 통로로 기능하는 경우가 많습니다. 즉 프랑스가 '공교육을 보완하는 무료 자원'을 논한다면, 한국은 '이미 유료화된 강의 시장'을 전제로 논한다는 점이 대조됩니다."},
 lexique:["le cours en ligne","la chaîne éducative","la vulgarisation","la ressource pédagogique","l'autonomie de l'élève","la fiabilité de l'information","la classe inversée","la plateforme payante","l'illusion de compréhension","la fracture scolaire"],
 expressions:[
  {fr:"La gratuité de l'accès ne garantit pas l'égalité des usages.",ko:"문제 제기 (통념 반박)"},
  {fr:"Il serait naïf de croire qu'une vidéo remplace la relation pédagogique.",ko:"conditionnel"},
  {fr:"Ces ressources sont précieuses à condition que l'élève sache déjà ce qu'il cherche.",ko:"조건 (subjonctif)"},
  {fr:"Certes, chacun peut désormais accéder à un cours de qualité ; encore faut-il savoir en tirer parti.",ko:"양보 후 반박"},
  {fr:"Le professeur ne disparaît donc pas : son rôle se déplace vers l'accompagnement et la vérification.",ko:"균형 결론 (재정의형)"}],
 ressources:[
  {type:"officiel",titre:"Éduscol — ressources numériques pour la classe",url:"https://eduscol.education.fr/"},
  {type:"article",titre:"Le Monde — dossier sur les révisions en ligne et les plateformes éducatives",url:"https://www.lemonde.fr/"},
  {type:"vidéo",titre:"YouTube 검색어: « cours en ligne YouTube révisions bac »",url:"https://www.youtube.com/results?search_query=cours+en+ligne+YouTube+r%C3%A9visions+bac"}],
 plan:{type:"Essai argumenté (찬반형)",steps:[
  "Introduction : la place prise par les vidéos de cours depuis la fermeture des établissements → problématique.",
  "I. Une ressource démocratique : gratuité, rythme personnel, curiosité.",
  "II. Ses limites : fiabilité, absence d'évaluation, avantage aux élèves autonomes.",
  "Conclusion : un complément à intégrer au travail de classe, non un substitut au professeur."]}
},

"b2-etudes::la vidéosurveillance dans les établissements scolaires":{
 ko:"학교 내 CCTV", updated:"2026-09-08",
 problematique:"Installer des caméras dans les établissements scolaires : protéger les élèves ou les habituer à être surveillés ?",
 contexte:[
  "Après plusieurs faits divers violents survenus aux abords d'établissements, les collectivités ont multiplié les caméras aux entrées et dans les cours.",
  "La législation sur la protection des données impose un cadre strict : information des familles, durée de conservation limitée, interdiction de filmer les salles de classe.",
  "La CNIL rappelle régulièrement que la surveillance doit être proportionnée à un risque établi, et non permanente et généralisée.",
  "Les personnels soulignent qu'une caméra n'intervient jamais : elle enregistre, tandis que ce sont des adultes présents qui font baisser la tension.",
  "Enjeu actuel : arbitrer entre une demande de sécurité très forte des familles et le droit des élèves à ne pas être filmés en permanence."],
 pour:[
  "Les caméras dissuadent les intrusions et les dégradations aux abords de l'établissement.",
  "Les enregistrements permettent d'établir les faits après une agression ou un vol.",
  "Elles rassurent les familles et une partie des personnels, ce qui améliore le climat perçu.",
  "Elles protègent les élèves les plus vulnérables dans les zones sans surveillance humaine.",
  "Leur coût est inférieur à celui d'un recrutement massif de personnels de vie scolaire."],
 contre:[
  "Une caméra n'empêche pas un acte violent : elle le constate après coup.",
  "La surveillance constante mine la relation de confiance entre les élèves et les adultes.",
  "Le harcèlement se déplace vers les angles morts et surtout vers les réseaux sociaux.",
  "Habituer des mineurs à être filmés banalise une norme de surveillance dans la vie adulte.",
  "L'argent investi dans les équipements manque ensuite au recrutement de surveillants et d'infirmières scolaires."],
 fr_kr:{
  fr:"En France, le sujet se discute d'abord sous l'angle du droit : la protection des données et le contrôle de la CNIL encadrent strictement ce que l'on peut filmer, combien de temps et pour quelle finalité, ce qui oblige les établissements à justifier chaque installation.",
  kr:"한국은 학교폭력 대응과 안전을 이유로 학교 내 CCTV 설치가 이미 광범위하게 이뤄져 있고, 교실 내 설치나 아동학대 확인을 위한 어린이집 CCTV 의무화처럼 프랑스에서는 상상하기 어려운 조치까지 제도화되어 있습니다. '감시의 정당성'보다 '열람 권한과 사생활'이 쟁점이라는 점을 대조로 들 수 있습니다."},
 lexique:["la vidéosurveillance","la caméra de surveillance","la protection des données personnelles","la CNIL","le principe de proportionnalité","la durée de conservation des images","le climat scolaire","la vie scolaire","le sentiment d'insécurité","le droit à l'image"],
 expressions:[
  {fr:"La demande de sécurité est légitime ; encore faut-il s'interroger sur les moyens d'y répondre.",ko:"문제 제기"},
  {fr:"On gagnerait à recruter des adultes plutôt qu'à multiplier les caméras.",ko:"conditionnel"},
  {fr:"Il est indispensable que l'usage des images soit strictement encadré.",ko:"조건 (subjonctif)"},
  {fr:"Quoique rassurantes, ces installations ne remplacent pas une présence humaine.",ko:"양보 후 반박 (subjonctif)"},
  {fr:"Surveiller peut protéger, à condition de ne pas se substituer à l'éducation.",ko:"균형 결론"}],
 ressources:[
  {type:"officiel",titre:"CNIL — vidéosurveillance et protection des données dans les établissements scolaires",url:"https://www.cnil.fr/"},
  {type:"officiel",titre:"Ministère de l'Éducation nationale — sécurité et climat scolaire",url:"https://www.education.gouv.fr/"},
  {type:"vidéo",titre:"YouTube 검색어: « vidéosurveillance lycée débat »",url:"https://www.youtube.com/results?search_query=vid%C3%A9osurveillance+lyc%C3%A9e+d%C3%A9bat"}],
 plan:{type:"Essai argumenté (찬반형)",steps:[
  "Introduction : la multiplication des caméras aux abords des établissements → problématique.",
  "I. Les arguments de la sécurité : dissuasion, preuve, apaisement des familles.",
  "II. Les objections : inefficacité préventive, atteinte à la vie privée, coût d'opportunité.",
  "Conclusion : une surveillance encadrée et limitée, adossée à une présence humaine renforcée."]}
}

});
