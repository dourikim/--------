/* francophonie-dossiers.js — « Le français et la francophonie » 소주제 자료집 (DELF B2, 6개)
   + 주제 일반 어휘 (B2 100개)
   구조: ①problématique + 최근 흐름 ②POUR/CONTRE ③프랑스 vs 한국 ④전문 어휘 ⑤표현 ⑥자료 ⑦작문·구술 플랜
   ※ C1 « Les langues et la francophonie »(c1-langues)와 각도가 겹치지 않도록 구체·실용 층위로 작성.
*/
Object.assign(window.DOSSIERS, {

/* ================= DELF B2 — Le français et la francophonie ================= */

"b2-francophonie::la place du français dans le monde":{
 ko:"세계 속 프랑스어의 위상", updated:"2026-09-09",
 problematique:"Le français est-il une langue qui progresse ou une langue qui recule ? Et faut-il chercher à défendre sa place, ou la laisser trouver la sienne ?",
 contexte:[
  "L'Organisation internationale de la Francophonie publie régulièrement une estimation du nombre de francophones : on dépasse aujourd'hui les trois cents millions de locuteurs, répartis sur les cinq continents.",
  "L'essentiel de la progression attendue vient d'Afrique subsaharienne, où le français est langue d'enseignement et d'administration dans de nombreux pays et où la population jeune augmente rapidement.",
  "Dans le même temps, l'anglais s'est imposé comme langue de communication internationale dans les sciences, les affaires et les grandes organisations, y compris dans les institutions européennes où le français tenait autrefois une place plus large.",
  "La France s'appuie sur un réseau concret — Instituts français, Alliances françaises, lycées français à l'étranger, chaînes comme TV5 Monde — et sur les bourses accordées aux étudiants étrangers pour maintenir l'usage de la langue.",
  "Enjeu actuel : on compte de plus en plus de francophones, mais le français est de moins en moins choisi comme langue de travail internationale ; que vaut alors le nombre de locuteurs ?"],
 pour:[
  "Une langue partagée par plus de trois cents millions de personnes reste un outil de communication très utile entre des pays que rien d'autre ne rapproche.",
  "Pour les pays africains francophones, la langue commune facilite les échanges commerciaux, la circulation des étudiants et la coopération entre administrations voisines.",
  "Maintenir le français comme langue de publication et d'enseignement, c'est garder la possibilité de penser et de former dans une autre langue que l'anglais.",
  "Le réseau scolaire et culturel français crée des liens durables : un élève formé dans un lycée français choisit souvent ensuite des études ou un emploi en lien avec la France.",
  "Sur le marché du travail, un salarié qui maîtrise le français en plus de l'anglais accède à des postes que les autres candidats ne peuvent pas viser."],
 contre:[
  "Le nombre de locuteurs ne garantit rien : beaucoup d'élèves apprennent le français parce que l'école l'impose, et ne le choisiraient pas librement.",
  "Financer des instituts, des chaînes et des bourses coûte cher, et cet argent pourrait servir directement à la formation des enseignants dans les pays concernés.",
  "La promotion du français en Afrique reste associée à l'histoire coloniale, ce qui rend le discours officiel sur le partage difficile à entendre pour une partie de la jeunesse.",
  "Dans la recherche, imposer le français isolerait les chercheurs francophones, dont les travaux ne seraient plus lus en dehors de leur propre espace linguistique.",
  "Une langue ne se défend pas par des déclarations : ce sont les études, les emplois et les œuvres qui donnent envie de l'apprendre, pas les campagnes institutionnelles."],
 fr_kr:{
  fr:"En France, le débat oppose deux lectures des mêmes chiffres. Les uns soulignent que le français est l'une des rares langues parlées sur tous les continents et qu'il progresse en nombre ; les autres répondent que cette progression est surtout scolaire et administrative, et qu'elle ne se traduit ni dans la recherche, ni dans les affaires, ni dans les institutions européennes. La question posée est donc moins celle du nombre que celle des usages réellement choisis par les locuteurs.",
  kr:"한국의 대조 사례는 한국어 확산 정책입니다. 세종학당은 정부가 세운 해외 한국어 교육 기관 네트워크로 계속 확대되어 왔고, TOPIK 응시자도 크게 늘었습니다. 그런데 결정적인 차이가 있습니다. 프랑스는 제도(학교·행정·문화원)가 언어 수요를 만들어 내려 하는 반면, 한국어 학습자의 증가는 K-pop·드라마·게임 같은 문화 상품이 먼저 수요를 만들고 정부 기관이 뒤따라간 결과에 가깝습니다. 시험에서는 «프랑스는 제도로 언어를 지키려 하고, 한국은 콘텐츠가 언어를 끌고 갔다»는 대조를 세우면 논지가 아주 선명해집니다."},
 lexique:["la francophonie","un pays francophone","le nombre de locuteurs","la langue de travail","le rayonnement","l'Institut français","le lycée français à l'étranger","une bourse d'études","la coopération éducative","le passé colonial"],
 expressions:[
  {fr:"On célèbre le nombre de francophones, mais la vraie question est de savoir dans quelles situations ces locuteurs choisissent le français.",ko:"문제 제기 (재정의형)"},
  {fr:"Il serait naïf de croire qu'une langue se maintient uniquement grâce aux instituts culturels et aux discours officiels.",ko:"conditionnel (판단)"},
  {fr:"Encore faut-il que les jeunes des pays concernés trouvent, dans cette langue, des études et des emplois réels.",ko:"조건 (subjonctif)"},
  {fr:"Même si le français progresse en nombre, il n'en reste pas moins qu'il perd du terrain comme langue de travail internationale.",ko:"양보 후 반박"},
  {fr:"Tout dépend, en définitive, de ce que la langue permet de faire, et non du nombre de ceux qui l'ont apprise à l'école.",ko:"균형 결론"}],
 ressources:[
  {type:"officiel",titre:"Organisation internationale de la Francophonie — la langue française dans le monde",url:"https://www.francophonie.org/"},
  {type:"officiel",titre:"France Diplomatie — promotion de la langue française et réseau culturel",url:"https://www.diplomatie.gouv.fr/"},
  {type:"vidéo",titre:"YouTube 검색어: « place du français dans le monde francophonie Afrique »",url:"https://www.youtube.com/results?search_query=place+du+fran%C3%A7ais+dans+le+monde+francophonie+Afrique"}],
 plan:{type:"Essai argumenté (찬반형)",steps:[
  "Introduction : trois cents millions de francophones, mais un recul dans les usages internationaux → problématique.",
  "I. Ce qui plaide pour une politique active : utilité d'une langue partagée, réseau éducatif, diversité des langues de travail.",
  "II. Ses limites : apprentissage subi plutôt que choisi, coût des institutions, poids de l'histoire coloniale, isolement scientifique.",
  "Conclusion : une langue se défend moins par des institutions que par les débouchés concrets qu'elle ouvre."]}
},

"b2-francophonie::la féminisation des noms de métiers":{
 ko:"직업명의 여성형", updated:"2026-09-09",
 problematique:"Faut-il dire « la professeure » et « la maire », ou la langue doit-elle rester telle que l'usage l'a transmise ?",
 contexte:[
  "Pendant longtemps, on a dit « Madame le Ministre » ou « Madame le Proviseur », le masculin étant présenté comme la forme neutre des titres et des fonctions les plus prestigieux.",
  "Des circulaires administratives, en 1986 puis en 1998, ont recommandé de féminiser les noms de métiers dans les textes officiels, et un guide d'aide à la féminisation a été diffusé à la fin des années 1990 pour proposer des formes concrètes.",
  "En 2019, l'Académie française a adopté un rapport reconnaissant qu'il n'existe aucun obstacle de principe à la féminisation des noms de métiers, titres, grades et fonctions, ce qui a levé un argument d'autorité souvent invoqué contre elle.",
  "Dans l'usage, l'installation est très inégale : « une avocate », « une infirmière », « une pharmacienne » ne surprennent plus personne, alors que « une autrice », « une professeure » ou « une maire » suscitent encore des hésitations et des corrections.",
  "Enjeu actuel : le débat s'est déplacé vers l'écriture inclusive et le point médian, beaucoup plus contestés, au risque de faire oublier que féminiser un nom de métier et modifier l'écriture sont deux questions différentes."],
 pour:[
  "Nommer une femme par un mot féminin correspond simplement à la réalité du monde du travail, où toutes ces professions sont exercées par des femmes.",
  "Le français possédait déjà des formes féminines anciennes, comme « la doctoresse » ou « la poétesse » : la féminisation n'est donc pas une invention récente imposée à la langue.",
  "Les enseignants observent que le vocabulaire employé influence la manière dont les élèves se projettent : une fille entend plus facilement qu'elle peut devenir ingénieure si le mot existe.",
  "L'administration a besoin de désigner clairement les personnes, et « Madame la maire » est plus clair, dans un courrier officiel, que « Madame le maire ».",
  "Accepter le féminin pour les métiers modestes et le refuser pour les fonctions prestigieuses révèle une hiérarchie qu'aucun argument grammatical ne justifie vraiment."],
 contre:[
  "L'hésitation entre plusieurs formes concurrentes — « auteure » ou « autrice », « professeure » ou « professeuse » — crée une insécurité au moment de rédiger un courrier ou un devoir.",
  "En grammaire, le masculin fonctionne aussi comme genre non marqué : « les étudiants » désigne un groupe mixte sans qu'aucune femme en soit exclue.",
  "Changer les mots ne change pas les faits : l'écart de salaire et la rareté des femmes aux postes de direction ne disparaîtront pas parce qu'on aura féminisé les titres.",
  "Une norme diffusée par circulaire heurte l'usage spontané des locuteurs, qui n'adoptent pas une forme parce qu'un texte administratif la recommande.",
  "Certaines femmes préfèrent elles-mêmes le titre au masculin, estimant qu'il désigne la fonction occupée et non la personne qui l'occupe."],
 fr_kr:{
  fr:"En France, la position de l'Académie française a longtemps servi d'argument aux opposants à la féminisation ; son rapport de 2019 a largement désamorcé ce terrain. Le débat s'est donc reporté sur l'écriture inclusive, nettement plus conflictuelle, alors que la féminisation des noms de métiers est aujourd'hui entrée dans les usages administratifs, journalistiques et scolaires sans provoquer les difficultés de lecture qu'on annonçait.",
  kr:"한국어에는 문법적 성이 없어서 프랑스식 논쟁이 그대로 성립하지는 않지만, 비대칭은 분명히 존재합니다. 여교사·여의사·여기자·여경처럼 «여-»를 붙이는 표현은 있어도 «남교사»는 거의 쓰이지 않으며, 이는 남성을 기본값으로 두는 사고를 그대로 드러냅니다. «여류 작가»라는 말이 점차 쓰이지 않게 된 것, «학부형»이 «학부모»로, «미망인»이 «고인의 배우자»로 바뀌어 온 흐름도 좋은 예시입니다. 시험에서는 «프랑스는 없는 여성형을 만드는 문제이고 한국은 불필요한 여성 표지를 지우는 문제»라고 정리하면 대조가 아주 깔끔합니다."},
 lexique:["la féminisation des noms de métiers","un titre de fonction","le genre grammatical","le masculin générique","un terme épicène","une circulaire administrative","l'usage courant","l'écriture inclusive","le point médian","la visibilité des femmes"],
 expressions:[
  {fr:"La question n'est pas de savoir si le mot est joli, mais de savoir pourquoi il manquait précisément pour les fonctions les plus prestigieuses.",ko:"문제 제기 (재정의형)"},
  {fr:"On pourrait objecter que la grammaire n'a jamais empêché une femme d'exercer un métier ; encore faut-il que le mot existe pour la désigner.",ko:"반론 예고 (conditionnel)"},
  {fr:"Bien que l'usage hésite encore entre plusieurs formes, il finira, comme toujours, par en retenir une seule.",ko:"양보 (subjonctif)"},
  {fr:"Même si féminiser les titres ne réduit pas les écarts de salaire, il n'en reste pas moins que la langue rend les femmes visibles ou invisibles.",ko:"양보 후 반박"},
  {fr:"Tout compte fait, la langue ne crée pas l'égalité, mais elle enregistre fidèlement ce que la société accepte de voir.",ko:"균형 결론"}],
 ressources:[
  {type:"officiel",titre:"Académie française — questions de langue, féminisation des noms de métiers",url:"https://www.academie-francaise.fr/"},
  {type:"officiel",titre:"service-public.fr — rédaction administrative et désignation des fonctions",url:"https://www.service-public.fr/"},
  {type:"vidéo",titre:"YouTube 검색어: « féminisation des noms de métiers autrice débat »",url:"https://www.youtube.com/results?search_query=f%C3%A9minisation+des+noms+de+m%C3%A9tiers+autrice+d%C3%A9bat"}],
 plan:{type:"Essai argumenté (찬반형)",steps:[
  "Introduction : de « Madame le Ministre » au rapport de l'Académie française en 2019 → problématique.",
  "I. Les arguments en faveur : conformité à la réalité professionnelle, formes féminines anciennes, clarté administrative, effet sur les projections des élèves.",
  "II. Les objections : instabilité des formes, valeur non marquée du masculin, effet symbolique sans effet réel sur les inégalités.",
  "Conclusion : distinguer la féminisation des noms de métiers, largement acquise, du débat plus contesté sur l'écriture inclusive."]}
},

"b2-francophonie::la simplification de l'orthographe":{
 ko:"철자법 단순화", updated:"2026-09-09",
 problematique:"Faut-il simplifier l'orthographe française pour libérer du temps scolaire, ou cette difficulté fait-elle partie de ce que l'école doit transmettre ?",
 contexte:[
  "Les rectifications orthographiques de 1990 portent sur une liste limitée de points très concrets : l'accent circonflexe devient facultatif sur les lettres i et u sauf lorsqu'il distingue deux mots, les pluriels des mots composés se régularisent (« des après-midis »), certains composés se soudent (« portemonnaie », « weekend ») et quelques accents s'harmonisent (« évènement »).",
  "Ces rectifications sont restées presque invisibles pendant vingt-cinq ans, jusqu'à ce que les éditeurs scolaires les intègrent dans les nouveaux manuels à la rentrée 2016, ce qui a déclenché une polémique nationale autour de l'accent circonflexe.",
  "Le ministère de l'Éducation nationale a alors rappelé un point souvent oublié dans la controverse : les deux graphies sont acceptées, aucune n'est fautive, et un élève ne peut pas être pénalisé pour avoir écrit d'une façon plutôt que de l'autre.",
  "Dans les classes, la difficulté concrète n'est d'ailleurs pas le circonflexe mais les accords : l'accord du participe passé avec l'auxiliaire avoir, les homophones grammaticaux, les pluriels irréguliers, qui occupent une grande partie des heures de français.",
  "Enjeu actuel : entre les correcteurs automatiques, les messages écrits au clavier et les exigences des recruteurs, l'écart se creuse entre la norme enseignée et l'écrit réellement produit chaque jour."],
 pour:[
  "Le temps passé à mémoriser des exceptions est du temps qui n'est pas consacré à la rédaction, à l'argumentation et à la lecture, où beaucoup d'élèves ont pourtant plus besoin d'aide.",
  "Certaines graphies sont purement arbitraires : rien, dans le sens du mot, ne justifie qu'on écrive « nénuphar » plutôt que « nénufar », ni « oignon » plutôt que « ognon ».",
  "Une orthographe plus régulière rendrait l'apprentissage plus accessible aux élèves en difficulté et aux apprenants étrangers, ce qui servirait directement la diffusion du français dans le monde.",
  "La régularisation de certains pluriels supprime des pièges inutiles : « des après-midis » suit enfin la même règle que les autres noms, sans perte de sens pour personne.",
  "Beaucoup d'adultes écrivent chaque jour au travail et redoutent la faute : une norme plus simple réduirait un blocage qui coûte du temps et de la confiance dans la vie professionnelle."],
 contre:[
  "Faire coexister deux graphies pendant des années crée plus de confusion que d'aide : l'élève ne sait plus laquelle choisir, et l'enseignant doit corriger les deux.",
  "Les livres, les dictionnaires anciens et l'ensemble des textes déjà publiés conservent l'ancienne graphie, si bien qu'un lecteur doit de toute façon connaître les deux formes.",
  "Une partie des irrégularités garde visible le lien entre les mots d'une même famille : le circonflexe de « hôpital » rappelle « hospitalier », celui de « forêt » rappelle « forestier ».",
  "Le vrai problème n'est pas la règle mais la pratique : moins d'heures de français, moins de rédaction et moins de lecture expliquent mieux les difficultés qu'une orthographe jugée trop compliquée.",
  "Simplifier ne supprimera pas le jugement social porté sur l'écrit : ceux qui écartent aujourd'hui une candidature pour une faute trouveront demain un autre critère pour trier."],
 fr_kr:{
  fr:"En France, la polémique de 2016 a montré un décalage frappant : le grand public a cru qu'on supprimait l'accent circonflexe, alors qu'il devenait seulement facultatif sur deux lettres, dans une réforme vieille de vingt-six ans et présentée comme une recommandation. Beaucoup d'enseignants font remarquer que le débat s'est concentré sur un signe très visible, tandis que les difficultés qui pèsent réellement sur les élèves — les accords, les homophones — n'ont presque pas été discutées.",
  kr:"한국에서도 규범과 실제 쓰기의 거리는 아주 구체적인 문제입니다. 학생들은 받아쓰기로 맞춤법을 배우지만, 정작 성인이 되어 이력서나 자기소개서를 쓸 때 «되/돼», «안/않», «-로서/-로써», 띄어쓰기에서 실수하고, 그 실수가 성실성 평가로 이어지는 일이 흔합니다. 실제로 많은 사람이 맞춤법 검사기와 포털 사전에 의존하고, 국립국어원 «온라인 가나다»에는 띄어쓰기 질문이 끊이지 않습니다. 시험에서는 «프랑스는 규범 자체를 손질하려 했고, 한국은 규범은 그대로 둔 채 검사기와 상담 창구로 메우고 있다»고 대조하면 좋습니다."},
 lexique:["les rectifications orthographiques","une graphie","l'accent circonflexe","le pluriel des mots composés","la soudure des mots composés","les règles d'accord","une graphie facultative","le correcteur orthographique","le manuel scolaire","le temps scolaire"],
 expressions:[
  {fr:"On a cru qu'on supprimait un accent : en réalité, on discutait de ce que l'école doit consacrer de temps à l'orthographe.",ko:"문제 제기 (재정의형)"},
  {fr:"Il serait excessif de prétendre qu'une orthographe plus simple réglerait à elle seule les difficultés des élèves à l'écrit.",ko:"conditionnel (판단)"},
  {fr:"Encore faudrait-il que les manuels, les dictionnaires et les correcteurs proposent tous la même graphie au même moment.",ko:"조건 (conditionnel + subjonctif)"},
  {fr:"Même si certaines exceptions gardent visible l'histoire des mots, il n'en reste pas moins qu'elles coûtent des heures d'apprentissage.",ko:"양보 후 반박"},
  {fr:"L'essentiel est peut-être moins de réformer les règles que de rendre aux élèves le temps d'écrire vraiment.",ko:"균형 결론"}],
 ressources:[
  {type:"officiel",titre:"education.gouv.fr — enseignement du français et orthographe à l'école",url:"https://www.education.gouv.fr/"},
  {type:"officiel",titre:"Académie française — dire, ne pas dire et rectifications de l'orthographe",url:"https://www.academie-francaise.fr/"},
  {type:"vidéo",titre:"YouTube 검색어: « rectifications orthographe 1990 manuels scolaires 2016 »",url:"https://www.youtube.com/results?search_query=rectifications+orthographe+1990+manuels+scolaires+2016"}],
 plan:{type:"Essai argumenté (찬반형)",steps:[
  "Introduction : ce qui a réellement changé en 1990 et la polémique de 2016 → problématique.",
  "I. Les arguments en faveur de la simplification : temps scolaire, graphies arbitraires, accessibilité pour les apprenants, confiance à l'écrit.",
  "II. Les objections : coexistence de deux graphies, textes déjà publiés, lien entre mots d'une même famille, causes réelles des difficultés.",
  "Conclusion : déplacer la question de la règle vers la pratique effective de l'écriture à l'école."]}
},

"b2-francophonie::le français standard":{
 ko:"표준 프랑스어", updated:"2026-09-09",
 problematique:"Existe-t-il un « bon français » que tout le monde devrait parler, ou chaque manière de parler a-t-elle sa légitimité ?",
 contexte:[
  "Ce qu'on appelle français standard est la variété enseignée à l'école, employée dans les médias nationaux, les manuels et les examens internationaux comme le DELF : c'est elle qui sert de référence commune.",
  "Cette norme est historiquement liée à la région parisienne, et les accents régionaux restent rares dans les journaux télévisés nationaux, sans qu'aucune règle écrite ne les écarte.",
  "Le français parlé ailleurs a pourtant ses propres usages, parfaitement corrects : on dit « septante » et « nonante » en Belgique et en Suisse, « magasiner » et « courriel » au Québec, et le vocabulaire du quotidien varie d'un pays francophone à l'autre.",
  "Les entreprises internationales, les traducteurs et les organismes de certification ont besoin d'une variété partagée, ce qui rend le standard utile mais aussi excluant pour ceux qui ne le maîtrisent pas.",
  "Enjeu actuel : à mesure que la majorité des francophones vit hors de France, il devient difficile de continuer à présenter une seule variété comme la référence naturelle de toutes les autres."],
 pour:[
  "Une variété commune permet à des locuteurs de quatre continents de se comprendre immédiatement, sans négociation ni malentendu sur le sens des mots.",
  "L'école a besoin d'une référence stable pour enseigner et pour évaluer : sans norme partagée, la correction d'une copie devient une affaire d'appréciation personnelle.",
  "Les documents administratifs, juridiques et médicaux doivent être compris de la même façon partout, ce qui suppose un français écrit standardisé.",
  "Pour un apprenant étranger, une norme claire est indispensable au début : il ne peut pas apprendre simultanément toutes les variantes régionales du français.",
  "L'édition, la traduction et le sous-titrage reposent sur cette variété commune, sans laquelle un texte devrait être adapté pour chaque pays francophone."],
 contre:[
  "Le standard n'est pas une langue neutre tombée du ciel : c'est une variété socialement et géographiquement située, devenue norme parce qu'elle était celle du pouvoir et de l'école.",
  "La moquerie sur les accents a des effets très concrets : des candidats travaillent leur prononciation avant un entretien parce qu'ils craignent d'être jugés sur leur origine.",
  "Les variantes francophones sont souvent présentées comme des curiosités amusantes, alors qu'elles sont la langue quotidienne de dizaines de millions de locuteurs.",
  "Trop insister sur la correction crée, chez les élèves comme chez les apprenants, une peur de parler qui freine bien plus l'apprentissage que quelques écarts de prononciation.",
  "La langue évolue par les usages non standard : beaucoup de mots aujourd'hui admis dans les dictionnaires ont d'abord été condamnés comme incorrects."],
 fr_kr:{
  fr:"En France, la discussion porte de plus en plus sur les médias et le recrutement : on remarque que les voix entendues à l'antenne ou dans les postes de responsabilité présentent une prononciation très homogène, alors que la population, elle, ne parle pas ainsi. Du côté de l'enseignement du français à l'étranger, les manuels commencent à intégrer des documents venus du Québec, de Belgique ou d'Afrique, ce qui revient à admettre que le standard n'est plus un modèle unique mais un point de départ.",
  kr:"한국어 교육에서도 같은 구조가 보입니다. TOPIK과 한국어 교재는 서울말을 기준으로 삼기 때문에, 외국인 학습자가 부산이나 광주에 가면 교실에서 배운 말과 실제로 듣는 말이 달라 당황하는 일이 매우 흔합니다. 또한 재외동포나 이주 배경 화자의 한국어는 «틀린 한국어»로 교정 대상이 되기 쉽습니다. 시험에서는 «표준은 서로 알아듣기 위한 출발점이지 유일한 정답이 아니다»라는 논지를 프랑스와 한국 양쪽 사례로 뒷받침하면 설득력이 큽니다."},
 lexique:["le français standard","la norme scolaire","une prononciation régionale","le français parlé","le français écrit","le langage soutenu","le langage familier","une variante lexicale","le français du Québec","la référence commune"],
 expressions:[
  {fr:"Le français standard n'est pas le français correct : c'est le français que l'école et les médias ont choisi comme référence.",ko:"문제 제기 (재정의형)"},
  {fr:"Il conviendrait de distinguer une norme utile pour se comprendre d'une norme qui sert à classer les locuteurs.",ko:"구분 제시 (conditionnel)"},
  {fr:"Quelle que soit la variété que l'on parle, l'objectif reste le même : se faire comprendre de son interlocuteur.",ko:"양보 (subjonctif)"},
  {fr:"Même si une référence commune est indispensable à l'école, il n'en reste pas moins qu'elle avantage ceux qui la parlaient déjà à la maison.",ko:"양보 후 반박"},
  {fr:"Une langue vivante a besoin d'une norme pour circuler et d'écarts pour continuer à évoluer.",ko:"균형 결론"}],
 ressources:[
  {type:"officiel",titre:"France Éducation international — enseignement du français et certifications DELF/DALF",url:"https://www.france-education-international.fr/"},
  {type:"article",titre:"France Info — reportages sur les accents et la langue à l'antenne",url:"https://www.francetvinfo.fr/"},
  {type:"vidéo",titre:"YouTube 검색어: « français standard accents régionaux variétés du français »",url:"https://www.youtube.com/results?search_query=fran%C3%A7ais+standard+accents+r%C3%A9gionaux+vari%C3%A9t%C3%A9s+du+fran%C3%A7ais"}],
 plan:{type:"Exposé (구술)",steps:[
  "Introduction : une norme scolaire commune face à des millions de locuteurs qui parlent autrement → problématique.",
  "I. L'utilité d'une référence partagée : intercompréhension, évaluation scolaire, documents officiels, apprentissage du français.",
  "II. Ses effets pervers : norme socialement située, jugement sur les accents, folklorisation des variétés, peur de parler.",
  "Conclusion : garder le standard comme outil de communication sans en faire un critère de valeur des locuteurs."]}
},

"b2-francophonie::les bienfaits de l'apprentissage d'une langue":{
 ko:"외국어 학습의 이점", updated:"2026-09-09",
 problematique:"À l'heure où une application traduit en quelques secondes, apprendre une langue étrangère garde-t-il encore un sens ?",
 contexte:[
  "Les outils de traduction automatique et les assistants vocaux permettent aujourd'hui de comprendre un texte, de commander un plat ou de tenir une conversation simple sans connaître un mot de la langue.",
  "Dans le même temps, les séjours d'études à l'étranger et les programmes d'échange européens n'ont jamais concerné autant d'étudiants, et les applications d'apprentissage revendiquent des millions d'utilisateurs.",
  "Les chercheurs avancent plusieurs bénéfices — attention, mémoire, souplesse mentale, ouverture culturelle — mais insistent aussi sur le fait que ces effets dépendent beaucoup de l'intensité et de la durée de la pratique.",
  "Sur le marché du travail, la maîtrise d'une deuxième ou d'une troisième langue reste demandée dans le tourisme, le commerce international, la traduction, la diplomatie et la recherche.",
  "Enjeu actuel : si la machine transmet l'information, ce que l'on gagne à apprendre une langue n'est plus le message mais la relation avec celui qui la parle."],
 pour:[
  "Parler la langue de son interlocuteur change la nature de l'échange : on cesse d'être un visiteur assisté par une machine pour devenir un véritable interlocuteur.",
  "L'accès direct aux films, aux livres et à la presse donne des nuances, de l'humour et des sous-entendus qu'aucune traduction automatique ne restitue vraiment.",
  "Sur le plan professionnel, une langue supplémentaire ouvre des postes précis — commerce, tourisme, coopération, enseignement — que l'anglais seul ne permet pas d'atteindre.",
  "Beaucoup d'adultes qui reprennent une langue disent y gagner de la confiance et le plaisir concret de progresser, ce qui compte autant que l'utilité mesurable.",
  "Apprendre une autre langue oblige à observer la sienne : on comprend mieux sa propre grammaire quand on découvre qu'elle aurait pu fonctionner autrement."],
 contre:[
  "Atteindre un niveau réellement utile demande des centaines d'heures, alors que la traduction automatique suffit pour la plupart des besoins quotidiens d'un voyageur.",
  "L'enseignement scolaire produit des résultats décevants : après sept ans d'anglais, beaucoup d'élèves comprennent un texte mais n'osent toujours pas parler.",
  "Dans de nombreux secteurs, l'anglais suffit largement, et le temps consacré à une troisième langue serait mieux employé à approfondir une compétence professionnelle.",
  "Les bienfaits cognitifs sont souvent présentés de façon exagérée, en particulier par les applications qui en font un argument commercial.",
  "Les cours particuliers et les séjours à l'étranger coûtent cher : le multilinguisme devient alors un avantage réservé à ceux qui peuvent le financer."],
 fr_kr:{
  fr:"En France, le débat scolaire porte moins sur le principe que sur la méthode : on reproche à l'enseignement des langues d'être encore trop écrit et trop évalué, et de laisser peu de place à la prise de parole. Les dispositifs d'échange et les stages à l'étranger sont présentés comme la réponse la plus efficace, mais leur accès reste inégal selon les filières et les moyens des familles.",
  kr:"한국은 이 문제를 극단적인 형태로 보여 줍니다. 영어에 투입되는 시간과 사교육비는 세계적으로도 매우 높은 편이지만, 학습의 목표가 오랫동안 토익·수능 점수였기 때문에 «읽고 풀 줄은 알지만 말은 못 한다»는 평가가 반복되어 왔습니다. 그 사이 고등학교의 제2외국어 개설은 계속 줄었고, 최근에는 번역기와 AI 통역이 좋아지면서 «그래도 왜 배워야 하는가»라는 질문이 학생들에게서 직접 나옵니다. 시험에서는 «정보 전달은 기계가 하지만 관계는 사람이 만든다»는 답을 한국의 점수 중심 학습 사례와 함께 제시하면 설득력이 있습니다."},
 lexique:["l'apprentissage d'une langue","un apprenant","la compréhension orale","l'expression orale","un séjour linguistique","la traduction automatique","la motivation","la mobilité internationale","l'ouverture culturelle","la maîtrise d'une langue"],
 expressions:[
  {fr:"La traduction automatique transmet le message ; elle ne crée pas la relation qui naît quand on parle la langue de l'autre.",ko:"문제 제기 (재정의형)"},
  {fr:"On pourrait soutenir qu'apprendre une langue est devenu un luxe ; encore faudrait-il que la machine traduise aussi les sous-entendus.",ko:"반론 예고 (conditionnel)"},
  {fr:"Quels que soient les progrès des outils numériques, ils ne dispensent pas de comprendre la culture qui accompagne la langue.",ko:"양보 (subjonctif)"},
  {fr:"Même si l'anglais suffit dans bien des situations professionnelles, il n'en reste pas moins qu'il ne donne accès qu'à une partie du monde.",ko:"양보 후 반박"},
  {fr:"Tout dépend, en somme, de ce que l'on attend d'une langue : un service rendu ou une manière d'entrer en relation.",ko:"균형 결론"}],
 ressources:[
  {type:"officiel",titre:"education.gouv.fr — enseignement des langues vivantes et mobilité des élèves",url:"https://www.education.gouv.fr/"},
  {type:"officiel",titre:"Erasmus+ France — mobilité étudiante et apprentissage des langues",url:"https://www.agence-erasmus.fr/"},
  {type:"vidéo",titre:"YouTube 검색어: « apprendre une langue étrangère utilité traduction automatique »",url:"https://www.youtube.com/results?search_query=apprendre+une+langue+%C3%A9trang%C3%A8re+utilit%C3%A9+traduction+automatique"}],
 plan:{type:"Essai argumenté (찬반형)",steps:[
  "Introduction : des traducteurs automatiques efficaces face à des millions d'apprenants → problématique.",
  "I. Ce que l'apprentissage apporte encore : relation directe, accès aux nuances, débouchés professionnels, confiance personnelle.",
  "II. Les objections : coût en temps et en argent, résultats scolaires décevants, bénéfices cognitifs surestimés, suffisance de l'anglais.",
  "Conclusion : cesser de justifier l'apprentissage par sa seule utilité pour l'assumer comme une manière d'entrer en relation."]}
},

"b2-francophonie::les anglicismes":{
 ko:"영어식 표현(앙글리시즘)", updated:"2026-09-09",
 problematique:"Les mots anglais qui entrent dans le français l'appauvrissent-ils, ou ne font-ils que prolonger une histoire d'emprunts vieille de plusieurs siècles ?",
 contexte:[
  "Les mots anglais sont partout dans la publicité, le numérique et le monde de l'entreprise : on parle d'un « meeting », d'une « deadline », d'un « feedback » ou d'un « open space » sans même y prêter attention.",
  "La loi du 4 août 1994 relative à l'emploi de la langue française, dite loi Toubon, impose le français dans la publicité, l'étiquetage des produits, les contrats de travail et les documents destinés aux salariés, un slogan en anglais devant être accompagné d'une traduction.",
  "La Commission d'enrichissement de la langue française propose des équivalents publiés au Journal officiel et rassemblés dans la base FranceTerme : « courriel » pour e-mail, « hameçonnage » pour phishing, « mot-dièse » pour hashtag.",
  "Le succès de ces équivalents est très inégal : « logiciel », « ordinateur » et « numérique » se sont imposés sans difficulté, « courriel » est courant au Québec mais rare en France, et « mot-dièse » n'a jamais vraiment pris.",
  "Enjeu actuel : la question est devenue pratique plus que patrimoniale, puisque des réunions et des documents internes en anglais peuvent écarter, dans une entreprise française, les salariés qui ne le maîtrisent pas."],
 pour:[
  "Le français a toujours emprunté sans en souffrir : « banque » vient de l'italien, « abricot » de l'arabe, « bivouac » de l'allemand, et personne ne les ressent aujourd'hui comme étrangers.",
  "Dans les domaines techniques, un terme anglais partagé au niveau international évite les malentendus entre équipes de plusieurs pays.",
  "La langue trie d'elle-même : beaucoup d'anglicismes disparaissent avec l'objet qu'ils désignaient, comme le « walkman », sans qu'aucune institution ait eu à intervenir.",
  "Les locuteurs francisent ce qu'ils empruntent et créent avec : « liker », « scroller », « télétravailler » suivent la conjugaison française, ce qui est un signe de vitalité et non d'abandon.",
  "Interdire n'a jamais fonctionné : ce sont les équivalents pratiques et bien formés, comme « logiciel » ou « covoiturage », qui s'imposent, jamais ceux qu'on impose."],
 contre:[
  "En entreprise, l'anglais des réunions et des documents internes exclut concrètement une partie des salariés, ce que la loi cherche précisément à empêcher.",
  "Le jargon professionnel anglais sert parfois à impressionner plus qu'à informer : « staffer », « reporting », « benchmarker » rendent un discours opaque pour ceux qui n'ont pas fait d'école de commerce.",
  "La publicité en anglais s'adresse implicitement à un public jeune et urbain, et laisse de côté ceux qui ne comprennent pas le slogan qu'on leur destine.",
  "Quand un équivalent français existe et fonctionne parfaitement, employer le mot anglais relève de la facilité ou de la mode plutôt que d'un besoin réel.",
  "Dans plusieurs pays francophones, le prestige de l'anglais concurrence directement le français à l'université, ce qui donne à la question une portée qui dépasse le vocabulaire."],
 fr_kr:{
  fr:"En France, le débat a longtemps été mené sur le terrain de la défense du patrimoine, avec des listes de mots à éviter et des équivalents officiels au succès variable. Il s'est déplacé vers un terrain beaucoup plus concret, celui du travail : des syndicats et des salariés ont obtenu que des logiciels et des documents professionnels soient disponibles en français, en s'appuyant sur la loi de 1994. La question n'est donc plus de savoir si l'anglais abîme la langue, mais de savoir qui il exclut.",
  kr:"한국에서도 같은 이동이 보입니다. 국립국어원은 «다듬은 말» 사업으로 외국어 표현을 우리말로 바꿔 제안해 왔고, «리플»이 «댓글»로 정착한 것처럼 성공한 사례도 있지만 정착하지 못한 제안이 훨씬 많습니다. 최근 논의의 초점은 «언어 순수성»이 아니라 «공공언어의 이해 가능성»으로 옮겨 갔습니다. 정부 부처 보도자료나 지자체 안내문에 외국어가 남용되면 고령층과 정보 취약 계층이 제도에서 배제되기 때문입니다. 시험에서는 «문제는 외래어의 존재가 아니라 그것이 누구를 배제하는가»라는 논지를 프랑스의 툽옹법과 한국의 쉬운 공공언어 정책으로 함께 뒷받침하면 좋습니다."},
 lexique:["un anglicisme","un mot emprunté","un équivalent français","le franglais","un néologisme","le jargon professionnel","la loi Toubon","l'étiquetage des produits","un slogan publicitaire","l'évolution du lexique"],
 expressions:[
  {fr:"Le problème n'est pas qu'un mot vienne de l'anglais, mais qu'il empêche une partie des locuteurs de comprendre ce qu'on leur dit.",ko:"문제 제기 (재정의형)"},
  {fr:"Il serait vain d'interdire des mots que les locuteurs emploient déjà chaque jour au travail.",ko:"conditionnel (판단)"},
  {fr:"Encore faut-il que l'équivalent proposé soit court, clair et facile à conjuguer, faute de quoi personne ne l'adoptera.",ko:"조건 (subjonctif)"},
  {fr:"Même si les emprunts ont toujours existé, il n'en reste pas moins que leur concentration dans le monde du travail crée aujourd'hui de véritables exclusions.",ko:"양보 후 반박"},
  {fr:"Une langue vivante emprunte ; elle cesse de l'être le jour où elle n'invente plus rien avec ce qu'elle a emprunté.",ko:"균형 결론"}],
 ressources:[
  {type:"officiel",titre:"culture.gouv.fr — FranceTerme et enrichissement de la langue française",url:"https://www.culture.gouv.fr/"},
  {type:"officiel",titre:"legifrance.gouv.fr — loi n°94-665 du 4 août 1994 relative à l'emploi de la langue française",url:"https://www.legifrance.gouv.fr/"},
  {type:"vidéo",titre:"YouTube 검색어: « anglicismes français entreprise loi Toubon débat »",url:"https://www.youtube.com/results?search_query=anglicismes+fran%C3%A7ais+entreprise+loi+Toubon+d%C3%A9bat"}],
 plan:{type:"Essai argumenté (찬반형)",steps:[
  "Introduction : des équivalents officiels au succès inégal et un anglais omniprésent au travail → problématique.",
  "I. Pourquoi les emprunts ne menacent pas la langue : histoire des emprunts, utilité technique, francisation créative, échec des interdictions.",
  "II. Où le problème commence réellement : exclusion des salariés, opacité du jargon, publicité sélective, concurrence à l'université.",
  "Conclusion : juger un anglicisme non à son origine mais à ce qu'il permet ou empêche de comprendre."]}
}

});

