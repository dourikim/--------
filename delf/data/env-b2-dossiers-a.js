/* env-b2-dossiers-a.js — « L'environnement » 소주제 자료집 1/3 (DELF B2, 6개)
   구조: ①problématique + 최근 흐름 ②POUR/CONTRE ③프랑스 vs 한국 ④전문 어휘 ⑤표현 ⑥자료 ⑦작문·구술 플랜

   ※ 중복 회피 메모 (동시에 작성 중인 다른 파일과의 경계)
     · « le réchauffement climatique » (B2) = 일상에서 체감하는 변화와 개인·지역·학교의 실천 층위.
       c1-environnement « le changement climatique » 가 다룰 기후 정책·국제 협상·justice climatique·
       과학 커뮤니케이션 담론은 이 파일에 넣지 않는다.
     · « les énergies propres » (B2) = 가정용 태양광 패널과 풍력 발전기의 실제 설치·비용·민원·주민 수용 층위.
       c1 « les énergies renouvelables » / « la transition énergétique » 의 에너지 믹스·원자력 논쟁·정책 담론은 제외.
     · « le lundi sans viande » = 주 1회라는 «제도적 장치»의 운영(급식·구내식당·메뉴 방식·조리 인력·참여율)만.
       비건 윤리·영양학 담론은 b2-alimentation::le véganisme / les plats végétariens à l'école 쪽에 둔다.
     · « la dépendance à la voiture » = 구조적 의존(도시 계획·교외 거주·교통 사각지대·통근 거리·주차·비용).
       같은 주제의 « la journée sans voiture »(하루 행사 층위)와는 분리한다.
*/
Object.assign(window.DOSSIERS, {

/* ================= DELF B2 — L'environnement (1/3) ================= */

"b2-environnement::le réchauffement climatique":{
 ko:"지구 온난화 (일상에서 체감하는 변화와 실천)", updated:"2026-09-11",
 problematique:"Face à un réchauffement que chacun constate désormais dans sa propre vie, les gestes individuels et les initiatives locales gardent-ils un sens, ou ne servent-ils qu'à donner bonne conscience ?",
 contexte:[
  "Le réchauffement a cessé d'être une projection pour devenir une expérience ordinaire : épisodes de canicule plus fréquents et plus longs en été, hivers sans neige dans les stations de moyenne montagne, vendanges avancées de plusieurs semaines, arrêtés préfectoraux de restriction d'eau devenus habituels dans une grande partie du pays.",
  "L'école a été rattrapée la première : des établissements ont dû fermer ou aménager leurs horaires lors de fortes chaleurs, et la question des bâtiments — préfabriqués surchauffés, cours entièrement bitumées, salles sans ventilation — est passée du détail technique au sujet de conseil municipal.",
  "Météo-France diffuse une vigilance canicule par département, et les communes ont mis en place des mesures très concrètes : registre des personnes âgées isolées, ouverture de salles climatisées, points d'eau, parcs ouverts plus tard le soir dans certaines grandes villes.",
  "Du côté des jeunes, un éco-délégué est élu dans chaque classe de collège et de lycée depuis 2019 : concrètement, il porte des projets de tri, d'économies d'énergie ou de végétalisation dans son établissement, ce qui institutionnalise l'action des élèves au lieu de la laisser à la seule mobilisation.",
  "Enjeu actuel : plus personne ne discute la réalité du phénomène, mais la question s'est déplacée vers l'échelle de l'action — trier, éteindre, moins prendre l'avion pèse-t-il quelque chose à côté des décisions industrielles et urbaines, et comment demander un effort quotidien sans nourrir le découragement d'une génération qui s'y déclare déjà anxieuse ?"],
 pour:[
  "Les gestes du quotidien ne valent pas par leur bilan comptable mais par leur effet d'entraînement : une famille qui installe un composteur, réduit le chauffage d'un degré et abandonne un trajet en voiture rend l'effort visible et discutable autour d'elle.",
  "Agir permet de tenir : l'éco-anxiété se nourrit du sentiment d'impuissance, et de nombreux adolescents décrivent l'action collective — jardin du collège, réparation, ramassage — comme ce qui rend la nouvelle supportable.",
  "L'échelle locale produit des résultats mesurables et rapides : une cour d'école débitumée et plantée fait baisser la température ressentie de plusieurs degrés dès l'été suivant, ce qu'aucun accord lointain ne peut promettre.",
  "Un citoyen qui a cherché à réduire sa propre consommation comprend beaucoup mieux les décisions collectives, et devient un électeur plus exigeant plutôt qu'un consommateur culpabilisé.",
  "Les adaptations ne coûtent pas toutes cher : volets fermés en journée, ventilation la nuit, points d'eau, horaires décalés, veille sur les personnes isolées — ces mesures simples sauvent réellement des vies pendant une canicule."],
 contre:[
  "Faire porter l'effort au particulier revient à déplacer la responsabilité : l'essentiel des émissions dépend de choix de production, d'aménagement et de transport sur lesquels un ménage n'a aucune prise.",
  "Le discours du geste individuel produit une culpabilité inégalement répartie : on demande de renoncer à la voiture à des habitants qui n'ont aucune ligne de bus, et de mieux isoler à des locataires qui ne décident pas des travaux.",
  "Beaucoup de gestes valorisés sont symboliques : trier des emballages pèse très peu à côté du chauffage d'un logement mal isolé ou d'un aller-retour en avion, mais il est bien plus facile à afficher.",
  "L'adaptation locale — climatiser, arroser, ouvrir des salles fraîches — traite les effets sans rien changer aux causes, et la climatisation généralisée réchauffe d'ailleurs la rue pour rafraîchir l'appartement.",
  "Répéter aux adolescents qu'il dépend d'eux de sauver la planète sans leur donner de levier réel entretient précisément l'angoisse que l'on prétend combattre."],
 fr_kr:{
  fr:"En France, le débat ne porte plus sur l'existence du réchauffement mais sur le partage de l'effort. Les associations environnementales et une partie des scientifiques rappellent que les gestes individuels ne représentent qu'une fraction des émissions et demandent d'agir sur le logement, les transports et l'industrie ; les collectivités, elles, se trouvent en première ligne parce que ce sont elles qui ferment une école surchauffée, ouvrent une salle climatisée ou plantent une cour. Les enseignants observent de leur côté un phénomène nouveau : des élèves informés, parfois angoissés, qui reprochent aux adultes de leur transmettre un problème sans leur transmettre les moyens d'agir. C'est pourquoi les dispositifs récents — éco-délégués, ateliers de sensibilisation, projets d'établissement — cherchent moins à informer qu'à donner une prise concrète.",
  kr:"한국에서도 기후 변화는 이제 통계가 아니라 체감의 문제가 되었습니다. 여름 폭염과 열대야 일수가 늘어 기상청이 폭염특보를 내리고, 지방자치단체는 «무더위쉼터»를 지정해 경로당·주민센터·은행 등을 개방합니다. 프랑스의 canicule 대응과 거의 같은 발상입니다. 다만 차이가 있습니다. 한국은 여름 장마와 집중호우, 태풍 피해가 폭염만큼이나 큰 문제이고, 2020년 이후 «기후위기»라는 말이 언론에 정착하면서 학교에서도 환경교육이 강화되었습니다. 또 한국에서는 에어컨 보급률이 매우 높아 «더위를 피하는 법»이 개인의 실내 대응으로 해결되는 경향이 있는 반면, 프랑스는 주택에 에어컨이 드물어 건물 구조와 도시의 그늘로 해결해야 합니다. 시험에서는 «프랑스는 에어컨이 없기 때문에 도시와 건물을 바꿔야 하고, 한국은 에어컨이 있기 때문에 개인이 실내로 피신하지만 그만큼 전력 수요와 취약계층 문제가 커진다»는 대조가 아주 잘 통합니다."},
 lexique:["le réchauffement climatique","une vague de chaleur","la canicule","un épisode de sécheresse","les gaz à effet de serre","l'empreinte carbone","un geste du quotidien","l'éco-anxiété","un éco-délégué","l'adaptation au climat"],
 expressions:[
  {fr:"La question n'est plus de savoir si le climat change, mais de savoir qui doit changer quoi, et à quelle échelle.",ko:"문제 제기 (재정의형)"},
  {fr:"Il serait commode de croire qu'il suffise de trier ses déchets pour avoir fait sa part.",ko:"반론 (conditionnel + subjonctif)"},
  {fr:"Encore faudrait-il que chacun dispose des moyens matériels de changer ses habitudes, faute de quoi l'appel à la responsabilité devient une injustice.",ko:"조건 (conditionnel + subjonctif)"},
  {fr:"Même si les gestes individuels pèsent peu dans le total des émissions, il n'en reste pas moins qu'ils rendent le problème visible et discutable.",ko:"양보 후 반박"},
  {fr:"L'effort individuel ne remplace donc pas la décision collective : il en est plutôt la condition, parce qu'on n'accepte que les règles dont on a déjà compris la nécessité.",ko:"균형 결론"}],
 ressources:[
  {type:"officiel",titre:"meteofrance.com — vigilance canicule, évolution des températures et épisodes de chaleur",url:"https://meteofrance.com/"},
  {type:"officiel",titre:"education.gouv.fr — éco-délégués et éducation au développement durable dans les établissements",url:"https://www.education.gouv.fr/"},
  {type:"vidéo",titre:"YouTube 검색어: « canicule France écoles chaleur gestes quotidien climat »",url:"https://www.youtube.com/results?search_query=canicule+France+%C3%A9coles+chaleur+gestes+quotidien+climat"}],
 plan:{type:"Essai argumenté (찬반형)",steps:[
  "Introduction : des canicules devenues ordinaires, des écoles fermées, des restrictions d'eau, des éco-délégués dans chaque classe → problématique.",
  "I. Ce que l'action individuelle et locale apporte réellement : effet d'entraînement, remède à l'impuissance, résultats rapides à l'échelle d'une cour ou d'un quartier, citoyens mieux informés, mesures simples qui protègent les plus fragiles.",
  "II. Ses limites : responsabilité déplacée vers le particulier, effort impossible à fournir pour qui n'a ni transport ni logement adapté, gestes symboliques, adaptation qui traite les effets, angoisse entretenue chez les jeunes.",
  "Conclusion : ce n'est pas l'un ou l'autre — le geste quotidien prépare l'acceptation des décisions lourdes, mais il ne peut pas en tenir lieu."]}
},

"b2-environnement::le lundi sans viande":{
 ko:"주 1회 채식의 날 (제도로서의 «고기 없는 월요일»)", updated:"2026-09-11",
 problematique:"Un repas sans viande fixé une fois par semaine dans les cantines est-il le bon moyen de faire évoluer les habitudes, ou faut-il laisser le choix chaque jour plutôt que d'imposer un jour ?",
 contexte:[
  "L'idée d'un jour hebdomadaire sans viande circule dans plusieurs pays sous le nom de « journée végétarienne » ou de « lundi vert » ; en France, elle s'est surtout diffusée à partir de 2019 par une campagne publique appelant à remplacer la viande et le poisson par des plats végétaux un jour par semaine.",
  "Le principe est entré dans le droit par la restauration collective : la loi EGalim de 2018 a imposé, à partir de novembre 2019, un menu végétarien hebdomadaire dans toutes les cantines scolaires, mesure pérennisée en 2021 ; beaucoup d'établissements ont choisi de le placer le lundi, d'où l'expression passée dans le langage courant.",
  "Deux organisations très différentes coexistent : le menu unique, où tout le monde mange le même plat sans viande ce jour-là, et l'option quotidienne, où un plat végétarien figure en permanence à côté des autres — la première change les habitudes de tous, la seconde ne touche que ceux qui la choisissaient déjà.",
  "La contrainte principale n'est ni idéologique ni nutritionnelle mais pratique : cuisiner des légumes secs pour plusieurs centaines de couverts suppose du temps de trempage, du matériel et une formation que beaucoup de cuisines n'avaient pas, alors qu'un steak haché se réchauffe sans savoir-faire particulier.",
  "Enjeu actuel : les premiers bilans portent sur des indicateurs très concrets — taux de fréquentation du service ce jour-là, quantité jetée en fin de repas, coût de la matière première — et c'est là que se joue la crédibilité du dispositif, bien plus que dans les discours sur l'alimentation de demain."],
 pour:[
  "Un jour fixe supprime la décision : personne n'a à se prononcer, à se justifier ni à se compter, ce qui évite exactement le blocage que rencontre toute option laissée au choix individuel.",
  "La régularité fait le travail que l'exhortation ne fait pas : on goûte quarante fois dans l'année un plat qu'on n'aurait jamais commandé, et l'habitude se forme par répétition et non par conviction.",
  "Le repas sans viande coûte moins cher en matière première : à budget constant, une collectivité peut financer, les autres jours, une viande de meilleure qualité ou d'origine plus proche.",
  "Un jour hebdomadaire est une échelle d'effort acceptable : il ne demande de renoncer à rien de définitif et permet de discuter avec ceux que tout discours d'exclusion ferme immédiatement.",
  "Le dispositif oblige les cuisines à se former et à élargir leur répertoire, compétence qui reste acquise et profite ensuite à tous les autres services de la semaine."],
 contre:[
  "Imposer un menu unique à des convives qui paient leur repas revient à leur retirer un choix, et le premier effet observé est souvent la baisse de fréquentation ce jour-là : les gens ne changent pas d'habitude, ils changent de restaurant.",
  "Un plat mal préparé fait plus de dégâts que pas de plat du tout : le gaspillage augmente, l'expérience est mauvaise, et l'idée elle-même se trouve durablement associée à un souvenir déplaisant.",
  "Le choix du lundi est arbitraire et rigide : il tombe parfois un jour férié, il complique la rotation des menus, et il rigidifie une organisation que les responsables de cuisine préféreraient adapter à leurs approvisionnements.",
  "Une mesure hebdomadaire peut servir d'alibi : afficher un jour vertueux dispense d'examiner ce qui se passe les quatre autres jours, où la qualité et l'origine des produits comptent bien davantage.",
  "Faire porter le changement par la cantine, c'est le faire porter par ceux qui n'ont pas d'alternative — élèves, salariés sans autre lieu de restauration — pendant que les autres continuent librement."],
 fr_kr:{
  fr:"En France, la discussion est devenue très pragmatique depuis que le menu hebdomadaire est obligatoire dans les écoles. Les gestionnaires de restauration collective raisonnent en indicateurs : combien de convives se présentent le jour concerné, combien de kilos partent au tri, combien coûte le repas. Les chefs de cuisine réclament surtout de la formation et du temps de préparation, et font remarquer qu'un même principe donne un résultat excellent ou déplorable selon la cuisine qui l'applique. Les organisations agricoles, elles, s'opposent moins au principe qu'à sa généralisation quotidienne, qu'elles lisent comme un signal adressé à leur profession. Le compromis qui se dessine le plus souvent est celui du choix maintenu : plutôt qu'un jour sans viande imposé, une option végétarienne présente tous les jours, à condition qu'elle soit réellement appétissante.",
  kr:"한국에서도 «채식의 날»은 이미 시도된 제도입니다. 여러 시·도 교육청이 월 1~2회 «채식 급식의 날»이나 «그린 급식»을 운영해 왔고, 서울시는 한때 공공기관 구내식당에서 주 1회 채식 메뉴를 권장한 적이 있습니다. 다만 프랑스와 결정적으로 다른 점이 있습니다. 프랑스는 법으로 전국의 모든 학교에 주 1회를 «의무»로 정했지만, 한국은 교육청과 기관의 «권장»과 자율에 맡겨져 있어서 학교마다 편차가 큽니다. 또 한국 급식은 국·찌개에 육수가 들어가는 경우가 많아 «채식의 날»이라도 완전한 채식이 되기 어렵고, 영양교사가 식단을 직접 짜기 때문에 조리 인력의 부담이 곧바로 드러납니다. 시험에서는 «프랑스는 법으로 주 1회를 못 박고 그 실행 품질을 두고 다투며, 한국은 권장에 그치는 대신 학교별로 조용히 시행되어 전국적 논쟁이 되지 않는다»는 대조를 쓰면 아주 정확합니다."},
 lexique:["la restauration collective","une cantine d'entreprise","un menu unique","une option végétarienne","un plat de substitution","les légumes secs","le taux de fréquentation","le gaspillage alimentaire","le coût de la matière première","la formation du personnel de cuisine"],
 expressions:[
  {fr:"Le débat porte moins sur le principe d'un jour sans viande que sur ce que l'on sert réellement dans l'assiette ce jour-là.",ko:"문제 제기 (재정의형)"},
  {fr:"Il ne suffit pas qu'une collectivité inscrive un menu végétarien au calendrier pour que les convives se présentent au service.",ko:"조건·인과 (subjonctif)"},
  {fr:"On pourrait objecter qu'un menu unique supprime la liberté de choisir ; encore faudrait-il que les cantines aient jamais offert un véritable choix.",ko:"반론 예고 (conditionnel + subjonctif)"},
  {fr:"Même si l'intention écologique est largement partagée, il n'en reste pas moins qu'une mesure hebdomadaire ne vaut que par sa mise en œuvre.",ko:"양보 후 반박"},
  {fr:"Un jour sans viande ne change donc pas les habitudes à lui seul : il crée simplement l'occasion régulière de goûter autre chose, et tout dépend de ce qu'on y met.",ko:"균형 결론"}],
 ressources:[
  {type:"officiel",titre:"agriculture.gouv.fr — restauration collective, loi EGalim et menu végétarien hebdomadaire",url:"https://agriculture.gouv.fr/"},
  {type:"officiel",titre:"ademe.fr — réduction du gaspillage et impact environnemental des repas en restauration collective",url:"https://www.ademe.fr/"},
  {type:"vidéo",titre:"YouTube 검색어: « menu végétarien hebdomadaire cantine organisation cuisine bilan »",url:"https://www.youtube.com/results?search_query=menu+v%C3%A9g%C3%A9tarien+hebdomadaire+cantine+organisation+cuisine+bilan"}],
 plan:{type:"Lettre formelle",steps:[
  "En-tête et objet : lettre adressée au responsable de la restauration collective de l'établissement ou de la commune — objet : « Organisation du repas végétarien hebdomadaire ».",
  "Introduction : se présenter (parent d'élève, salarié, représentant du personnel), rappeler le cadre en vigueur depuis la loi EGalim et indiquer l'observation précise qui motive la lettre.",
  "I. Décrire les difficultés constatées : baisse de fréquentation le jour concerné, plats répétitifs, quantités jetées, absence d'information sur la composition des menus.",
  "II. Formuler des propositions réalistes : formation et temps de préparation pour les équipes de cuisine, essai d'une option maintenue à côté du plat unique, consultation des convives, affichage des menus à l'avance.",
  "Conclusion : rappeler l'objectif commun, demander un bilan chiffré à la fin du trimestre, proposer un rendez-vous et employer une formule de politesse formelle."]}
},

"b2-environnement::la dépendance à la voiture":{
 ko:"자동차 의존 (구조적 의존과 도시·지역의 문제)", updated:"2026-09-11",
 problematique:"La place de la voiture relève-t-elle d'un choix individuel que l'on pourrait corriger par des incitations, ou d'une organisation du territoire qui rend l'automobile obligatoire pour une partie de la population ?",
 contexte:[
  "La dépendance s'est construite par l'aménagement avant de se construire dans les têtes : depuis les années 1970, l'habitat pavillonnaire s'est étalé loin des centres, les commerces se sont regroupés en zones commerciales accessibles uniquement en voiture, et les services publics se sont concentrés dans les villes moyennes.",
  "Il en résulte une géographie très inégale : dans les grandes agglomérations, on peut vivre sans voiture ; dans les communes périurbaines et rurales, l'absence de ligne régulière, les horaires scolaires et le lieu de travail imposent souvent deux véhicules par ménage, soit un budget considérable pour des foyers modestes.",
  "Le coût est devenu un sujet politique en soi : le mouvement des gilets jaunes, né en 2018 d'une hausse de la fiscalité sur les carburants, a rendu visible le fait qu'un même prix à la pompe ne pèse pas du tout de la même façon selon qu'on habite au bout d'une ligne de métro ou à trente kilomètres de son emploi.",
  "Les politiques publiques agissent désormais sur plusieurs leviers : zones à faibles émissions dans les grandes agglomérations, avec la vignette Crit'Air qui limite la circulation des véhicules les plus anciens ; plan vélo national et aménagements cyclables ; forfait mobilités durables versé par l'employeur ; aides au changement de véhicule.",
  "Enjeu actuel : ces mesures visent l'usage de la voiture, mais le logement, l'emploi et l'école restent dispersés — et tant que la distance entre le domicile et le reste de la vie quotidienne ne diminue pas, restreindre la circulation revient à sanctionner ceux qui n'ont pas d'autre solution."],
 pour:[
  "La voiture reste, pour des millions de personnes, le seul moyen d'aller travailler, de déposer un enfant et de rejoindre un médecin dans la même matinée : la supprimer sans alternative ne réduit pas les déplacements, elle réduit l'accès à l'emploi et aux soins.",
  "Le budget automobile — achat, assurance, entretien, carburant, réparations imprévues — pèse lourdement sur les ménages modestes, et réduire la dépendance est donc aussi une mesure de pouvoir d'achat.",
  "L'espace public a été massivement affecté à la circulation et au stationnement ; rendre une partie de cette surface aux piétons, aux arbres et aux terrasses transforme la ville plus vite que n'importe quel discours écologique.",
  "Les alternatives existent déjà là où elles ont été financées : cars express entre le périurbain et la ville, pistes cyclables continues, parkings-relais en bout de ligne, vélo à assistance électrique qui rend acceptables des trajets de dix kilomètres.",
  "Réduire la circulation automobile améliore immédiatement des choses mesurables — qualité de l'air, bruit, accidents de la route, en particulier autour des écoles — sans attendre les effets climatiques à long terme."],
 contre:[
  "Les restrictions sont conçues par et pour les grandes villes, mais s'appliquent à des habitants extérieurs qui viennent y travailler : une zone à faibles émissions protège les riverains et écarte les véhicules anciens de ceux qui n'ont pas les moyens d'en changer.",
  "Les aides au changement de véhicule supposent d'avoir un apport et un crédit : le ménage qui roule avec une voiture de quinze ans est précisément celui qui ne peut pas acheter un modèle récent, même aidé.",
  "Les transports collectifs se sont eux-mêmes retirés des zones peu denses parce qu'une ligne y coûte cher par voyageur ; demander à ces habitants de renoncer à la voiture revient à leur demander de renoncer à se déplacer.",
  "La dépendance ne tient pas seulement au trajet domicile-travail mais à la journée entière : école, courses, activités des enfants, parents âgés à visiter — un enchaînement que peu de réseaux permettent de faire sans voiture.",
  "Toucher à la voiture touche à un symbole d'autonomie et de réussite, et une politique qui l'ignore fabrique elle-même l'opposition qu'elle devra ensuite affronter."],
 fr_kr:{
  fr:"En France, la ligne de fracture n'oppose pas les écologistes aux automobilistes mais les territoires entre eux. Les métropoles réduisent la place de la voiture — voies apaisées, stationnement payant, zones à faibles émissions — au nom de la qualité de l'air et de l'espace public ; les élus des communes périurbaines et rurales répondent que leurs habitants subissent ces décisions sans avoir été associés et sans disposer d'alternative. Les associations d'usagers demandent, elles, qu'on cesse d'opposer les modes de déplacement et qu'on finance d'abord les liaisons manquantes : cars express, parkings-relais, pistes cyclables continues jusqu'aux zones d'activité. Le consensus qui se dégage porte sur un point : les restrictions ne sont acceptées que lorsque l'alternative existe déjà, jamais lorsqu'elle est promise pour plus tard.",
  kr:"한국은 프랑스와 비교하기에 아주 좋은 사례입니다. 수도권은 지하철과 광역버스망이 촘촘해 자동차 없이 사는 것이 충분히 가능하고, 서울은 대중교통 수송분담률이 매우 높습니다. 반면 지방 중소도시와 농촌은 정반대입니다. 버스 노선이 하루 몇 편에 불과한 지역이 많아 «교통 소외»가 실질적인 문제이고, 그래서 여러 지자체가 «100원 택시»(농촌형 교통모델)를 도입해 시골 어르신이 택시를 시내버스 요금 수준으로 이용하도록 지원합니다. 또 한국에는 노후 경유차 운행 제한(수도권 계절관리제)과 조기 폐차 지원금 제도가 있어 프랑스의 ZFE·Crit'Air와 직접 비교됩니다. 시험에서는 «두 나라 모두 대도시는 자동차를 줄이는 방향으로 가고 지방은 오히려 자동차 없이는 살 수 없다. 다만 한국은 100원 택시처럼 수요응답형 교통으로 빈틈을 메우려 하고, 프랑스는 노선 재개설과 자전거 인프라 쪽에 무게를 둔다»고 대조하면 아주 구체적인 답안이 됩니다."},
 lexique:["la dépendance à la voiture","l'étalement urbain","une commune périurbaine","le trajet domicile-travail","une zone à faibles émissions","la vignette Crit'Air","un parking-relais","une piste cyclable","le budget automobile","une alternative de transport"],
 expressions:[
  {fr:"On parle souvent de l'amour des Français pour la voiture, alors qu'il s'agit le plus souvent d'une contrainte d'organisation du territoire.",ko:"문제 제기 (재정의형)"},
  {fr:"Il serait injuste de restreindre la circulation avant que les transports collectifs n'aient été réellement développés.",ko:"판단 (conditionnel + subjonctif)"},
  {fr:"Encore faudrait-il qu'il existe une ligne de bus pour que l'on puisse reprocher à quelqu'un de prendre sa voiture.",ko:"조건 (conditionnel + subjonctif)"},
  {fr:"Même si la réduction de la place de l'automobile est nécessaire en ville, il n'en demeure pas moins qu'elle frappe d'abord ceux qui viennent de loin.",ko:"양보 후 반박"},
  {fr:"Sortir de la dépendance à la voiture n'est donc pas une affaire de volonté individuelle : c'est une affaire de distances, et les distances se décident en aménageant le territoire.",ko:"균형 결론"}],
 ressources:[
  {type:"officiel",titre:"service-public.fr — zones à faibles émissions, vignette Crit'Air et forfait mobilités durables",url:"https://www.service-public.fr/"},
  {type:"officiel",titre:"ecologie.gouv.fr — plan vélo, mobilités du quotidien et déplacements domicile-travail",url:"https://www.ecologie.gouv.fr/"},
  {type:"vidéo",titre:"YouTube 검색어: « dépendance à la voiture périurbain zone à faibles émissions transports »",url:"https://www.youtube.com/results?search_query=d%C3%A9pendance+%C3%A0+la+voiture+p%C3%A9riurbain+zone+%C3%A0+faibles+%C3%A9missions+transports"}],
 plan:{type:"Essai argumenté (찬반형)",steps:[
  "Introduction : un étalement urbain ancien, deux voitures par ménage en périurbain, des zones à faibles émissions dans les métropoles → problématique.",
  "I. Pourquoi il faut réduire cette dépendance : coût pour les ménages, espace public confisqué, air et bruit, sécurité autour des écoles, alternatives déjà efficaces là où elles existent.",
  "II. Pourquoi les restrictions ne suffisent pas : territoires sans desserte, aides inaccessibles aux plus modestes, chaîne de déplacements quotidienne, sentiment d'injustice entre ville et périphérie.",
  "Conclusion : la voiture n'est pas une préférence mais une conséquence ; on ne s'en libérera qu'en rapprochant l'emploi, l'école et les services des lieux où les gens habitent."]}
},

"b2-environnement::les énergies propres":{
 ko:"청정 에너지 (가정용 태양광과 풍력의 실제)", updated:"2026-09-11",
 problematique:"Les énergies propres rencontrent-elles l'adhésion tant qu'elles restent lointaines, et l'opposition dès qu'elles s'installent devant chez soi — ou peut-on réellement faire accepter un équipement à ceux qui en supportent les inconvénients ?",
 contexte:[
  "L'installation de panneaux solaires sur une maison individuelle est devenue une démarche courante : on dépose une déclaration préalable de travaux en mairie, on fait poser les panneaux par un installateur, puis on raccorde au réseau.",
  "Deux logiques coexistent : la vente de la totalité de la production, et l'autoconsommation avec revente du surplus, aujourd'hui la plus répandue, où l'on consomme d'abord sa propre électricité et où l'on injecte le reste dans le réseau à un tarif d'achat garanti par contrat.",
  "Le calcul du particulier est donc très concret : coût de l'installation, aide éventuelle, économies sur la facture, durée avant amortissement, et une incertitude — la production tombe précisément quand on n'est pas chez soi, en milieu de journée, faute de batterie.",
  "L'éolien terrestre obéit à une tout autre logique, collective et conflictuelle : un projet passe par une enquête publique, et la loi impose en France une distance minimale de cinq cents mètres entre une éolienne et les habitations. Les recours devant les tribunaux administratifs sont fréquents, ce qui allonge considérablement les délais. En mer, le premier parc éolien français a été mis en service au large de Saint-Nazaire en 2022.",
  "Enjeu actuel : l'opinion est très largement favorable à ces énergies dans les sondages, mais les projets locaux se heurtent au bruit, à la covisibilité, à la valeur des maisons et au sentiment d'être consulté pour la forme — d'où le développement de montages participatifs où les habitants et la commune deviennent copropriétaires de l'installation."],
 pour:[
  "Un ménage équipé voit sa facture baisser tout de suite et devient beaucoup plus attentif à sa consommation : on lance la machine à laver à midi parce qu'on voit sa propre production sur l'application.",
  "Poser des panneaux sur des toitures, des parkings, des hangars agricoles et des bâtiments publics n'artificialise aucun sol : la surface est déjà construite et ne sert à rien d'autre.",
  "Ces chantiers font vivre des emplois locaux non délocalisables — installateurs, électriciens, techniciens de maintenance — et une filière de formation s'est constituée autour d'eux.",
  "Le montage participatif change tout : lorsque la commune et les habitants détiennent une part du parc éolien, les retombées restent sur le territoire et l'opposition diminue nettement.",
  "L'éolien en mer éloigne les machines des habitations et permet des puissances sans commune mesure avec l'éolien terrestre, tout en libérant l'espace au sol."],
 contre:[
  "Le coût initial d'une installation solaire reste élevé, et le calcul d'amortissement suppose de rester dans la maison de longues années : c'est un investissement de propriétaire, inaccessible aux locataires et aux ménages modestes.",
  "Le secteur a attiré un démarchage agressif et des promesses de rentabilité invérifiables, qui ont laissé des particuliers avec un crédit et une installation surdimensionnée par rapport à leurs besoins.",
  "Autour d'une éolienne, les riverains signalent un bruit régulier la nuit, des ombres mouvantes aux heures basses du soleil et un balisage lumineux permanent : ces nuisances sont contestées mais ressenties.",
  "Le paysage est un bien commun : une ligne de crête, un clocher, un point de vue appartiennent à tous, et leur transformation ne se compense pas par une baisse de facture.",
  "Les habitants ont le sentiment que l'enquête publique arrive trop tard, quand le projet est déjà ficelé, et que leur avis n'aura servi qu'à valider une décision prise ailleurs."],
 fr_kr:{
  fr:"En France, le paradoxe est bien identifié : l'adhésion de principe est massive, l'acceptation locale beaucoup plus fragile. Les promoteurs de projets éoliens reprochent aux recours successifs d'allonger les délais de plusieurs années ; les associations de riverains répondent que le recours est le seul moyen dont ils disposent quand la concertation s'est réduite à une réunion d'information. Les maires se trouvent au milieu : ils voient les retombées fiscales et la production locale d'un côté, la colère d'une partie de leurs administrés de l'autre. La voie qui progresse le plus est celle du financement participatif et de l'implication de la commune dans la société de projet, parce qu'elle transforme des riverains subissant un équipement en habitants qui en tirent un revenu.",
  kr:"한국의 상황은 놀라울 정도로 비슷합니다. 태양광의 경우 정부와 지자체가 주택용·건물용 설치를 지원해 왔고(주택지원사업), 발전한 전기를 한전에 판매하거나 상계 처리하는 방식이 있습니다. 그런데 한국에서 더 큰 갈등은 산지 태양광입니다. 산을 깎아 설치한 태양광 설비가 경관 훼손과 산사태 우려를 낳아 각 지자체가 «이격거리» 조례를 만들어 도로나 주택에서 일정 거리 이상 떨어지도록 규제했고, 이 조례들이 보급을 사실상 가로막는다는 논란이 오래 이어졌습니다. 프랑스의 500미터 규정과 정확히 같은 성격의 문제입니다. 풍력도 마찬가지여서, 영덕·제주 등지의 풍력 단지를 두고 소음과 경관 민원이 반복되었고, 해상풍력은 어민의 조업권 보상 문제가 핵심 쟁점입니다. 시험에서는 «두 나라 모두 청정 에너지에 대한 찬성은 압도적이지만, 설비가 자기 마을에 들어오는 순간 이격거리·소음·경관의 문제로 바뀐다. 프랑스는 주민이 사업의 지분을 갖는 참여형 방식으로, 한국은 주민 이익공유와 어업 보상으로 이 문제를 풀려 한다»고 쓰면 매우 설득력이 있습니다."},
 lexique:["un panneau solaire","l'autoconsommation","la revente du surplus","le raccordement au réseau","l'amortissement d'une installation","une éolienne terrestre","un parc éolien en mer","l'enquête publique","les nuisances sonores","l'acceptabilité locale"],
 expressions:[
  {fr:"Tout le monde approuve les énergies propres ; le désaccord commence à la question de savoir où l'on installe les machines.",ko:"문제 제기 (재정의형)"},
  {fr:"Il serait trop simple de réduire l'opposition des riverains à un refus égoïste du changement.",ko:"반론 (conditionnel)"},
  {fr:"Encore faut-il que les habitants soient consultés avant que le projet ne soit arrêté, sans quoi la concertation n'est qu'une formalité.",ko:"조건 (subjonctif)"},
  {fr:"Même si l'installation de panneaux solaires allège la facture, il n'en reste pas moins qu'elle suppose d'être propriétaire et de pouvoir avancer l'investissement.",ko:"양보 후 반박"},
  {fr:"Une énergie n'est donc pleinement acceptée que lorsque ceux qui en supportent les inconvénients en retirent aussi quelque chose.",ko:"균형 결론"}],
 ressources:[
  {type:"officiel",titre:"service-public.fr — installation de panneaux solaires, déclaration de travaux et revente d'électricité",url:"https://www.service-public.fr/"},
  {type:"officiel",titre:"ademe.fr — autoconsommation solaire, éolien et acceptabilité des projets locaux",url:"https://www.ademe.fr/"},
  {type:"vidéo",titre:"YouTube 검색어: « panneaux solaires autoconsommation éoliennes riverains projet local »",url:"https://www.youtube.com/results?search_query=panneaux+solaires+autoconsommation+%C3%A9oliennes+riverains+projet+local"}],
 plan:{type:"Exposé (구술)",steps:[
  "Introduction : présenter le document, rappeler les deux situations très différentes — le panneau solaire sur sa propre toiture et l'éolienne installée à cinq cents mètres de chez soi → problématique.",
  "I. Ce qui fonctionne : baisse immédiate de la facture, attention nouvelle à sa consommation, toitures et parkings déjà artificialisés, emplois locaux, montages participatifs, éolien en mer.",
  "II. Ce qui bloque : investissement réservé aux propriétaires, démarchage abusif, bruit et ombres portées, paysage comme bien commun, concertation ressentie comme une formalité.",
  "Conclusion et opinion personnelle : proposer un critère de jugement — un projet est acceptable lorsque les riverains en sont associés dès la conception et en partagent les revenus."]}
},

"b2-environnement::les espaces verts en ville":{
 ko:"도시의 녹지 공간", updated:"2026-09-11",
 problematique:"Les espaces verts urbains sont-ils un équipement de confort que l'on aménage quand le budget le permet, ou une infrastructure devenue indispensable à la santé et à la vie sociale des habitants ?",
 contexte:[
  "La canicule a changé le statut de l'arbre en ville : on a mesuré l'écart de température entre une rue bitumée et une rue plantée, et l'îlot de chaleur urbain est passé du vocabulaire des spécialistes à celui des campagnes municipales.",
  "Les projets se sont donc déplacés du parc d'agrément vers la désimperméabilisation : on casse l'enrobé, on plante, on laisse l'eau pénétrer dans le sol. Les « cours oasis » parisiennes, qui transforment des cours d'école minérales en espaces plantés ouverts parfois au quartier, sont devenues un modèle repris dans de nombreuses villes.",
  "L'entretien a lui aussi changé : la loi dite Labbé a interdit les pesticides dans les espaces verts publics, ce qui a obligé les services municipaux à adopter la gestion différenciée — tondre moins souvent, laisser des prairies, accepter des herbes que les habitants prenaient pour de l'abandon.",
  "L'accès à ces espaces est très inégal : les quartiers les plus denses, souvent les plus modestes, sont aussi les moins plantés, et le simple fait d'habiter à plus de dix minutes à pied d'un parc change la vie quotidienne d'une famille sans balcon.",
  "Enjeu actuel : la pression foncière joue contre le vert. Chaque parcelle non bâtie est convoitée pour du logement, un équipement ou un parking, et l'objectif national de réduction de l'artificialisation des sols inscrit dans la loi Climat et résilience de 2021 pousse à construire sur la ville existante — donc, parfois, sur les derniers espaces libres."],
 pour:[
  "Un parc planté, un arbre d'alignement, un mur végétalisé font baisser la température ressentie de plusieurs degrés : c'est la seule climatisation qui rafraîchisse la rue au lieu de la réchauffer.",
  "Les sols vivants absorbent l'eau des orages, alors que la ville bitumée la renvoie dans les réseaux et provoque des débordements : désimperméabiliser est une mesure d'assainissement autant qu'une mesure d'agrément.",
  "Le square est, avec l'école, le dernier lieu où des habitants de milieux différents se croisent sans consommer : parents, adolescents, personnes âgées, joueurs de boules y occupent le même espace à des heures différentes.",
  "Les effets sur la santé sont documentés et simples : on marche davantage, on sort les enfants, on supporte mieux la chaleur, et le bruit de la ville est perçu comme moins pénible là où il y a des arbres.",
  "Les jardins partagés et les fermes urbaines apportent autre chose qu'un rendement agricole : ils créent une responsabilité collective sur un lieu, et un quartier qui entretient son jardin le dégrade beaucoup moins."],
 contre:[
  "Un espace vert coûte cher tous les ans : arrosage en été, élagage, remplacement des arbres morts, propreté, gardiennage — et ce sont ces lignes de fonctionnement que les communes coupent en premier quand le budget se resserre.",
  "Planter ne suffit pas : un arbre posé dans une fosse trop petite, en pleine rue minérale, meurt en quelques étés, et l'on remplace alors un bel affichage par une dépense perdue.",
  "Le besoin de logements est réel et pressant : refuser de construire sur les derniers terrains libres au nom du vert revient parfois à repousser des familles plus loin, donc à les rendre dépendantes de la voiture.",
  "La gestion écologique se heurte aux habitants eux-mêmes : beaucoup réclament une pelouse tondue et des massifs fleuris, et lisent la prairie laissée haute comme un service public qui ne fait plus son travail.",
  "Un parc rénové peut faire monter les loyers autour de lui : on aménage pour les habitants d'un quartier populaire, et ce sont d'autres qui, quelques années plus tard, en profitent."],
 fr_kr:{
  fr:"En France, l'espace vert est devenu un argument central des campagnes municipales, et la discussion est très concrète : combien d'arbres plantés, combien de cours d'école débitumées, quels parcs ouverts plus tard le soir pendant les canicules. Les services techniques rappellent que la vraie difficulté n'est pas de planter mais d'entretenir sur trente ans, et que la gestion sans pesticides demande d'expliquer aux habitants ce qu'ils voient. Les urbanistes insistent sur un point moins visible : il vaut mieux beaucoup de petits espaces à cinq minutes à pied qu'un grand parc à l'autre bout de la ville, car ce qui compte est la distance réelle depuis le pied de l'immeuble. Enfin, la lutte contre l'artificialisation des sols crée une tension assumée entre le besoin de logements et la préservation des derniers terrains non bâtis.",
  kr:"한국 도시에서도 녹지는 이제 «있으면 좋은 것»이 아니라 폭염 대책이 되었습니다. 지방자치단체가 도시숲과 «바람길숲»을 조성해 도심 열섬을 완화하려 하고, 산림청이 이를 지원합니다. 가장 인상적인 사례는 서울 청계천 복원(2005)과 서울역 고가를 보행로로 바꾼 «서울로 7017»(2017)로, 자동차가 차지하던 공간을 사람과 식물에게 돌려준 프랑스식 발상과 정확히 같습니다. 한편 한국 특유의 제도도 있습니다. 오랫동안 공원으로 지정만 해 두고 매입하지 않은 땅이 2020년 «공원일몰제»로 대거 해제될 위기에 놓여, 지자체들이 급히 예산을 들여 토지를 사들여야 했습니다. 이는 프랑스의 «개발 압력 대 녹지 보전»과 같은 문제가 한국에서는 토지 소유권의 형태로 나타난 것입니다. 아파트 단지 안의 조경이 잘 되어 있는 대신 단지 밖 공공 녹지는 부족하다는 점, 그래서 «어느 아파트에 사느냐»가 녹지 접근성을 좌우한다는 점도 프랑스의 지역 격차와 좋은 대조가 됩니다."},
 lexique:["un espace vert","un îlot de chaleur urbain","la désimperméabilisation","un arbre d'alignement","une cour d'école végétalisée","un jardin partagé","l'agriculture urbaine","la gestion différenciée","la pression foncière","l'artificialisation des sols"],
 expressions:[
  {fr:"Un parc n'est plus un ornement de la ville : c'est devenu un équipement de santé publique au même titre qu'un dispensaire.",ko:"문제 제기 (재정의형)"},
  {fr:"Il ne suffit pas de planter des arbres pour que la ville respire : encore faut-il qu'ils survivent aux étés suivants.",ko:"조건 (subjonctif)"},
  {fr:"Si chaque habitant disposait d'un espace vert à cinq minutes de chez lui, la question de la chaleur urbaine se poserait tout autrement.",ko:"가정 (conditionnel)"},
  {fr:"Même si la construction de logements répond à un besoin réel, il n'en demeure pas moins que les derniers terrains libres ne se reconstituent pas.",ko:"양보 후 반박"},
  {fr:"La vraie question n'est donc pas le nombre d'hectares plantés, mais la distance qui sépare chaque habitant du premier arbre.",ko:"균형 결론 (재정의형)"}],
 ressources:[
  {type:"officiel",titre:"ademe.fr — îlots de chaleur urbains, végétalisation et adaptation des villes",url:"https://www.ademe.fr/"},
  {type:"officiel",titre:"ecologie.gouv.fr — artificialisation des sols, nature en ville et renaturation",url:"https://www.ecologie.gouv.fr/"},
  {type:"vidéo",titre:"YouTube 검색어: « îlot de chaleur urbain végétalisation cour oasis ville arbres »",url:"https://www.youtube.com/results?search_query=%C3%AElot+de+chaleur+urbain+v%C3%A9g%C3%A9talisation+cour+oasis+ville+arbres"}],
 plan:{type:"Exposé (구술)",steps:[
  "Introduction : présenter le document, rappeler le basculement récent — l'arbre urbain est passé du décor à l'outil contre la chaleur → problématique.",
  "I. Ce que les espaces verts apportent : rafraîchissement de la rue, absorption des eaux de pluie, lieu de rencontre gratuit, santé et marche, jardins partagés et responsabilité collective.",
  "II. Les obstacles réels : coût d'entretien dans la durée, plantations mal conçues, concurrence avec le besoin de logements, attentes esthétiques des habitants, hausse des loyers autour des parcs rénovés.",
  "Conclusion et opinion personnelle : défendre un critère simple — la proximité plutôt que la superficie, et l'entretien plutôt que l'inauguration."]}
},

"b2-environnement::la biodiversité":{
 ko:"생물 다양성", updated:"2026-09-11",
 problematique:"La protection de la biodiversité relève-t-elle de la mise sous cloche de quelques espaces remarquables, ou faut-il transformer les usages ordinaires — l'agriculture, le jardin, la ville — là où la vie disparaît réellement ?",
 contexte:[
  "Le recul se constate d'abord par des signes très ordinaires : un pare-brise qui reste propre après un long trajet d'été, des hirondelles et des moineaux moins nombreux dans les villages, des hérissons que l'on ne voit plus au jardin.",
  "Ces impressions sont confirmées par des suivis scientifiques de longue durée, en particulier le programme Vigie-Nature du Muséum national d'histoire naturelle, qui documente depuis des décennies le déclin des populations d'oiseaux communs, notamment des oiseaux des milieux agricoles.",
  "Les causes identifiées ne sont pas mystérieuses : disparition des haies et des prairies au profit de grandes parcelles, usage des pesticides, artificialisation des sols pour le logement et les routes, pollution lumineuse, et réchauffement qui décale les floraisons et les migrations.",
  "Les outils de protection existent et se superposent : parcs nationaux et parcs naturels régionaux, réserves naturelles, arrêtés de protection de biotope, et surtout le réseau européen Natura 2000, qui protège des sites en encadrant les activités plutôt qu'en les interdisant. L'Office français de la biodiversité, créé en 2020, en assure une grande part du suivi et du contrôle.",
  "Enjeu actuel : les espaces protégés ne couvrent qu'une partie du territoire, tandis que l'essentiel de la vie ordinaire se joue dans les champs, les bords de route, les jardins et les villes — d'où l'importance prise par les sciences participatives, qui font compter les oiseaux, les papillons et les insectes par des habitants ordinaires."],
 pour:[
  "Ce que l'on appelle biodiversité n'est pas un décor : les pollinisateurs conditionnent une grande partie de la production de fruits et de légumes, et leur disparition se paierait directement dans les assiettes et dans les prix.",
  "Les haies, les mares et les bandes enherbées rendent des services mesurables à l'agriculteur lui-même — abri des auxiliaires qui mangent les ravageurs, protection contre le vent, retenue de l'eau, ombre pour les animaux.",
  "Les sciences participatives changent le regard autant qu'elles produisent des données : une famille qui compte les oiseaux de son jardin un week-end d'hiver ne regarde plus jamais son quartier de la même façon.",
  "Les protections réglementaires fonctionnent quand elles sont appliquées : des espèces réintroduites ou protégées sont revenues, et certaines réserves ont retrouvé des populations que l'on croyait perdues.",
  "Agir ne demande pas toujours de grands moyens : ne pas tondre au printemps, laisser un coin en friche, éteindre l'éclairage d'une zone d'activité la nuit, percer un passage à hérisson dans une clôture sont des décisions immédiates."],
 contre:[
  "Les contraintes retombent presque toujours sur les mêmes : un agriculteur dont les parcelles se trouvent en zone protégée supporte des restrictions au nom d'un intérêt collectif dont il ne tire aucun revenu supplémentaire.",
  "Le classement d'un site peut geler des projets attendus localement — logement, équipement, activité économique — dans des territoires déjà fragiles, ce qui nourrit un ressentiment durable contre la protection elle-même.",
  "Protéger des périmètres ne règle rien si les pratiques restent inchangées autour : une réserve entourée de grandes cultures traitées fonctionne comme une île, et les espèces ne circulent plus d'une île à l'autre.",
  "La lutte contre les espèces exotiques envahissantes — frelon asiatique, renouée du Japon, ambroisie — est coûteuse, répétitive et rarement définitive, et les collectivités s'y épuisent sans résultat visible.",
  "Le sujet reste moins mobilisateur que le climat : une courbe de température parle à tout le monde, la disparition silencieuse des insectes ne provoque aucune alerte immédiate et passe donc après tout le reste."],
 fr_kr:{
  fr:"En France, la question s'est déplacée du parc national vers la parcelle agricole et le jardin. Les naturalistes et le Muséum insistent sur le fait que le déclin le plus massif touche les espèces communes des campagnes, et non les espèces rares déjà protégées ; les organisations agricoles répondent qu'on leur demande de replanter des haies que les politiques publiques les avaient encouragées à arracher, et réclament des compensations plutôt que des injonctions. Les collectivités, elles, agissent sur ce qu'elles maîtrisent : fauche tardive des bords de route, extinction de l'éclairage public une partie de la nuit, zéro pesticide dans les espaces publics. Les associations naturalistes, enfin, ont réussi une chose qu'aucune campagne n'avait obtenue : faire participer des dizaines de milliers d'habitants à des comptages d'oiseaux et de papillons, ce qui produit à la fois des données et des défenseurs.",
  kr:"한국에서도 생물 다양성은 «희귀종 보호»에서 «일상 공간의 문제»로 옮겨 가고 있습니다. 제도적으로는 환경부가 멸종위기 야생생물을 I급·II급으로 지정해 보호하고, 국립공원과 습지보호지역, 그리고 람사르 협약에 등록된 습지(순천만, 우포늪 등)가 핵심 축을 이룹니다. 국립생태원과 국립생물자원관이 조사와 연구를 맡는 점은 프랑스 국립자연사박물관·OFB와 비교하기 좋습니다. 외래종 문제도 두 나라가 똑같습니다. 한국에서는 뉴트리아, 붉은귀거북, 가시박, 돼지풀 같은 «생태계교란 생물»이 지정되어 퇴치 사업이 반복되는데, 프랑스의 renouée du Japon·frelon asiatique와 같은 성격입니다. 대조 포인트는 이것입니다. 프랑스의 논쟁이 «농지의 울타리(haies)와 농업 방식»을 중심으로 벌어진다면, 한국의 논쟁은 «개발과 보전»(4대강 사업, 갯벌 매립, 도로와 택지 개발)의 형태로 훨씬 더 토건적인 대립으로 나타납니다. 동시에 한국은 갯벌의 가치를 재평가해 서남해안 갯벌이 유네스코 세계자연유산에 등재되었다는 점을 긍정적 사례로 들 수 있습니다."},
 lexique:["la biodiversité","le déclin des insectes","les pollinisateurs","un habitat naturel","une haie bocagère","une réserve naturelle","le réseau Natura 2000","une espèce exotique envahissante","les sciences participatives","l'artificialisation des sols"],
 expressions:[
  {fr:"On s'alarme de la disparition des grands animaux lointains, alors que ce sont les espèces les plus communes qui s'effondrent sous nos fenêtres.",ko:"문제 제기 (재정의형)"},
  {fr:"Il serait illusoire de croire que quelques réserves suffisent à protéger la vie ordinaire des campagnes.",ko:"판단 (conditionnel)"},
  {fr:"Encore faudrait-il que les agriculteurs soient accompagnés financièrement pour que la replantation des haies devienne réaliste.",ko:"조건 (conditionnel + subjonctif)"},
  {fr:"Bien que les espaces protégés aient permis le retour de certaines espèces, il n'en reste pas moins qu'ils ne couvrent qu'une faible part du territoire.",ko:"양보 (subjonctif)"},
  {fr:"Protéger la biodiversité ne consiste donc pas à mettre la nature à part, mais à changer ce que nous faisons du reste de l'espace.",ko:"균형 결론"}],
 ressources:[
  {type:"officiel",titre:"ofb.gouv.fr — Office français de la biodiversité : espèces, espaces protégés et suivis",url:"https://www.ofb.gouv.fr/"},
  {type:"officiel",titre:"mnhn.fr — Muséum national d'histoire naturelle, programme Vigie-Nature et sciences participatives",url:"https://www.mnhn.fr/"},
  {type:"vidéo",titre:"YouTube 검색어: « déclin des insectes oiseaux des champs haies biodiversité France »",url:"https://www.youtube.com/results?search_query=d%C3%A9clin+des+insectes+oiseaux+des+champs+haies+biodiversit%C3%A9+France"}],
 plan:{type:"Essai argumenté (찬반형)",steps:[
  "Introduction : des signes ordinaires de disparition, des suivis scientifiques qui les confirment, des outils de protection anciens mais limités → problématique.",
  "I. Pourquoi la protection réglementaire ne suffit pas : le déclin touche les espèces communes, les réserves fonctionnent comme des îles, l'essentiel se joue dans les champs, les jardins et les villes.",
  "II. Ce que suppose un changement des usages : haies et bandes enherbées utiles à l'agriculteur lui-même, gestion des espaces publics sans pesticides, extinction nocturne, sciences participatives — mais aussi compensations, coûts et conflits d'usage réels.",
  "Conclusion : la biodiversité ne se sauvera pas dans les périmètres qu'on lui réserve, mais dans la manière dont on occupe tout le reste."]}
},

});
