/* sante-dossiers.js — « La santé » 소주제 자료집 (B2 10개 + C1 7개, 전량)
   구조: ①problématique+최근 흐름 ②POUR/CONTRE ③프랑스 vs 한국 ④전문 어휘 ⑤표현 ⑥자료 ⑦작문 플랜
   ⚠ 프랑스어 논거·표현은 Claude 작성(원어민 검수 전). 링크는 검색으로 확인한 실제 URL.
*/
Object.assign(window.DOSSIERS, {

/* ================= DELF B2 ================= */

"b2-sante::la télémédecine":{
 ko:"원격 의료", updated:"2026-09-06",
 problematique:"La télémédecine répond-elle vraiment au problème des déserts médicaux, ou installe-t-elle une médecine à deux vitesses ?",
 contexte:[
  "2018 : la téléconsultation entre dans le droit commun du remboursement.",
  "2020 : la crise sanitaire fait exploser les usages en quelques semaines.",
  "2022-2023 : encadrement plus strict — plafonnement des arrêts de travail délivrés à distance, exigence d'un lien avec le médecin traitant.",
  "2025 : face à l'aggravation des déserts médicaux, le gouvernement assouplit certaines règles ; la Cour des comptes s'interroge sur l'efficience du dispositif.",
  "Enjeu actuel : la téléconsultation est-elle un complément du soin ou son substitut low cost dans les zones abandonnées ?"],
 pour:[
  "Elle réduit les délais d'attente et évite des déplacements longs aux patients isolés.",
  "Elle permet un accès rapide à un avis médical pour des motifs simples.",
  "Elle soulage les urgences de consultations qui n'en relèvent pas.",
  "Elle facilite le suivi régulier des maladies chroniques.",
  "Elle profite aux personnes à mobilité réduite et aux aidants."],
 contre:[
  "Elle ne permet ni auscultation ni examen clinique complet.",
  "Elle risque de multiplier les erreurs de diagnostic sur des symptômes atypiques.",
  "Elle exclut les personnes âgées et les publics éloignés du numérique.",
  "Elle peut servir de prétexte à ne pas remédier au manque réel de médecins.",
  "Elle ouvre la porte à des plateformes commerciales sans continuité du suivi."],
 fr_kr:{
  fr:"En France, le débat porte sur le remboursement, la régulation par l'Assurance maladie et le rôle du médecin traitant : la télémédecine est encadrée comme un acte médical à part entière.",
  kr:"한국은 원격 진료가 코로나 기간 한시 허용된 뒤 제도화 논의가 계속돼 왔고, 의료계 반발과 약 배송 문제가 쟁점입니다. 프랑스처럼 '주치의 제도 안에서의 원격 진료'라는 틀이 없다는 점이 대조 포인트입니다."},
 lexique:["la téléconsultation","le désert médical","le médecin traitant","le parcours de soins","la fracture numérique","l'examen clinique","le suivi à distance","la continuité des soins","le remboursement","la démographie médicale"],
 expressions:[
  {fr:"Ce dispositif suscite aujourd'hui de vives interrogations.",ko:"문제 제기"},
  {fr:"Il conviendrait d'encadrer strictement cette pratique.",ko:"conditionnel"},
  {fr:"Encore faut-il que le patient dispose d'une connexion fiable.",ko:"조건 (subjonctif)"},
  {fr:"Loin de remplacer le médecin, la télémédecine devrait le prolonger.",ko:"재정의형"},
  {fr:"Tout dépend de la manière dont elle est intégrée au parcours de soins.",ko:"균형 결론"}],
 ressources:[
  {type:"article",titre:"Maire-Info — Déserts médicaux : le gouvernement desserre la vis sur la téléconsultation",url:"https://www.maire-info.com/deserts-medicaux-le-gouvernement-desserre-un-peu-la-vis-sur-la-teleconsultation-article2-30415"},
  {type:"officiel",titre:"Ameli — la téléconsultation (conditions et remboursement)",url:"https://www.ameli.fr/"},
  {type:"vidéo",titre:"YouTube 검색어: « téléconsultation déserts médicaux débat »",url:"https://www.youtube.com/results?search_query=t%C3%A9l%C3%A9consultation+d%C3%A9serts+m%C3%A9dicaux+d%C3%A9bat"}],
 plan:{type:"Essai argumenté (찬반형)",steps:[
  "Introduction : le fait d'actualité (assouplissement des règles en 2025) → problématique.",
  "I. Ce que la télémédecine résout : délais, distance, suivi des chroniques.",
  "II. Ce qu'elle ne résout pas : examen clinique, fracture numérique, pénurie de médecins.",
  "Conclusion : un outil utile à condition d'être intégré, non substitué."]}
},

"b2-sante::la cigarette électronique":{
 ko:"전자담배", updated:"2026-09-06",
 problematique:"La cigarette électronique est-elle un outil de sevrage ou une nouvelle porte d'entrée dans la dépendance à la nicotine ?",
 contexte:[
  "2015-2019 : le vapotage se diffuse largement comme aide à l'arrêt du tabac.",
  "2021-2023 : arrivée des « puffs », vapoteuses jetables colorées et sucrées, très populaires chez les collégiens.",
  "2024 : mobilisation des associations de santé et des élus contre ces produits, jugés attractifs pour les mineurs et polluants.",
  "2025 : la France interdit la vente des puffs ; le débat se déplace vers les arômes et le marketing des produits rechargeables.",
  "Enjeu actuel : distinguer un dispositif de réduction des risques pour les fumeurs adultes d'un produit d'initiation pour les adolescents."],
 pour:[
  "Elle aide de nombreux fumeurs à réduire puis à arrêter leur consommation de tabac.",
  "Elle expose à beaucoup moins de substances cancérigènes que la combustion.",
  "Elle s'inscrit dans une politique de réduction des risques plutôt que d'interdiction.",
  "Elle permet un sevrage progressif, mieux accepté que l'arrêt brutal."],
 contre:[
  "Elle entretient la dépendance à la nicotine plutôt qu'elle ne la supprime.",
  "Ses effets à long terme ne sont pas encore documentés.",
  "Les arômes sucrés et les prix bas visent manifestement les jeunes.",
  "Les modèles jetables constituent un désastre environnemental (batteries au lithium).",
  "Elle peut banaliser le geste de fumer chez des adolescents non-fumeurs."],
 fr_kr:{
  fr:"La France agit par la loi et l'interdiction ciblée (puffs, vente aux mineurs), en s'appuyant sur les associations de santé publique et une tradition de régulation du tabac.",
  kr:"한국은 액상형 전자담배 유해성 논란 이후 세금·광고 규제 중심으로 접근했고, 금연 보조 수단으로 공식 인정하지 않는 편입니다. '위해 감소'라는 프랑스식 프레임 자체가 약하다는 점이 대조됩니다."},
 lexique:["le vapotage","la puff (vapoteuse jetable)","le sevrage tabagique","la dépendance à la nicotine","la réduction des risques","le produit d'initiation","l'arôme","le tabagisme passif","l'interdiction de vente aux mineurs","le déchet électronique"],
 expressions:[
  {fr:"Le débat oppose deux logiques : la réduction des risques et la prévention de l'initiation.",ko:"쟁점 정리"},
  {fr:"S'il est vrai qu'elle aide certains fumeurs, il n'en demeure pas moins qu'elle séduit les mineurs.",ko:"양보 후 반박"},
  {fr:"Il serait imprudent de conclure avant de disposer d'études à long terme.",ko:"신중한 결론"},
  {fr:"À moins que la publicité ne soit strictement encadrée, l'interdiction restera contournée.",ko:"subjonctif"}],
 ressources:[
  {type:"officiel",titre:"info.gouv.fr — Interdiction des « puffs »",url:"https://www.info.gouv.fr/actualite/linfo-gouv-du-14-fevrier-puffs-permis-de-conduire-et-france-identite"},
  {type:"officiel",titre:"Ministère de l'Économie — Interdiction des puffs : un tournant pour la santé et l'environnement",url:"https://presse.economie.gouv.fr/interdiction-des-puffs-un-tournant-pour-la-sante-et-lenvironnement/"},
  {type:"référence",titre:"Santé publique France — tabac et vapotage",url:"https://www.santepubliquefrance.fr/"},
  {type:"vidéo",titre:"YouTube 검색어: « puff interdiction France débat »",url:"https://www.youtube.com/results?search_query=puff+interdiction+France+d%C3%A9bat"}],
 plan:{type:"Lettre formelle / essai (B2)",steps:[
  "Introduction : rappeler l'interdiction des puffs comme point de départ.",
  "I. L'argument sanitaire des partisans : sortir du tabac fumé.",
  "II. L'argument de la protection des mineurs et de l'environnement.",
  "Conclusion : une régulation par l'usage plutôt qu'une interdiction générale."]}
},

"b2-sante::les régimes détox":{
 ko:"디톡스 다이어트", updated:"2026-09-06",
 problematique:"Pourquoi les régimes détox continuent-ils de séduire alors qu'aucune étude sérieuse n'en démontre l'efficacité ?",
 contexte:[
  "Depuis 2015 : les cures détox se diffusent massivement par les réseaux sociaux et les influenceurs bien-être.",
  "2019-2022 : les autorités sanitaires et l'Anses alertent sur les compléments alimentaires et les jeûnes prolongés.",
  "2023-2024 : la loi française encadre les pratiques commerciales des influenceurs, y compris dans le domaine de la santé et de l'amaigrissement.",
  "2025-2026 : la « détox » se recycle en jeûne intermittent et en programmes payants d'accompagnement.",
  "Enjeu actuel : la frontière entre bien-être, commerce et danger pour la santé."],
 pour:[
  "Ces cures poussent certains à réduire l'alcool, le sucre et les produits ultra-transformés.",
  "Elles créent une prise de conscience de ses propres habitudes alimentaires.",
  "Le sentiment de contrôle sur son corps peut avoir un effet psychologique positif.",
  "Une courte période d'alimentation simple ne présente pas de risque pour un adulte en bonne santé."],
 contre:[
  "Le corps dispose déjà d'organes qui assurent l'élimination : foie et reins.",
  "Aucune étude scientifique ne valide la notion de « toxines » évacuées par ces cures.",
  "Les restrictions sévères provoquent carences, fatigue et effet yo-yo.",
  "Elles favorisent un rapport anxieux à l'alimentation, surtout chez les jeunes femmes.",
  "Elles alimentent un marché très lucratif fondé sur des promesses invérifiables."],
 fr_kr:{
  fr:"En France, la critique passe par les autorités sanitaires et par la régulation de l'influence commerciale ; le discours dominant valorise l'alimentation équilibrée plutôt que la restriction.",
  kr:"한국에서는 '디톡스', '해독 주스' 등이 미용·다이어트 산업과 강하게 결합돼 있고, 규제보다는 소비자 선택의 문제로 다뤄지는 경향이 있습니다. 외모 규범의 압력이 더 직접적으로 언급된다는 점이 대조됩니다."},
 lexique:["la cure détox","la toxine","le jeûne intermittent","le complément alimentaire","la carence","l'effet yo-yo","le rapport au corps","l'influenceur bien-être","la publicité mensongère","l'alimentation équilibrée"],
 expressions:[
  {fr:"Cette pratique repose sur une croyance plus que sur des preuves.",ko:"통념 반박"},
  {fr:"Il serait souhaitable que les allégations santé soient mieux contrôlées.",ko:"subjonctif"},
  {fr:"On peut comprendre l'attrait de ces cures sans pour autant en cautionner les promesses.",ko:"양보"},
  {fr:"Mieux vaudrait privilégier des habitudes durables qu'une privation ponctuelle.",ko:"권고형 결론"}],
 ressources:[
  {type:"référence",titre:"Anses — compléments alimentaires et régimes amaigrissants",url:"https://www.anses.fr/"},
  {type:"référence",titre:"Manger Bouger (Santé publique France) — repères alimentaires",url:"https://www.mangerbouger.fr/"},
  {type:"vidéo",titre:"YouTube 검색어: « régime détox mythe ou réalité »",url:"https://www.youtube.com/results?search_query=r%C3%A9gime+d%C3%A9tox+mythe+ou+r%C3%A9alit%C3%A9"}],
 plan:{type:"Essai argumenté (통념 반박형)",steps:[
  "Introduction : le succès commercial de la détox → problématique.",
  "I. Ce qui explique le succès : simplicité, promesse rapide, réseaux sociaux.",
  "II. Ce que dit la science : absence de preuves, risques réels.",
  "Conclusion : déplacer la question vers l'éducation alimentaire."]}
},

"b2-sante::l'impact des écrans sur la santé mentale et physique des enfants":{
 ko:"어린이 스크린 노출의 영향", updated:"2026-09-06",
 problematique:"Faut-il réglementer l'exposition des enfants aux écrans, ou est-ce d'abord aux familles de fixer les limites ?",
 contexte:[
  "2019-2021 : les confinements banalisent l'usage des écrans, y compris chez les très jeunes enfants.",
  "Avril 2024 : une commission d'experts remet au président de la République le rapport « Enfants et écrans : à la recherche du temps perdu ».",
  "Ses recommandations : aucun écran avant 3 ans, pas de téléphone avant 11 ans, pas de réseaux sociaux avant 15 ans.",
  "2024-2025 : expérimentation de la « pause numérique » au collège ; débat sur l'interdiction des réseaux sociaux aux mineurs.",
  "Enjeu actuel : la responsabilité se déplace de la famille vers l'État et les plateformes."],
 pour:[ /* pour = encadrer / réglementer */
  "Les experts établissent un lien entre exposition précoce et retards de langage.",
  "Le temps d'écran réduit le sommeil, l'activité physique et la concentration.",
  "La myopie progresse fortement chez les enfants très exposés.",
  "Les plateformes sont conçues pour capter l'attention : l'enfant ne peut lutter seul.",
  "Une règle commune soulage les parents de négociations quotidiennes."],
 contre:[
  "Tout dépend du contenu et de l'accompagnement, non de la seule durée.",
  "Les écrans sont aussi des outils d'apprentissage et de socialisation.",
  "Une interdiction générale creuserait l'écart avec les familles déjà équipées et informées.",
  "L'éducation au numérique paraît plus efficace qu'une interdiction contournable.",
  "Culpabiliser les parents ne remplace pas une politique éducative."],
 fr_kr:{
  fr:"La France a choisi la voie de l'expertise publique et de la recommandation d'État, avec des seuils d'âge précis et des expérimentations en milieu scolaire.",
  kr:"한국은 스마트폰 과의존 예방 교육과 학교 내 휴대폰 규정 중심으로 접근했고, 2020년대 들어 학생 휴대폰 수거의 인권 문제까지 논쟁이 확장됐습니다. 국가 권고 연령 기준을 제시하는 프랑스 방식과 대조됩니다."},
 lexique:["le temps d'écran","l'exposition précoce","le retard de langage","le trouble de l'attention","la myopie","l'économie de l'attention","la pause numérique","l'éducation au numérique","le contrôle parental","la recommandation d'âge"],
 expressions:[
  {fr:"Ce rapport a relancé un débat qui dépasse le cadre familial.",ko:"문제 제기"},
  {fr:"Il faudrait que l'école accompagne les familles plutôt qu'elle ne les remplace.",ko:"subjonctif"},
  {fr:"Ce n'est pas tant la durée qui pose problème que la nature des contenus.",ko:"논점 재정의"},
  {fr:"Un encadrement clair semble indispensable.",ko:"균형 결론"}],
 ressources:[
  {type:"rapport",titre:"Rapport « Enfants et écrans : à la recherche du temps perdu » (avril 2024, PDF)",url:"https://www.elysee.fr/admin/upload/default/0001/16/fbec6abe9d9cc1bff3043d87b9f7951e62779b09.pdf"},
  {type:"officiel",titre:"info.gouv.fr — Pas d'écran avant trois ans",url:"https://www.info.gouv.fr/actualite/pas-decran-avant-trois-ans"},
  {type:"officiel",titre:"solidarites.gouv.fr — Écrans : des risques pour la santé des enfants",url:"https://solidarites.gouv.fr/enfants-et-ecrans-des-risques-sanitaires-reels-un-accompagnement-necessaire"},
  {type:"vidéo",titre:"YouTube 검색어: « enfants et écrans rapport débat France »",url:"https://www.youtube.com/results?search_query=enfants+et+%C3%A9crans+rapport+d%C3%A9bat+France"}],
 plan:{type:"Essai argumenté (찬반형)",steps:[
  "Introduction : les recommandations du rapport de 2024 → problématique.",
  "I. Les arguments en faveur d'un encadrement strict (santé, sommeil, attention).",
  "II. Les limites d'une interdiction : contenu, inégalités, contournement.",
  "Conclusion : encadrement + éducation, responsabilité partagée."]}
},

"b2-sante::l'obésité":{
 ko:"비만", updated:"2026-09-06",
 problematique:"L'obésité relève-t-elle de la responsabilité individuelle ou d'un environnement alimentaire qu'il faudrait réglementer ?",
 contexte:[
  "2010-2020 : mise en place du Nutri-Score et des campagnes « Manger Bouger ».",
  "2021-2023 : la prévalence continue de progresser, particulièrement chez les jeunes adultes et dans les milieux modestes.",
  "2023-2025 : arrivée des traitements de la classe des GLP-1, d'abord détournés à des fins d'amaigrissement.",
  "2026 : la France encadre leur prise en charge — remboursement réservé à l'obésité sévère et primo-prescription confiée aux spécialistes.",
  "Enjeu actuel : le médicament déplace le débat, mais ne règle ni l'alimentation ni les inégalités sociales."],
 pour:[ /* pour = politique publique contraignante */
  "L'obésité est un facteur de risque majeur pour le diabète et les maladies cardiovasculaires.",
  "L'environnement alimentaire (prix, publicité, produits ultra-transformés) pèse plus que la volonté individuelle.",
  "Les inégalités sociales de santé se lisent directement dans les chiffres de l'obésité.",
  "La régulation de la publicité destinée aux enfants a fait ses preuves ailleurs.",
  "Prévenir coûte moins cher que traiter des complications à vie."],
 contre:[
  "Une politique trop contraignante est perçue comme une atteinte à la liberté de consommer.",
  "Taxer les produits sucrés pénalise d'abord les ménages modestes.",
  "Le discours de prévention peut glisser vers la stigmatisation des personnes concernées.",
  "Les nouveaux traitements coûtent très cher pour un système déjà déficitaire.",
  "Le médicament risque d'être vu comme une solution de facilité."],
 fr_kr:{
  fr:"La France articule information (Nutri-Score), fiscalité et désormais prise en charge médicamenteuse encadrée ; le débat mobilise le vocabulaire des inégalités sociales.",
  kr:"한국은 비만율 자체는 낮지만 증가 속도가 빠르고, 논의가 건강보다 외모·다이어트 산업으로 기울어 있습니다. '사회적 불평등으로서의 비만'이라는 프랑스식 프레임이 약한 점이 대조 포인트입니다."},
 lexique:["l'obésité","le surpoids","la prévalence","le Nutri-Score","les produits ultra-transformés","la taxe sur les boissons sucrées","les inégalités sociales de santé","la stigmatisation","le facteur de risque","la prise en charge médicamenteuse"],
 expressions:[
  {fr:"Ce phénomène ne saurait être réduit à un simple manque de volonté.",ko:"통념 반박 (subjonctif)"},
  {fr:"Il conviendrait d'agir sur l'offre autant que sur la demande.",ko:"conditionnel"},
  {fr:"Dans la mesure où l'environnement alimentaire détermine les choix, la responsabilité est collective.",ko:"조건·인과"},
  {fr:"La prévention mérite d'être privilégiée par rapport au traitement.",ko:"우선순위 제시"}],
 ressources:[
  {type:"officiel",titre:"service-public.fr — Deux médicaments contre l'obésité remboursés",url:"https://www.service-public.gouv.fr/particuliers/actualites/A18932?lang=fr"},
  {type:"référence",titre:"Vidal — Prise en charge de Wegovy et Mounjaro, sous conditions",url:"https://www.vidal.fr/actualites/37850-obesite-prise-en-charge-de-wegovy-et-mounjaro-a-partir-du-15-juin-2026-sous-conditions.html"},
  {type:"officiel",titre:"Manger Bouger — repères et Nutri-Score",url:"https://www.mangerbouger.fr/"},
  {type:"vidéo",titre:"YouTube 검색어: « obésité France débat santé publique »",url:"https://www.youtube.com/results?search_query=ob%C3%A9sit%C3%A9+France+d%C3%A9bat+sant%C3%A9+publique"}],
 plan:{type:"Essai argumenté (책임 소재형)",steps:[
  "Introduction : le remboursement encadré des traitements en 2026 → problématique.",
  "I. La thèse de la responsabilité individuelle et ses limites.",
  "II. Le poids de l'environnement alimentaire et des inégalités.",
  "Conclusion : une responsabilité partagée, une politique globale."]}
},

"b2-sante::le traitement de maladies par les jeux vidéos":{
 ko:"게임을 이용한 질환 치료", updated:"2026-09-06",
 problematique:"Le jeu vidéo peut-il devenir un véritable outil thérapeutique, alors même qu'on l'accuse par ailleurs de nuire à la santé ?",
 contexte:[
  "Années 2010 : premiers usages en rééducation motrice après un AVC et en kinésithérapie.",
  "2020-2022 : développement des « thérapies numériques » validées cliniquement, notamment pour le trouble de l'attention.",
  "2022-2024 : usages en santé mentale (anxiété, phobies) via la réalité virtuelle, et en formation des soignants.",
  "2025-2026 : la question du remboursement et de l'évaluation scientifique de ces dispositifs se pose sérieusement.",
  "Enjeu actuel : le même objet est présenté comme addictif d'un côté et thérapeutique de l'autre."],
 pour:[
  "Le jeu motive le patient à répéter des exercices ennuyeux mais nécessaires.",
  "Il permet de mesurer précisément les progrès de la rééducation.",
  "La réalité virtuelle offre un cadre sécurisé pour affronter des phobies.",
  "Il rend le soin plus acceptable pour les enfants et les adolescents.",
  "Il peut rompre l'isolement des patients hospitalisés au long cours."],
 contre:[
  "Peu de dispositifs disposent d'une validation clinique solide.",
  "L'effet mesuré est parfois surtout un effet de nouveauté.",
  "Le risque d'usage excessif reste réel chez des publics fragiles.",
  "Le coût des équipements limite l'accès aux structures bien dotées.",
  "L'industrie du jeu profite d'une image thérapeutique commode."],
 fr_kr:{
  fr:"En France, ces dispositifs doivent passer par l'évaluation des autorités de santé pour espérer un remboursement : le débat est d'abord méthodologique.",
  kr:"한국은 게임 산업이 크고 '게임 이용 장애' 질병코드 도입 논쟁이 강했던 탓에, 치료적 활용 논의가 산업 옹호 담론과 얽혀 있습니다. 평가·상환 절차 중심의 프랑스 논의와 결이 다릅니다."},
 lexique:["la thérapie numérique","la rééducation","la réalité virtuelle","le dispositif médical","la validation clinique","l'observance","le trouble de l'attention","l'effet de nouveauté","l'usage excessif","le remboursement"],
 expressions:[
  {fr:"Ce paradoxe mérite d'être interrogé.",ko:"문제 제기"},
  {fr:"Encore faudrait-il que ces dispositifs soient évalués rigoureusement.",ko:"조건 (subjonctif)"},
  {fr:"Le jeu vidéo n'est ni un remède ni un poison : tout dépend de l'usage.",ko:"균형 결론"},
  {fr:"On aurait tort d'opposer systématiquement écran et santé.",ko:"통념 반박"}],
 ressources:[
  {type:"référence",titre:"Inserm — recherche en santé numérique",url:"https://www.inserm.fr/"},
  {type:"référence",titre:"Haute Autorité de Santé — évaluation des dispositifs médicaux numériques",url:"https://www.has-sante.fr/"},
  {type:"vidéo",titre:"YouTube 검색어: « jeu vidéo thérapeutique rééducation France »",url:"https://www.youtube.com/results?search_query=jeu+vid%C3%A9o+th%C3%A9rapeutique+r%C3%A9%C3%A9ducation"}],
 plan:{type:"Essai argumenté (역설형)",steps:[
  "Introduction : le paradoxe écran nuisible / écran soignant.",
  "I. Les usages thérapeutiques documentés.",
  "II. Les limites : preuves, coût, publics fragiles.",
  "Conclusion : l'usage encadré plutôt que le jugement global."]}
},

"b2-sante::le sommeil":{
 ko:"수면", updated:"2026-09-06",
 problematique:"Le manque de sommeil est-il un problème individuel ou le symptôme d'une organisation sociale qui ne laisse plus de place au repos ?",
 contexte:[
  "Depuis 2015 : les enquêtes montrent une baisse continue de la durée moyenne de sommeil des Français.",
  "2019-2022 : le télétravail et les écrans du soir brouillent la frontière entre journée et nuit.",
  "2023-2025 : la santé du sommeil entre dans les campagnes de prévention au même titre que l'alimentation.",
  "Débat récurrent : horaires scolaires trop matinaux pour les adolescents, travail de nuit, éclairage urbain.",
  "Enjeu actuel : reconnaître le sommeil comme un déterminant de santé et non comme du temps perdu."],
 pour:[ /* pour = agir collectivement */
  "Le manque de sommeil augmente les risques d'accident, d'obésité et de dépression.",
  "Les adolescents ont des besoins physiologiques incompatibles avec les horaires scolaires actuels.",
  "Le coût économique de la somnolence (accidents, absentéisme) est considérable.",
  "Le travail de nuit est reconnu comme facteur de risque par les autorités sanitaires."],
 contre:[
  "Chacun reste libre d'organiser ses nuits comme il l'entend.",
  "Décaler les horaires scolaires désorganiserait les familles et les transports.",
  "Certains métiers essentiels ne peuvent pas se passer du travail de nuit.",
  "Le discours sur le « bon sommeil » crée une nouvelle source d'anxiété."],
 fr_kr:{
  fr:"En France, la question passe par la santé au travail, les rythmes scolaires et les campagnes de Santé publique France.",
  kr:"한국은 수면 부족이 학업·근로 시간 문제와 직결되고, '잠을 줄이는 것'이 성실함으로 평가받는 문화가 배경입니다. 학교 시작 시간 논쟁은 양국 모두 있지만 근거의 축이 다릅니다."},
 lexique:["la durée de sommeil","l'insomnie","la somnolence","le rythme circadien","la dette de sommeil","le travail de nuit","les rythmes scolaires","la lumière bleue","l'hygiène du sommeil","l'absentéisme"],
 expressions:[
  {fr:"Ce phénomène est révélateur d'une évolution plus large de nos modes de vie.",ko:"징후 해석"},
  {fr:"Il serait temps que les horaires scolaires tiennent compte de la physiologie des adolescents.",ko:"subjonctif"},
  {fr:"Le sommeil n'est pas du temps perdu, mais une condition de la santé.",ko:"재정의"},
  {fr:"Des mesures ciblées vaudraient mieux qu'un discours culpabilisant.",ko:"conditionnel 결론"}],
 ressources:[
  {type:"référence",titre:"Santé publique France — sommeil et santé",url:"https://www.santepubliquefrance.fr/"},
  {type:"référence",titre:"Inserm — dossier sommeil",url:"https://www.inserm.fr/"},
  {type:"vidéo",titre:"YouTube 검색어: « manque de sommeil France santé publique »",url:"https://www.youtube.com/results?search_query=manque+de+sommeil+France+sant%C3%A9+publique"}],
 plan:{type:"Essai argumenté (개인 vs 사회형)",steps:[
  "Introduction : la baisse de la durée de sommeil → problématique.",
  "I. Les causes individuelles et les habitudes.",
  "II. Les causes collectives : horaires, travail, écrans.",
  "Conclusion : une politique du temps plus qu'un conseil individuel."]}
},

"b2-sante::la lutte contre le vieillissement":{
 ko:"노화 억제", updated:"2026-09-06",
 problematique:"Chercher à retarder le vieillissement, est-ce prolonger la vie en bonne santé ou refuser une réalité humaine ?",
 contexte:[
  "Années 2010 : essor du marché anti-âge, cosmétique puis médical.",
  "2020-2023 : la recherche sur la longévité attire des investissements considérables, notamment aux États-Unis.",
  "2023-2025 : en France, le débat porte surtout sur l'espérance de vie en bonne santé, qui stagne, et sur la prise en charge du grand âge.",
  "2025-2026 : les compléments et cures « anti-âge » se multiplient sans évaluation solide.",
  "Enjeu actuel : allonger la vie ou améliorer les années vécues ?"],
 pour:[
  "Retarder les maladies liées à l'âge réduirait la dépendance et son coût.",
  "La recherche sur le vieillissement bénéficie aussi au traitement de maladies chroniques.",
  "Vieillir en bonne santé permet de rester actif et socialement intégré.",
  "La prévention (activité physique, alimentation, sommeil) a des effets démontrés."],
 contre:[
  "La plupart des produits « anti-âge » relèvent du marketing, non de la science.",
  "Cette quête entretient une norme sociale de jeunesse et une dévalorisation des personnes âgées.",
  "Allonger la vie sans améliorer sa qualité aggraverait la dépendance.",
  "Les moyens investis dans la longévité manquent aux soins courants.",
  "L'inégalité d'accès créerait une longévité réservée aux plus aisés."],
 fr_kr:{
  fr:"Le débat français est dominé par l'espérance de vie en bonne santé, la perte d'autonomie et le financement du grand âge, plus que par la promesse d'immortalité.",
  kr:"한국은 초고령사회 진입 속도가 세계에서 가장 빨라 노인 빈곤·돌봄이 중심 논점이고, 동시에 안티에이징 시장은 미용 산업과 결합해 매우 큽니다. 두 축이 분리돼 있다는 점이 대조됩니다."},
 lexique:["le vieillissement","l'espérance de vie en bonne santé","la longévité","la perte d'autonomie","le grand âge","l'anti-âge","le jeunisme","la prévention","la dépendance","la qualité de vie"],
 expressions:[
  {fr:"Cette ambition soulève autant d'espoirs que de questions éthiques.",ko:"문제 제기"},
  {fr:"Mieux vaudrait ajouter de la vie aux années que des années à la vie.",ko:"대조 표현"},
  {fr:"Quelque prometteuses que soient ces recherches, elles ne dispensent pas d'une politique du grand âge.",ko:"양보 (subjonctif)"},
  {fr:"L'essentiel n'est pas tant la durée que la qualité des années vécues.",ko:"논점 재정의"}],
 ressources:[
  {type:"référence",titre:"Inserm — vieillissement",url:"https://www.inserm.fr/"},
  {type:"référence",titre:"Insee — espérance de vie et espérance de vie en bonne santé",url:"https://www.insee.fr/"},
  {type:"vidéo",titre:"YouTube 검색어: « vieillissement longévité débat France Culture »",url:"https://www.youtube.com/results?search_query=vieillissement+long%C3%A9vit%C3%A9+d%C3%A9bat+France+Culture"}],
 plan:{type:"Essai argumenté (가치 판단형)",steps:[
  "Introduction : l'essor du marché anti-âge → problématique.",
  "I. Ce que la lutte contre le vieillissement apporte réellement.",
  "II. Ses dérives : marketing, jeunisme, inégalités.",
  "Conclusion : recentrer sur l'espérance de vie en bonne santé."]}
},

"b2-sante::la sédentarité":{
 ko:"좌식 생활", updated:"2026-09-06",
 problematique:"Comment lutter contre la sédentarité dans une société où le travail, les transports et les loisirs se font assis ?",
 contexte:[
  "2016 : la loi introduit le « sport sur ordonnance » pour les patients atteints d'affections de longue durée.",
  "2020-2022 : les confinements aggravent nettement la sédentarité, surtout chez les jeunes.",
  "2022-2024 : élargissement de la prescription d'activité physique adaptée ; développement des Maisons Sport-Santé.",
  "2025 : lancement de la Stratégie nationale sport-santé 2025-2030, avec une série de mesures pour tous les publics.",
  "Enjeu actuel : passer de la recommandation individuelle à l'aménagement du cadre de vie."],
 pour:[ /* pour = action publique */
  "La sédentarité est identifiée comme un facteur de risque majeur, indépendamment du surpoids.",
  "Trente minutes d'activité quotidienne réduisent nettement le risque cardiovasculaire.",
  "L'activité physique adaptée améliore l'état de patients atteints de maladies chroniques.",
  "Aménager les villes (pistes cyclables, escaliers, parcs) agit sur tous sans effort individuel.",
  "Intervenir tôt à l'école installe des habitudes durables."],
 contre:[
  "Prescrire du sport ne suffit pas si l'accès aux équipements reste inégal.",
  "Le manque de temps et la fatigue professionnelle constituent le premier obstacle.",
  "Le remboursement de l'activité physique reste très limité.",
  "Les campagnes culpabilisent sans changer les conditions de vie.",
  "Le sport devient parfois une injonction sociale de plus."],
 fr_kr:{
  fr:"La France médicalise partiellement la question (prescription, Maisons Sport-Santé) tout en la reliant à l'urbanisme et à l'école.",
  kr:"한국은 장시간 노동과 통근이 활동량 부족의 핵심 원인으로 지목되고, 정책은 생활체육 인프라 확충 쪽에 무게가 실립니다. '운동 처방'처럼 의료 제도 안에 넣는 접근은 아직 약합니다."},
 lexique:["la sédentarité","l'activité physique adaptée","le sport sur ordonnance","la prescription médicale","le facteur de risque cardiovasculaire","la mobilité active","l'aménagement urbain","les Maisons Sport-Santé","l'inégalité d'accès","l'habitude durable"],
 expressions:[
  {fr:"Le problème ne relève pas seulement de la volonté individuelle.",ko:"책임 재배치"},
  {fr:"Il faudrait que l'environnement quotidien rende le mouvement naturel.",ko:"subjonctif"},
  {fr:"Une politique ambitieuse suppose des moyens à la hauteur.",ko:"조건 제시"},
  {fr:"Tout dépend de la manière dont ces mesures sont mises en œuvre.",ko:"균형 결론"}],
 ressources:[
  {type:"officiel",titre:"sports.gouv.fr — Stratégie nationale sport-santé 2025-2030",url:"https://www.sports.gouv.fr/strategie-nationale-sport-sante-2025-2030-9927"},
  {type:"référence",titre:"HAS — consultation et prescription médicale d'activité physique",url:"https://www.has-sante.fr/jcms/c_2876862/fr/consultation-et-prescription-medicale-d-activite-physique-a-des-fins-de-sante"},
  {type:"vidéo",titre:"YouTube 검색어: « sédentarité sport sur ordonnance France »",url:"https://www.youtube.com/results?search_query=s%C3%A9dentarit%C3%A9+sport+sur+ordonnance+France"}],
 plan:{type:"Lettre formelle (지자체 제안형) 또는 essai",steps:[
  "Introduction : constat chiffré de la sédentarité → objectif de la lettre / problématique.",
  "I. Les effets sanitaires et le coût collectif.",
  "II. Les propositions concrètes : aménagements, école, entreprise.",
  "Conclusion : demande précise ou synthèse nuancée."]}
},

"b2-sante::le mois sans alcool":{
 ko:"금주의 달(Dry January)", updated:"2026-09-06",
 problematique:"Une campagne comme le « mois sans alcool » relève-t-elle de la santé publique ou de la morale individuelle ?",
 contexte:[
  "2013 : lancement du Dry January au Royaume-Uni.",
  "2020 : la France annule un soutien officiel à la campagne, ce qui provoque une controverse sur l'influence du lobby viticole.",
  "2021-2024 : le « Défi de janvier » est porté par des associations, sans campagne d'État comparable à celles sur le tabac.",
  "2025 : la participation progresse, notamment chez les jeunes, tandis qu'une contre-campagne « French January » valorise la consommation modérée de vin.",
  "Enjeu actuel : l'alcool occupe en France une place culturelle et économique qui complique toute politique de santé publique."],
 pour:[
  "Une pause d'un mois permet de mesurer sa propre dépendance.",
  "Les participants rapportent un meilleur sommeil et une baisse de la consommation les mois suivants.",
  "L'alcool est la deuxième cause de mortalité évitable en France.",
  "La campagne rend le sujet discutable sans stigmatiser les personnes.",
  "Elle s'adresse à tous, et pas seulement aux consommateurs à risque."],
 contre:[
  "Un mois d'abstinence peut servir d'alibi pour onze mois d'excès.",
  "La campagne vise surtout ceux qui boivent déjà modérément.",
  "Elle ne touche pas les personnes en difficulté avec l'alcool, qui relèvent d'un accompagnement médical.",
  "Certains y voient une intrusion moralisatrice dans la vie privée.",
  "Le secteur viticole met en avant l'emploi et le patrimoine culturel."],
 fr_kr:{
  fr:"Le cas français est singulier : l'État hésite à soutenir officiellement la campagne, ce qui met en lumière le poids du secteur du vin dans le débat sanitaire.",
  kr:"한국은 음주가 회식·직장 문화와 결합돼 있어 개인 캠페인보다 문화 자체가 쟁점이 됩니다. '국가가 캠페인을 지원하느냐'라는 프랑스식 논쟁 구도는 없고, 주류 광고 규제 정도가 유사 논점입니다."},
 lexique:["le mois sans alcool","l'abstinence temporaire","la consommation à risque","la mortalité évitable","le lobby viticole","la santé publique","la modération","la dépendance","la campagne de prévention","le patrimoine culturel"],
 expressions:[
  {fr:"Cette initiative met en évidence une contradiction française.",ko:"문제 제기"},
  {fr:"Il est permis de douter qu'un mois suffise à modifier durablement les habitudes.",ko:"subjonctif"},
  {fr:"Bien qu'elle soit critiquée, cette campagne a le mérite d'ouvrir le débat.",ko:"양보 (subjonctif)"},
  {fr:"L'essentiel est moins l'abstinence que la prise de conscience.",ko:"논점 재정의"}],
 ressources:[
  {type:"article",titre:"France 24 — Le Dry January entre engouement et pression des lobbys",url:"https://www.france24.com/fr/france/20250101-dry-january-france-mois-sans-alcool-engouement-pression-des-lobbys-vin"},
  {type:"association",titre:"AIDES / Remaides — Le Défi de janvier",url:"https://www.aides.org/actualite/lactu-remaides-defi-janvier-dry-2025"},
  {type:"référence",titre:"Santé publique France — alcool",url:"https://www.santepubliquefrance.fr/"},
  {type:"vidéo",titre:"YouTube 검색어: « Dry January France débat lobby »",url:"https://www.youtube.com/results?search_query=Dry+January+France+d%C3%A9bat+lobby"}],
 plan:{type:"Essai argumenté (공공정책 평가형)",steps:[
  "Introduction : la controverse sur le soutien de l'État → problématique.",
  "I. L'utilité sanitaire de la campagne.",
  "II. Ses limites et les résistances économiques et culturelles.",
  "Conclusion : une campagne utile mais insuffisante sans politique globale."]}
},

/* ================= DALF C1 ================= */

"c1-sante::les médecines alternatives":{
 ko:"대체 의학", updated:"2026-09-06",
 problematique:"L'engouement pour les médecines alternatives traduit-il une exigence légitime d'écoute, ou une défiance envers la rationalité scientifique ?",
 contexte:[
  "Années 2010 : intégration de certaines pratiques complémentaires à l'hôpital (hypnose, méditation) en soins de support.",
  "2018-2021 : mobilisation de médecins contre les « fake medecines » ; déremboursement de l'homéopathie en France.",
  "2022-2024 : la Miviludes signale une progression des dérives sectaires dans le champ de la santé, notamment sur les réseaux sociaux.",
  "2025 : le débat oppose ceux qui distinguent pratiques complémentaires encadrées et pseudo-médecines dangereuses.",
  "Enjeu actuel : la frontière entre accompagnement du patient et abandon du soin conventionnel."],
 pour:[
  "Ces pratiques répondent à un besoin d'écoute que la médecine pressée satisfait mal.",
  "Certaines, comme l'hypnose, disposent de données probantes en soins de support.",
  "Elles rendent le patient acteur de son parcours et améliorent l'observance.",
  "Elles soulagent des symptômes que la médecine conventionnelle traite imparfaitement.",
  "Leur succès révèle des défaillances réelles du système de soins."],
 contre:[
  "L'absence d'évaluation rigoureuse empêche de distinguer effet propre et effet placebo.",
  "Le retard de diagnostic peut avoir des conséquences irréversibles.",
  "Certains praticiens exploitent la vulnérabilité des malades graves.",
  "La Miviludes documente des emprises sectaires dans ce champ.",
  "Le discours « holistique » entretient une défiance générale envers l'institution médicale."],
 fr_kr:{
  fr:"Le débat français est structuré par l'État (Miviludes, Ordre des médecins, déremboursement) et par une tradition de rationalisme médical explicitement revendiquée.",
  kr:"한국은 한의학이 제도권 안에 있어(면허·건강보험 적용) '대체 의학' 개념 자체가 프랑스와 다르게 배치됩니다. 프랑스에서 문제 삼는 것은 제도 밖 무자격 시술이며, 이 차이를 지적하면 C1 논술에서 매우 강한 대조가 됩니다."},
 lexique:["la médecine complémentaire","la médecine fondée sur les preuves","l'effet placebo","la dérive sectaire","le retard de diagnostic","le soin de support","la défiance institutionnelle","le déremboursement","la vulnérabilité du patient","l'emprise"],
 expressions:[
  {fr:"Cet engouement en dit long sur l'état de la relation de soin.",ko:"징후 해석"},
  {fr:"Quelque légitimes que soient ces attentes, elles ne sauraient justifier l'abandon du traitement.",ko:"양보 (subjonctif ×2)"},
  {fr:"Il importe de distinguer ce qui relève de l'accompagnement et ce qui relève du charlatanisme.",ko:"구분 제시"},
  {fr:"Loin d'être irrationnel, ce recours répond à un manque réel.",ko:"통념 반박"},
  {fr:"La question n'est pas tant celle de l'efficacité que celle de l'encadrement.",ko:"논점 전환"}],
 ressources:[
  {type:"presse",titre:"Politis — Médecine alternative : l'ombre sectaire, selon la Miviludes",url:"https://www.politis.fr/articles/2025/04/idees-medecine-alternative-miviludes-lombre-sectaire/"},
  {type:"officiel",titre:"Miviludes — dérives sectaires dans le domaine de la santé",url:"https://www.derives-sectes.gouv.fr/"},
  {type:"radio",titre:"France Culture — dossiers santé et rationalité",url:"https://www.radiofrance.fr/franceculture"},
  {type:"vidéo",titre:"YouTube 검색어: « médecines alternatives dérives débat France »",url:"https://www.youtube.com/results?search_query=m%C3%A9decines+alternatives+d%C3%A9rives+d%C3%A9bat+France"}],
 plan:{type:"Essai C1 (변증법형)",steps:[
  "Introduction : accroche (le succès des pratiques dites douces) → définition → problématique → annonce du plan.",
  "I. Thèse : une demande légitime que la médecine conventionnelle néglige.",
  "II. Antithèse : une zone grise où prospèrent dérives et retards de soin.",
  "III. Synthèse : déplacer la question de la croyance vers la régulation et la qualité de la relation de soin.",
  "Conclusion : bilan + ouverture sur la formation des soignants."]}
},

"c1-sante::la vaccination obligatoire":{
 ko:"백신 의무화", updated:"2026-09-06",
 problematique:"L'obligation vaccinale est-elle une atteinte à la liberté individuelle ou la condition même d'une solidarité sanitaire ?",
 contexte:[
  "2018 : la France étend l'obligation vaccinale des nourrissons de trois à onze vaccins.",
  "2020-2022 : la crise sanitaire réactive violemment le débat, avec le passe sanitaire et l'obligation pour les soignants.",
  "2023-2024 : levée de certaines obligations, mais la défiance vaccinale demeure supérieure à la moyenne européenne.",
  "2025-2026 : la couverture vaccinale de certains vaccins recommandés reste insuffisante, notamment chez les adolescents.",
  "Enjeu actuel : restaurer la confiance sans revenir à la contrainte généralisée."],
 pour:[
  "L'immunité collective protège ceux qui ne peuvent pas être vaccinés.",
  "L'obligation a fait remonter les taux de couverture des nourrissons depuis 2018.",
  "La liberté individuelle trouve sa limite dans le risque imposé à autrui.",
  "Elle décharge les parents d'une décision difficile face à la désinformation.",
  "Le rapport bénéfice-risque des vaccins concernés est massivement favorable."],
 contre:[
  "La contrainte peut renforcer la défiance qu'elle prétend combattre.",
  "Elle heurte le principe du consentement éclairé, central en éthique médicale.",
  "Les scandales sanitaires passés expliquent une méfiance qu'on ne lève pas par la loi.",
  "L'information et l'accès gratuit obtiennent parfois de meilleurs résultats que l'obligation.",
  "Le débat se déplace vers la confiance envers l'industrie pharmaceutique, que l'obligation n'adresse pas."],
 fr_kr:{
  fr:"La France est l'un des pays les plus vaccino-sceptiques d'Europe, ce qui explique le recours à la loi ; le débat mêle éthique, mémoire des scandales sanitaires et défiance envers l'État.",
  kr:"한국은 국가예방접종사업의 신뢰도가 높고 접종률도 높아 의무화 자체가 큰 쟁점이 되지 않습니다. 코로나 시기 방역 순응도가 높았던 점을 대조하면 '신뢰와 강제'의 관계를 논할 수 있습니다."},
 lexique:["l'obligation vaccinale","l'hésitation vaccinale","l'immunité collective","la couverture vaccinale","le consentement éclairé","la balance bénéfice-risque","la défiance institutionnelle","le scandale sanitaire","la contrainte légale","la solidarité sanitaire"],
 expressions:[
  {fr:"Ce débat oppose deux conceptions de la liberté.",ko:"쟁점 구조화"},
  {fr:"Il conviendrait de restaurer la confiance avant d'envisager toute nouvelle contrainte.",ko:"conditionnel"},
  {fr:"À supposer même que l'obligation soit efficace, elle ne règle pas la question de la confiance.",ko:"가정 (subjonctif)"},
  {fr:"On ne saurait réduire la défiance à de l'irrationalité.",ko:"통념 반박"},
  {fr:"La contrainte ne vaut que si elle est comprise.",ko:"조건부 결론"}],
 ressources:[
  {type:"officiel",titre:"Vaccination Info Service — politique vaccinale en France",url:"https://vaccination-info-service.fr/Questions-frequentes/Questions-generales-sur-la-vaccination/Politique-vaccinale-en-France"},
  {type:"radio",titre:"Radio France — Anti-vaccins, le doute inoculé (débats de l'actu)",url:"https://mediateur.radiofrance.com/infos/debats-de-lactu-anti-vaccins-doute-inocule/"},
  {type:"référence",titre:"Santé publique France — couverture vaccinale",url:"https://www.santepubliquefrance.fr/"},
  {type:"vidéo",titre:"YouTube 검색어: « obligation vaccinale débat éthique France »",url:"https://www.youtube.com/results?search_query=obligation+vaccinale+d%C3%A9bat+%C3%A9thique+France"}],
 plan:{type:"Essai C1 (변증법형)",steps:[
  "Introduction : rappel de l'extension de 2018 et de l'épisode sanitaire → problématique.",
  "I. Thèse : la santé publique justifie la contrainte.",
  "II. Antithèse : la contrainte fragilise le consentement et nourrit la défiance.",
  "III. Synthèse : la confiance comme condition d'efficacité de toute politique vaccinale.",
  "Conclusion : ouverture sur l'éducation à l'esprit critique."]}
},

"c1-sante::l'obésité":{
 ko:"비만 (C1)", updated:"2026-09-06",
 problematique:"Traiter l'obésité par le médicament, est-ce un progrès thérapeutique ou l'aveu d'un échec des politiques de prévention ?",
 contexte:[
  "2000-2020 : les politiques de prévention (étiquetage, campagnes, taxation) montrent des résultats limités.",
  "2023-2025 : les analogues du GLP-1 transforment la prise en charge et suscitent un engouement mondial, y compris hors indication.",
  "2026 : la France conditionne strictement leur remboursement — obésité sévère, primo-prescription par des spécialistes.",
  "Parallèlement : la prévalence continue de croître dans les milieux les plus modestes.",
  "Enjeu actuel : un traitement coûteux qui individualise un problème d'origine largement sociale."],
 pour:[
  "Ces traitements apportent une réponse à des patients en échec thérapeutique depuis des années.",
  "Ils réduisent les complications cardiovasculaires et métaboliques.",
  "Encadrer leur remboursement évite le détournement esthétique.",
  "Ils font reculer la culpabilisation en montrant les déterminants biologiques du poids."],
 contre:[
  "Leur coût menace l'équilibre financier de l'Assurance maladie.",
  "Ils déplacent l'effort de la prévention collective vers le traitement individuel.",
  "L'arrêt du traitement s'accompagne le plus souvent d'une reprise de poids.",
  "Ils renforcent la médicalisation d'un phénomène social.",
  "L'accès risque d'être socialement inégal, alors que l'obésité frappe d'abord les plus modestes."],
 fr_kr:{
  fr:"La France arbitre explicitement entre innovation coûteuse et soutenabilité du système solidaire ; la question du reste à charge et de l'égalité d'accès structure le débat.",
  kr:"한국은 GLP-1 계열 약이 비급여 미용 목적으로 빠르게 확산됐고, 공적 급여 논의보다 오남용·품귀가 쟁점이었습니다. '연대 재정 안에서의 배분'이라는 프랑스식 논점이 약합니다."},
 lexique:["la prévalence","le déterminant social de santé","la médicalisation","l'analogue du GLP-1","la prise en charge conditionnelle","le reste à charge","la soutenabilité du système","la prévention primaire","l'échec thérapeutique","l'inégalité d'accès"],
 expressions:[
  {fr:"Ce basculement thérapeutique appelle une lecture critique.",ko:"논점 제시"},
  {fr:"Il serait paradoxal de financer le traitement sans agir sur les causes.",ko:"conditionnel"},
  {fr:"Si prometteuse soit-elle, cette innovation ne dispense pas d'une politique de prévention.",ko:"양보 (subjonctif)"},
  {fr:"Le médicament traite le symptôme d'un problème qui, lui, demeure social.",ko:"재정의"},
  {fr:"Tout porte à croire que la question deviendra celle de l'allocation des ressources.",ko:"전망"}],
 ressources:[
  {type:"référence",titre:"Vidal — Prise en charge de Wegovy et Mounjaro sous conditions",url:"https://www.vidal.fr/actualites/37850-obesite-prise-en-charge-de-wegovy-et-mounjaro-a-partir-du-15-juin-2026-sous-conditions.html"},
  {type:"officiel",titre:"service-public.fr — médicaments contre l'obésité remboursés",url:"https://www.service-public.gouv.fr/particuliers/actualites/A18932?lang=fr"},
  {type:"presse",titre:"Le Monde — rubrique Sciences / Santé",url:"https://www.lemonde.fr/sciences/"},
  {type:"vidéo",titre:"YouTube 검색어: « médicaments obésité remboursement débat France »",url:"https://www.youtube.com/results?search_query=m%C3%A9dicaments+ob%C3%A9sit%C3%A9+remboursement+d%C3%A9bat+France"}],
 plan:{type:"Essai C1 (변증법형)",steps:[
  "Introduction : le remboursement conditionnel de 2026 → problématique.",
  "I. Thèse : une avancée thérapeutique réelle pour des patients en impasse.",
  "II. Antithèse : une médicalisation coûteuse qui masque les déterminants sociaux.",
  "III. Synthèse : articuler traitement et prévention dans un cadre de justice sanitaire.",
  "Conclusion : ouverture sur l'allocation des ressources en santé."]}
},

"c1-sante::les allergies":{
 ko:"알레르기", updated:"2026-09-06",
 problematique:"La progression continue des allergies révèle-t-elle un problème médical, ou d'abord une transformation de notre environnement de vie ?",
 contexte:[
  "Depuis les années 1980 : la prévalence des allergies respiratoires et alimentaires augmente régulièrement dans les pays industrialisés.",
  "2015-2020 : allongement des saisons polliniques attribué au réchauffement climatique ; alertes des réseaux de surveillance.",
  "2021-2024 : renforcement de l'étiquetage des allergènes alimentaires et des protocoles en milieu scolaire.",
  "2025-2026 : les allergies s'inscrivent dans le champ de la santé environnementale, aux côtés de la pollution de l'air intérieur.",
  "Enjeu actuel : traiter les symptômes ou agir sur les causes environnementales."],
 pour:[ /* pour = lecture environnementale */
  "L'augmentation est trop rapide pour s'expliquer par la seule génétique.",
  "La pollution atmosphérique aggrave la réactivité aux pollens.",
  "Le réchauffement allonge et intensifie les saisons polliniques.",
  "L'air intérieur, les produits ménagers et les matériaux jouent un rôle documenté.",
  "Une politique environnementale agirait sur la cause plutôt que sur le symptôme."],
 contre:[
  "Le lien de causalité reste difficile à établir de manière individuelle.",
  "L'amélioration du diagnostic explique une part de la hausse observée.",
  "Les traitements et la désensibilisation apportent des résultats concrets et immédiats.",
  "Une lecture uniquement environnementale risque de déresponsabiliser la prise en charge médicale.",
  "Les mesures environnementales produisent leurs effets à très long terme."],
 fr_kr:{
  fr:"La France relie de plus en plus les allergies à la santé environnementale et à la surveillance des pollens ; l'école est un lieu clé de la prise en charge (protocoles d'accueil individualisé).",
  kr:"한국은 미세먼지와 알레르기의 연관이 대중적으로 강하게 인식되고, 학교 급식 알레르기 관리가 주요 쟁점입니다. 기후 변화와 화분 계절 연장이라는 프레임은 상대적으로 덜 다뤄집니다."},
 lexique:["la prévalence","l'allergène","la saison pollinique","la désensibilisation","la santé environnementale","l'air intérieur","le perturbateur endocrinien","l'étiquetage des allergènes","la comorbidité","la surveillance épidémiologique"],
 expressions:[
  {fr:"Cette progression interroge autant le médecin que l'urbaniste.",ko:"논점 확장"},
  {fr:"Il ne suffit pas de traiter les symptômes pour enrayer le phénomène.",ko:"한계 지적"},
  {fr:"Bien que la causalité soit complexe, la convergence des indices est frappante.",ko:"양보 (subjonctif)"},
  {fr:"L'enjeu consiste moins à soigner qu'à prévenir.",ko:"논점 재정의"}],
 ressources:[
  {type:"référence",titre:"Anses — allergies et santé environnementale",url:"https://www.anses.fr/"},
  {type:"référence",titre:"Inserm — dossier allergies",url:"https://www.inserm.fr/"},
  {type:"référence",titre:"RNSA — surveillance des pollens en France",url:"https://www.pollens.fr/"},
  {type:"vidéo",titre:"YouTube 검색어: « allergies pollens changement climatique France »",url:"https://www.youtube.com/results?search_query=allergies+pollens+changement+climatique+France"}],
 plan:{type:"Essai C1 / synthèse",steps:[
  "Introduction : le constat épidémiologique → problématique.",
  "I. Les explications médicales classiques et leurs limites.",
  "II. L'hypothèse environnementale et ses arguments.",
  "III. Ce que cela implique pour l'action publique.",
  "Conclusion : santé environnementale comme cadre d'analyse."]}
},

"c1-sante::les addictions":{
 ko:"중독", updated:"2026-09-06",
 problematique:"Faut-il continuer à traiter les addictions par l'interdit, alors que la logique de réduction des risques semble plus efficace ?",
 contexte:[
  "1970 : la loi française fonde une approche largement prohibitionniste des stupéfiants.",
  "Années 1990-2000 : la politique de réduction des risques s'impose progressivement face au VIH.",
  "2016-2022 : ouverture des salles de consommation à moindre risque, très débattues politiquement.",
  "2020-2025 : l'addictologie s'élargit aux addictions comportementales — écrans, jeux d'argent en ligne, paris sportifs chez les jeunes.",
  "Enjeu actuel : penser l'addiction comme un problème de santé plutôt que comme une faute morale."],
 pour:[ /* pour = réduction des risques */
  "La réduction des risques a fait chuter les contaminations et les overdoses.",
  "Elle maintient un lien avec des personnes que la répression éloigne du soin.",
  "L'addiction relève d'un mécanisme neurobiologique, non d'un simple manque de volonté.",
  "L'approche sanitaire permet d'agir aussi sur les addictions sans substance.",
  "Les pays ayant dépénalisé l'usage n'ont pas connu l'explosion annoncée."],
 contre:[
  "Certains craignent un signal de banalisation, notamment auprès des mineurs.",
  "Les dispositifs de proximité suscitent l'opposition des riverains.",
  "La régulation du jeu en ligne reste très en retard sur les pratiques.",
  "L'accompagnement suppose des moyens en psychiatrie que le système n'a plus.",
  "La frontière entre usage intensif et addiction reste discutée scientifiquement."],
 fr_kr:{
  fr:"La France cumule un cadre légal ancien et répressif et une pratique sanitaire de réduction des risques : cette contradiction est au cœur du débat public.",
  kr:"한국은 마약 관련 법이 매우 엄격하고 처벌 중심이며, '위해 감소' 개념 자체가 정책 언어로 거의 쓰이지 않습니다. 반면 게임·도박 중독은 일찍부터 질병·규제 대상으로 논의돼 왔다는 점이 흥미로운 대조입니다."},
 lexique:["l'addictologie","la réduction des risques","la prohibition","la dépénalisation","l'addiction comportementale","le jeu d'argent en ligne","la salle de consommation à moindre risque","la neurobiologie de l'addiction","la stigmatisation","l'accompagnement thérapeutique"],
 expressions:[
  {fr:"Cette contradiction traverse toute la politique française en la matière.",ko:"구조적 모순 지적"},
  {fr:"Il serait illusoire de croire que l'interdit suffit à faire disparaître l'usage.",ko:"conditionnel"},
  {fr:"Quoi qu'on pense de ces dispositifs, leurs résultats sanitaires sont documentés.",ko:"양보 (subjonctif)"},
  {fr:"Le déplacement du regard moral vers le regard médical constitue l'enjeu central.",ko:"논점 정리"}],
 ressources:[
  {type:"référence",titre:"OFDT — Observatoire français des drogues et des tendances addictives",url:"https://www.ofdt.fr/"},
  {type:"référence",titre:"Santé publique France — addictions",url:"https://www.santepubliquefrance.fr/"},
  {type:"radio",titre:"France Culture — dossiers addictions",url:"https://www.radiofrance.fr/franceculture"},
  {type:"vidéo",titre:"YouTube 검색어: « réduction des risques addictions débat France »",url:"https://www.youtube.com/results?search_query=r%C3%A9duction+des+risques+addictions+d%C3%A9bat+France"}],
 plan:{type:"Essai C1 (변증법형)",steps:[
  "Introduction : le décalage entre la loi de 1970 et les pratiques actuelles → problématique.",
  "I. Thèse : l'interdit comme protection collective.",
  "II. Antithèse : l'efficacité démontrée de la réduction des risques.",
  "III. Synthèse : sortir de l'opposition morale/santé, penser la régulation.",
  "Conclusion : ouverture sur les addictions comportementales."]}
},

"c1-sante::l'automédication":{
 ko:"자가 투약", updated:"2026-09-06",
 problematique:"L'automédication est-elle l'expression légitime de l'autonomie du patient, ou le symptôme d'un système de soins devenu inaccessible ?",
 contexte:[
  "2008 : certains médicaments passent devant le comptoir des pharmacies, en libre accès.",
  "2015-2020 : la vente en ligne de médicaments se développe sous conditions strictes.",
  "2021-2024 : allongement des délais de rendez-vous et déserts médicaux : le recours spontané au médicament progresse.",
  "2023-2026 : pénuries récurrentes (antibiotiques, paracétamol) et extension du rôle du pharmacien, autorisé à délivrer certains traitements après test.",
  "Enjeu actuel : redéfinir la frontière entre autonomie du patient et sécurité du soin."],
 pour:[
  "Elle répond rapidement à des symptômes bénins sans mobiliser un médecin.",
  "Elle désengorge des consultations déjà saturées.",
  "Le pharmacien constitue un professionnel de santé de proximité et de conseil.",
  "Elle reconnaît la compétence du patient sur sa propre santé.",
  "Elle réduit le coût pour la collectivité sur des pathologies mineures."],
 contre:[
  "Elle expose aux interactions médicamenteuses et aux surdosages, notamment chez les personnes âgées.",
  "Elle peut masquer les signes d'une pathologie plus grave.",
  "Elle contribue à l'antibiorésistance lorsqu'elle porte sur des restes d'ordonnances.",
  "Elle progresse surtout là où l'accès au médecin est difficile : ce n'est pas un choix libre.",
  "Elle brouille la responsabilité en cas d'accident thérapeutique."],
 fr_kr:{
  fr:"La France encadre strictement la publicité et la délivrance, tout en élargissant les compétences du pharmacien pour compenser la pénurie médicale.",
  kr:"한국은 의약분업 이후 처방약 접근이 엄격하고, 편의점 상비약 확대 논의가 유사한 쟁점입니다. 다만 약사 권한 확대가 프랑스만큼 진행되지 않았다는 점이 대조됩니다."},
 lexique:["l'automédication","le médicament en libre accès","l'interaction médicamenteuse","le surdosage","l'antibiorésistance","le rôle du pharmacien","l'autonomie du patient","le renoncement aux soins","la iatrogénie","la responsabilité médicale"],
 expressions:[
  {fr:"Ce recours croissant mérite d'être interprété avec prudence.",ko:"신중한 해석"},
  {fr:"Il conviendrait de distinguer l'automédication choisie de l'automédication subie.",ko:"구분 (conditionnel)"},
  {fr:"Loin d'être un simple confort, elle traduit souvent une contrainte.",ko:"통념 반박"},
  {fr:"Encore faut-il que le patient dispose d'une information fiable.",ko:"조건 (subjonctif)"},
  {fr:"L'autonomie n'a de sens que si elle est éclairée.",ko:"조건부 결론"}],
 ressources:[
  {type:"officiel",titre:"ANSM — médicaments en accès direct et bon usage",url:"https://ansm.sante.fr/"},
  {type:"officiel",titre:"Ameli — automédication : précautions",url:"https://www.ameli.fr/"},
  {type:"référence",titre:"Vidal — actualités du médicament",url:"https://www.vidal.fr/actualites.html"},
  {type:"vidéo",titre:"YouTube 검색어: « automédication risques France pharmacien »",url:"https://www.youtube.com/results?search_query=autom%C3%A9dication+risques+France+pharmacien"}],
 plan:{type:"Essai C1 (해석형)",steps:[
  "Introduction : la progression du recours spontané au médicament → problématique.",
  "I. Thèse : une autonomie légitime et un système désengorgé.",
  "II. Antithèse : un risque sanitaire et une contrainte déguisée en liberté.",
  "III. Synthèse : l'automédication accompagnée, avec un rôle redéfini du pharmacien.",
  "Conclusion : ouverture sur l'accès aux soins."]}
},

"c1-sante::la méditation":{
 ko:"명상", updated:"2026-09-06",
 problematique:"La diffusion de la méditation dans le soin et l'entreprise relève-t-elle d'une avancée thérapeutique ou d'une injonction à s'adapter à un environnement pathogène ?",
 contexte:[
  "Années 2010 : la méditation de pleine conscience entre à l'hôpital, notamment dans la prévention des rechutes dépressives.",
  "2015-2020 : diffusion massive par les applications de bien-être ; le marché explose.",
  "2020-2023 : expérimentations en milieu scolaire et en entreprise, avec des controverses sur la laïcité et sur la finalité managériale.",
  "2024-2026 : la question de l'évaluation scientifique et de la formation des intervenants devient centrale.",
  "Enjeu actuel : une pratique validée dans un cadre clinique précis, mais généralisée bien au-delà."],
 pour:[
  "Certains protocoles disposent de données probantes dans la prévention des rechutes dépressives.",
  "La pratique donne au patient un outil qu'il peut mobiliser lui-même.",
  "Elle réduit le recours à certains traitements médicamenteux.",
  "Elle introduit dans le soin une attention au vécu subjectif du patient.",
  "Son coût est faible au regard des bénéfices rapportés."],
 contre:[
  "Généralisée hors cadre clinique, elle perd la rigueur de ses protocoles d'origine.",
  "En entreprise, elle peut servir à faire accepter des conditions de travail inchangées.",
  "Elle individualise des souffrances dont les causes sont collectives.",
  "Le marché du bien-être exploite une pratique sans formation encadrée.",
  "Elle peut être contre-indiquée pour certains troubles psychiques."],
 fr_kr:{
  fr:"En France, la diffusion de la méditation se heurte à la question de la laïcité, à celle de l'évaluation scientifique et à une critique sociale du « bien-être » comme outil managérial.",
  kr:"한국에서는 명상·마음챙김이 종교적 배경보다 자기계발·스트레스 관리 담론과 결합되어 확산됐고, 기업 복지 프로그램으로 도입되는 경우가 많습니다. '노동 조건을 바꾸지 않고 개인에게 적응을 요구한다'는 프랑스식 비판이 상대적으로 약합니다."},
 lexique:["la pleine conscience","le protocole clinique","la prévention de la rechute","l'évaluation scientifique","le marché du bien-être","l'injonction au bonheur","l'individualisation des souffrances","la laïcité","la contre-indication","le risque psychosocial"],
 expressions:[
  {fr:"Cette diffusion rapide appelle un examen critique.",ko:"논점 제시"},
  {fr:"Il est permis de s'interroger sur la finalité de ces dispositifs en entreprise.",ko:"완곡한 의문"},
  {fr:"Aussi bénéfique soit-elle, cette pratique ne saurait tenir lieu de politique de prévention.",ko:"양보 (subjonctif)"},
  {fr:"Ce n'est pas la méditation qui pose problème, mais l'usage qu'on en fait.",ko:"논점 재정의"},
  {fr:"Il s'agit moins de soigner l'individu que d'interroger l'environnement qui le rend malade.",ko:"논점 전환"}],
 ressources:[
  {type:"référence",titre:"Inserm — évaluation de la méditation de pleine conscience",url:"https://www.inserm.fr/"},
  {type:"radio",titre:"France Culture — dossiers santé mentale",url:"https://www.radiofrance.fr/franceculture"},
  {type:"presse",titre:"Le Monde — sciences et santé",url:"https://www.lemonde.fr/sciences/"},
  {type:"vidéo",titre:"YouTube 검색어: « méditation pleine conscience entreprise critique »",url:"https://www.youtube.com/results?search_query=m%C3%A9ditation+pleine+conscience+entreprise+critique"}],
 plan:{type:"Essai C1 (변증법형)",steps:[
  "Introduction : la méditation de l'hôpital à l'open space → problématique.",
  "I. Thèse : un outil thérapeutique validé dans un cadre précis.",
  "II. Antithèse : une pratique détournée qui individualise des causes collectives.",
  "III. Synthèse : distinguer les cadres d'usage et les finalités.",
  "Conclusion : ouverture sur la santé mentale au travail."]}
}

});
