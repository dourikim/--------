/* economie-dossiers.js — « L'économie » 소주제 자료집 (DALF C1, 5개)
   + 주제 일반 어휘 (C1 100개)
   구조: ①problématique(개념적) + contexte(논쟁의 지형) ②POUR/CONTRE ③프랑스 vs 한국
        ④전문 어휘 ⑤표현 ⑥자료 ⑦작문·구술 플랜
   ※ B2 « Les études »(b2-etudes)에 « la précarité des étudiants »가 이미 있으므로 층위를 분리함.
     B2 = 학생의 일상 층위(주거비, 식비, 아르바이트와 학업 병행, 장학금 신청).
     C1 = 제도·구조 층위 — 학생 신분의 사회적 지위, 가족 부양을 전제한 지원 체계의 논리와 한계,
          비접근(non-recours)과 절차의 장벽, 학업 중 노동의 구조적 효과, 대중화와 재정의 긴장,
          세대 간 자원 이전.
*/
Object.assign(window.DOSSIERS, {

/* ================= DALF C1 — L'économie ================= */

"c1-economie::l'ubérisation":{
 ko:"우버화(플랫폼 노동)",
 updated:"2026-09-11",
 problematique:"L'ubérisation n'invente pas un métier, elle invente un statut : elle range sous l'indépendance une activité qu'une plateforme organise, tarife, évalue et peut interrompre. Faut-il dès lors requalifier ces travailleurs en salariés, ou détacher enfin la protection sociale de la forme juridique du contrat ?",
 contexte:[
  "Le modèle repose sur une opération juridique précise : la plateforme se déclare intermédiaire technique entre un client et un prestataire indépendant, et non employeur. Ce montage a été rendu praticable en France par le régime du micro-entrepreneur, créé en 2008, qui permet de s'immatriculer en quelques minutes et de facturer sans structure. L'affiliation massive de chauffeurs et de livreurs à ce régime n'est donc pas un effet secondaire du numérique : c'est la condition administrative sans laquelle le modèle n'aurait pas pu se déployer à cette échelle.",
  "La justice a contesté cette qualification à partir du seul critère qu'elle connaisse, le lien de subordination, défini de longue date comme l'exécution d'un travail sous l'autorité de quelqu'un qui peut donner des ordres, en contrôler l'exécution et sanctionner les manquements. La Cour de cassation a requalifié en 2018 la relation d'un livreur de Take Eat Easy, puis en 2020 celle d'un chauffeur Uber, en relevant l'existence d'un service organisé : tarif imposé, itinéraire suggéré et contrôlé, système de notation, possibilité de désactiver le compte. Le raisonnement ne porte pas sur le ressenti du travailleur mais sur les pouvoirs que la plateforme s'est réservés.",
  "Le législateur a tenté de sécuriser le statut d'indépendant sans le nier. La loi d'orientation des mobilités de 2019 a prévu que les plateformes puissent adopter une charte de responsabilité sociale ; le Conseil constitutionnel a censuré la disposition qui aurait empêché le juge de requalifier la relation au motif d'une telle charte. Des ordonnances ont ensuite créé une Autorité des relations sociales des plateformes d'emploi, chargée d'organiser l'élection de représentants des travailleurs indépendants et d'encadrer une négociation de secteur, dont sont issus des accords portant notamment sur un revenu minimal par course.",
  "Le débat s'est déplacé une troisième fois avec l'adoption, en 2024, d'une directive européenne sur le travail via les plateformes. Elle combine deux instruments : une présomption de relation de travail, que les États doivent organiser dans leur droit et qu'il revient à la plateforme de renverser, et un ensemble d'obligations sur la gestion algorithmique — information sur les systèmes automatisés, interdiction de traiter certaines données, intervention humaine obligatoire avant une décision aussi grave qu'une suspension de compte.",
  "Enjeu actuel : la ligne de partage ne sépare plus les partisans et les adversaires des plateformes, mais deux façons de protéger. Les uns veulent rattacher le travailleur au salariat, seul régime qui organise déjà le chômage, la maladie et la représentation collective ; les autres estiment que la protection doit devenir portable, c'est-à-dire attachée à la personne et non au contrat, quitte à admettre durablement une catégorie intermédiaire que le droit français a toujours refusé de créer."],
 pour:[
  "L'indépendance formelle correspond à un usage réel : une part importante de ces travailleurs exerce l'activité par intermittence, en complément d'un autre revenu ou d'études, et la souplesse d'entrée et de sortie constitue pour eux l'intérêt principal du dispositif, qu'une requalification générale ferait disparaître.",
  "Le secteur remplit une fonction d'accès à l'emploi que le marché du travail ordinaire n'assure pas : sans diplôme reconnu, sans expérience vérifiable et parfois sans réseau, l'inscription sur une plateforme reste l'une des rares portes d'entrée immédiates vers un revenu, dans des territoires où l'embauche salariée est rationnée.",
  "La négociation de secteur organisée depuis la création de l'ARPE produit déjà ce que le salariat fournit d'ordinaire : des représentants élus, une table de négociation, des accords opposables sur la rémunération minimale et sur les conditions de désactivation — autrement dit un droit collectif construit hors du contrat de travail.",
  "La portabilité des droits est une réponse plus générale que la requalification : adosser la couverture maladie, la formation et la retraite à la personne plutôt qu'au contrat protège aussi les indépendants traditionnels, les pluriactifs et les carrières discontinues, que le rattachement au salariat laisserait de côté.",
  "La régulation européenne montre que l'on peut encadrer le pouvoir algorithmique sans trancher la question du statut : imposer la transparence des critères d'attribution, interdire la décision entièrement automatisée sur la suspension d'un compte et ouvrir un droit de contestation, c'est corriger le déséquilibre là où il se loge réellement."],
 contre:[
  "L'indépendance est ici une fiction contractuelle : celui qui ne fixe ni son prix, ni sa clientèle, ni les conditions de son évaluation n'a aucun des attributs de l'entrepreneur, et la seule liberté qui lui reste — celle de se connecter ou non — ne compense pas l'absence de toute prise sur l'économie de son activité.",
  "Le management algorithmique reconstitue la subordination en la rendant impersonnelle : la notation, la tarification dynamique, l'ordre d'attribution des courses et la menace de désactivation produisent les mêmes effets qu'un ordre hiérarchique, avec cette différence qu'il n'y a plus d'interlocuteur à qui s'adresser ni de motif à contester.",
  "Le modèle opère un transfert de risque massif vers le travailleur : l'outil de travail, son entretien, son assurance, les temps d'attente non rémunérés, l'absence de revenu en cas d'accident ou de maladie et la constitution des droits à la retraite sont intégralement à sa charge, ce qui explique une part de l'avantage de coût de la plateforme.",
  "La qualification d'intermédiaire technique permet une irresponsabilité de position : la plateforme capte une commission sur chaque transaction tout en soutenant qu'elle n'organise rien, de sorte qu'elle bénéficie des gains de la coordination sans en supporter les obligations — cotisations, congés, licenciement, responsabilité en cas d'accident.",
  "Le discours du libre choix masque la contrainte qui précède le choix : présenter comme une préférence pour l'autonomie ce que la rareté de l'emploi salarié impose revient à convertir une situation subie en décision individuelle, et à tenir le travailleur pour responsable de la précarité de son propre statut."],
 fr_kr:{
  fr:"La France occupe une position particulière parce que son droit du travail ne connaît que deux cases : le salariat et l'indépendance, sans catégorie intermédiaire comparable au worker britannique. Tout le contentieux en découle : faute de pouvoir nuancer la qualification, le juge doit choisir, et chaque décision produit un effet de bascule complet. La réponse politique a consisté à construire, à côté du droit du travail, un droit de la négociation de plateforme — représentation élue, accords de secteur, autorité administrative dédiée — c'est-à-dire à importer les formes du dialogue social dans un univers qui reste juridiquement celui de l'indépendance. Ses partisans y voient une innovation pragmatique, ses adversaires une manière de légitimer le statut plutôt que de le corriger. La directive européenne de 2024 rouvre le dossier en obligeant la France à organiser une présomption de salariat qu'elle avait jusque-là laissée au seul juge.",
  kr:"한국은 프랑스와 반대 방향에서 같은 문제에 도달했습니다. 프랑스가 «임금노동자냐 자영업자냐»를 법원이 이분법으로 판단해 온 반면, 한국은 오래전부터 «특수형태근로종사자(특고)»라는 중간 범주를 만들어 두고, 그 범주에 사회보험을 조금씩 확대하는 방식을 택했습니다. 산재보험이 먼저 적용되었고, 2021년부터 특고에, 이어 배달·대리운전 등 플랫폼 종사자에게 고용보험이 단계적으로 확대되었으며, 2023년에는 산재보험의 «전속성» 요건(한 업체에 주로 소속되어야 한다는 조건)이 폐지되어 여러 플랫폼을 오가는 라이더도 보호 대상이 되었습니다. 즉 한국은 «지위를 재분류하기»보다 «권리를 이식하기»를 선택한 셈이고, 이는 프랑스에서 지금 논의되는 portabilité des droits와 정확히 같은 발상입니다. 시험에서는 «한국은 중간 범주를 인정한 대가로 보호의 수준이 낮고, 프랑스는 이분법을 고수한 대가로 보호의 범위가 불확실하다»고 대조하면 두 체계의 논리를 한 문장으로 잡을 수 있습니다. 배달 노동자의 사고와 알고리즘 배차를 둘러싼 한국의 논쟁도 구체적 예시로 쓸 수 있습니다."},
 lexique:["le lien de subordination","la requalification du contrat","le travailleur indépendant","le service organisé","la gestion algorithmique","la désactivation du compte","la portabilité des droits","le transfert de risque","la présomption de salariat","le statut intermédiaire"],
 expressions:[
  {fr:"Parler d'ubérisation, c'est désigner non pas une technologie mais un déplacement de la frontière entre le contrat de travail et le contrat commercial.",ko:"용어 재정의"},
  {fr:"Si autonome que paraisse ce travailleur, il ne fixe ni son tarif, ni sa clientèle, ni les règles de son évaluation.",ko:"양보 후 반박 (subjonctif)"},
  {fr:"Il faudrait que la protection fût attachée à la personne et non au contrat pour qu'une carrière discontinue cessât d'être une carrière sans droits.",ko:"조건 (subjonctif)"},
  {fr:"On pourrait requalifier l'ensemble de ces relations ; encore faudrait-il mesurer ce qu'une telle décision ferait au volume même de l'activité.",ko:"조건부 유보 (conditionnel)"},
  {fr:"La vraie question n'est plus de savoir qui est salarié, mais de décider à quoi l'on attache désormais les droits sociaux.",ko:"쟁점 이동형 결론"}],
 ressources:[
  {type:"officiel",titre:"travail-emploi.gouv.fr — travailleurs des plateformes, représentation et négociation de secteur",url:"https://travail-emploi.gouv.fr/"},
  {type:"officiel",titre:"Cour de cassation — arrêts de requalification des travailleurs de plateformes",url:"https://www.courdecassation.fr/"},
  {type:"officiel",titre:"vie-publique.fr — directive européenne sur le travail via les plateformes",url:"https://www.vie-publique.fr/"},
  {type:"vidéo",titre:"YouTube 검색어: « ubérisation travailleurs des plateformes requalification débat »",url:"https://www.youtube.com/results?search_query=ub%C3%A9risation+travailleurs+des+plateformes+requalification+d%C3%A9bat"}],
 plan:{type:"Synthèse + essai (C1)",steps:[
  "Introduction : un modèle qui repose moins sur une innovation technique que sur un choix de qualification juridique → problématique.",
  "I. Ce que le statut d'indépendant permet et ce que la négociation de secteur a déjà construit : accès rapide à l'activité, souplesse revendiquée, représentation élue, accords sur le revenu minimal, encadrement européen de l'algorithme.",
  "II. Ce que le statut dissimule : subordination reconstituée par l'algorithme, transfert du risque et de l'outil de travail, irresponsabilité de l'intermédiaire, libre choix contraint par la rareté de l'emploi.",
  "Conclusion : sortir de l'alternative salariat/indépendance en jugeant chaque solution à sa capacité à rendre les droits portables et les décisions algorithmiques contestables."]}
},

"c1-economie::le revenu universel":{
 ko:"기본소득",
 updated:"2026-09-11",
 problematique:"Le revenu universel propose de verser un revenu à tous, sans contrepartie ni condition de ressources. Cette inconditionnalité corrige-t-elle le défaut principal de nos systèmes sociaux — la complexité et le non-recours — ou rompt-elle le lien entre le revenu et la contribution sur lequel ces systèmes ont été bâtis ?",
 contexte:[
  "L'idée traverse des traditions politiques opposées, ce qui explique à la fois sa longévité et son ambiguïté. Thomas Paine défendait à la fin du XVIIIe siècle une dotation universelle financée par la rente foncière, au nom d'un droit originel à la terre. Milton Friedman proposait au XXe siècle un impôt négatif sur le revenu destiné à remplacer l'ensemble des aides existantes par un versement automatique administrativement simple. Le philosophe Philippe Van Parijs en a fait, lui, une condition de la liberté réelle. Le même dispositif sert donc successivement d'argument redistributif, d'argument libéral et d'argument émancipateur.",
  "Les expérimentations menées depuis une dizaine d'années ont nourri le débat sans le trancher. La Finlande a versé entre 2017 et 2018 une allocation inconditionnelle à deux mille demandeurs d'emploi tirés au sort : l'évaluation a conclu à un effet très limité sur le retour à l'emploi et à une amélioration nette du bien-être déclaré et de la confiance. Barcelone a conduit un dispositif combinant transfert monétaire et accompagnement. Ces protocoles portent sur des populations restreintes, pendant deux ans, avec un financement extérieur : ils mesurent la réaction d'individus, non l'effet d'un système généralisé sur les salaires, les prix et les recettes publiques.",
  "En France, la discussion est passée par le champ électoral avant d'atteindre le champ administratif. Le revenu universel d'existence a figuré au programme présidentiel de Benoît Hamon en 2017, ce qui a popularisé le terme et l'a associé à une famille politique. Parallèlement, des départements ont porté une proposition d'expérimentation d'un revenu de base qui aurait fusionné le RSA et la prime d'activité ; elle n'a pas abouti. Le gouvernement a ensuite annoncé un revenu universel d'activité, projet de fusion des minima sociaux dont la concertation a été interrompue et qui n'a pas été mené à son terme.",
  "Le mot lui-même entretient la confusion, et c'est un point que le jury attend. Un revenu universel au sens strict est versé à tous, du plus pauvre au plus riche, sans condition et sans contrepartie ; un impôt négatif ne verse qu'en dessous d'un seuil ; un revenu de base fusionné remplace des prestations existantes ; un revenu d'activité conditionne le versement à une démarche d'insertion. Ces dispositifs n'ont ni le même coût brut, ni les mêmes gagnants, ni la même philosophie, et la discussion publique les confond régulièrement.",
  "Enjeu actuel : l'argument le plus solide en faveur de l'automaticité est venu d'ailleurs — du constat du non-recours. Une fraction considérable des personnes éligibles aux prestations sociales ne les demande pas, par méconnaissance, par découragement devant la procédure ou par refus d'être assignées à un statut d'assisté. La réponse retenue en France n'est pas l'universalité mais l'automatisation : versement calculé à partir de données déjà détenues par l'administration, préremplissage des déclarations, logique dite de solidarité à la source. Le revenu universel se trouve ainsi concurrencé par une réforme qui poursuit le même objectif en conservant les conditions de ressources."],
 pour:[
  "L'inconditionnalité supprime mécaniquement le non-recours : un droit qui ne se demande pas ne peut pas être ignoré, et l'on cesse de réserver l'aide à ceux qui savent remplir un dossier, c'est-à-dire souvent à ceux qui en ont le moins besoin.",
  "L'universalité désarme la stigmatisation : dès lors que tout le monde reçoit, personne n'est désigné comme assisté, et l'on retire au contrôle social son objet en même temps qu'aux politiques publiques une part considérable de leurs coûts de vérification et de contentieux.",
  "Un revenu de base modifie la position de négociation du travailleur : celui qui peut refuser un emploi sans perdre tout revenu n'accepte plus n'importe quelles conditions, de sorte que l'inconditionnalité agit comme un salaire plancher indirect sur les emplois les moins attractifs.",
  "Le dispositif reconnaît des activités que le marché ne rémunère pas et dont la société dépend pourtant : soin des proches, engagement associatif, formation, création, temps de recherche d'emploi — travail effectif que le système actuel ne compte pas parce qu'il ne donne pas lieu à facturation.",
  "Face à une transformation du travail marquée par la discontinuité des parcours, un revenu socle est plus cohérent qu'une architecture de prestations construite pour des carrières longues et stables : il assure la continuité du revenu là où le contrat ne l'assure plus."],
 contre:[
  "L'universalité est financièrement coûteuse par construction : verser à toute la population, y compris à ceux qui n'en ont nul besoin, suppose de récupérer ensuite par l'impôt, si bien que l'on remplace un système ciblé par un système qui distribue largement pour reprendre largement, avec un gain redistributif incertain.",
  "Le même dispositif sert des projets opposés, et cette ambivalence est politiquement dangereuse : présenté à gauche comme un complément aux services publics, il est défendu à droite comme leur substitut, le versement monétaire tenant lieu d'accompagnement, de logement social et de service d'insertion.",
  "Les expérimentations ne démontrent pas ce qu'on leur fait dire : un échantillon de quelques milliers de personnes, sur une durée courte et avec un financement extérieur, ne renseigne ni sur les effets d'équilibre — salaires, loyers, prix — ni sur le comportement de ceux qui savent le dispositif permanent.",
  "Rompre le lien entre revenu et contribution touche au fondement du modèle social français, qui est assurantiel et professionnel : les droits y sont acquis par la cotisation, ce qui leur donne une légitimité et une résistance politique qu'une allocation votée chaque année dans une loi de finances n'aurait pas.",
  "Le problème du non-recours admet une solution moins radicale et déjà engagée : automatiser le calcul et le versement à partir des données dont l'administration dispose permet d'atteindre le même public sans renoncer aux conditions de ressources ni au ciblage des montants."],
 fr_kr:{
  fr:"Le débat français est structuré par la nature de son système social, qui est d'abord assurantiel : la protection y est historiquement adossée à l'emploi et financée par des cotisations, ce qui rend l'idée d'un revenu détaché de toute contribution particulièrement étrangère à sa logique. C'est pourquoi la discussion s'est déplacée du revenu universel vers deux objets plus modestes mais plus consensuels : la fusion des minima sociaux, qui vise la simplification sans l'inconditionnalité, et la solidarité à la source, qui vise l'automaticité sans l'universalité. Les partisans du revenu universel répondent que ces réformes traitent les symptômes — complexité, non-recours — sans toucher au principe de conditionnalité qui les produit. Le clivage ne recoupe donc pas exactement celui de la gauche et de la droite : on trouve des adversaires du revenu universel parmi ceux qui défendent les services publics, et des partisans parmi ceux qui souhaitent alléger l'administration sociale.",
  kr:"한국에서 기본소득은 2020년 코로나 재난지원금을 계기로 정치의 전면에 등장했습니다. 전 국민에게 일률적으로 지급한 1차 지원금과, 소득 하위 계층에 집중한 이후의 선별 지원이 실제로 비교되면서, «보편이냐 선별이냐»가 추상적 논쟁이 아니라 경험한 정책의 비교가 되었다는 점이 프랑스와 크게 다릅니다. 또 경기도의 «청년기본소득»처럼 연령을 기준으로 한 준보편적 현금 지급이 지방정부 차원에서 실제로 시행되었고, 농민기본소득 등 대상을 한정한 변형도 나타났습니다. 프랑스가 «실험은 있었으나 제도는 없다»면, 한국은 «부분적 제도는 있었으나 전국 단위의 무조건성은 없다»고 요약할 수 있습니다. 비접근(non-recours) 문제도 한국에 그대로 있습니다. 기초생활보장제도의 부양의무자 기준이 오랫동안 신청을 가로막았고, 그 기준의 단계적 완화가 바로 프랑스의 «자동 지급» 논의와 같은 목적 — 즉 «자격이 있는데도 받지 못하는 사람»을 줄이는 것 — 을 향합니다. 시험에서는 이 두 사례를 들어 «무조건성은 목적이 아니라 수단이며, 같은 목적에 다른 수단이 있다»는 논지를 세울 수 있습니다."},
 lexique:["l'inconditionnalité","l'impôt négatif sur le revenu","les minima sociaux","le non-recours aux droits","la conditionnalité des aides","la contrepartie exigée","l'effet d'équilibre","la substitution aux prestations","le protocole d'expérimentation","la solidarité à la source"],
 expressions:[
  {fr:"Avant d'en discuter le coût, il faut distinguer quatre dispositifs que le débat public confond : allocation universelle, impôt négatif, revenu de base fusionné et revenu d'activité conditionné.",ko:"개념 구분형 문제 제기"},
  {fr:"Quoi qu'en disent ses promoteurs, une expérimentation portant sur deux mille personnes pendant deux ans ne mesure pas les effets d'un système généralisé.",ko:"양보 후 반박 (subjonctif)"},
  {fr:"Pour que l'inconditionnalité tînt ses promesses, encore faudrait-il qu'elle s'ajoutât aux services publics au lieu de les remplacer.",ko:"조건 (subjonctif + conditionnel)"},
  {fr:"Si le problème est que les ayants droit ne demandent pas, alors l'automaticité du versement suffirait, sans qu'il fût besoin de renoncer au ciblage.",ko:"인과 + 대안 제시"},
  {fr:"L'inconditionnalité n'est pas une fin en soi : elle vaut ce que vaut le problème qu'elle prétend résoudre.",ko:"균형 결론"}],
 ressources:[
  {type:"officiel",titre:"vie-publique.fr — revenu universel, minima sociaux et projets de fusion",url:"https://www.vie-publique.fr/"},
  {type:"officiel",titre:"DREES — travaux sur les minima sociaux et le non-recours aux prestations",url:"https://drees.solidarites-sante.gouv.fr/"},
  {type:"article",titre:"Le Monde — expérimentations du revenu de base et débat sur l'inconditionnalité",url:"https://www.lemonde.fr/"},
  {type:"vidéo",titre:"YouTube 검색어: « revenu universel inconditionnel expérimentation Finlande débat »",url:"https://www.youtube.com/results?search_query=revenu+universel+inconditionnel+exp%C3%A9rimentation+Finlande+d%C3%A9bat"}],
 plan:{type:"Synthèse + essai (C1)",steps:[
  "Introduction : une même expression pour quatre dispositifs et pour trois traditions politiques → problématique.",
  "I. Ce que l'inconditionnalité résout : suppression du non-recours, fin de la stigmatisation, pouvoir de refus du travailleur, reconnaissance des activités non marchandes, adaptation aux parcours discontinus.",
  "II. Ce qu'elle coûte et ce qu'elle ignore : masse financière et redistribution incertaine, ambivalence politique du dispositif, limites méthodologiques des expérimentations, rupture avec la logique contributive, existence d'une solution moins radicale par l'automatisation.",
  "Conclusion : juger le revenu universel non sur son principe mais sur le problème précis qu'on lui demande de résoudre, et comparer ses effets à ceux de l'automatisation des droits existants."]}
},

"c1-economie::les monnaies virtuelles":{
 ko:"가상 화폐",
 updated:"2026-09-11",
 problematique:"Une monnaie tient moins à sa forme qu'aux fonctions qu'elle remplit : servir d'unité de compte, de réserve de valeur et d'intermédiaire des échanges. Les crypto-actifs remplissent-ils ces fonctions, ou l'usage du mot monnaie leur emprunte-t-il une confiance qu'ils ne produisent pas eux-mêmes ?",
 contexte:[
  "Le projet initial est explicitement politique. Le protocole décrit en 2008 par un auteur signant Satoshi Nakamoto, et lancé l'année suivante, propose un système de paiement fonctionnant sans tiers de confiance : la validation des transactions y est assurée par un réseau d'ordinateurs et par un registre partagé, la chaîne de blocs, plutôt que par une banque centrale ou un établissement. La rareté y est programmée, le nombre total d'unités étant plafonné par le code lui-même. Le contexte de crise financière dans lequel cette proposition apparaît n'est pas indifférent : elle se présente comme une réponse à la défiance envers les institutions bancaires.",
  "Or les économistes jugent une monnaie à ses trois fonctions, et le bilan est ici asymétrique. Comme intermédiaire des échanges, l'usage reste marginal dans le commerce ordinaire ; comme réserve de valeur, la volatilité des cours contredit la définition même ; comme unité de compte, presque personne ne libelle un salaire, un loyer ou une dette en crypto-actifs. C'est pourquoi les régulateurs et les banques centrales parlent d'actifs et non de monnaies, et l'Union européenne a retenu dans sa réglementation le terme de crypto-actifs.",
  "L'expérience grandeur nature a eu lieu au Salvador, qui a conféré en 2021 cours légal au bitcoin aux côtés du dollar. L'adoption effective par la population est demeurée faible, les commerçants et les ménages continuant très majoritairement d'utiliser le dollar, et le dispositif a ensuite été réduit dans le cadre d'un accord avec le Fonds monétaire international. L'épisode a fourni à chaque camp son argument : la démonstration qu'un État peut le faire, la démonstration que les usagers n'en veulent pas.",
  "La promesse de décentralisation s'est par ailleurs heurtée aux faits. La validation s'est concentrée entre quelques groupements de calcul ; la détention est fortement inégalitaire ; et l'immense majorité des utilisateurs passe par des plateformes d'échange centralisées, c'est-à-dire par des intermédiaires — exactement ce que le protocole entendait supprimer. La faillite de l'une des principales d'entre elles en 2022, précédée par l'effondrement d'un stablecoin dit algorithmique, a montré que le risque s'était déplacé du système bancaire vers des acteurs non régulés, sans disparaître.",
  "Enjeu actuel : la réponse publique se joue désormais sur deux fronts simultanés. L'Union européenne a adopté un règlement sur les marchés de crypto-actifs, dit MiCA, qui impose un agrément aux prestataires, encadre l'émission des stablecoins et exige des réserves adossées ; en parallèle, les banques centrales étudient une monnaie numérique de banque centrale, la Banque centrale européenne ayant engagé les travaux préparatoires d'un euro numérique. On assiste donc à un double mouvement : réguler le privé et, éventuellement, offrir un équivalent public."],
 pour:[
  "La proposition initiale a une valeur démonstrative réelle : elle prouve qu'un registre de transactions peut être tenu de façon vérifiable sans autorité centrale, résultat technique qui trouve des applications bien au-delà du paiement, de la traçabilité des chaînes d'approvisionnement à la certification de documents.",
  "Dans les pays soumis à une inflation très élevée ou à un contrôle strict des changes, la détention d'actifs numériques et surtout de stablecoins adossés à une devise stable offre une protection que le système bancaire local ne fournit pas, et les transferts de fonds des migrants y trouvent un circuit moins coûteux que les opérateurs traditionnels.",
  "La concurrence a contraint le secteur financier établi à se réformer : délais de règlement raccourcis, frais de transfert international revus, ouverture à des infrastructures programmables — autant d'améliorations que l'on n'aurait pas obtenues sans la pression d'une alternative crédible.",
  "L'objection énergétique n'est pas une propriété nécessaire de la technologie mais d'un mode de validation particulier : le passage du deuxième réseau mondial à un mécanisme de preuve d'enjeu en 2022 a réduit sa consommation dans des proportions considérables, ce qui montre que le coût environnemental relève d'un choix de protocole.",
  "Le règlement européen a fait entrer ce marché dans le droit commun : agrément des prestataires, obligations de réserve pour les émetteurs de stablecoins, information des investisseurs et lutte contre le blanchiment — conditions qui permettent de traiter le sujet comme un secteur financier à superviser plutôt que comme une zone de non-droit."],
 contre:[
  "La confiance monétaire ne se programme pas : celle d'une monnaie souveraine repose sur le fait qu'un État l'accepte en paiement de l'impôt et qu'une banque centrale peut en ajuster la quantité, tandis que la rareté inscrite dans un code ne garantit que la rareté, ce qui produit non pas de la stabilité mais un actif spéculatif.",
  "La volatilité disqualifie ces actifs pour l'usage dont ils portent le nom : un instrument dont le cours peut varier fortement en quelques jours ne peut servir ni à libeller une dette, ni à fixer un salaire, ni à conserver une épargne de précaution — c'est-à-dire ne peut remplir aucune des fonctions attendues d'une monnaie.",
  "La décentralisation annoncée a produit une concentration d'un genre nouveau : quelques groupements de validation, quelques plateformes d'échange et une détention très inégalitaire ont remplacé les intermédiaires bancaires par des intermédiaires non régulés, dont les faillites récentes ont montré qu'ils n'offraient ni garantie des dépôts ni prêteur en dernier ressort.",
  "Le coût environnemental de la preuve de travail reste indéfendable au regard du service rendu : consacrer une consommation électrique comparable à celle d'un pays entier à la validation d'un volume de transactions modeste constitue un arbitrage que rien, dans l'usage effectif, ne justifie.",
  "L'anonymat relatif et l'absence de frontières font de ces circuits l'instrument privilégié des rançongiciels, du contournement des sanctions et du blanchiment, si bien que l'argument libertaire de la souveraineté individuelle se traduit concrètement par une perte de capacité de contrôle des États sur des flux illicites."],
 fr_kr:{
  fr:"La position française et européenne consiste à réguler sans interdire, et à préparer une alternative publique. L'Autorité des marchés financiers a mis en place dès avant le règlement européen un enregistrement obligatoire des prestataires de services sur actifs numériques, et la France a soutenu l'adoption du cadre MiCA, qui harmonise les règles à l'échelle de l'Union et met fin à la concurrence entre régimes nationaux. La Banque de France et la Banque centrale européenne défendent parallèlement le projet d'euro numérique, présenté comme un moyen de préserver l'accès du public à une monnaie de banque centrale à mesure que le paiement en espèces recule, et de ne pas laisser les infrastructures de paiement du continent dépendre d'acteurs privés extérieurs. Les critiques, elles, portent moins sur la crypto que sur ce projet public : on y voit un risque pour la vie privée et une possible désintermédiation des banques commerciales.",
  kr:"한국은 이 문제를 «투자자 보호»의 문제로 먼저 겪었다는 점에서 프랑스와 출발점이 다릅니다. 거래소 이용자 수가 매우 많고, 2017~2018년과 그 이후의 급등락, 그리고 한 국내 개발자가 만든 스테이블코인의 붕괴가 전 세계적 파장을 일으킨 경험이 있어, 논쟁이 «화폐인가 아닌가»라는 개념 논쟁보다 «어떻게 규제할 것인가»라는 실무 논쟁으로 바로 넘어갔습니다. 특정금융정보법 개정으로 거래소에 실명 계좌와 신고 의무가 부과되었고, 이후 이용자 보호를 위한 법률이 별도로 제정되어 시세조종과 미공개정보 이용을 처벌하게 되었습니다. 한국은행 역시 중앙은행 디지털화폐의 기술 실험을 진행해 왔습니다. 시험에서는 «프랑스가 개념과 통화주권의 층위에서 논쟁한다면, 한국은 이미 대중화된 시장을 사후적으로 규율하는 층위에서 논쟁한다»고 대조하면 좋습니다."},
 lexique:["le crypto-actif","la chaîne de blocs","l'unité de compte","la réserve de valeur","la volatilité des cours","le stablecoin","la preuve de travail","la preuve d'enjeu","la monnaie numérique de banque centrale","la souveraineté monétaire"],
 expressions:[
  {fr:"Appeler monnaie un actif qui ne sert ni d'unité de compte ni de réserve de valeur, c'est lui prêter une légitimité que son usage ne lui donne pas.",ko:"용어 재정의"},
  {fr:"Aussi ingénieux que soit le protocole, il ne produit pas la seule chose dont une monnaie ait réellement besoin : la confiance.",ko:"양보 후 반박 (subjonctif)"},
  {fr:"Il faudrait que la validation cessât de reposer sur une dépense énergétique massive pour que l'objection écologique perdît sa force.",ko:"조건 (subjonctif)"},
  {fr:"On aurait tort d'opposer innovation et régulation : c'est l'absence de règles qui a permis les faillites dont le secteur souffre aujourd'hui.",ko:"통념 반박 (conditionnel)"},
  {fr:"La vraie question n'est pas de savoir si ces actifs remplaceront la monnaie, mais qui, demain, tiendra les infrastructures du paiement.",ko:"쟁점 이동형 결론"}],
 ressources:[
  {type:"officiel",titre:"Banque de France — crypto-actifs, stablecoins et projet d'euro numérique",url:"https://www.banque-france.fr/"},
  {type:"officiel",titre:"AMF — prestataires de services sur actifs numériques et cadre européen MiCA",url:"https://www.amf-france.org/"},
  {type:"article",titre:"Le Monde — régulation des crypto-actifs, volatilité et faillites de plateformes",url:"https://www.lemonde.fr/"},
  {type:"vidéo",titre:"YouTube 검색어: « crypto-actifs bitcoin monnaie régulation MiCA euro numérique »",url:"https://www.youtube.com/results?search_query=crypto-actifs+bitcoin+monnaie+r%C3%A9gulation+MiCA+euro+num%C3%A9rique"}],
 plan:{type:"Synthèse + essai (C1)",steps:[
  "Introduction : partir de la définition fonctionnelle de la monnaie plutôt que de la technologie → problématique.",
  "I. Ce que ces actifs apportent réellement : démonstration technique du registre distribué, utilité dans les économies à monnaie instable, pression concurrentielle sur les paiements, réversibilité du coût énergétique, entrée dans un cadre réglementé.",
  "II. Ce qu'ils ne produisent pas : la confiance institutionnelle, la stabilité de la valeur, la décentralisation promise, la maîtrise des flux illicites, la garantie des dépôts.",
  "Conclusion : déplacer la question de la monnaie vers l'infrastructure de paiement et évaluer à cette aune l'hypothèse d'une monnaie numérique de banque centrale."]}
},

"c1-economie::la gratuité des services":{
 ko:"서비스의 무상성",
 updated:"2026-09-11",
 problematique:"Aucun service n'est gratuit : la gratuité déplace le paiement plutôt qu'elle ne le supprime — vers l'impôt, vers la publicité, vers la donnée personnelle. La question n'est donc pas de savoir si l'on paie, mais qui paie, quand, et ce que ce déplacement fait à l'égalité d'accès.",
 contexte:[
  "La gratuité est en France une tradition politique avant d'être un modèle économique. Les lois scolaires des années 1880 ont établi la gratuité de l'enseignement primaire public, et cette gratuité a été comprise non comme une remise commerciale mais comme la condition d'un droit : un service que la collectivité finance par l'impôt afin que son accès ne dépende pas du revenu des familles. Le Conseil constitutionnel a d'ailleurs jugé en 2019 que l'exigence constitutionnelle de gratuité s'étendait à l'enseignement supérieur public, tout en admettant des droits d'inscription modiques tenant compte des capacités financières des étudiants.",
  "La gratuité au sens économique répond à un raisonnement différent : lorsque le coût de servir un usager supplémentaire est nul ou négligeable, faire payer un prix revient à exclure des usagers sans économiser de ressources. C'est le cas d'un musée en dessous de sa capacité, d'une consultation de contenu numérique, d'un bus qui circule de toute façon. L'ouverture des collections permanentes des musées nationaux aux moins de vingt-six ans résidant dans l'Union européenne relève de cette logique, tout comme les expériences de transports publics gratuits menées à Dunkerque puis, sous des formes variables, dans plusieurs métropoles françaises, et à l'échelle nationale au Luxembourg.",
  "Le numérique a introduit une troisième gratuité, qui n'est ni fiscale ni marginale : l'usager ne paie pas en argent mais en attention et en données. Le modèle publicitaire finance le service par le ciblage, lequel suppose la collecte, le profilage et la rétention d'informations personnelles. Le règlement européen sur la protection des données a imposé le principe du consentement libre, et le débat s'est aussitôt déplacé vers les offres dites payer ou accepter, où le refus du suivi publicitaire se paie par un abonnement — dispositif dont les autorités de protection des données contestent qu'il rende le consentement réellement libre.",
  "Le débat oppose alors deux critiques symétriques. Les économistes attachés au signal-prix soutiennent qu'un service gratuit est un service dont on ignore la valeur : sans prix, l'usager ne hiérarchise plus ses usages, le gestionnaire perd l'information qui lui permettrait d'ajuster l'offre, et le financement devient un arbitrage budgétaire annuel plutôt qu'une recette stable. Les partisans de la gratuité répondent que le prix n'est pas seulement un signal mais un filtre social, et que le renoncement des plus modestes constitue lui aussi une perte d'information — celle des besoins qui ne s'expriment pas.",
  "Enjeu actuel : la question de la justice distributive. Une gratuité universelle profite aussi à ceux qui pouvaient payer, et l'on objecte qu'une tarification sociale, modulée selon le revenu, redistribuerait mieux à coût égal. Ses défenseurs répliquent qu'une tarification sociale suppose de déclarer sa situation, donc de la prouver, ce qui engendre un non-recours massif et réintroduit la stigmatisation que la gratuité, précisément, supprime."],
 pour:[
  "La gratuité supprime la barrière la plus efficace de toutes, celle qui s'exerce avant même la décision : un usager qui renonce devant un guichet ne figure dans aucune statistique de demande, et seul un accès inconditionnel révèle des besoins que le prix maintenait invisibles.",
  "Lorsque le coût marginal est nul, faire payer détruit de la valeur sans économiser de ressources : le bus circule, la salle du musée est ouverte, le serveur répond — en excluant des usagers, le prix réduit l'usage du service sans en réduire le coût de production.",
  "La gratuité par l'impôt est la seule qui répartisse la charge selon la capacité contributive : payer un service au guichet fait acquitter le même montant à tous, tandis qu'un financement fiscal progressif fait payer davantage ceux qui peuvent davantage, pour un accès identique.",
  "Elle supprime des coûts administratifs que l'on oublie de compter : billetterie, contrôle, recouvrement, contentieux, vérification des justificatifs de tarif réduit — dépenses qui absorbent une part parfois considérable de la recette qu'elles servent à collecter.",
  "Un accès inconditionnel évite la stigmatisation attachée aux dispositifs ciblés : nul n'a à prouver qu'il est pauvre pour monter dans un tramway ou entrer dans une bibliothèque, et l'universalité protège le service lui-même, car un service réservé aux pauvres devient vite un service que l'on finance mal."],
 contre:[
  "La gratuité ne supprime pas le coût, elle en déplace la visibilité : l'usager croit ne rien payer alors qu'il paie par l'impôt, et cette invisibilité affaiblit le contrôle démocratique sur une dépense dont personne ne perçoit plus le montant ni l'arbitrage qu'elle implique.",
  "La perte du signal-prix désorganise la gestion : sans recette liée à l'usage, l'exploitant perd l'indicateur qui lui permettrait de dimensionner l'offre, et le financement dépend d'une subvention annuelle qui rend l'investissement de long terme plus incertain que la billetterie qu'il remplace.",
  "Une gratuité universelle est régressive au regard de son coût : elle bénéficie aussi à ceux qui auraient payé sans difficulté, de sorte qu'à budget donné une tarification modulée selon le revenu transférerait davantage vers les ménages modestes que l'exonération générale.",
  "Le service peut se dégrader précisément parce qu'il est gratuit : la fréquentation supplémentaire n'étant plus accompagnée d'une recette, la saturation, l'usure et la baisse de qualité menacent, et le gestionnaire n'a plus d'autre variable d'ajustement que la réduction de l'offre.",
  "La gratuité numérique est la plus coûteuse de toutes parce que son prix n'est pas monétaire : elle se paie en collecte de données, en profilage et en conception addictive, et le consentement qu'on lui oppose n'est libre qu'en apparence lorsque l'alternative au suivi publicitaire est un abonnement payant."],
 fr_kr:{
  fr:"La France discute la gratuité sur deux terrains qu'elle articule mal. Sur le terrain des services publics, la gratuité relève d'une tradition républicaine ancienne — école, bibliothèques, musées pour les jeunes — et les expériences de transports gratuits, de Dunkerque à plusieurs métropoles, ont réactivé le débat en le posant comme une question de politique urbaine autant que de budget : les évaluations montrent une hausse nette de la fréquentation, mais discutent l'origine du report, venu souvent de la marche et du vélo autant que de la voiture. Sur le terrain numérique, la France s'appuie sur le cadre européen — protection des données, régulation des grandes plateformes — pour contester la gratuité publicitaire, avec cette difficulté que l'usager, lui, perçoit le service comme gratuit et vit la régulation comme une gêne. Le point commun des deux débats est le même : identifier le payeur réel.",
  kr:"한국에서 «무상»은 2010년대 초 «무상급식» 논쟁을 통해 정치의 중심 쟁점이 되었습니다. 서울시장이 전면 무상급식에 반대해 주민투표를 걸고 사퇴한 2011년의 사건은, 프랑스에서는 찾기 어려운 «보편 복지냐 선별 복지냐»의 국민적 논쟁 사례입니다. 이후 무상급식은 사실상 보편화되었고, 같은 논리가 무상교복, 무상교육으로 확장되었습니다. 교통 분야에서도 «어린이·청소년 무임승차», 고령자 지하철 무임승차가 이미 제도화되어 있는데, 이 제도가 도시철도 운영기관의 적자 원인으로 지목되면서 «누가 그 비용을 부담하는가»라는 질문이 매우 구체적으로 제기된다는 점이 프랑스와의 좋은 대조가 됩니다. 디지털 쪽에서는 포털과 메신저가 무료로 제공되는 대신 광고와 데이터로 수익을 얻는 구조가 프랑스보다 더 집중되어 있고, 개인정보보호위원회의 제재 사례가 논거로 쓰일 수 있습니다. 시험에서는 «한국의 무상 논쟁은 재원의 귀속 주체(중앙정부냐 지방정부냐)를 둘러싼 갈등으로 나타난다»고 짚으면 구체성이 살아납니다."},
 lexique:["le coût marginal nul","le signal-prix","le financement par l'impôt","la tarification sociale","le bien non rival","l'universalité de l'accès","le renoncement à l'usage","le modèle publicitaire","le consentement libre et éclairé","la capacité contributive"],
 expressions:[
  {fr:"Un service gratuit n'est pas un service sans coût : c'est un service dont le coût a changé de payeur.",ko:"용어 재정의"},
  {fr:"Quelque séduisante que soit l'idée d'un accès inconditionnel, elle ne dispense pas de dire qui en supporte la charge.",ko:"양보 후 반박 (subjonctif)"},
  {fr:"Il faudrait que la gratuité fût financée par un impôt progressif pour qu'elle profitât davantage aux ménages modestes qu'aux autres.",ko:"조건 (subjonctif)"},
  {fr:"On objecte que la gratuité supprime le signal-prix ; encore faudrait-il que ce signal dît quelque chose des besoins de ceux qui renoncent avant de demander.",ko:"반론 재반박 (conditionnel)"},
  {fr:"Entre la gratuité universelle et la tarification sociale, le choix se ramène à un arbitrage entre le non-recours et le ciblage.",ko:"균형 결론"}],
 ressources:[
  {type:"officiel",titre:"vie-publique.fr — gratuité des services publics, tarification et transports gratuits",url:"https://www.vie-publique.fr/"},
  {type:"officiel",titre:"CNIL — publicité ciblée, consentement et modèles payer ou accepter",url:"https://www.cnil.fr/"},
  {type:"article",titre:"Le Monde — gratuité des transports publics, bilan des expérimentations françaises",url:"https://www.lemonde.fr/"},
  {type:"vidéo",titre:"YouTube 검색어: « gratuité des transports publics Dunkerque bilan débat économique »",url:"https://www.youtube.com/results?search_query=gratuit%C3%A9+des+transports+publics+Dunkerque+bilan+d%C3%A9bat+%C3%A9conomique"}],
 plan:{type:"Synthèse + essai (C1)",steps:[
  "Introduction : distinguer trois gratuités — celle de l'impôt, celle du coût marginal nul, celle de la donnée → problématique.",
  "I. Ce que la gratuité permet : révéler les besoins masqués par le renoncement, éviter d'exclure sans économiser, répartir la charge selon la capacité contributive, supprimer les coûts de recouvrement, désamorcer la stigmatisation.",
  "II. Ce qu'elle dissimule : invisibilité du payeur et affaiblissement du contrôle, perte du signal de gestion, caractère régressif de l'exonération générale, risque de dégradation du service, prix non monétaire du modèle publicitaire.",
  "Conclusion : juger chaque gratuité à l'identité de son payeur et à l'arbitrage qu'elle opère entre non-recours et ciblage."]}
},

"c1-economie::la précarité des étudiants":{
 ko:"대학생 빈곤의 제도적 구조",
 updated:"2026-09-11",
 problematique:"La précarité étudiante n'est pas seulement un problème de budget : elle résulte d'une architecture qui ne reconnaît pas à l'étudiant de statut social autonome et qui présuppose une solidarité familiale. Faut-il corriger les aides existantes, ou reconnaître à l'étudiant une indépendance que le droit social continue de lui refuser ?",
 contexte:[
  "Le système d'aides français repose sur un présupposé que l'on discute rarement : l'étudiant n'est pas un individu autonome mais un membre d'un foyer. Le code civil fait peser sur les parents une obligation d'entretien qui ne s'arrête pas à la majorité ; l'administration fiscale permet le rattachement du jeune au foyer de ses parents jusqu'à un âge avancé lorsqu'il poursuit des études ; et la bourse sur critères sociaux est calculée sur les revenus des parents, non sur ceux de l'intéressé. La conséquence est logique : l'étudiant dont les parents ont des revenus mais ne l'aident pas se trouve, au regard du droit, dans la même situation qu'un étudiant aidé.",
  "Ce familialisme est un choix de modèle, non une fatalité. Les pays nordiques versent une allocation d'études individuelle, indépendante du revenu des parents, au nom d'une conception de l'étudiant comme adulte en formation ; la France a préféré compléter la solidarité familiale par une aide résiduelle. Les deux systèmes coûtent cher, mais pas au même endroit : l'un finance l'autonomie de tous, l'autre finance la compensation de l'insuffisance de quelques-uns, en laissant à la famille le soin du reste. Le débat français sur une allocation d'études autonome revient périodiquement et bute toujours sur le même obstacle : elle supposerait de défaire simultanément le barème des bourses, le quotient familial et les prestations familiales.",
  "L'architecture produit en outre des effets de seuil et des arbitrages contre-intuitifs. Les aides au logement sont, elles, versées individuellement à l'étudiant, mais leur perception fait perdre aux parents le bénéfice des prestations familiales le concernant ; le rattachement au foyer fiscal procure un avantage aux parents et prive l'étudiant de sa propre imposition. Autrement dit, l'autonomie administrative de l'étudiant a un coût pour sa famille, et la décision se prend à l'échelle du foyer, en fonction de l'intérêt global — mécanisme qui rend l'indépendance du jeune économiquement défavorable au ménage.",
  "La deuxième question structurelle est celle du non-recours, notion forgée par la recherche française pour désigner la situation de qui ne perçoit pas une prestation à laquelle il a droit. On en distingue habituellement trois formes : la non-connaissance du droit, la non-demande — par découragement devant la procédure, par crainte du contrôle ou par refus du statut d'assisté — et la non-réception, lorsque la demande n'aboutit pas. Chez les étudiants, ces trois mécanismes se cumulent avec un calendrier contraignant : le dossier social unique se dépose avant la rentrée, à un moment où l'orientation n'est pas fixée, et les procédures d'étudiant autonome, qui permettent d'écarter les revenus des parents en cas de rupture familiale, exigent des preuves difficiles à réunir.",
  "Enjeu actuel : la massification. Le nombre d'étudiants a été multiplié par plusieurs fois depuis les années 1960, sans que l'architecture de l'aide, conçue pour une population étudiante restreinte et socialement homogène, soit refondée. Les droits d'inscription à l'université publique restent faibles — le Conseil constitutionnel a rappelé en 2019 que l'exigence de gratuité vaut pour l'enseignement supérieur public, tout en admettant des droits modiques — mais la gratuité des études ne dit rien du coût de vivre pendant ces études. C'est là que se joue désormais l'inégalité : non plus dans l'accès à l'inscription, mais dans la capacité à consacrer du temps à étudier."],
 pour:[
  "L'architecture familiale n'est pas absurde : elle concentre les moyens publics là où la solidarité privée fait défaut, et permet, à dépense égale, de verser des montants plus élevés aux étudiants issus des ménages les plus modestes qu'une allocation uniforme distribuée à toute une classe d'âge.",
  "La faiblesse des droits d'inscription dans l'enseignement supérieur public constitue une redistribution massive et souvent oubliée : elle évite l'endettement de masse que connaissent les systèmes où la formation se finance par emprunt, et elle protège les étudiants d'une dette qui pèserait sur leurs premières décennies d'activité.",
  "Les dispositifs se sont diversifiés dans le sens d'une meilleure prise en charge du coût de la vie plutôt que du coût des études : logement géré par les Crous, restauration subventionnée, aides d'urgence ponctuelles, accompagnement psychologique — reconnaissance implicite que la précarité étudiante est d'abord une question de conditions d'existence.",
  "Des procédures existent pour traiter les cas où le présupposé familial est faux : le statut d'étudiant autonome permet d'écarter les revenus des parents en cas de rupture, et les commissions d'aide d'urgence offrent une voie d'examen individuel là où le barème produit un résultat manifestement injuste.",
  "L'automatisation des droits engagée à l'échelle du système social — versement calculé sur des données déjà détenues par l'administration, préremplissage des demandes — constitue la réponse la plus directe au non-recours, et l'appliquer aux aides étudiantes améliorerait le taux de couverture sans créer de prestation nouvelle."],
 contre:[
  "Faire dépendre un droit individuel du revenu des parents revient à faire porter au jeune le risque d'un comportement qu'il ne contrôle pas : le barème suppose une aide familiale qu'il ne vérifie jamais, de sorte que la prestation est refusée non pas à ceux qui reçoivent, mais à ceux qui sont censés recevoir.",
  "Les procédures censées corriger cette hypothèse la confirment : exiger d'un étudiant qu'il prouve une rupture familiale, c'est lui demander d'administrer la preuve d'un fait intime et négatif, et transformer une situation déjà difficile en démarche humiliante dont le taux d'abandon est, par construction, élevé.",
  "Le non-recours n'est pas un défaut d'information mais une propriété du dispositif : un droit dont l'ouverture dépend d'un calendrier rigide, de justificatifs multiples et d'une bonne compréhension d'un barème à échelons produit inévitablement l'exclusion des publics les moins outillés, c'est-à-dire de ceux qu'il vise.",
  "Le travail salarié pendant les études agit comme un mécanisme de sélection sociale différée : au-delà d'un certain volume horaire, il se traduit par des taux de réussite plus faibles et par des réorientations subies, si bien que l'origine sociale continue de produire ses effets à l'intérieur même de l'université, après que l'accès y a été démocratisé.",
  "La gratuité des études masque une inégalité déplacée : puisque le coût réel est celui du temps et du logement, un système qui rend l'inscription presque gratuite mais laisse la subsistance à la charge des familles transfère l'inégalité de l'entrée vers la durée, et de la sélection explicite vers l'abandon silencieux."],
 fr_kr:{
  fr:"Le débat français porte de moins en moins sur le montant des bourses et de plus en plus sur leur principe. Deux positions s'affrontent. La première défend une réforme du barème : revoir les échelons, relever les plafonds de revenus, prendre en compte le coût du logement selon le territoire — bref, améliorer un système dont on conserve la logique familiale. La seconde réclame une allocation d'études individuelle, versée à l'étudiant indépendamment de ses parents, qui reconnaîtrait enfin un statut social autonome et ferait disparaître d'un coup la question de la preuve de rupture familiale. L'objection à cette seconde voie n'est pas seulement budgétaire : elle obligerait à trancher le sort du quotient familial et des prestations familiales, c'est-à-dire à redistribuer entre les familles, ce qui explique qu'aucun gouvernement ne s'y soit engagé. Entre les deux, la voie effectivement suivie est celle de l'automatisation et du ciblage : simplifier la demande, préremplir les dossiers, réserver certains dispositifs aux boursiers.",
  kr:"한국은 프랑스와 놀랍도록 같은 전제 위에 서 있습니다. 국가장학금의 «학자금 지원구간»은 학생 본인의 소득이 아니라 부모를 포함한 가구의 소득인정액으로 산정되고, 여기에는 소득뿐 아니라 재산도 환산해 포함됩니다. 즉 한국 역시 «학생은 가구의 일원»이라는 가족주의적 전제를 택했고, 그 결과 «부모는 소득이 있으나 실제로 지원하지 않는 학생»이라는 프랑스와 동일한 사각지대가 생깁니다. 기초생활보장제도의 부양의무자 기준을 둘러싼 오랜 논쟁도 같은 구조의 문제였습니다. 다른 점은 두 가지입니다. 첫째, 등록금 수준이 높아 프랑스가 «생활비의 문제»로 겪는 것을 한국은 «등록금과 생활비의 문제»로 동시에 겪습니다. 둘째, 그래서 해법이 현금 급여가 아니라 대출로 설계되었습니다. 2010년 도입된 취업 후 상환 학자금대출은 소득이 일정 수준에 이른 뒤 갚게 하는 제도로, 위험을 국가와 개인이 나누는 방식이지만 결국 부담을 개인의 미래 소득에 이전합니다. 시험에서는 «프랑스는 가족에게, 한국은 미래의 자기 자신에게 학업 비용을 이전한다»고 정리하면 두 체계의 차이를 한 문장으로 대조할 수 있습니다."},
 lexique:["le statut social de l'étudiant","l'obligation d'entretien","le rattachement au foyer fiscal","la bourse sur critères sociaux","l'étudiant autonome","le non-recours aux droits","l'effet de seuil","l'allocation d'études individuelle","la massification de l'enseignement supérieur","le transfert intergénérationnel"],
 expressions:[
  {fr:"La précarité étudiante n'est pas d'abord un problème de montant : elle tient à ce que le droit ne reconnaît pas à l'étudiant de statut autonome.",ko:"쟁점 재정의"},
  {fr:"Le barème suppose une aide familiale qu'il ne vérifie jamais ; c'est donc à celui qui ne la reçoit pas d'en administrer la preuve.",ko:"제도 논리 비판 (인과)"},
  {fr:"Si légitime que soit le ciblage des aides, il produit un non-recours dont pâtissent précisément ceux qu'il prétend atteindre.",ko:"양보 후 반박 (subjonctif)"},
  {fr:"Il faudrait qu'une allocation fût versée à l'étudiant lui-même pour que l'indépendance cessât d'avoir un coût pour sa famille.",ko:"조건 (subjonctif)"},
  {fr:"On a démocratisé l'accès à l'université ; il resterait à démocratiser le temps que l'on peut y consacrer.",ko:"균형 결론 (conditionnel)"}],
 ressources:[
  {type:"officiel",titre:"enseignementsup-recherche.gouv.fr — bourses sur critères sociaux, vie étudiante et conditions d'études",url:"https://www.enseignementsup-recherche.gouv.fr/"},
  {type:"officiel",titre:"etudiant.gouv.fr — dossier social étudiant, statut d'étudiant autonome et aides d'urgence",url:"https://www.etudiant.gouv.fr/"},
  {type:"officiel",titre:"DREES — travaux sur le non-recours aux prestations sociales",url:"https://drees.solidarites-sante.gouv.fr/"},
  {type:"vidéo",titre:"YouTube 검색어: « précarité étudiante bourses critères sociaux allocation d'autonomie débat »",url:"https://www.youtube.com/results?search_query=pr%C3%A9carit%C3%A9+%C3%A9tudiante+bourses+crit%C3%A8res+sociaux+allocation+d%27autonomie+d%C3%A9bat"}],
 plan:{type:"Synthèse + essai (C1)",steps:[
  "Introduction : un système d'aides fondé sur un présupposé — la solidarité familiale — que la massification a fragilisé → problématique.",
  "I. La cohérence du modèle actuel : concentration des moyens sur les plus modestes, quasi-gratuité de l'inscription et absence d'endettement de masse, diversification des aides sur le coût de la vie, procédures d'exception, automatisation des droits.",
  "II. Ses effets structurels : dépendance d'un droit individuel au revenu des parents, preuve de rupture familiale, non-recours produit par la procédure, travail salarié comme sélection différée, déplacement de l'inégalité de l'accès vers la durée des études.",
  "Conclusion : poser la question du statut avant celle du barème, et mesurer toute réforme à ce qu'elle fait au temps disponible pour étudier."]}
}

});

