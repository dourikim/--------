/* env-b2-dossiers-c.js — « L'environnement » 소주제 자료집 3/3 (DELF B2, 5개)
   + 주제 일반 어휘 (B2 100개)
   구조: ①problématique + 최근 흐름 ②POUR/CONTRE ③프랑스 vs 한국 ④전문 어휘 ⑤표현 ⑥자료 ⑦작문·구술 플랜

   ※ 각도 분리 메모
   - « le recyclage des déchets »는 재활용 산업과 물질 순환 층위(선별 공정, 재생 원료 시장,
     플라스틱의 한계, 폐기물 수출, filière REP, 재활용률 계산 방식)로 한정.
     같은 주제의 « le tri sélectif »(가정 분리배출 실천)와 겹치지 않게 작성.
   - « la permaculture »는 설계 원리·노동·수익성 논쟁에 한정하고,
     이미 있는 b2-alimentation::les produits locaux (le locavorisme)의
     짧은 유통망·AMAP·paniers 어휘는 의도적으로 피함.
   - « la journée sans voiture »는 하루 행사의 운영·반응·지속 효과 층위.
     같은 주제의 « la dépendance à la voiture »(구조적 의존)와 분리.
   - « la pollution dans les jardins publics »는 공원이라는 구체적 장소의
     쓰레기·담배꽁초·개 배설물·청소 인력 문제로 한정.
*/
Object.assign(window.DOSSIERS, {

/* ================= 12. le recyclage des déchets ================= */

"b2-environnement::le recyclage des déchets":{
 ko:"폐기물 재활용", updated:"2026-09-11",
 problematique:"Le recyclage règle-t-il réellement le problème des déchets, ou permet-il surtout de continuer à en produire autant sans mauvaise conscience ?",
 contexte:[
  "La France a organisé très tôt le recyclage autour du principe de la responsabilité élargie du producteur : celui qui met un produit sur le marché verse une éco-contribution à un éco-organisme agréé, qui finance à son tour la collecte, le tri et le traitement des déchets correspondants.",
  "La loi anti-gaspillage pour une économie circulaire, adoptée en 2020, a étendu ce principe à de nouvelles filières — textiles, jouets, articles de sport, bricolage, mégots — et imposé une signalétique de tri commune ainsi qu'un indice de réparabilité sur certains appareils.",
  "Les consignes de tri ont été simplifiées pour que tous les emballages plastiques puissent être déposés dans le même bac ; mais trier n'est pas recycler : le centre de tri sépare ensuite les matières par résine, et plusieurs d'entre elles n'ont aujourd'hui aucun débouché industriel.",
  "Le marché mondial s'est refermé : la Chine, qui absorbait l'essentiel des déchets plastiques exportés, a fermé ses frontières à partir de 2018, et les règles européennes encadrant les transferts de déchets se sont durcies, obligeant l'Europe à traiter chez elle ce qu'elle expédiait ailleurs.",
  "Enjeu actuel : les règles européennes imposent désormais de calculer le taux de recyclage à l'entrée de l'opération finale de recyclage, et non à la sortie du centre de tri ; les chiffres publiés ont donc baissé d'un coup, révélant l'écart entre ce que l'on collecte et ce que l'on transforme réellement."],
 pour:[
  "Produire une matière à partir de déchets consomme beaucoup moins d'énergie que de l'extraire et de la raffiner : pour l'aluminium, l'acier, le verre ou le papier, l'économie est considérable et la boucle peut se répéter des dizaines de fois.",
  "Chaque tonne de matière première secondaire remise sur le marché est une tonne qui n'est ni extraite d'une mine ni achetée à l'étranger : le recyclage est aussi une question d'indépendance industrielle.",
  "Le principe pollueur-payeur déplace le coût du contribuable vers le producteur, et l'éco-contribution peut être modulée pour récompenser un emballage recyclable et pénaliser un emballage impossible à séparer.",
  "Le tri, la collecte et le recyclage font vivre des emplois locaux, dans des centres qui ne peuvent pas être délocalisés puisque la matière traitée est celle du territoire.",
  "Tout ce qui est recyclé n'est ni enfoui ni brûlé : cela évite d'immobiliser des terrains en décharge et de rejeter dans l'atmosphère ce que l'incinération libère."],
 contre:[
  "Le plastique ne se recycle pas comme le verre : à chaque passage la matière perd de ses qualités, les usages au contact alimentaire sont strictement encadrés, et seules quelques résines — le PET des bouteilles, le PEHD des flacons — disposent d'une filière solide.",
  "La matière recyclée est en concurrence directe avec la matière vierge, dont le prix suit celui du pétrole : quand le baril baisse, le régénéré ne trouve plus preneur et les stocks s'accumulent chez les recycleurs.",
  "Les erreurs de tri, les emballages composites collés ou multicouches et les objets composés de plusieurs matières produisent des refus de tri qui repartent en incinération : une partie de ce que l'habitant croit recycler ne l'est jamais.",
  "Le recyclage produit un effet rebond redoutable : un emballage annoncé comme recyclable rassure le consommateur et légitime la production de masse, alors que le seul déchet certain est celui que l'on n'a pas créé.",
  "Exporter des déchets pour les faire traiter ailleurs revient à exporter la pollution : la traçabilité reste difficile, et les conditions de traitement dans les pays destinataires ne sont pas toujours celles que l'on exigerait ici."],
 fr_kr:{
  fr:"La France a été l'un des premiers pays à organiser la responsabilité élargie du producteur, et le débat ne porte donc plus sur le principe, admis, mais sur son efficacité réelle. Les associations reprochent aux éco-contributions d'être trop faibles pour modifier la conception des produits, et donc de financer le nettoyage plutôt que la prévention. Les industriels répondent que la demande de matière recyclée doit d'abord exister pour qu'une filière tienne économiquement, et que sans obligation d'incorporer du régénéré, aucun recycleur n'investira. Le changement de méthode de calcul du taux de recyclage a rendu ce désaccord public, puisqu'il a montré la distance entre le geste de l'habitant et le résultat industriel.",
  kr:"한국도 생산자책임재활용제도(EPR)를 2003년부터 시행해 포장재와 전자제품 생산자에게 재활용 의무를 지우고 있고, 1995년 쓰레기 종량제 이후 가정의 분리배출 참여율은 세계적으로 높은 편입니다. 2020년부터는 아파트에서 투명 페트병을 따로 모으게 해 재생 원료의 품질을 높이려 했습니다. 그럼에도 병목은 가정이 아니라 그다음 단계에 있습니다. 선별장에서 걸러지는 잔재물이 많고, 여러 재질을 붙여 만든 포장재는 분리가 어려우며, 재생 원료 가격이 신재 가격에 밀리면 판로가 막힙니다. 시험에서는 «프랑스는 생산자 부담금으로 제도를 지탱하고 한국은 시민의 분리배출로 지탱하지만, 두 나라 모두 선별과 재생 원료 시장이라는 같은 벽에 부딪힌다»는 식으로 쓰면 논지가 선명해집니다."},
 lexique:["un déchet recyclable","un centre de tri","la matière première secondaire","la filière REP","un éco-organisme","l'éco-contribution","l'éco-conception","le taux de recyclage","un refus de tri","la valorisation énergétique"],
 expressions:[
  {fr:"La vraie question n'est pas de savoir si nous trions assez, mais si ce que nous trions trouve ensuite une seconde vie industrielle.",ko:"문제 제기 (재정의형)"},
  {fr:"Il faudrait que les industriels soient tenus d'incorporer une part de matière recyclée pour que la filière cesse de dépendre du prix du pétrole.",ko:"조건 (conditionnel + subjonctif)"},
  {fr:"On aurait tort de croire qu'un emballage recyclable soit un emballage sans impact.",ko:"반론 (conditionnel + subjonctif)"},
  {fr:"Bien que les taux de collecte progressent, il n'en demeure pas moins qu'une partie des plastiques collectés finit en incinération.",ko:"양보 후 반박 (subjonctif)"},
  {fr:"Le recyclage n'est donc pas une solution, mais un rattrapage : il répare en aval ce que la conception aurait dû éviter en amont.",ko:"균형 결론"}],
 ressources:[
  {type:"officiel",titre:"ademe.fr — recyclage, filières REP et matières premières secondaires",url:"https://www.ademe.fr/"},
  {type:"officiel",titre:"ecologie.gouv.fr — loi anti-gaspillage pour une économie circulaire",url:"https://www.ecologie.gouv.fr/"},
  {type:"vidéo",titre:"YouTube 검색어: « recyclage des plastiques centre de tri filière REP »",url:"https://www.youtube.com/results?search_query=recyclage+des+plastiques+centre+de+tri+fili%C3%A8re+REP"}],
 plan:{type:"Essai argumenté (찬반형)",steps:[
  "Introduction : partir du geste quotidien du bac jaune, rappeler qu'il existe une industrie derrière ce geste → problématique : le recyclage traite-t-il le problème ou le déplace-t-il ?",
  "I. Ce que le recyclage permet réellement : économie d'énergie et de matière, indépendance industrielle, pollueur-payeur, emplois locaux, alternative à l'enfouissement.",
  "II. Ce qu'il ne peut pas faire : dégradation des plastiques, concurrence de la matière vierge, refus de tri, effet rebond, exportation des déchets.",
  "Conclusion : hiérarchiser — réduire, réemployer, puis recycler ; défendre l'idée que le recyclage doit être jugé sur la matière effectivement réutilisée, non sur les tonnes collectées."]}
},

/* ================= 13. la permaculture ================= */

"b2-environnement::la permaculture":{
 ko:"퍼머컬처 (순환형 농법)", updated:"2026-09-11",
 problematique:"La permaculture constitue-t-elle un modèle agricole reproductible, ou un art du jardin exigeant réservé à quelques passionnés ?",
 contexte:[
  "Le mot est né en Australie dans les années 1970, sous la plume de Bill Mollison et de David Holmgren, par contraction de « agriculture permanente » : il désigne d'abord une méthode de conception, pas un ensemble de recettes, et il n'existe aucun cahier des charges officiel comparable à celui de l'agriculture biologique.",
  "Les principes sont simples à énoncer et longs à maîtriser : observer le terrain avant d'agir, ne jamais laisser le sol nu, associer des espèces qui se protègent mutuellement, faire circuler la matière organique sur place et travailler avec la pente et l'eau plutôt que contre elles.",
  "Dans la pratique, cela donne du paillage, des rotations, des cultures associées, du compost, des haies, des buttes, la récupération de l'eau de pluie et un travail du sol réduit au minimum, sur de petites surfaces cultivées à la main et très densément.",
  "En France, la démarche s'est diffusée par deux voies bien différentes : celle des microfermes, portées par des agriculteurs souvent issus d'une reconversion, et celle des jardins partagés et des jardins scolaires, où elle sert autant à produire qu'à enseigner.",
  "Enjeu actuel : alors que la fertilité des sols, la disponibilité de l'eau et l'usage des pesticides sont devenus des questions ordinaires, la permaculture fonctionne comme un laboratoire très observé ; reste à savoir si ce qui tient sur un hectare peut tenir à l'échelle d'un pays."],
 pour:[
  "Un sol couvert et peu retourné conserve sa vie souterraine, ses vers de terre et ses champignons : il s'érode moins, absorbe mieux les pluies violentes et reconstitue lentement sa fertilité au lieu de la consommer.",
  "Le paillage et la matière organique retiennent l'eau, ce qui devient décisif dans un pays où les restrictions estivales se répètent et où l'irrigation est de plus en plus contestée.",
  "Les associations de plantes et la diversité des espèces limitent les ravageurs et réduisent le recours aux traitements : le jardin fabrique une partie de ses propres défenses au lieu de les acheter.",
  "Cultiver une trentaine d'espèces sur une petite surface protège d'une mauvaise année : ce qui manque sur une culture est compensé par une autre, alors qu'une exploitation spécialisée joue tout sur une récolte.",
  "La surface réduite et l'équipement léger rendent l'installation possible sans capital important, ce qui ouvre le métier à des porteurs de projet qui ne pourraient jamais reprendre une exploitation de grande taille."],
 contre:[
  "Le modèle repose sur une main-d'œuvre abondante et difficile à mécaniser : semer, pailler, désherber et récolter à la main demande un temps de travail considérable, que le revenu dégagé rémunère rarement à sa juste valeur.",
  "Il n'existe pas de protocole applicable tel quel : chaque terrain a son sol, son exposition et son climat, et les résultats dépendent d'un savoir-faire d'observation que l'on n'acquiert qu'après plusieurs saisons, avec un risque d'échec élevé au départ.",
  "Une microferme nourrit quelques dizaines de foyers en légumes ; or la base de l'alimentation reste les céréales, les oléagineux et les protéines, qui ne se produisent pas de cette manière sur de petites parcelles.",
  "Le mot n'a aucune définition juridique : n'importe quel producteur, n'importe quelle formation payante peut s'en réclamer, ce qui entretient une confusion commerciale entre une méthode de conception et un argument de vente.",
  "L'équilibre économique suppose de vendre cher à une clientèle qui accepte ce prix ; là où cette clientèle n'existe pas, le modèle ne tient pas, et l'on demande alors au producteur de compenser par un travail encore plus intense."],
 fr_kr:{
  fr:"En France, la permaculture occupe une position inconfortable entre l'agriculture et le jardinage : elle n'a pas de statut officiel, aucune aide publique n'est attachée au mot lui-même, et les exploitations concernées relèvent des mêmes règles que les autres. Ses défenseurs mettent en avant l'état des sols, la sobriété en intrants et la capacité à faire vivre une famille sur une petite surface. Les agronomes, eux, posent trois questions constantes : combien d'heures de travail, quel revenu horaire, et dans quelle mesure les résultats d'une ferme sont transposables ailleurs. Le débat porte donc moins sur la valeur écologique de la méthode, assez largement reconnue, que sur sa capacité à sortir du statut d'exception.",
  kr:"한국에서 이 말은 아직 낯설지만, 비슷한 실천은 두 갈래로 자리 잡았습니다. 하나는 «자연농법»·유기농 흐름이고, 다른 하나는 도시농업입니다. 2011년에 도시농업의 육성 및 지원에 관한 법률이 만들어진 뒤 지방자치단체가 주말농장과 텃밭, 학교 텃밭을 제도적으로 지원하게 되었고, 아파트 단지의 상자 텃밭까지 흔해졌습니다. 프랑스와 결정적으로 다른 점이 여기 있습니다. 프랑스에서는 개인과 협회가 먼저 실험하고 제도가 뒤따르지 않는 반면, 한국에서는 도시농업이 법과 예산을 갖춘 정책으로 먼저 조직되었습니다. 시험에서는 «프랑스의 퍼머컬처는 개인의 실험, 한국의 도시농업은 제도화된 정책»이라는 대조를 세우고, 그래서 양쪽이 각각 어떤 한계를 갖는지로 이어가면 좋습니다."},
 lexique:["la permaculture","le paillage","la couverture du sol","le non-labour","l'association de cultures","la rotation des cultures","une microferme","le compost","la fertilité du sol","la récupération de l'eau de pluie"],
 expressions:[
  {fr:"Avant de demander si la permaculture peut nourrir le monde, encore faut-il préciser ce que l'on attend d'elle : un modèle de production ou une méthode de conception.",ko:"문제 제기 (재정의형)"},
  {fr:"Il suffirait que l'on compte le temps de travail réel pour que l'enthousiasme laisse place à une discussion plus honnête sur le revenu.",ko:"조건 (subjonctif)"},
  {fr:"On ne saurait reprocher à une méthode conçue pour un jardin de ne pas résoudre la question des céréales.",ko:"반론 (conditionnel)"},
  {fr:"Quoique les surfaces concernées restent modestes, ces fermes servent de laboratoire à des pratiques que l'agriculture conventionnelle commence à reprendre.",ko:"양보 후 반박 (subjonctif)"},
  {fr:"La permaculture vaut donc moins comme modèle à généraliser que comme rappel d'une évidence oubliée : un sol vivant est un capital, non une surface.",ko:"균형 결론"}],
 ressources:[
  {type:"officiel",titre:"agriculture.gouv.fr — agroécologie, sols vivants et installation en maraîchage",url:"https://agriculture.gouv.fr/"},
  {type:"officiel",titre:"inrae.fr — recherches sur les sols, les cultures associées et les microfermes",url:"https://www.inrae.fr/"},
  {type:"vidéo",titre:"YouTube 검색어: « permaculture microferme maraîchage sol vivant paillage »",url:"https://www.youtube.com/results?search_query=permaculture+microferme+mara%C3%AEchage+sol+vivant+paillage"}],
 plan:{type:"Exposé (구술)",steps:[
  "Introduction : présenter le document, définir la permaculture comme une méthode de conception née dans les années 1970, annoncer le problème → modèle reproductible ou exception admirable ?",
  "I. Ce que la méthode apporte : sol vivant, gestion de l'eau, réduction des intrants, diversité protectrice, installation accessible.",
  "II. Les objections sérieuses : intensité du travail, savoir-faire non transposable, limites d'échelle, flou du mot, fragilité économique.",
  "Conclusion et opinion personnelle : dire ce que l'on retient et proposer un déplacement — juger la permaculture sur ce qu'elle apprend à l'agriculture ordinaire, plutôt que sur sa capacité à la remplacer."]}
},

/* ================= 14. la journée sans voiture ================= */

"b2-environnement::la journée sans voiture":{
 ko:"차 없는 날", updated:"2026-09-11",
 problematique:"Une journée sans voiture modifie-t-elle durablement les habitudes de déplacement, ou reste-t-elle un symbole sans lendemain ?",
 contexte:[
  "L'opération s'inscrit dans une tradition européenne : chaque année, en septembre, la Semaine européenne de la mobilité rassemble des milliers de villes et se conclut le 22 septembre par la journée « En ville, sans ma voiture ! ».",
  "Paris a organisé sa première journée sans voiture en septembre 2015, d'abord sur un périmètre limité à quelques arrondissements, puis en élargissant l'opération lors des éditions suivantes à une grande partie de la ville.",
  "Le dispositif repose sur un arrêté municipal qui fixe le périmètre, les horaires et les dérogations — véhicules de secours, transports de personnes à mobilité réduite, livraisons autorisées, riverains dans certains cas — et sur des agents postés aux carrefours pour filtrer la circulation.",
  "La journée s'accompagne généralement d'un renforcement de l'offre de transport, de voies ouvertes aux cyclistes et aux piétons, et d'animations dans des rues habituellement occupées par la circulation et le stationnement.",
  "Enjeu actuel : ces journées servent désormais de test grandeur nature, puisque les relevés de qualité de l'air et de niveau sonore effectués ce jour-là alimentent le débat sur des mesures permanentes — piétonnisation, zones à faibles émissions, réduction de la place de la voiture — que leurs opposants jugent décidées sur la foi d'un seul dimanche."],
 pour:[
  "L'opération rend visible en quelques heures ce qu'aucun rapport ne parvient à faire comprendre : le bruit tombe, on entend les conversations et les oiseaux, et les habitants découvrent physiquement l'espace que la circulation leur prenait.",
  "Les mesures de pollution et de bruit réalisées pendant la journée fournissent des données concrètes sur un périmètre précis, qui permettent ensuite de discuter d'une mesure permanente autrement qu'en opinions.",
  "Beaucoup de gens ne changent pas de mode de transport par conviction mais par expérience : une première fois à vélo ou en tramway, un trajet qui se révèle plus simple que prévu, et l'habitude peut s'installer.",
  "La rue rendue aux piétons, aux enfants et aux personnes âgées montre à quoi ressemblerait une ville conçue pour ceux qui y marchent, ce qui déplace le débat de la technique vers la question du partage de l'espace public.",
  "Le coût est faible et la mesure est réversible : une commune peut tester un périmètre, mesurer les réactions et renoncer, ce qu'aucune piétonnisation définitive ne permet."],
 contre:[
  "Une journée ne change rien à la structure des déplacements : le lundi, chacun reprend sa voiture parce que rien dans son trajet, ses horaires ou son logement n'a été modifié entre-temps.",
  "Les commerçants du périmètre signalent une baisse de fréquentation et des difficultés de livraison, en particulier ceux dont la clientèle vient de l'extérieur en voiture et qui n'ont aucune solution de remplacement ce jour-là.",
  "Les habitants des communes périphériques mal desservies ne peuvent tout simplement pas participer : l'opération sépare une ville-centre qui se félicite d'une banlieue qui n'a pas été consultée.",
  "Les dérogations sont si nombreuses — secours, taxis, professionnels, riverains, livraisons — que la circulation ne s'interrompt jamais vraiment, ce qui affaiblit la démonstration et alimente le soupçon de mise en scène.",
  "Le coût de l'opération, en agents mobilisés, en barrières et en renforcement des transports pour une seule journée, financerait des aménagements cyclables permanents dont l'effet ne s'arrêterait pas le soir venu."],
 fr_kr:{
  fr:"En France, la journée sans voiture fonctionne moins comme une fête que comme un test politique. À Paris, les relevés effectués pendant les premières éditions ont servi d'argument pour justifier des piétonnisations durables, et les opposants ont contesté aussi bien la méthode que la portée des mesures. Le débat recoupe désormais celui des zones à faibles émissions : élus de banlieue, associations d'automobilistes et organisations professionnelles reprochent aux villes-centres de décider pour des habitants qui n'y vivent pas, tandis que les municipalités répondent qu'aucune amélioration de l'air n'est possible sans réduire le trafic. La journée de septembre concentre ainsi, sur vingt-quatre heures, une controverse qui dure toute l'année.",
  kr:"서울도 9월 22일 세계 차 없는 날에 맞춰 도심 일부 구간의 차량 통행을 제한하는 행사를 오래 이어 왔고, 자치구 단위의 «차 없는 거리» 행사도 흔합니다. 다만 한국의 무게중심은 하루 행사보다 상시적인 공간 재편 쪽으로 옮겨갔습니다. 2005년 청계천 복원은 고가도로를 걷어내고 도심 한복판을 보행 공간으로 바꾼 결정이었고, 2017년 서울로7017은 폐쇄된 고가도로를 보행길로 전환했습니다. 주말마다 차량을 통제하는 보행전용거리도 제도로 자리 잡았습니다. 시험에서는 «프랑스는 하루 행사를 상시 조치의 실험대로 쓰고, 한국은 아예 도로 구조를 바꾸는 큰 사업으로 넘어갔다»는 대조를 세우면, 상징적 행동의 한계라는 논점을 자연스럽게 이어갈 수 있습니다."},
 lexique:["une journée sans voiture","un périmètre piétonnisé","un arrêté municipal","une dérogation","la circulation motorisée","le renforcement de l'offre de transport","la fréquentation des commerces","le niveau sonore","une zone à faibles émissions","une mesure symbolique"],
 expressions:[
  {fr:"Tout l'intérêt de l'opération tient à une question simple : que reste-t-il, le lundi matin, de ce que l'on a éprouvé le dimanche ?",ko:"문제 제기"},
  {fr:"Il faudrait que l'offre de transport soit renforcée toute l'année pour qu'une telle journée cesse d'être une parenthèse.",ko:"조건 (conditionnel + subjonctif)"},
  {fr:"On aurait tort d'y voir une simple opération de communication, car les relevés réalisés ce jour-là nourrissent ensuite des décisions bien réelles.",ko:"반론 (conditionnel)"},
  {fr:"Même si les commerçants craignent une baisse de fréquentation, il n'en demeure pas moins que les rues piétonnes attirent durablement les passants.",ko:"양보 후 반박"},
  {fr:"Une journée sans voiture ne vaut donc pas par elle-même, mais par ce qu'elle autorise à envisager ensuite.",ko:"균형 결론"}],
 ressources:[
  {type:"officiel",titre:"ecologie.gouv.fr — Semaine européenne de la mobilité et mobilités actives",url:"https://www.ecologie.gouv.fr/"},
  {type:"officiel",titre:"paris.fr — journée sans voiture et piétonnisation des rues parisiennes",url:"https://www.paris.fr/"},
  {type:"vidéo",titre:"YouTube 검색어: « journée sans voiture Paris qualité de l'air piétonnisation »",url:"https://www.youtube.com/results?search_query=journ%C3%A9e+sans+voiture+Paris+qualit%C3%A9+de+l%27air+pi%C3%A9tonnisation"}],
 plan:{type:"Lettre formelle",steps:[
  "En-tête : vos coordonnées, celles de Madame la Maire ou de Monsieur le Maire, le lieu, la date et un objet précis (« Objet : demande d'extension de la journée sans voiture au quartier de… »).",
  "Introduction : se présenter comme habitant du quartier, rappeler l'édition de septembre et annoncer clairement la demande en une phrase.",
  "Corps I : les effets constatés lors de la dernière édition — baisse du bruit, sécurité des enfants, fréquentation des commerces de proximité — avec un exemple vécu, précis et daté.",
  "Corps II : anticiper les objections de la mairie — coût, livraisons, riverains, dérogations — et proposer des solutions concrètes (créneaux de livraison le matin, itinéraire de contournement, information des commerçants un mois à l'avance).",
  "Conclusion : demander un rendez-vous ou une réponse écrite, puis formule de politesse complète (« Je vous prie d'agréer, Madame la Maire, l'expression de ma considération distinguée. »)."]}
},

/* ================= 15. le biomimétisme ================= */

"b2-environnement::le biomimétisme":{
 ko:"생체모방 (자연을 본뜬 기술)", updated:"2026-09-11",
 problematique:"S'inspirer du vivant permet-il vraiment de concevoir autrement, ou sert-il surtout d'argument de communication à des produits ordinaires ?",
 contexte:[
  "Le biomimétisme désigne la démarche qui consiste à s'inspirer des formes, des matériaux, des procédés ou des organisations du vivant pour concevoir un objet, un bâtiment ou un système : il ne s'agit pas d'utiliser la nature comme ressource, mais de l'étudier comme modèle.",
  "Les exemples devenus classiques sont parlants : le velcro, né de l'observation des fruits de bardane accrochés au poil d'un chien, les surfaces striées inspirées de la peau de requin qui réduisent la traînée et gênent l'installation des bactéries, la ventilation passive de bâtiments conçue d'après les termitières, ou encore le bec du martin-pêcheur qui a servi de modèle au nez d'un train à grande vitesse japonais.",
  "La démarche a été popularisée dans les années 1990 par la biologiste américaine Janine Benyus ; en France, un centre dédié installé à Senlis, le Ceebios, met en relation laboratoires, entreprises, collectivités et écoles de design autour de cette approche.",
  "Ce qui intéresse les ingénieurs n'est pas l'esthétique mais l'économie de moyens : le vivant fabrique des structures très résistantes à température ambiante, sans solvant toxique, à partir d'un petit nombre d'éléments abondants, et ces matériaux sont ensuite décomposés par l'écosystème lui-même.",
  "Enjeu actuel : le biomimétisme est présenté comme un levier de la transition écologique, mais un produit bio-inspiré n'est pas automatiquement sobre — tout dépend des matériaux employés, de l'énergie consommée et de l'usage — et le soupçon d'écoblanchiment accompagne désormais chaque annonce."],
 pour:[
  "Le vivant construit des matériaux très performants sans four ni haute pression : s'en inspirer ouvre une piste sérieuse pour concevoir des procédés industriels moins gourmands en énergie.",
  "La soie d'araignée, la nacre des coquillages ou la structure de certains os montrent qu'il est possible d'obtenir de la résistance par l'organisation de la matière plutôt que par la quantité de matière employée.",
  "Appliqué au bâtiment, le modèle donne des résultats immédiats : ventilation naturelle, ombrage, circulation de l'air et éclairage repensés d'après des organismes vivants réduisent la consommation d'énergie sans technologie coûteuse.",
  "Le biomimétisme donne un argument économique à la protection de la biodiversité : chaque espèce disparue est aussi une solution technique perdue avant même d'avoir été étudiée.",
  "C'est enfin une porte d'entrée pédagogique remarquable : un élève qui comprend pourquoi une feuille de lotus reste propre retient à la fois de la biologie, de la physique et une démarche de conception."],
 contre:[
  "Copier une forme n'est pas copier une fonction : dans l'organisme, une structure fonctionne au sein d'un ensemble vivant qui l'entretient et la répare, et isolée de ce contexte, elle déçoit souvent.",
  "Le chemin entre le prototype de laboratoire et le produit industriel est long et coûteux ; beaucoup d'annonces spectaculaires ne débouchent sur aucune fabrication, faute de procédé reproductible à grande échelle.",
  "Le mot est devenu un argument de vente : qualifier un produit de bio-inspiré ne change rien à son empreinte s'il est fabriqué en plastique vierge et transporté d'un continent à l'autre.",
  "Certaines applications reposent sur des nanostructures ou des traitements chimiques dont le devenir dans l'environnement est mal connu : l'inspiration est naturelle, la fabrication ne l'est pas nécessairement.",
  "Considérer le vivant comme un catalogue de solutions brevetables déplace le problème : valoriser une espèce pour son intérêt technique ne la protège pas, et pose en outre la question du partage des bénéfices avec les pays où elle vit."],
 fr_kr:{
  fr:"En France, le biomimétisme s'est structuré autour d'un petit nombre d'acteurs — un centre de référence, des laboratoires publics, des écoles d'ingénieurs et de design — et bénéficie d'un discours institutionnel favorable. Ses partisans y voient le moyen de réconcilier innovation industrielle et protection du vivant, en montrant que la biodiversité a une valeur qui ne se réduit pas à l'émotion. Les chercheurs les plus prudents rappellent de leur côté que la nature n'est pas un livre de leçons, qu'elle ne produit pas de solutions optimales mais des solutions suffisantes, et qu'un objet bio-inspiré reste soumis aux contraintes industrielles ordinaires. Le débat français oppose donc moins des camps que deux rythmes : celui de la communication et celui de la recherche.",
  kr:"한국에서는 이 분야를 주로 «자연모사기술»이라는 이름으로 부르며, 소재·표면 공학이나 로봇 연구 안에서 다루는 경우가 많습니다. 도마뱀붙이의 발바닥을 본뜬 접착 표면, 연잎을 본뜬 초발수 코팅처럼 실험실 성과가 언론에 자주 소개되지만, 프랑스처럼 «생물다양성 보전»이라는 환경 담론과 곧바로 연결되는 일은 드뭅니다. 제도적으로는 한국도 나고야 의정서에 따라 생물 유전자원의 이용과 이익 공유를 관리하는 법을 두고 있어, 생물 자원을 연구에 쓰는 절차 자체는 정비되어 있습니다. 시험에서는 «프랑스는 생체모방을 생태 전환의 담론 안에 놓고, 한국은 첨단 소재 기술의 하위 분야로 놓는다»는 대조가 유용합니다."},
 lexique:["le biomimétisme","une solution bio-inspirée","le vivant","une structure","un matériau","la recherche et développement","un prototype","une application industrielle","la conservation de la biodiversité","l'écoblanchiment"],
 expressions:[
  {fr:"Avant de célébrer le biomimétisme, il convient de distinguer ce qui relève de la recherche de ce qui relève de l'argument publicitaire.",ko:"문제 제기 (재정의형)"},
  {fr:"Il faudrait que les entreprises rendent publics les matériaux employés pour que le label bio-inspiré ait un sens.",ko:"조건 (conditionnel + subjonctif)"},
  {fr:"On ne saurait affirmer qu'un produit soit écologique au seul motif qu'il imite une forme naturelle.",ko:"반론 (conditionnel + subjonctif)"},
  {fr:"Bien que peu d'applications aient atteint le stade industriel, la démarche a déjà transformé la manière dont les ingénieurs formulent leurs problèmes.",ko:"양보 후 반박 (subjonctif)"},
  {fr:"Le biomimétisme vaut donc moins par ses réussites spectaculaires que par la question qu'il impose : à quel coût énergétique fabriquons-nous ce que le vivant obtient sans chaleur ?",ko:"균형 결론"}],
 ressources:[
  {type:"officiel",titre:"cnrs.fr — recherches sur les matériaux bio-inspirés et la biologie structurale",url:"https://www.cnrs.fr/"},
  {type:"officiel",titre:"ademe.fr — innovation, éco-conception et transition écologique",url:"https://www.ademe.fr/"},
  {type:"vidéo",titre:"YouTube 검색어: « biomimétisme matériaux bio-inspirés velcro peau de requin »",url:"https://www.youtube.com/results?search_query=biomim%C3%A9tisme+mat%C3%A9riaux+bio-inspir%C3%A9s+velcro+peau+de+requin"}],
 plan:{type:"Exposé (구술)",steps:[
  "Introduction : présenter le document, définir le biomimétisme par un exemple connu (le velcro, la termitière), annoncer le problème → démarche de conception ou argument de communication ?",
  "I. Ce que la démarche apporte : économie de moyens, matériaux performants, bâtiments sobres, valeur donnée à la biodiversité, intérêt pédagogique.",
  "II. Les limites et les dérives : forme sans fonction, coût et lenteur de la recherche, récupération publicitaire, matériaux discutables, brevetabilité du vivant.",
  "Conclusion et opinion personnelle : proposer un critère de jugement — évaluer un produit bio-inspiré sur son bilan réel, non sur l'image de l'animal ou de la plante dont il se réclame."]}
},

/* ================= 16. la pollution dans les jardins publics ================= */

"b2-environnement::la pollution dans les jardins publics":{
 ko:"공원의 쓰레기 문제", updated:"2026-09-11",
 problematique:"Pour garder les jardins publics propres, faut-il sanctionner davantage les usagers, ou revoir les moyens et l'aménagement de ces espaces ?",
 contexte:[
  "Les jardins publics sont devenus l'équipement le plus fréquenté des villes : gratuits, ouverts à tous et sans condition, ils concentrent les pique-niques, le sport, les jeux d'enfants, les promenades de chiens et les soirées d'été, et leur fréquentation a nettement augmenté depuis les confinements.",
  "Les déchets qu'on y trouve ont un profil particulier : emballages et restes de repas emportés, bouteilles et canettes, et surtout mégots, dont le filtre contient du plastique et des substances chimiques qui passent dans l'eau de pluie puis dans les réseaux.",
  "La loi anti-gaspillage de 2020 a créé une filière à responsabilité élargie du producteur pour les mégots : les fabricants de tabac financent, par l'intermédiaire d'un éco-organisme, une partie du nettoyage, l'installation de cendriers et les campagnes de sensibilisation des communes.",
  "Pour les déjections canines, les mairies combinent depuis longtemps distributeurs de sachets, panneaux et amende ; mais la verbalisation suppose de prendre la personne sur le fait, ce qui la rend rare et facilement perçue comme arbitraire.",
  "Enjeu actuel : après un week-end ensoleillé ou une manifestation en plein air, ce sont les agents municipaux qui ramassent au petit matin ce que la soirée a laissé, et la question devient celle du partage entre la responsabilité de chacun et le coût que la collectivité accepte d'assumer."],
 pour:[
  "Une règle sans sanction n'est qu'une recommandation : l'interdiction de fumer dans les lieux fermés n'a changé les comportements que le jour où elle est devenue verbalisable, et rien n'indique qu'il en irait autrement ici.",
  "Le nettoyage est payé par l'ensemble des contribuables, y compris par ceux qui remportent leurs déchets : appliquer le principe pollueur-payeur aux personnes, et non seulement aux entreprises, relève de la simple équité.",
  "Un mégot jeté au sol pollue une quantité d'eau considérable et met des années à se dégrader : la tolérance dont bénéficie ce geste est sans rapport avec la gravité réelle de la pollution qu'il provoque.",
  "Les déjections non ramassées posent un problème d'hygiène et d'usage, en particulier sur les pelouses où jouent les enfants : le propriétaire d'un chien prive alors les autres d'un espace qu'ils financent également.",
  "La propreté s'entretient d'elle-même : un lieu net reste net, tandis qu'un premier sac abandonné en appelle dix autres — la fermeté du début épargne des dépenses considérables ensuite."],
 contre:[
  "La surveillance est matériellement impossible : aucun agent ne peut se tenir derrière chaque banc, si bien que l'amende frappe quelques personnes prises au hasard sans rien changer au comportement général.",
  "Le facteur décisif est l'équipement : des poubelles trop rares, débordantes le dimanche soir, sans cendrier à l'entrée ni point de tri — on ne peut pas exiger un geste que le lieu rend compliqué.",
  "Après un concert ou une fête en plein air, le problème n'est pas individuel mais organisationnel : bacs, personnel et tri doivent figurer dans les obligations de l'organisateur, faute de quoi la ville paiera à sa place.",
  "Sanctionner sans expliquer produit surtout du ressentiment ; les campagnes de sensibilisation, les interventions dans les écoles et les journées de ramassage organisées par des associations modifient les pratiques plus durablement qu'une contravention.",
  "Les communes ont réduit leurs effectifs d'entretien alors que la fréquentation augmentait : le manque d'agents, lié aussi à la pénibilité et au faible prestige de ce métier, explique une part du problème que nulle amende ne corrigera."],
 fr_kr:{
  fr:"En France, la discussion mêle trois registres qui s'entremêlent rarement ailleurs : le civisme, les moyens des communes et la responsabilité des producteurs. Depuis la création de la filière des mégots, la mairie n'est plus seule à payer le ramassage, ce qui a modifié la manière dont les élus posent le problème. Parallèlement, les villes multiplient les cendriers de rue, les corbeilles à double compartiment et les journées de ramassage citoyen, où des habitants nettoient eux-mêmes un parc un samedi matin. Ces initiatives sont efficaces mais soulèvent une objection récurrente : faire ramasser gratuitement par des bénévoles ce que des agents devraient être payés pour faire revient parfois à masquer un manque de moyens.",
  kr:"한국은 아예 다른 방향을 택했습니다. 1995년 쓰레기 종량제가 시행된 뒤 가정 쓰레기를 거리 쓰레기통에 몰래 버리는 일을 막기 위해 공공 쓰레기통을 대폭 줄였고, «쓰레기는 되가져가기»가 공원의 기본 원칙이 되었습니다. 그 결과 쓰레기통을 찾지 못한 사람들이 남기고 가는 문제가 새로 생겼고, 특히 배달 음식이 늘면서 한강공원의 포장 용기 쓰레기가 계속 논란이 되어 서울시가 쓰레기통과 수거 인력을 다시 늘렸습니다. 반려견 배설물을 치우지 않으면 과태료가 부과되지만 단속이 어렵다는 점은 프랑스와 같습니다. 시험에서는 «프랑스는 쓰레기통과 담배꽁초 수거 비용을 생산자와 시청이 나눠 지고, 한국은 쓰레기통을 없애 개인에게 되돌려주는 방식을 택했다»는 대조를 쓰면, 두 나라가 같은 문제에 정반대로 대응했다는 점을 보여 줄 수 있습니다."},
 lexique:["un jardin public","un espace vert","un mégot","une déjection canine","une corbeille de rue","un dépôt sauvage","le ramassage des déchets","un agent d'entretien","une amende forfaitaire","le civisme"],
 expressions:[
  {fr:"Le désordre d'un parc en dit moins sur ses usagers que sur la manière dont la ville l'a équipé.",ko:"문제 제기 (재정의형)"},
  {fr:"Il faudrait que chaque entrée de parc soit pourvue d'un cendrier pour que l'on puisse reprocher aux fumeurs leur négligence.",ko:"조건 (conditionnel + subjonctif)"},
  {fr:"On aurait tort de réduire cette question à un manque de civisme, car les moyens d'entretien ont diminué à mesure que la fréquentation augmentait.",ko:"반론 (conditionnel)"},
  {fr:"Bien que la verbalisation reste rare, il n'en demeure pas moins qu'une sanction visible produit un effet dissuasif immédiat.",ko:"양보 후 반박 (subjonctif)"},
  {fr:"La propreté d'un jardin public n'est donc ni une affaire de morale ni une affaire de budget : elle est le résultat d'un accord entre les deux.",ko:"균형 결론"}],
 ressources:[
  {type:"officiel",titre:"service-public.fr — dépôts sauvages, déjections canines et sanctions applicables",url:"https://www.service-public.fr/"},
  {type:"officiel",titre:"ademe.fr — déchets abandonnés, mégots et propreté urbaine",url:"https://www.ademe.fr/"},
  {type:"vidéo",titre:"YouTube 검색어: « propreté parcs mégots déchets abandonnés incivilités ville »",url:"https://www.youtube.com/results?search_query=propret%C3%A9+parcs+m%C3%A9gots+d%C3%A9chets+abandonn%C3%A9s+incivilit%C3%A9s+ville"}],
 plan:{type:"Essai argumenté (찬반형)",steps:[
  "Introduction : décrire un parc au petit matin, après un beau week-end → problématique : sanctionner les usagers ou donner des moyens au lieu ?",
  "I. Les arguments en faveur de la sanction : efficacité dissuasive, équité devant le coût, gravité réelle du mégot, hygiène, effet d'entraînement de la propreté.",
  "II. Les limites de cette approche : surveillance impossible, équipement insuffisant, responsabilité des organisateurs d'événements, efficacité supérieure de la sensibilisation, effectifs d'entretien réduits.",
  "Conclusion : articuler les deux — un dispositif crédible suppose d'abord des poubelles et des cendriers en nombre suffisant, et ensuite seulement une sanction que personne ne pourra juger injuste."]}
}

});