/* ================= 주제 일반 어휘 — Le français et la francophonie (B2, 100) ================= */
window.VOCAB = window.VOCAB || {};
window.VOCAB.francophonie = window.VOCAB.francophonie || {};
window.VOCAB.francophonie.B2 = [

/* — La francophonie et la place du français (20) — */
["la francophonie","프랑스어권, 프랑코포니","La francophonie désigne à la fois l'ensemble des locuteurs de français et les institutions qui organisent leur coopération."],
["un pays francophone","프랑스어권 국가","Dans de nombreux pays francophones d'Afrique, le français est appris à l'école mais rarement parlé à la maison."],
["un locuteur","화자","On compte aujourd'hui plus de trois cents millions de locuteurs de français répartis sur les cinq continents."],
["le nombre de locuteurs","화자 수","Le nombre de locuteurs augmente en Afrique alors que le français recule dans les réunions internationales."],
["la langue de travail","실무 언어, 업무 언어","Le français reste une langue de travail dans plusieurs organisations internationales, même si l'anglais y domine largement."],
["la langue administrative","행정 언어","Dans certains États africains, le français est la langue administrative sans être celle que les familles utilisent au quotidien."],
["le sommet de la Francophonie","프랑코포니 정상회의","Le sommet de la Francophonie réunit régulièrement les chefs d'État des pays membres autour de questions éducatives et culturelles."],
["l'Institut français","프랑스 문화원","L'Institut français propose des cours de langue et une programmation culturelle dans une centaine de pays."],
["le lycée français à l'étranger","재외 프랑스 학교","Les lycées français à l'étranger accueillent des expatriés mais aussi de nombreux élèves locaux attirés par ce cursus."],
["l'attractivité d'une langue","언어의 매력, 언어의 흡인력","L'attractivité d'une langue dépend surtout des études, des emplois et des œuvres auxquels elle donne accès."],
["le rayonnement","영향력 확산, 위상","Le rayonnement d'une langue ne se mesure pas seulement au nombre de ceux qui l'ont apprise à l'école."],
["la croissance démographique","인구 증가","La croissance démographique du continent africain explique l'essentiel de la progression attendue du français."],
["les échanges universitaires","대학 간 교류","Les échanges universitaires entre pays francophones restent freinés par le coût du voyage et les difficultés de visa."],
["une bourse d'études","장학금","Une bourse d'études permet chaque année à des milliers d'étudiants étrangers de suivre un cursus complet en France."],
["la coopération éducative","교육 협력","La coopération éducative représente une part importante du budget consacré à la diffusion de la langue française."],
["la diffusion culturelle","문화 보급","La diffusion culturelle passe désormais autant par les plateformes en ligne que par les instituts et les festivals."],
["la chanson francophone","프랑스어권 대중음악","La chanson francophone circule bien au-delà de la France, portée par des artistes belges, québécois et africains."],
["le sous-titrage","자막 제작","Le sous-titrage a beaucoup fait pour la circulation des films francophones auprès d'un public qui ne parle pas la langue."],
["le passé colonial","식민 지배의 과거","Le passé colonial pèse sur le discours officiel qui présente le français comme une langue de partage."],
["s'implanter","자리 잡다, 뿌리내리다","L'anglais s'est implanté dans les échanges commerciaux africains sans que le français y perde son rôle scolaire."],

/* — Apprendre une langue (20) — */
["l'apprentissage d'une langue","언어 학습","L'apprentissage d'une langue demande de la régularité bien plus que des séances longues mais espacées."],
["un apprenant","학습자","Un apprenant adulte progresse souvent vite en compréhension et beaucoup plus lentement à l'oral."],
["le niveau de compétence","능력 수준","Le niveau de compétence exigé pour travailler en France correspond généralement au B2 du cadre européen."],
["faire des progrès","실력이 늘다","On fait des progrès beaucoup plus vite dès qu'on accepte de parler malgré ses erreurs."],
["la prononciation","발음","La prononciation du français pose surtout problème aux apprenants à cause des voyelles nasales et des liaisons."],
["l'intonation","억양","L'intonation permet de distinguer une question d'une affirmation, même lorsque les mots sont exactement les mêmes."],
["le vocabulaire courant","일상 어휘","Le vocabulaire courant suffit à la vie quotidienne, mais pas à comprendre un débat télévisé sur l'actualité."],
["la compréhension orale","듣기 이해","La compréhension orale reste l'épreuve la plus redoutée par les candidats, car le débit des locuteurs est rapide."],
["l'expression orale","말하기 표현","L'expression orale s'améliore surtout quand on est obligé de parler, pas quand on révise des listes de mots."],
["l'expression écrite","작문 표현","L'expression écrite exige d'organiser ses idées avant de chercher le vocabulaire le plus précis."],
["oser parler","용기 내어 말하다","Beaucoup d'élèves comprennent l'anglais après sept ans de cours mais n'osent toujours pas parler devant la classe."],
["la peur de se tromper","틀릴까 봐 두려워함","La peur de se tromper bloque plus d'apprenants que le manque réel de vocabulaire ou de grammaire."],
["un séjour linguistique","어학 연수","Un séjour linguistique de quelques semaines fait souvent progresser davantage qu'une année entière de cours du soir."],
["un échange scolaire","학교 간 교환 프로그램","Un échange scolaire permet à l'élève de découvrir que la langue apprise sert vraiment à quelque chose."],
["une application d'apprentissage","학습 애플리케이션","Une application d'apprentissage entretient la motivation au quotidien, mais elle remplace difficilement une vraie conversation avec un locuteur."],
["la version originale","원어판, 원어 음성","Regarder une série en version originale avec des sous-titres habitue l'oreille aux tournures familières."],
["la mémorisation","암기, 기억하기","La mémorisation du vocabulaire fonctionne mieux par petites séances répétées que par longues révisions."],
["la motivation","동기, 학습 의욕","La motivation tient rarement plus de quelques semaines si l'apprenant ne voit aucun usage concret de la langue."],
["la persévérance","끈기","La persévérance compte davantage que le prétendu don pour les langues dont on parle si souvent."],
["l'ouverture culturelle","문화적 개방성","L'ouverture culturelle est l'un des bénéfices les plus cités par ceux qui ont vécu à l'étranger."],

/* — Orthographe et écrit (18) — */
["l'orthographe","철자법, 맞춤법","L'orthographe française occupe une part considérable des heures de cours à l'école primaire, au détriment de la rédaction."],
["une règle de grammaire","문법 규칙","Une règle de grammaire assortie de dix exceptions est plus longue à enseigner que la règle elle-même."],
["une exception","예외","Les exceptions orthographiques doivent être mémorisées une par une, sans qu'aucune logique aide l'élève."],
["les règles d'accord","일치 규칙","Les règles d'accord du participe passé restent la difficulté la plus signalée par les enseignants de français."],
["le pluriel des mots composés","복합어 복수형","Le pluriel des mots composés a été régularisé en 1990 afin de supprimer un piège devenu inutile."],
["la soudure des mots composés","복합어 붙여쓰기","La soudure des mots composés autorise désormais à écrire portemonnaie ou weekend en un seul mot, sans trait d'union."],
["une graphie","표기형, 철자 형태","Les deux graphies sont admises, et aucune ne peut être considérée comme fautive dans un devoir d'élève."],
["une graphie facultative","선택적 표기","L'accent circonflexe est devenu une graphie facultative sur les lettres i et u, sauf lorsqu'il distingue deux mots."],
["l'accent circonflexe","곡절 악센트","L'accent circonflexe a servi de symbole à une polémique qui portait en réalité sur le niveau scolaire."],
["le correcteur orthographique","맞춤법 검사기","Le correcteur orthographique repère les fautes de frappe mais laisse passer beaucoup d'erreurs d'accord."],
["une faute d'inattention","부주의로 인한 실수","Une faute d'inattention dans une candidature suffit encore, pour certains recruteurs, à écarter un dossier."],
["simplifier les règles","규칙을 단순화하다","Simplifier les règles libérerait des heures que l'on pourrait consacrer à la rédaction et à la lecture."],
["alléger le programme scolaire","교과 내용을 줄이다","Alléger le programme scolaire suppose de décider ce que l'on renonce à enseigner, ce qui est toujours difficile."],
["le manuel scolaire","교과서","Les manuels scolaires ont intégré les nouvelles graphies à la rentrée 2016, ce qui a relancé le débat public."],
["le temps scolaire","수업 시간, 학교 학습 시간","Le temps scolaire consacré à l'orthographe est du temps soustrait à l'expression écrite et à l'argumentation."],
["la relecture","교정, 다시 읽기","Une relecture attentive corrige la moitié des fautes que l'on commet en rédigeant rapidement."],
["rédiger une lettre de motivation","자기소개서를 쓰다","Rédiger une lettre de motivation sans faute reste une exigence implicite dans presque tous les recrutements."],
["le jugement sur les fautes","실수에 대한 평가·시선","Le jugement sur les fautes d'orthographe déborde largement la langue : il porte sur le sérieux de la personne."],

/* — Féminisation des noms de métiers (12) — */
["un nom de métier","직업 명칭","Certains noms de métiers n'ont longtemps existé qu'au masculin, alors que des femmes les exerçaient déjà."],
["un titre de fonction","직위 명칭","Les titres de fonction ont été les derniers à se féminiser, car ils désignaient les postes les plus prestigieux."],
["le genre grammatical","문법적 성","Le genre grammatical du français oblige à choisir entre le masculin et le féminin dans presque chaque phrase."],
["le masculin générique","총칭적 남성형","Le masculin générique permet de désigner un groupe mixte, mais il rend les femmes moins visibles."],
["une autrice","여성 작가","Le mot autrice, longtemps jugé étrange, est aujourd'hui employé couramment dans la presse littéraire."],
["une écrivaine","여성 작가·문필가","De nombreuses écrivaines revendiquent désormais le féminin, alors que d'autres continuent de préférer le masculin."],
["une professeure","여교사, 여교수","On écrit désormais une professeure dans les documents officiels de l'Éducation nationale, sans que cette forme surprenne encore personne."],
["une cheffe","여성 셰프, 여성 책임자","Le mot cheffe s'est installé dans la restauration bien avant d'être accepté dans l'administration."],
["Madame la maire","여성 시장님","Dire Madame la maire dans un courrier officiel est plus clair que de garder le masculin pour une femme."],
["un terme épicène","남녀 공통형 단어","Un terme épicène comme journaliste ou architecte s'emploie au masculin comme au féminin sans rien changer."],
["une circulaire administrative","행정 지침, 회람 공문","Une circulaire administrative peut recommander une forme, mais elle ne suffit pas à l'imposer dans l'usage."],
["la visibilité des femmes","여성의 가시성","La visibilité des femmes dans le vocabulaire des métiers influence la manière dont les élèves se projettent."],

/* — Français standard et variétés (15) — */
["le français standard","표준 프랑스어","Le français standard est la variété enseignée à l'école et employée dans les médias nationaux."],
["la norme scolaire","학교 규범","La norme scolaire sert de référence pour corriger les copies, mais elle ne décrit pas la langue réellement parlée."],
["la référence commune","공통 기준","Une référence commune permet à des locuteurs de quatre continents de se comprendre sans négocier le sens des mots."],
["le bon usage","올바른 용법","Ce qu'on appelle le bon usage correspond souvent à la manière de parler des milieux qui fixent la norme."],
["le français parlé","구어 프랑스어","Le français parlé supprime beaucoup de négations et de liaisons que l'écrit conserve scrupuleusement."],
["le français écrit","문어 프랑스어","Le français écrit demande une organisation des idées que la conversation n'exige presque jamais."],
["le langage soutenu","격식체, 문어적 어투","Le langage soutenu est attendu dans un courrier administratif, mais il sonne artificiel dans une conversation."],
["le langage familier","구어체, 격식 없는 말투","Le langage familier n'est pas une faute : c'est un registre adapté à certaines situations seulement."],
["une prononciation régionale","지역적 발음","Une prononciation régionale reste rare dans les journaux télévisés nationaux, sans qu'aucune règle l'interdise."],
["une variante lexicale","어휘 변이형","Septante et nonante sont des variantes lexicales parfaitement correctes en Belgique et en Suisse."],
["le français du Québec","퀘벡 프랑스어","Le français du Québec emploie couramment magasiner et courriel là où la France a gardé les mots anglais."],
["une expression régionale","지역 표현","Une expression régionale surprend d'abord l'apprenant, puis lui devient familière après quelques semaines sur place."],
["se faire comprendre","의사를 전달하다","Se faire comprendre compte finalement plus, dans un examen oral, que la perfection de la prononciation."],
["s'adapter à son interlocuteur","상대에 맞추다","Savoir s'adapter à son interlocuteur fait partie des compétences évaluées à l'épreuve de production orale."],
["la peur de parler","말하기에 대한 두려움","Trop insister sur la correction installe une peur de parler qui freine durablement l'apprentissage."],

/* — Anglicismes et évolution du lexique (15) — */
["un anglicisme","영어식 표현","Les anglicismes sont particulièrement nombreux dans le vocabulaire du numérique et du monde de l'entreprise."],
["un mot emprunté","차용어","Un mot emprunté finit par se franciser : on le conjugue, on l'accorde, et son origine s'oublie."],
["un équivalent français","프랑스어 대체어","Un équivalent français ne s'impose que s'il est court, clair et facile à employer au quotidien."],
["le franglais","프랑글레(영어 섞인 프랑스어)","On reproche au franglais des entreprises de rendre les réunions incompréhensibles pour une partie des salariés."],
["un néologisme","신조어","Un néologisme entre dans le dictionnaire lorsqu'il a été employé assez longtemps par assez de locuteurs."],
["le jargon professionnel","업계 전문 용어","Le jargon professionnel de l'entreprise sert parfois à impressionner ses interlocuteurs davantage qu'à leur transmettre une information claire."],
["le vocabulaire du numérique","디지털 분야 어휘","Le vocabulaire du numérique se renouvelle si vite que les équivalents officiels arrivent souvent trop tard."],
["le courriel","이메일","Le mot courriel est employé couramment au Québec, alors que la France a conservé le mot anglais."],
["l'hameçonnage","피싱","Le terme hameçonnage a été proposé pour remplacer le mot anglais désignant les courriels frauduleux."],
["une recommandation officielle","공식 권고","Une recommandation officielle publiée au Journal officiel n'oblige personne : seul l'usage décide vraiment."],
["l'étiquetage des produits","제품 표시·라벨","La loi impose l'étiquetage des produits en français afin que chaque consommateur comprenne ce qu'il achète."],
["un slogan publicitaire","광고 문구","Un slogan publicitaire rédigé en anglais doit être accompagné d'une traduction lisible en français."],
["la loi Toubon","툽옹법 (프랑스어 사용법)","La loi Toubon de 1994 impose le français dans la publicité, les contrats de travail et les documents des salariés."],
["l'évolution du lexique","어휘의 변화","L'évolution du lexique montre qu'une langue vivante emprunte, transforme et abandonne des mots sans cesse."],
["enrichir la langue","언어를 풍부하게 하다","Enrichir la langue consiste moins à interdire des mots qu'à en proposer de nouveaux qui fonctionnent."]

];