/* ================= « L'économie » 주제 일반 어휘 (C1 100개) ================= */
/* B2 세트를 덮어쓰지 않도록 비파괴 방식으로 추가 */
window.VOCAB = window.VOCAB || {};
window.VOCAB.economie = window.VOCAB.economie || {};
window.VOCAB.economie.C1 = [

/* --- 거시 경제와 성장 (12) --- */
["la croissance économique","경제 성장","La croissance économique mesure une augmentation de la production et ne dit rien, par elle-même, de la façon dont elle se répartit."],
["le produit intérieur brut","국내총생산","Le produit intérieur brut comptabilise ce qui se vend et ignore ce qui se dégrade, ce qui explique la recherche d'indicateurs complémentaires."],
["la valeur ajoutée","부가가치","La valeur ajoutée correspond à ce que l'entreprise crée réellement, une fois déduites les consommations qu'elle a achetées à d'autres."],
["la productivité du travail","노동 생산성","Le ralentissement de la productivité du travail dans les économies avancées reste l'une des énigmes les plus discutées de la macroéconomie contemporaine."],
["la conjoncture","경기 국면","Confondre un retournement de conjoncture avec une tendance de long terme conduit à prendre des mesures structurelles pour un problème passager."],
["la récession","경기 침체","Une récession se définit techniquement par un recul de l'activité sur deux trimestres consécutifs, définition commode plus que rigoureuse."],
["la stagnation séculaire","장기 침체","L'hypothèse de la stagnation séculaire soutient que l'épargne disponible excède durablement les occasions d'investissement rentables."],
["le pouvoir d'achat","구매력","Le pouvoir d'achat moyen peut progresser alors même que la moitié de la population voit le sien reculer, ce que la moyenne dissimule."],
["l'appareil productif","산업 기반","La reconstitution de l'appareil productif suppose des décisions d'investissement dont les effets ne seront mesurables qu'au bout d'une décennie."],
["la désindustrialisation","탈산업화","La désindustrialisation a déplacé les emplois vers les services sans que la qualification et la rémunération suivent le même chemin."],
["la décroissance","탈성장","La décroissance ne propose pas une récession subie mais une réduction organisée de la production matérielle, distinction que le débat public efface souvent."],
["les indicateurs alternatifs de richesse","대안적 부의 지표","Les indicateurs alternatifs de richesse tentent d'intégrer la santé, l'éducation et l'état des ressources à la mesure du progrès."],

/* --- 시장·가격·경쟁 (12) --- */
["l'offre et la demande","수요와 공급","Expliquer un prix par la seule rencontre de l'offre et de la demande revient à supposer résolu ce qu'il faudrait précisément démontrer."],
["le signal-prix","가격 신호","Le signal-prix informe le producteur de la rareté, mais il informe aussi le consommateur modeste qu'il doit renoncer."],
["la défaillance du marché","시장 실패","On parle de défaillance du marché lorsque la libre confrontation des intérêts privés conduit à un résultat collectivement inférieur."],
["l'externalité négative","부정적 외부효과","Une externalité négative désigne un coût imposé à un tiers sans compensation, la pollution en étant l'exemple canonique."],
["l'asymétrie d'information","정보 비대칭","L'asymétrie d'information entre le vendeur et l'acheteur justifie une part importante de la réglementation économique moderne."],
["le bien non rival","비경합재","Un bien non rival peut être consommé par un usager supplémentaire sans priver personne, ce qui rend son financement par le prix contestable."],
["la position dominante","시장 지배적 지위","Détenir une position dominante n'est pas illégal ; en abuser pour évincer un concurrent l'est."],
["la barrière à l'entrée","진입 장벽","Les barrières à l'entrée protègent les acteurs installés bien plus sûrement que la qualité de leurs produits."],
["l'effet de réseau","네트워크 효과","L'effet de réseau rend un service d'autant plus attractif qu'il compte d'utilisateurs, mécanisme qui tend naturellement vers le monopole."],
["l'entente illicite","담합","L'autorité de la concurrence sanctionne l'entente illicite par laquelle des entreprises s'accordent sur les prix au détriment des acheteurs."],
["la rente de situation","지대(독점적 이익)","Une rente de situation rémunère une position acquise et non un effort productif, ce qui la rend économiquement injustifiable."],
["l'inflation sous-jacente","근원 물가 상승","L'inflation sous-jacente, qui exclut l'énergie et l'alimentation, sert à distinguer un choc passager d'une dynamique installée."],

/* --- 노동과 고용 (12) --- */
["le marché du travail","노동 시장","Parler de marché du travail suppose une symétrie entre les parties que la réalité de la négociation dément généralement."],
["le lien de subordination","종속 관계","Le lien de subordination reste le critère par lequel le juge distingue le contrat de travail du contrat de prestation."],
["la requalification","재분류(계약의)","La requalification d'un contrat commercial en contrat de travail emporte des conséquences considérables en matière de cotisations."],
["le travailleur indépendant","자영업자","Le travailleur indépendant assume seul son outil de travail, son assurance et l'absence de revenu en cas d'interruption."],
["la précarité de l'emploi","고용 불안정","La précarité de l'emploi ne se mesure pas au taux de chômage mais à la probabilité de perdre son revenu d'un mois sur l'autre."],
["le sous-emploi","불완전 취업","Le sous-emploi désigne ceux qui travaillent moins qu'ils ne le souhaitent, catégorie que les statistiques de chômage ne font pas apparaître."],
["le taux d'activité","경제활동참가율","Le taux d'activité renseigne mieux que le taux de chômage sur le nombre de personnes réellement retirées du marché du travail."],
["la flexisécurité","유연안정성","La flexisécurité promet d'échanger la souplesse du licenciement contre la solidité de l'accompagnement, équilibre rarement atteint en pratique."],
["la négociation collective","단체 교섭","La négociation collective ne produit d'effet réel que si le rapport de force autorise l'une des parties à refuser l'accord."],
["le dialogue social","사회적 대화","Le dialogue social sert autant à légitimer une réforme décidée qu'à en négocier réellement le contenu."],
["la pluriactivité","복수 직업 종사","La pluriactivité brouille les catégories statistiques et prive le travailleur de droits conçus pour un employeur unique."],
["la portabilité des droits","권리의 이동성","La portabilité des droits consiste à attacher la protection sociale à la personne plutôt qu'au contrat qui l'emploie."],

/* --- 화폐·금융·통화 (12) --- */
["la politique monétaire","통화 정책","La politique monétaire agit sur l'activité avec un décalage qui rend son évaluation immédiate presque impossible."],
["le taux directeur","기준 금리","Relever le taux directeur pour contenir l'inflation revient à freiner l'ensemble de l'activité pour corriger un déséquilibre partiel."],
["la banque centrale","중앙은행","L'indépendance de la banque centrale protège la monnaie du calendrier électoral et soustrait en même temps ces décisions au vote."],
["la souveraineté monétaire","통화 주권","La souveraineté monétaire se mesure à la capacité d'un État de faire accepter sa monnaie en paiement de l'impôt."],
["l'unité de compte","계산 단위","Tant que ni les salaires ni les loyers ne sont libellés dans un actif, celui-ci ne sert pas d'unité de compte."],
["la réserve de valeur","가치 저장 수단","Un actif dont le cours varie fortement en quelques jours ne peut raisonnablement servir de réserve de valeur."],
["la volatilité","변동성","La volatilité attire le spéculateur exactement pour la raison qui écarte l'épargnant prudent."],
["la bulle spéculative","투기적 거품","Une bulle spéculative se reconnaît plus aisément après son éclatement qu'au moment où il serait utile de la signaler."],
["l'aléa moral","도덕적 해이","L'aléa moral apparaît lorsque celui qui est assuré contre un risque cesse de prendre les précautions qui l'en préservaient."],
["le prêteur en dernier ressort","최종 대부자","L'absence de prêteur en dernier ressort distingue radicalement les circuits non régulés du système bancaire supervisé."],
["la stabilité financière","금융 안정","La stabilité financière est un bien collectif dont chacun profite sans qu'aucun acteur n'ait intérêt à la produire."],
["la désintermédiation","탈중개화","La désintermédiation promise par les nouvelles technologies a le plus souvent abouti à remplacer un intermédiaire par un autre."],

/* --- 공공 재정·조세·재분배 (12) --- */
["les finances publiques","공공 재정","L'équilibre des finances publiques est un objectif politique et non une contrainte technique, contrairement à ce que suggère le vocabulaire comptable."],
["le déficit public","재정 적자","Juger un déficit public sans considérer la nature des dépenses qu'il finance revient à confondre un investissement et un gaspillage."],
["la dette souveraine","국가 부채","La soutenabilité de la dette souveraine dépend moins de son montant que de l'écart entre le taux d'intérêt et la croissance."],
["la loi de finances","예산법","Inscrire un objectif dans une loi de finances est la seule manière de vérifier qu'il est autre chose qu'une déclaration d'intention."],
["le prélèvement obligatoire","의무 공과금","Comparer les prélèvements obligatoires entre pays sans comparer les services qu'ils financent n'a aucune signification."],
["la progressivité de l'impôt","조세의 누진성","La progressivité de l'impôt fait payer davantage ceux qui peuvent davantage, principe distinct de celui de l'égalité devant l'impôt."],
["l'assiette fiscale","과세 표준","Élargir l'assiette fiscale permet de baisser les taux sans réduire les recettes, arbitrage que tout gouvernement doit expliciter."],
["la niche fiscale","조세 감면 제도","Une niche fiscale est une dépense publique qui ne figure pas au budget et qu'aucun vote annuel ne remet en cause."],
["la redistribution","재분배","La redistribution ne se juge pas au montant transféré mais à l'écart de revenus qui subsiste une fois les transferts opérés."],
["la capacité contributive","담세 능력","Fonder l'impôt sur la capacité contributive suppose de mesurer non le revenu perçu mais les charges qui pèsent sur lui."],
["l'évasion fiscale","조세 회피","L'évasion fiscale des grandes entreprises réduit la base sur laquelle repose le financement des services dont elles bénéficient."],
["la dépense sociale","사회 지출","La dépense sociale est présentée tantôt comme une charge, tantôt comme un investissement, selon le camp qui la commente."],

/* --- 불평등·빈곤·보호 (10) --- */
["les inégalités de revenus","소득 불평등","Les inégalités de revenus se sont creusées par le haut bien plus que par le bas dans la plupart des économies avancées."],
["le patrimoine","자산","La concentration du patrimoine est partout plus forte que celle des revenus, et elle se transmet d'une génération à l'autre."],
["le transfert intergénérationnel","세대 간 이전","Le transfert intergénérationnel de patrimoine explique aujourd'hui une part croissante des écarts de situation entre jeunes adultes."],
["le seuil de pauvreté","빈곤선","Le seuil de pauvreté étant défini relativement au revenu médian, une crise qui appauvrit tout le monde peut le faire mécaniquement reculer."],
["le non-recours aux droits","권리 미신청","Le non-recours aux droits révèle qu'un dispositif peut échouer non par manque de moyens mais par excès de conditions."],
["les minima sociaux","최저 생계 급여","La multiplication des minima sociaux a produit une complexité qui décourage précisément les publics les plus fragiles."],
["la conditionnalité","수급 조건성","La conditionnalité des aides prétend responsabiliser ; elle produit surtout des démarches, des contrôles et des renoncements."],
["l'effet de seuil","문턱 효과","Un effet de seuil fait qu'un euro de revenu supplémentaire peut faire perdre une prestation entière, résultat absurde mais fréquent."],
["la trappe à pauvreté","빈곤의 덫","On parle de trappe à pauvreté lorsque la reprise d'un emploi ne procure aucun gain net une fois les aides perdues."],
["la stigmatisation des bénéficiaires","수급자 낙인","La stigmatisation des bénéficiaires est un coût du ciblage que les évaluations budgétaires ne comptabilisent jamais."],

/* --- 규제·제도·국가 (10) --- */
["la régulation","규제","La régulation ne s'oppose pas au marché : elle définit les conditions sans lesquelles aucun marché ne fonctionne durablement."],
["l'autorité de régulation","규제 기관","Une autorité de régulation indépendante tire sa légitimité de son expertise et l'expose au soupçon de capture."],
["la capture réglementaire","규제 포획","On parle de capture réglementaire lorsque l'organisme de contrôle finit par adopter le point de vue du secteur qu'il surveille."],
["le cadre juridique","법적 틀","Un cadre juridique adopté après l'installation d'un modèle économique arrive toujours en position de le légitimer autant que de le corriger."],
["la commande publique","공공 조달","La commande publique constitue un levier économique redoutable, puisqu'elle crée une demande là où le marché n'en produit pas."],
["le service public","공공 서비스","Le service public se définit par la continuité, l'égalité et l'adaptabilité, non par la propriété publique de l'opérateur."],
["la privatisation","민영화","Une privatisation transfère la propriété sans transférer l'obligation de service, d'où la nécessité d'un contrat de régulation."],
["la libéralisation du secteur","부문 자유화","La libéralisation d'un secteur produit rarement la concurrence annoncée lorsque les infrastructures restent contrôlées par l'acteur historique."],
["le principe de subsidiarité","보충성 원칙","Le principe de subsidiarité veut que la décision soit prise au niveau le plus proche de ceux qu'elle concerne."],
["l'harmonisation européenne","유럽 차원의 조화","L'harmonisation européenne met fin à la concurrence entre régimes nationaux, ce qui est son but et l'objet des critiques qu'elle suscite."],

/* --- 플랫폼·디지털 경제 (10) --- */
["l'économie de plateforme","플랫폼 경제","L'économie de plateforme repose sur l'intermédiation, c'est-à-dire sur la captation d'une commission sur des transactions que d'autres réalisent."],
["l'intermédiation","중개","Se déclarer simple intermédiaire technique permet d'encaisser les bénéfices de la coordination sans en assumer les obligations."],
["la gestion algorithmique","알고리즘 관리","La gestion algorithmique reconstitue une subordination sans hiérarchie visible, donc sans interlocuteur à qui contester une décision."],
["la monétisation des données","데이터 수익화","La monétisation des données est le prix réel de services que l'usager continue de percevoir comme gratuits."],
["le modèle publicitaire","광고 기반 모델","Le modèle publicitaire fait de l'attention de l'usager la marchandise, et du service lui-même le moyen de la capter."],
["le consentement libre et éclairé","자유롭고 충분한 정보에 의한 동의","Le consentement n'est ni libre ni éclairé lorsque le refus du suivi publicitaire se paie par un abonnement."],
["l'économie collaborative","공유 경제","L'expression d'économie collaborative a servi à présenter comme un partage entre pairs ce qui est devenu une activité commerciale."],
["le coût marginal nul","한계 비용 제로","Lorsque le coût marginal est nul, faire payer l'accès exclut des usagers sans économiser la moindre ressource."],
["l'automatisation des tâches","업무 자동화","L'automatisation des tâches ne supprime pas les emplois de façon uniforme : elle en recompose le contenu et en déplace la valeur."],
["la concentration du marché","시장 집중","La concentration du marché numérique résulte moins d'une stratégie prédatrice que de la logique même des effets de réseau."],

/* --- 분석·논증 표현 (10) --- */
["l'arbitrage entre deux objectifs","두 목표 간의 조정","Toute politique économique procède d'un arbitrage entre des objectifs dont la conciliation complète est impossible."],
["l'effet d'aubaine","의도치 않은 수혜 효과","On parle d'effet d'aubaine lorsqu'une aide publique subventionne un comportement qui aurait eu lieu sans elle."],
["l'effet pervers","역효과","Un dispositif produit un effet pervers lorsqu'il aggrave précisément le phénomène qu'il prétendait corriger."],
["la corrélation n'est pas la causalité","상관관계는 인과관계가 아니다","Rappeler que la corrélation n'est pas la causalité est le premier réflexe à opposer à un raisonnement économique trop rapide."],
["le raisonnement toutes choses égales par ailleurs","다른 조건이 같다면","Le raisonnement toutes choses égales par ailleurs isole un facteur au prix d'une hypothèse que la réalité ne vérifie jamais."],
["l'effet d'équilibre","일반균형 효과","Une expérimentation locale ne mesure pas les effets d'équilibre qu'une généralisation produirait sur les prix et les salaires."],
["la comparaison internationale","국제 비교","La comparaison internationale éclaire si l'on compare des systèmes entiers, et induit en erreur si l'on isole une mesure de son contexte."],
["le transfert de charge","부담의 전가","Le transfert de charge vers le consommateur transforme une question de régulation en affaire de comportement individuel."],
["la soutenabilité d'un modèle","모델의 지속 가능성","Juger de la soutenabilité d'un modèle suppose d'intégrer les coûts qu'il reporte sur la collectivité ou sur l'avenir."],
["la mise en perspective historique","역사적 관점에서의 조망","Une mise en perspective historique montre que la plupart des innovations présentées comme inédites reproduisent des débats anciens."]

];