/* ================= 주제 일반 어휘 — L'environnement (B2 100) ================= */
/* 형식: [프랑스어, 한국어, 예문]
   배치: 기후 → 오염 → 자원과 물 → 생물다양성 → 폐기물 → 에너지 → 이동 →
         정책과 행위자 → 태도와 행동 → 동사·형용사 */

window.VOCAB = window.VOCAB || {};
window.VOCAB.environnement = window.VOCAB.environnement || {};
window.VOCAB.environnement.B2 = [

/* --- 기후 --- */
["le changement climatique","기후 변화","Le changement climatique n'est plus une prévision lointaine : il se mesure chaque été dans les relevés de température."],
["le réchauffement climatique","지구 온난화","Le réchauffement climatique modifie déjà le calendrier des vendanges, et plusieurs régions françaises récoltent désormais leur raisin avec plusieurs semaines d'avance."],
["les gaz à effet de serre","온실가스","Réduire les gaz à effet de serre suppose d'agir à la fois sur les transports, le bâtiment et l'agriculture."],
["les émissions de CO2","이산화탄소 배출","Les émissions de CO2 du secteur aérien restent difficiles à réduire faute de solution technique disponible."],
["l'empreinte carbone","탄소 발자국","Calculer son empreinte carbone permet de comprendre que le logement pèse souvent plus lourd que les trajets."],
["la neutralité carbone","탄소 중립","La neutralité carbone suppose de compenser les émissions restantes, ce qui reste un exercice délicat."],
["la hausse des températures","기온 상승","La hausse des températures rend les nuits d'été difficilement supportables dans les logements mal isolés."],
["la fonte des glaciers","빙하 해빙","La fonte des glaciers alpins inquiète les communes qui dépendent de l'eau de fonte en été."],
["la montée du niveau de la mer","해수면 상승","La montée du niveau de la mer oblige certaines communes littorales à envisager le recul de leurs habitations."],
["une canicule","폭염","Pendant une canicule, les villes densément bâties restent plusieurs degrés plus chaudes que la campagne voisine."],
["la sécheresse","가뭄","La sécheresse a conduit plusieurs départements à interdire l'arrosage des jardins et le lavage des voitures pendant tout l'été."],
["une inondation","홍수","Les inondations se répètent là où l'on a construit sur des sols devenus imperméables, incapables d'absorber les fortes pluies."],

/* --- 오염 --- */
["la pollution de l'air","대기 오염","La pollution de l'air est responsable de troubles respiratoires qui touchent d'abord les enfants et les personnes âgées."],
["la qualité de l'air","대기질","La qualité de l'air s'améliore lentement dans les grandes villes, mais les seuils restent souvent dépassés."],
["les particules fines","미세먼지","Les particules fines pénètrent profondément dans les poumons et proviennent aussi bien du trafic que du chauffage au bois."],
["un pic de pollution","오염 경보(최고치)","En cas de pic de pollution, la préfecture peut abaisser la vitesse autorisée et rendre les transports moins chers."],
["la pollution sonore","소음 공해","La pollution sonore est devenue la première nuisance signalée par les habitants des quartiers centraux."],
["la pollution lumineuse","빛 공해","La pollution lumineuse perturbe les insectes nocturnes et les oiseaux migrateurs, tout en privant les habitants des villes d'un ciel étoilé."],
["la pollution des sols","토양 오염","La pollution des sols complique la reconversion des anciennes friches industrielles, car la dépollution coûte souvent plus cher que la construction."],
["un polluant","오염 물질","Certains polluants restent présents dans l'environnement des dizaines d'années après leur interdiction, et on les retrouve encore dans les sols agricoles."],
["les pesticides","농약","L'usage des pesticides fait l'objet d'un débat permanent entre les agriculteurs, les riverains des parcelles traitées et les associations de protection de la nature."],
["la pollution plastique","플라스틱 오염","La pollution plastique ne se limite pas aux océans : on en retrouve jusque dans les sols agricoles."],
["un microplastique","미세 플라스틱","Les microplastiques proviennent en partie de l'usure des pneus et du lavage des textiles synthétiques."],

/* --- 자원과 물 --- */
["les ressources naturelles","천연자원","L'exploitation des ressources naturelles progresse plus vite que la capacité des écosystèmes à se régénérer."],
["l'eau potable","식수","Garantir l'eau potable à tous suppose d'entretenir des réseaux dont une partie date d'un siècle."],
["la nappe phréatique","지하수층","Les nappes phréatiques ne se rechargent qu'en hiver, ce qui rend les pluies d'été peu utiles."],
["le gaspillage de l'eau","물 낭비","Le gaspillage de l'eau vient autant des fuites du réseau public que des usages domestiques, ce que l'on oublie souvent de rappeler."],
["les restrictions d'eau","물 사용 제한","Les restrictions d'eau interdisent le remplissage des piscines et le lavage des voitures dès que le niveau des nappes devient préoccupant."],
["l'épuisement des ressources","자원 고갈","L'épuisement des ressources rend certains métaux indispensables à l'électronique de plus en plus coûteux, et leur extraction de plus en plus contestée."],
["une matière première","원자재","Le prix des matières premières influence directement la rentabilité des filières de recyclage, puisque la matière recyclée concurrence la matière vierge."],
["la surexploitation","남획, 과도한 이용","La surexploitation des stocks de poissons met en péril des communautés entières de pêcheurs, qui voient leurs prises diminuer d'année en année."],

/* --- 생물다양성 --- */
["la biodiversité","생물 다양성","La biodiversité recule d'abord par destruction des habitats naturels, bien avant que le changement climatique ne produise ses propres effets."],
["un écosystème","생태계","Un écosystème forestier met des décennies à se reconstituer après une coupe importante, et certaines espèces n'y reviennent jamais."],
["une espèce menacée","멸종 위기종","Protéger une espèce menacée suppose d'abord de préserver le milieu dans lequel elle vit, car aucun animal ne survit hors de son habitat."],
["l'extinction des espèces","종의 멸종","L'extinction des espèces s'accélère à un rythme sans équivalent dans l'histoire récente, et elle touche désormais des insectes autrefois très communs."],
["un habitat naturel","자연 서식지","La destruction des habitats naturels progresse au rythme de l'urbanisation, des infrastructures de transport et de l'extension des surfaces cultivées."],
["la déforestation","삼림 벌채","La déforestation importée désigne les produits consommés ici mais cultivés sur des forêts abattues ailleurs."],
["un espace naturel protégé","자연 보호 구역","Un espace naturel protégé limite strictement la construction et encadre la fréquentation du public, parfois jusqu'à fermer certains sentiers au printemps."],
["les pollinisateurs","수분 매개 곤충","La disparition des pollinisateurs menace directement la production de fruits et de légumes, que nul dispositif technique ne saurait remplacer."],
["l'artificialisation des sols","토지의 인공화(개발)","L'artificialisation des sols consomme chaque année des surfaces agricoles considérables, que les zones commerciales et les lotissements rendent définitivement imperméables."],
["l'étalement urbain","도시 확산","L'étalement urbain allonge les trajets quotidiens, rend la voiture indispensable et coûte cher aux communes obligées d'étendre leurs réseaux."],
["un espace vert","녹지","Les espaces verts rafraîchissent les quartiers denses et deviennent essentiels pendant les épisodes de chaleur, surtout pour les personnes âgées."],

/* --- 폐기물 --- */
["les déchets ménagers","생활 폐기물","La quantité de déchets ménagers produite par habitant stagne depuis des années, malgré les campagnes de prévention menées par les collectivités."],
["le tri sélectif","분리 배출","Le tri sélectif ne suffit pas si les emballages collectés n'ont aucun débouché industriel et repartent finalement vers l'incinération."],
["le recyclage","재활용","Le recyclage du verre fonctionne bien parce que la matière ne perd pas ses qualités."],
["une déchetterie","폐기물 수거장","Les habitants doivent déposer en déchetterie les encombrants, les gravats et les produits dangereux que la collecte ordinaire n'accepte pas."],
["un emballage","포장재","Un emballage composé de plusieurs matières collées est presque impossible à recycler, car le centre de tri ne parvient pas à les séparer."],
["le suremballage","과대 포장","Le suremballage des produits alimentaires reste l'un des reproches les plus fréquents adressés aux industriels."],
["le compostage","퇴비화","Le compostage des biodéchets permet de retirer de la poubelle la part la plus lourde."],
["le gaspillage alimentaire","음식물 낭비","Le gaspillage alimentaire se produit à tous les niveaux de la chaîne, du champ cultivé jusqu'au réfrigérateur des particuliers."],
["une décharge","매립지","Les décharges arrivent à saturation et les communes peinent à trouver de nouveaux terrains, que personne n'accepte de voir s'installer près de chez soi."],
["l'incinération","소각","L'incinération produit de la chaleur que l'on peut récupérer pour chauffer des logements, mais elle ferme définitivement la boucle des matières."],
["le zéro déchet","제로 웨이스트","La démarche zéro déchet consiste d'abord à refuser ce dont on n'a pas besoin, avant même de penser à trier ou à recycler."],
["la consigne","보증금 반환(용기)","Le retour de la consigne pour les bouteilles en verre est discuté dans plusieurs régions."],

/* --- 에너지 --- */
["les énergies renouvelables","재생 에너지","Le développement des énergies renouvelables se heurte moins à des obstacles techniques qu'à l'acceptation des projets par les habitants concernés."],
["l'énergie solaire","태양 에너지","L'énergie solaire devient rentable même sous des latitudes longtemps jugées peu favorables, ce qui explique la multiplication des installations sur les toits."],
["l'énergie éolienne","풍력 에너지","L'énergie éolienne divise les habitants entre ceux qui invoquent l'urgence climatique et ceux qui dénoncent la transformation du paysage."],
["une éolienne","풍력 발전기","L'implantation d'une éolienne fait l'objet d'une enquête publique au cours de laquelle les riverains peuvent formuler leurs observations."],
["un panneau solaire","태양광 패널","Installer des panneaux solaires sur les toits et les parkings évite de consommer des terres agricoles déjà rares autour des villes."],
["les énergies fossiles","화석 연료","Sortir des énergies fossiles suppose de transformer simultanément l'industrie, le chauffage des logements et les transports, ce qui demande des décennies."],
["le nucléaire","원자력","Le nucléaire fournit l'essentiel de l'électricité française, ce qui rend le débat sur son avenir particulièrement vif à chaque élection."],
["la sobriété énergétique","에너지 절제","La sobriété énergétique consiste à consommer moins, et non seulement à consommer autrement, ce qui la distingue de la simple efficacité technique."],
["la rénovation énergétique","에너지 효율 개보수","La rénovation énergétique des logements réduit la facture des ménages autant que les émissions, mais son coût initial décourage beaucoup de propriétaires."],
["une passoire thermique","단열이 안 되는 주택","Une passoire thermique coûte cher à chauffer et devient invivable pendant les vagues de chaleur."],
["la consommation d'énergie","에너지 소비","La consommation d'énergie du numérique augmente à mesure que les usages se multiplient, alors qu'on la croyait longtemps immatérielle."],

/* --- 이동 --- */
["les transports en commun","대중교통","Sans transports en commun fiables, demander aux habitants de renoncer à la voiture reste illusoire."],
["la mobilité douce","친환경 이동","La mobilité douce regroupe la marche, le vélo et tous les déplacements sans moteur thermique."],
["une piste cyclable","자전거 도로","Une piste cyclable séparée de la circulation rassure les cyclistes les plus hésitants, et c'est souvent elle qui fait basculer les habitudes."],
["le covoiturage","카풀","Le covoiturage domicile-travail progresse surtout là où les employeurs le facilitent concrètement, en réservant par exemple des places de stationnement."],
["une voiture électrique","전기차","La voiture électrique déplace la pollution vers la fabrication des batteries et la production d'électricité."],
["une zone à faibles émissions","저배출 구역","Une zone à faibles émissions interdit progressivement les véhicules les plus anciens dans le centre-ville."],
["un embouteillage","교통 체증","Les embouteillages quotidiens coûtent un temps considérable aux habitants et aggravent la pollution locale, puisqu'un moteur à l'arrêt continue de consommer."],
["la marche à pied","도보","La marche à pied reste le mode de déplacement le plus courant pour les trajets de moins d'un kilomètre."],

/* --- 정책과 행위자 --- */
["la transition écologique","생태 전환","La transition écologique n'aboutira pas si son coût pèse surtout sur les ménages modestes, qui n'ont pas les moyens de changer d'équipement."],
["le développement durable","지속 가능한 발전","Le développement durable articule trois exigences indissociables : la protection de l'environnement, la viabilité économique et la justice sociale."],
["une politique environnementale","환경 정책","Une politique environnementale crédible se juge aux moyens qu'elle mobilise et aux résultats qu'elle obtient, non aux déclarations qui l'accompagnent."],
["une réglementation","규제","La réglementation européenne impose désormais des obligations précises aux fabricants d'emballages, de la conception du produit jusqu'à son traitement final."],
["une taxe environnementale","환경세","Une taxe environnementale mal expliquée est vite perçue comme une punition injuste, surtout par ceux qui n'ont aucune solution de remplacement."],
["une amende","벌금, 과태료","Une amende dissuade davantage lorsqu'elle est visible et régulièrement appliquée que lorsqu'elle est lourde mais presque jamais prononcée."],
["une association écologiste","환경 단체","Les associations écologistes jouent un rôle d'alerte que les pouvoirs publics finissent souvent par reprendre."],
["un militant écologiste","환경 운동가","Les militants écologistes débattent entre eux des limites acceptables de l'action directe, et cette question divise profondément le mouvement."],
["une collectivité locale","지방자치단체","Les collectivités locales décident de l'essentiel en matière d'environnement : les transports, la collecte des déchets et les règles d'urbanisme."],
["une campagne de sensibilisation","인식 개선 캠페인","Une campagne de sensibilisation ne produit d'effet que si le geste demandé est matériellement possible."],
["le principe pollueur-payeur","오염자 부담 원칙","Le principe pollueur-payeur fait supporter le coût du traitement à celui qui met le produit sur le marché."],
["l'écoblanchiment","위장 환경주의","L'écoblanchiment consiste à afficher un engagement écologique dans sa communication sans modifier en rien ses pratiques industrielles réelles."],
["un label écologique","친환경 인증","Un label écologique n'a de valeur que si un organisme indépendant contrôle son attribution et peut le retirer en cas de manquement."],

/* --- 태도와 행동 --- */
["un geste écologique","친환경 실천","Un geste écologique isolé compte peu, mais il installe une habitude qui en appelle d'autres."],
["la consommation responsable","책임 있는 소비","La consommation responsable suppose d'avoir le temps et les moyens de comparer, ce que tout le monde n'a pas."],
["l'éco-anxiété","기후 불안","L'éco-anxiété touche particulièrement les jeunes, qui se sentent responsables de l'avenir sans disposer du moindre levier d'action réel."],
["la prise de conscience","자각, 인식","La prise de conscience est réelle, mais elle ne se traduit pas toujours en changement de comportement."],
["le civisme","시민 의식","Le civisme s'entretient par l'exemple et par la propreté des lieux, bien plus que par la peur de la sanction."],
["l'éducation à l'environnement","환경 교육","L'éducation à l'environnement donne des résultats durables lorsqu'elle passe par des projets concrets plutôt que par de simples affiches dans les couloirs."],
["le bénévolat","자원봉사","Le bénévolat permet d'organiser des ramassages, mais il ne remplace pas un service d'entretien financé."],

/* --- 동사와 형용사 --- */
["préserver l'environnement","환경을 보전하다","Préserver l'environnement coûte presque toujours moins cher que réparer les dégâts une fois qu'ils sont constatés, mais la dépense se voit davantage."],
["réduire ses déchets","쓰레기를 줄이다","Réduire ses déchets à la source est plus efficace que d'améliorer le tri, car le meilleur déchet reste celui que l'on n'a pas produit."],
["gaspiller","낭비하다","Nous gaspillons une part considérable de l'eau et de la nourriture que nous produisons, alors même que ces ressources deviennent plus rares."],
["économiser l'énergie","에너지를 절약하다","Économiser l'énergie passe d'abord par l'isolation du logement, et seulement ensuite par les gestes quotidiens que l'on recommande si volontiers."],
["respectueux de l'environnement","환경친화적인","Un produit présenté comme respectueux de l'environnement devrait pouvoir le prouver par des données vérifiables."],
["jetable","일회용의","Les produits jetables ont été conçus pour la commodité, à une époque où le déchet ne comptait pas."],
["biodégradable","생분해성의","Un emballage biodégradable ne se décompose souvent que dans des conditions industrielles précises, que le compost d'un jardin ne reproduit jamais."]

];
