/* sujets.js — 시험 문항 은행 (주제: La santé)
   문항 형식은 DELF B2 / DALF C1 실제 시험 구조를 따르되, 지문은 훈련용으로 작성한 것입니다.
   실제 언론 기사를 인용한 것이 아니므로 출처를 붙이지 않았습니다.
   epreuve: 'pe' 작문 · 'po' 구술 · 'ce' 독해
*/
window.SUJETS = [

/* ===================== DELF B2 — PRODUCTION ÉCRITE ===================== */
{id:"b2-pe-1", level:"B2", epreuve:"pe", theme:"b2-sante", sub:"le mois sans alcool",
 type:"Essai argumenté", mots:250, duree:60,
 consigne:"Le journal de votre ville publie un dossier sur le « mois sans alcool ». Vous réagissez dans le courrier des lecteurs : vous donnez votre opinion sur l'intérêt de ce type de campagne et vous l'illustrez d'exemples précis. (250 mots minimum)"},

{id:"b2-pe-2", level:"B2", epreuve:"pe", theme:"b2-sante", sub:"l'impact des écrans sur la santé mentale et physique des enfants",
 type:"Lettre formelle", mots:250, duree:60,
 consigne:"Le conseil d'école de votre quartier envisage d'interdire totalement les écrans aux enfants de moins de six ans dans les structures municipales. Vous écrivez au maire pour donner votre position, argumentée et nuancée, et proposer des mesures concrètes. (250 mots minimum)"},

{id:"b2-pe-3", level:"B2", epreuve:"pe", theme:"b2-sante", sub:"la sédentarité",
 type:"Lettre formelle", mots:250, duree:60,
 consigne:"Votre entreprise souhaite mettre en place un programme d'activité physique pendant les heures de travail. Vous écrivez à la direction pour soutenir ou contester ce projet, en argumentant et en proposant des aménagements précis. (250 mots minimum)"},

{id:"b2-pe-4", level:"B2", epreuve:"pe", theme:"b2-sante", sub:"la télémédecine",
 type:"Essai argumenté", mots:250, duree:60,
 consigne:"« Grâce à la téléconsultation, plus personne ne sera privé de médecin. » Vous discutez cette affirmation dans un article destiné au blog de votre association de quartier, en vous appuyant sur des exemples concrets. (250 mots minimum)"},

{id:"b2-pe-5", level:"B2", epreuve:"pe", theme:"b2-sante", sub:"la cigarette électronique",
 type:"Essai argumenté", mots:250, duree:60,
 consigne:"Faut-il interdire tous les arômes sucrés dans les cigarettes électroniques ? Vous exposez votre point de vue de manière argumentée dans une tribune destinée à un magazine de santé. (250 mots minimum)"},

{id:"b2-pe-6", level:"B2", epreuve:"pe", theme:"b2-sante", sub:"les régimes détox",
 type:"Essai argumenté", mots:250, duree:60,
 consigne:"Une influenceuse très suivie vend des « cures détox » à ses abonnés. Vous rédigez un article pour le journal de votre école de langue afin d'alerter les lecteurs, en expliquant pourquoi ces promesses posent problème. (250 mots minimum)"},

{id:"b2-pe-7", level:"B2", epreuve:"pe", theme:"b2-sante", sub:"le sommeil",
 type:"Lettre formelle", mots:250, duree:60,
 consigne:"Le lycée de votre ville envisage de retarder l'heure de début des cours à neuf heures pour tenir compte du sommeil des adolescents. Vous écrivez au proviseur pour donner votre avis argumenté sur ce projet. (250 mots minimum)"},

/* ===================== DELF B2 — PRODUCTION ORALE ===================== */
{id:"b2-po-1", level:"B2", epreuve:"po", theme:"b2-sante", sub:"la sédentarité",
 type:"Monologue suivi + débat", duree:20, prep:30,
 consigne:"Dégagez le problème soulevé par ce document, puis présentez votre opinion de manière construite (5 à 7 minutes). Vous défendrez ensuite votre point de vue face à l'examinateur.",
 support:"Trente minutes de marche par jour : la recommandation est connue de tous, et pourtant moins d'un adulte sur deux l'applique. Les campagnes se succèdent, les messages se répètent, les résultats stagnent. Certains y voient la preuve que l'information ne suffit pas : tant que la ville, le bureau et les transports imposeront la position assise, aucun slogan ne fera bouger la population. D'autres rappellent que chacun reste libre de son mode de vie et qu'une politique trop volontariste finirait par culpabiliser ceux qui n'ont ni le temps ni les moyens de faire du sport."},

{id:"b2-po-2", level:"B2", epreuve:"po", theme:"b2-sante", sub:"le mois sans alcool",
 type:"Monologue suivi + débat", duree:20, prep:30,
 consigne:"Dégagez le problème soulevé par ce document, puis présentez votre opinion de manière construite (5 à 7 minutes).",
 support:"Chaque mois de janvier, des centaines de milliers de personnes s'engagent à ne pas boire une goutte d'alcool pendant trente-et-un jours. Les participants rapportent un meilleur sommeil, plus d'énergie et une facture de courses allégée. Mais l'initiative dérange : dans un pays où le vin est présenté comme un patrimoine, une campagne de santé publique sur l'alcool ne va pas de soi. Ses détracteurs objectent qu'un mois d'abstinence n'a jamais soigné personne et qu'il peut même servir d'alibi pour les onze mois suivants."},

{id:"b2-po-3", level:"B2", epreuve:"po", theme:"b2-sante", sub:"l'impact des écrans sur la santé mentale et physique des enfants",
 type:"Monologue suivi + débat", duree:20, prep:30,
 consigne:"Dégagez le problème soulevé par ce document, puis présentez votre opinion de manière construite (5 à 7 minutes).",
 support:"Pas d'écran avant trois ans, pas de téléphone avant onze ans, pas de réseaux sociaux avant quinze : les recommandations d'experts sont désormais chiffrées. Reste à savoir qui doit les faire appliquer. Les familles, qui se heurtent chaque soir aux mêmes négociations ? L'école, déjà chargée de tout ? Ou les plateformes elles-mêmes, dont les applications sont précisément conçues pour retenir l'attention ? Chacun renvoie la responsabilité à l'autre, pendant que le temps d'écran des enfants continue d'augmenter."},

{id:"b2-po-4", level:"B2", epreuve:"po", theme:"b2-sante", sub:"la télémédecine",
 type:"Monologue suivi + débat", duree:20, prep:30,
 consigne:"Dégagez le problème soulevé par ce document, puis présentez votre opinion de manière construite (5 à 7 minutes).",
 support:"Dans un village sans médecin depuis quatre ans, la mairie a installé une cabine de téléconsultation. En vingt minutes, l'habitant obtient un avis médical et, si nécessaire, une ordonnance transmise à la pharmacie voisine. Le maire parle d'une petite révolution. Les médecins du département, eux, s'inquiètent : on ne palpe pas un ventre à travers un écran, et un dispositif de ce type risque surtout de dispenser l'État de résoudre le vrai problème, celui du manque de praticiens."},

{id:"b2-po-5", level:"B2", epreuve:"po", theme:"b2-sante", sub:"l'obésité",
 type:"Monologue suivi + débat", duree:20, prep:30,
 consigne:"Dégagez le problème soulevé par ce document, puis présentez votre opinion de manière construite (5 à 7 minutes).",
 support:"Faut-il taxer davantage les produits trop sucrés ? La mesure revient dans le débat chaque année. Ses partisans rappellent que le prix influence directement les achats et que les boissons sucrées restent moins chères que l'eau en bouteille dans certains quartiers. Ses adversaires répondent qu'une telle taxe frappe d'abord les ménages modestes, c'est-à-dire précisément ceux qu'elle prétend protéger, et qu'il vaudrait mieux agir sur la publicité destinée aux enfants."},

{id:"b2-po-6", level:"B2", epreuve:"po", theme:"b2-sante", sub:"la lutte contre le vieillissement",
 type:"Monologue suivi + débat", duree:20, prep:30,
 consigne:"Dégagez le problème soulevé par ce document, puis présentez votre opinion de manière construite (5 à 7 minutes).",
 support:"Crèmes, compléments, cures : le marché de l'anti-âge n'a jamais été aussi prospère. On y promet de ralentir le temps, parfois de l'arrêter. Pendant ce temps, l'espérance de vie en bonne santé stagne et les services qui accompagnent le grand âge manquent de personnel. Certains y voient un décalage révélateur : notre société investit dans la peur de vieillir plutôt que dans les conditions concrètes d'une vieillesse digne."},

/* ===================== DALF C1 — PRODUCTION ÉCRITE ===================== */
{id:"c1-pe-1", level:"C1", epreuve:"pe", theme:"c1-sante", sub:"les médecines alternatives",
 type:"Essai argumenté", mots:250, duree:150,
 consigne:"« Le succès des médecines alternatives n'est pas le signe d'un retour de l'irrationnel, mais celui d'un échec de la médecine officielle. » Dans un essai argumenté et structuré, vous discuterez cette affirmation en vous appuyant sur des exemples précis. (250 mots minimum)"},

{id:"c1-pe-2", level:"C1", epreuve:"pe", theme:"c1-sante", sub:"la vaccination obligatoire",
 type:"Essai argumenté", mots:250, duree:150,
 consigne:"Une politique de santé publique peut-elle légitimement contraindre l'individu au nom de la protection collective ? Vous répondrez à cette question dans un essai argumenté, en nuançant votre position. (250 mots minimum)"},

{id:"c1-pe-3", level:"C1", epreuve:"pe", theme:"c1-sante", sub:"l'obésité",
 type:"Essai argumenté", mots:250, duree:150,
 consigne:"« Traiter l'obésité par le médicament revient à soigner le symptôme d'un problème social. » Vous discuterez cette thèse dans un essai argumenté et structuré. (250 mots minimum)"},

{id:"c1-pe-4", level:"C1", epreuve:"pe", theme:"c1-sante", sub:"la méditation",
 type:"Synthèse de documents + essai", mots:490, duree:150,
 consigne:"1) Faites la synthèse des deux documents ci-dessous (200 à 240 mots). Vous ne devez pas donner votre opinion dans cette partie et vous ne devez pas reprendre les phrases des documents.\n2) Rédigez ensuite un essai argumenté (250 mots minimum) : la diffusion des pratiques de bien-être en entreprise améliore-t-elle réellement la santé des salariés ?",
 support:"DOCUMENT 1 — Entrée à l'hôpital dans les années 2010, la méditation de pleine conscience y occupe aujourd'hui une place reconnue. Des protocoles standardisés de huit semaines ont montré, dans des essais contrôlés, une efficacité réelle dans la prévention des rechutes dépressives. L'intérêt tient autant au résultat qu'à sa logique : le patient dispose d'un outil qu'il mobilise lui-même, sans effet indésirable médicamenteux et pour un coût dérisoire. Les praticiens rappellent toutefois que ces résultats valent pour des indications précises, dans un cadre encadré par des professionnels formés, et qu'ils ne se transposent pas automatiquement hors de l'hôpital.\n\nDOCUMENT 2 — En quelques années, la pleine conscience a quitté le cabinet pour l'open space. Séances hebdomadaires, applications offertes par l'employeur, ateliers de gestion du stress : le marché du bien-être en entreprise se porte bien. Des voix s'élèvent pourtant pour interroger cette diffusion. Proposer à un salarié de mieux respirer sans toucher à sa charge de travail, c'est lui demander de s'adapter à un environnement qu'on refuse de modifier. La souffrance au travail a des causes organisationnelles ; la traiter comme une affaire individuelle revient à en déplacer la responsabilité sur celui qui la subit."},

{id:"c1-pe-5", level:"C1", epreuve:"pe", theme:"c1-sante", sub:"les addictions",
 type:"Essai argumenté", mots:250, duree:150,
 consigne:"Faut-il continuer à répondre aux addictions par l'interdit ? Vous rédigerez un essai argumenté et structuré, en tenant compte des expériences menées à l'étranger. (250 mots minimum)"},

{id:"c1-pe-6", level:"C1", epreuve:"pe", theme:"c1-sante", sub:"l'automédication",
 type:"Essai argumenté", mots:250, duree:150,
 consigne:"« L'autonomie du patient n'a de sens que si elle est éclairée. » Vous discuterez cette formule à propos de l'automédication, dans un essai argumenté et nuancé. (250 mots minimum)"},

/* ===================== DALF C1 — PRODUCTION ORALE ===================== */
{id:"c1-po-1", level:"C1", epreuve:"po", theme:"c1-sante", sub:"la vaccination obligatoire",
 type:"Exposé à partir d'un dossier + débat", duree:30, prep:60,
 consigne:"À partir des documents suivants, vous dégagerez une problématique, vous construirez un exposé de 8 à 10 minutes, puis vous défendrez votre position devant le jury.",
 support:"DOCUMENT 1 — Depuis l'extension de l'obligation à onze vaccins, la couverture vaccinale des nourrissons a progressé de plusieurs points. Les défenseurs de la mesure y voient la démonstration qu'une règle claire vaut mieux qu'une longue campagne d'information : elle décharge les parents d'une décision difficile et protège ceux qui ne peuvent pas être vaccinés.\n\nDOCUMENT 2 — La France reste l'un des pays les plus vaccino-sceptiques du monde. Cette défiance ne s'explique pas par l'ignorance : elle plonge ses racines dans une mémoire de scandales sanitaires et dans une suspicion à l'égard des liens entre autorités et industrie. On peut imposer un vaccin ; on ne décrète pas la confiance. Les sociologues rappellent qu'une contrainte mal expliquée produit souvent l'effet inverse de celui qu'elle vise."},

{id:"c1-po-2", level:"C1", epreuve:"po", theme:"c1-sante", sub:"les médecines alternatives",
 type:"Exposé à partir d'un dossier + débat", duree:30, prep:60,
 consigne:"À partir des documents suivants, vous dégagerez une problématique, vous construirez un exposé de 8 à 10 minutes, puis vous défendrez votre position devant le jury.",
 support:"DOCUMENT 1 — Un patient sur deux déclare avoir eu recours à une pratique dite complémentaire. Interrogés, ces patients citent rarement l'efficacité comme motif premier : ils évoquent l'écoute, le temps accordé, le sentiment d'être considérés autrement que comme un organe malade. Ce constat, disent certains médecins, devrait moins conduire à condamner ces pratiques qu'à interroger ce que la médecine a cessé d'offrir.\n\nDOCUMENT 2 — Les signalements pour dérives sectaires dans le domaine de la santé progressent d'année en année. Les cas les plus graves concernent des malades atteints de cancer, encouragés à interrompre leur traitement au profit de protocoles sans fondement. Le droit parle alors de perte de chance. Entre l'hypnose pratiquée à l'hôpital et le praticien qui promet la guérison, il existe un continuum que l'absence de réglementation rend particulièrement difficile à trancher."},

{id:"c1-po-3", level:"C1", epreuve:"po", theme:"c1-sante", sub:"l'obésité",
 type:"Exposé à partir d'un dossier + débat", duree:30, prep:60,
 consigne:"À partir des documents suivants, vous dégagerez une problématique, vous construirez un exposé de 8 à 10 minutes, puis vous défendrez votre position devant le jury.",
 support:"DOCUMENT 1 — L'arrivée de traitements agissant sur les circuits de la satiété a bouleversé la prise en charge de l'obésité sévère. Pour des patients en échec depuis des années, l'effet est spectaculaire. Leur remboursement a donc été autorisé, mais sous conditions strictes : indication limitée, primo-prescription réservée aux spécialistes, suivi obligatoire. L'objectif affiché est d'éviter le détournement à visée esthétique, qui a déjà provoqué des pénuries pour les patients diabétiques.\n\nDOCUMENT 2 — La prévalence de l'obésité suit très exactement la courbe des inégalités sociales. Là où l'offre alimentaire se réduit à des produits transformés bon marché, où l'espace public n'invite pas à marcher, où le temps manque, la prévention par le conseil individuel reste sans effet. Financer un traitement coûteux sans agir sur cet environnement revient à traiter indéfiniment les conséquences d'une organisation sociale qu'on refuse de modifier."},

{id:"c1-po-4", level:"C1", epreuve:"po", theme:"c1-sante", sub:"les allergies",
 type:"Exposé à partir d'un dossier + débat", duree:30, prep:60,
 consigne:"À partir des documents suivants, vous dégagerez une problématique, vous construirez un exposé de 8 à 10 minutes, puis vous défendrez votre position devant le jury.",
 support:"DOCUMENT 1 — La progression des allergies respiratoires est trop rapide pour relever de la seule génétique. Les saisons polliniques s'allongent, la pollution atmosphérique fragilise les muqueuses, les espèces végétales les plus allergisantes étendent leur aire de répartition. Les chercheurs parlent d'exposome : l'ensemble des expositions accumulées au cours d'une vie, dont la santé porte la trace.\n\nDOCUMENT 2 — Sur le terrain, la réponse reste largement individuelle : antihistaminiques, désensibilisation, éviction de l'allergène, protocoles d'accueil à l'école. Ces mesures fonctionnent et améliorent la vie quotidienne de millions de personnes. Mais elles laissent intactes les causes, et leur coût croît chaque année. La question posée aux pouvoirs publics est donc moins médicale qu'environnementale — ce qui la rend infiniment plus difficile à trancher."},

{id:"c1-po-5", level:"C1", epreuve:"po", theme:"c1-sante", sub:"l'automédication",
 type:"Exposé à partir d'un dossier + débat", duree:30, prep:60,
 consigne:"À partir des documents suivants, vous dégagerez une problématique, vous construirez un exposé de 8 à 10 minutes, puis vous défendrez votre position devant le jury.",
 support:"DOCUMENT 1 — Le pharmacien peut désormais délivrer certains traitements après un test rapide, sans passer par le médecin. La mesure répond à une réalité : dans de nombreux territoires, obtenir un rendez-vous relève du parcours du combattant. Elle valorise une compétence disponible partout et désengorge des cabinets saturés.\n\nDOCUMENT 2 — Se soigner seul n'est pas toujours un choix. Les enquêtes montrent que le recours spontané au médicament progresse d'abord là où l'accès au soin recule, et chez ceux qui renoncent à consulter pour des raisons financières. Présenter cette évolution comme une conquête de l'autonomie revient à confondre la liberté et la contrainte. L'autonomie suppose une information fiable et un choix réel ; à défaut, elle n'est qu'un abandon."},

/* ===================== COMPRÉHENSION DES ÉCRITS ===================== */
{id:"b2-ce-1", level:"B2", epreuve:"ce", theme:"b2-sante", sub:"le sommeil",
 type:"Compréhension des écrits", duree:60,
 consigne:"Lisez le texte puis répondez aux questions.",
 support:"Nous dormons en moyenne une heure et demie de moins que nos grands-parents. Ce recul, longtemps considéré comme un détail du mode de vie moderne, est aujourd'hui traité comme un problème de santé publique à part entière. Les conséquences sont désormais bien établies : baisse de la vigilance, accidents de la route, troubles de l'humeur, prise de poids, affaiblissement des défenses immunitaires.\n\nLes causes, elles, dépassent largement les habitudes individuelles. Les écrans du soir retardent l'endormissement, mais ils ne sont qu'un facteur parmi d'autres. Le travail de nuit et les horaires décalés concernent des millions de salariés. Les logements mal isolés exposent au bruit. Les rythmes scolaires, enfin, ignorent une réalité pourtant documentée : à l'adolescence, l'horloge biologique se décale naturellement de deux heures, si bien qu'un lycéen qui se lève à six heures et demie est physiologiquement en pleine nuit.\n\nFace à ce constat, les campagnes de prévention insistent sur l'hygiène du sommeil : horaires réguliers, chambre sans écran, arrêt de la caféine en fin de journée. Ces conseils sont justes, mais leur portée reste limitée. Ils supposent en effet une maîtrise de son emploi du temps dont beaucoup ne disposent pas. Un aide-soignant en horaires postés, un parent isolé, un étudiant qui travaille le soir ne manquent pas d'information : ils manquent de marge de manœuvre.\n\nCertains chercheurs plaident donc pour un déplacement du regard. Plutôt que de multiplier les conseils individuels, il s'agirait d'agir sur l'organisation collective du temps : décaler l'heure d'entrée des lycées, limiter le recours au travail de nuit à ce qui est strictement nécessaire, réduire la pollution sonore et lumineuse des villes. Une telle approche suppose d'admettre une idée simple mais peu populaire : le sommeil n'est pas du temps perdu, et il ne relève pas seulement de la volonté de chacun.",
 questions:[
  "1. Quel changement le texte constate-t-il dans la durée de sommeil ? (2 points)",
  "2. Citez trois conséquences du manque de sommeil mentionnées dans le texte. (3 points)",
  "3. Selon le texte, pourquoi les rythmes scolaires posent-ils problème aux adolescents ? (3 points)",
  "4. « Ils manquent de marge de manœuvre. » Expliquez ce que l'auteur veut dire, avec vos propres mots. (4 points)",
  "5. L'auteur considère-t-il que les conseils d'hygiène du sommeil sont inutiles ? Justifiez votre réponse en citant le texte. (4 points)",
  "6. Quelle solution l'auteur privilégie-t-il ? Reformulez sa position en deux phrases. (4 points)",
  "7. Quel est le ton général du texte : polémique, informatif, ironique ou militant ? Justifiez. (5 points)"
 ]},

{id:"c1-ce-1", level:"C1", epreuve:"ce", theme:"c1-sante", sub:"les addictions",
 type:"Compréhension des écrits", duree:50,
 consigne:"Lisez le texte puis répondez aux questions.",
 support:"La France vit depuis un demi-siècle avec une contradiction qu'elle assume mal. Son droit, hérité d'une loi de 1970, repose sur une logique prohibitionniste : l'usage de stupéfiants y est une infraction. Sa pratique sanitaire, elle, s'est construite sur un principe inverse, celui de la réduction des risques, apparu dans les années quatre-vingt-dix face à l'épidémie de sida. Distribuer des seringues stériles, ouvrir des lieux d'accueil, prescrire des traitements de substitution : ces dispositifs ne visent pas à faire cesser la consommation, mais à en limiter les dommages.\n\nLes résultats ne sont guère contestés. Les contaminations ont chuté, les overdoses ont reculé, des usagers longtemps invisibles sont entrés en contact avec le système de soin. Ce qui l'est davantage, c'est la portée symbolique de ces mesures. Leurs adversaires y voient un signal de renoncement : en cessant de condamner, la société banaliserait. Leurs défenseurs répondent que la condamnation n'a jamais fait reculer l'usage, et qu'elle a surtout éloigné du soin ceux qui en avaient le plus besoin.\n\nLe déplacement le plus significatif est peut-être ailleurs. En intégrant les addictions comportementales — jeux d'argent, paris sportifs, usages compulsifs des écrans — l'addictologie a déplacé la frontière de son objet. Il n'y a plus de substance à interdire, mais des dispositifs conçus pour retenir l'attention et fabriquer le retour. La question n'est plus seulement celle du produit, mais celle de l'environnement qui organise la répétition. Elle vise alors moins l'usager que ceux qui tirent profit de son comportement.\n\nCe glissement du regard, du délinquant vers le patient, puis du patient vers l'industrie, n'est pas achevé. Il suppose d'abandonner une lecture morale profondément ancrée, selon laquelle l'addiction serait d'abord un défaut de volonté. Or c'est précisément cette lecture qui rend la politique publique française si difficile à réformer : on ne débat pas d'un dispositif technique, on débat de ce qu'une société estime devoir sanctionner.",
 questions:[
  "1. Reformulez en une phrase la contradiction que l'auteur attribue à la France. (4 points)",
  "2. Quelle est l'origine historique de la politique de réduction des risques ? (3 points)",
  "3. « Leurs adversaires y voient un signal de renoncement. » Expliquez cet argument et la réponse qui lui est faite. (5 points)",
  "4. En quoi les addictions comportementales modifient-elles la façon de poser le problème ? (5 points)",
  "5. « Elle vise alors moins l'usager que ceux qui tirent profit de son comportement. » Que suggère cette phrase sur les responsabilités ? (4 points)",
  "6. Quel obstacle principal l'auteur identifie-t-il à la réforme de la politique française ? (4 points)"
 ]}

];
