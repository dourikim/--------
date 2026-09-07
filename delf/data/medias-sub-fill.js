/* medias-sub-fill.js — 각 소주제 어휘를 정확히 100개로 맞추는 보충분 */
(function(){
const ADD = {
"b2-medias::vivre sans Internet":[
["se réapproprier son temps","시간을 되찾다","Se réapproprier son temps est le premier bénéfice."],
["assumer une marginalité","비주류를 감수하다","Vivre sans Internet, c'est assumer une marginalité."]],

"b2-medias::la journée sans portable":[
["la sensibilisation","인식 제고","La sensibilisation passe par l'expérience vécue."],
["le collectif","집단","Le collectif rend l'exercice supportable."],
["la mesure d'accompagnement","동반 조치","Une mesure d'accompagnement suit l'interdiction."],
["l'évaluation du dispositif","제도 평가","L'évaluation du dispositif reste à faire."],
["le retour d'expérience","경험 공유","Le retour d'expérience des établissements est positif."],
["la généralisation","일반화","La généralisation est envisagée pour la rentrée."],
["l'adhésion des familles","가정의 동의","L'adhésion des familles conditionne le succès."],
["la cohérence éducative","교육적 일관성","La cohérence éducative suppose que les adultes s'appliquent la règle."],
["évaluer les effets","효과를 평가하다","Il faudrait évaluer les effets sur une année."],
["généraliser la mesure","조치를 확대하다","Généraliser la mesure demande des moyens."],
["impliquer les élèves","학생을 참여시키다","Impliquer les élèves dans la règle la rend acceptable."],
["donner l'exemple","본을 보이다","Les adultes doivent d'abord donner l'exemple."]],

"b2-medias::les fausses informations":[
["la satire","풍자","La satire ne doit pas être confondue avec le mensonge."],
["le second degré","반어적 표현","Le second degré échappe aux machines."],
["la capture d'écran","캡처 화면","Une capture d'écran se falsifie en dix secondes."],
["le faux compte","가짜 계정","Un faux compte imite un média connu."],
["l'usurpation de média","매체 사칭","L'usurpation de média est de plus en plus fréquente."],
["la charte déontologique","윤리 헌장","Une charte déontologique engage la rédaction."],
["la correction publique","공개 정정","La correction publique renforce la crédibilité."],
["l'humilité","겸손","L'humilité du journaliste désarme le soupçon."],
["signaler un contenu","콘텐츠를 신고하다","Chacun peut signaler un contenu trompeur."],
["reconnaître une erreur","오류를 인정하다","Reconnaître une erreur renforce la confiance."],
["ralentir le partage","공유를 늦추다","Ralentir le partage suffirait souvent."],
["former dès le collège","중학교부터 교육하다","Il faut former dès le collège."]],

"b2-medias::les radios amateurs":[
["le collectif","공동체","Le collectif porte le projet à bout de bras."],
["la programmation musicale","음악 편성","La programmation musicale valorise la scène locale."],
["l'artiste local","지역 예술가","L'artiste local trouve là sa première diffusion."],
["la culture de proximité","지역 문화","La culture de proximité y trouve un relais."],
["le partenariat scolaire","학교 협력","Un partenariat scolaire a été signé."],
["la transmission","전수","La transmission entre générations s'y organise."],
["l'accessibilité","접근 용이성","L'accessibilité technique a tout changé."],
["l'autoproduction","자체 제작","L'autoproduction est devenue simple."],
["monter un projet","프로젝트를 꾸리다","Monter un projet radio demande peu de moyens."],
["fédérer des bénévoles","자원봉사자를 모으다","Fédérer des bénévoles est le vrai défi."],
["obtenir une fréquence","주파수를 얻다","Obtenir une fréquence reste difficile."],
["diffuser en ligne","온라인으로 방송하다","Diffuser en ligne contourne cette difficulté."]],

"b2-medias::les jeunes et la presse":[
["le kiosque","가판대","Le kiosque a presque disparu des villes."],
["l'accès gratuit","무료 접근","Un accès gratuit est offert aux lycéens."],
["l'offre étudiante","학생 요금제","L'offre étudiante reste peu connue."],
["la médiathèque","미디어 도서관","La médiathèque met la presse à disposition."],
["l'application d'actualité","뉴스 앱","L'application d'actualité remplace le journal."],
["la notification d'alerte","속보 알림","La notification d'alerte crée l'habitude."],
["le résumé quotidien","일일 요약","Le résumé quotidien séduit les actifs pressés."],
["l'habitude de lecture","독서 습관","L'habitude de lecture se prend jeune."],
["s'abonner","구독하다","S'abonner reste un geste rare chez les jeunes."],
["offrir un accès","접근을 제공하다","Certains médias offrent un accès aux établissements."],
["créer une habitude","습관을 만들다","Créer une habitude demande de la régularité."],
["valoriser l'enquête","탐사 보도를 알리다","Valoriser l'enquête montre ce que coûte l'information."]],

"b2-medias::les jeunes et les réseaux sociaux":[
["la sociabilité numérique","디지털 사교","La sociabilité numérique prolonge la cour de récréation."],
["l'exposition aux contenus","콘텐츠 노출","L'exposition aux contenus violents est précoce."]],

"b2-medias::la protection des données personnelles":[
["la sensibilisation","인식 제고","La sensibilisation des usagers reste insuffisante."],
["l'hygiène numérique","디지털 위생","L'hygiène numérique s'apprend comme un geste quotidien."]],

"b2-medias::l'impact d'Internet sur l'intelligence":[
["la curiosité","호기심","La curiosité trouve enfin de quoi se nourrir."],
["la discipline personnelle","자기 통제","La discipline personnelle devient décisive."]],

"b2-medias::la publicité":[
["la saturation publicitaire","광고 과잉","La saturation publicitaire lasse le public."],
["la lassitude","피로감","La lassitude explique le succès des bloqueurs."]],

"b2-medias::les impacts d'Internet sur l'économie":[
["la transition numérique","디지털 전환","La transition numérique bouleverse tous les secteurs."],
["l'adaptation","적응","L'adaptation des entreprises est très inégale."]],

"b2-medias::l'interdiction des smartphones dans les restaurants":[
["la tolérance","허용·관용","La tolérance vaut mieux que la règle stricte."],
["l'expérience client","고객 경험","L'expérience client se joue aussi là."]],

"b2-medias::les textos":[
["la richesse lexicale","어휘의 풍부함","La richesse lexicale ne se mesure pas au nombre de lettres."],
["l'observation","관찰","L'observation vaut mieux que l'indignation."]],

"c1-medias::la domination d'Internet":[
["la contestation","이의 제기","La contestation citoyenne reste faible."],
["l'alternative","대안","Toute alternative se heurte à l'effet de réseau."]],

"c1-medias::la surcharge informationnelle":[
["la médiation humaine","인간의 매개","La médiation humaine retrouve de la valeur."],
["l'attention soutenue","지속적 주의","L'attention soutenue devient un luxe."]],

"c1-medias::les fausses informations":[
["la responsabilité collective","집단적 책임","La responsabilité est collective, non individuelle."],
["la vigilance démocratique","민주적 경계","La vigilance démocratique ne se délègue pas."]],

"c1-medias::l'éducation aux médias":[
["l'ambition","목표·야심","L'ambition affichée dépasse les moyens accordés."],
["la continuité","연속성","La continuité du primaire au lycée fait défaut."]],

"c1-medias::les théories du complot":[
["la banalisation","일상화","La banalisation de ces récits est le vrai signal."],
["le débat familial","가족 내 논쟁","Ces récits ont envahi le débat familial."]]
};
for(const k in ADD){ if(window.SUBVOCAB[k]) window.SUBVOCAB[k].push(...ADD[k]); }
})();
