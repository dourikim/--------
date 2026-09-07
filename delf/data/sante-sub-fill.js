/* sante-sub-fill.js — 각 소주제 어휘를 정확히 100개로 맞추는 보충분 */
(function(){
const ADD = {
"b2-sante::la télémédecine":[
["le numérique en santé","디지털 헬스","Le numérique en santé progresse plus vite que les usages."]],

"b2-sante::la cigarette électronique":[
["le vapoteur","전자담배 사용자","Un vapoteur sur deux est un ancien fumeur."],
["le taux de nicotine plafonné","니코틴 상한","Le taux de nicotine est plafonné par la réglementation européenne."],
["la normalisation du geste","행위의 정상화","On redoute une normalisation du geste chez les mineurs."]],

"b2-sante::les régimes détox":[
["la promesse miracle","기적의 약속","Toute promesse miracle doit éveiller la méfiance."],
["le discours pseudo-scientifique","유사과학적 담론","Ce discours pseudo-scientifique emprunte le vocabulaire de la médecine."]],

"b2-sante::l'impact des écrans sur la santé mentale et physique des enfants":[
["le temps libre","자유 시간","Les écrans grignotent le temps libre non structuré."],
["la vie de famille","가정 생활","Les écrans transforment la vie de famille."],
["la surveillance parentale","부모의 감시","La surveillance parentale a ses limites."],
["l'usage partagé","함께 보기","L'usage partagé vaut mieux que l'usage solitaire."],
["la co-vision","동반 시청","La co-vision permet d'expliquer ce que l'enfant regarde."]],

"b2-sante::l'obésité":[
["le repas familial","가족 식사","Le repas familial reste un facteur protecteur."],
["l'école et la santé","학교와 건강","L'école joue un rôle central dans la prévention."],
["l'accompagnement psychologique","심리 지원","L'accompagnement psychologique est souvent négligé."]],

"b2-sante::le traitement de maladies par les jeux vidéos":[
["l'expérimentation clinique","임상 시험","Plusieurs expérimentations cliniques sont en cours."],
["la certification","인증","La certification garantit un minimum de sérieux."]],

"b2-sante::le sommeil":[
["le couche-tard","늦게 자는 사람","Les couche-tard souffrent le plus des horaires imposés."],
["le lève-tôt","일찍 일어나는 사람","Tout le monde n'est pas lève-tôt."],
["le chronotype","크로노타입","Le chronotype varie d'une personne à l'autre."],
["la fatigue accumulée","누적 피로","La fatigue accumulée finit par se payer."],
["le repos réparateur","회복 수면","Un repos réparateur suppose des cycles complets."]],

"b2-sante::la lutte contre le vieillissement":[
["le bien vieillir","건강한 노화","La notion de bien vieillir a remplacé celle de rajeunir."],
["l'autonomie fonctionnelle","기능적 자립","L'autonomie fonctionnelle se préserve par l'activité."],
["la prévention des chutes","낙상 예방","La prévention des chutes est peu coûteuse et efficace."],
["le lien intergénérationnel","세대 간 유대","Le lien intergénérationnel bénéficie aux deux parties."],
["la retraite active","활동적 은퇴","La retraite active retarde la perte d'autonomie."],
["la peur de la mort","죽음에 대한 두려움","Derrière l'anti-âge se cache la peur de la mort."]],

"b2-sante::la sédentarité":[
["la pause déjeuner active","점심 시간 활동","Une pause déjeuner active suffit parfois."],
["le podomètre","만보기","Le podomètre a popularisé l'objectif des dix mille pas."],
["l'objet connecté","웨어러블","Les objets connectés motivent les débutants."],
["la marche quotidienne","일상 걷기","La marche quotidienne est la plus accessible des activités."],
["l'accessibilité des équipements","시설 접근성","L'accessibilité des équipements conditionne la pratique."]],

"b2-sante::le mois sans alcool":[
["l'apéritif","아페리티프","L'apéritif structure la sociabilité française."],
["le repas de fête","연말 모임","Les repas de fête précèdent le mois de janvier."],
["la sobriété","절주·금주","La sobriété devient un choix revendiqué."],
["le sans-alcool","무알코올","Le sans-alcool n'est plus une punition."],
["le bilan personnel","개인적 점검","Ce mois se prête à un bilan personnel."],
["l'engagement collectif","집단적 참여","L'engagement collectif facilite la démarche."],
["l'accompagnement en ligne","온라인 지원","Un accompagnement en ligne soutient les participants."],
["la culture de la consommation","음주 문화","La culture de la consommation évolue lentement."]],

"c1-sante::les médecines alternatives":[
["le pluralisme thérapeutique","치료의 다원주의","Le pluralisme thérapeutique est revendiqué par certains patients."],
["la démarche probatoire","입증 절차","Toute pratique devrait se soumettre à une démarche probatoire."],
["l'autorité de la preuve","증거의 권위","L'autorité de la preuve est aujourd'hui contestée."]],

"c1-sante::la vaccination obligatoire":[
["la controverse publique","공론장의 논쟁","La controverse publique a durablement marqué les esprits."],
["l'acceptabilité sociale","사회적 수용성","L'acceptabilité sociale conditionne toute politique sanitaire."],
["la pédagogie de la preuve","근거의 설명","La pédagogie de la preuve a fait défaut."],
["le devoir de transparence","투명성의 의무","L'État a un devoir de transparence."],
["la mémoire collective","집단 기억","La mémoire collective des scandales reste vive."],
["le débat contradictoire","반론이 있는 토론","Un débat contradictoire aurait été préférable."],
["la légitimité de la contrainte","강제의 정당성","La légitimité de la contrainte se discute."],
["le corps social","사회 구성원 전체","La mesure engage tout le corps social."]],

"c1-sante::l'obésité":[
["la norme corporelle","신체 규범","La norme corporelle pèse sur la perception du problème."],
["l'approche populationnelle","인구 집단 접근","Une approche populationnelle est plus efficace qu'un ciblage individuel."],
["la santé publique préventive","예방 중심 공중보건","La santé publique préventive reste le parent pauvre."],
["l'arbitrage éthique","윤리적 판단","Tout remboursement suppose un arbitrage éthique."],
["la solidarité nationale","국가적 연대","La solidarité nationale finance ces traitements."],
["l'accès équitable","형평한 접근","L'accès équitable est un objectif affiché."],
["le débat sociétal","사회적 논쟁","Ce dossier ouvre un débat sociétal."]],

"c1-sante::les allergies":[
["la charge allergénique","알레르겐 부담","La charge allergénique de l'environnement augmente."],
["l'urbanisation","도시화","L'urbanisation modifie l'exposition aux allergènes."],
["la végétalisation urbaine","도시 녹화","La végétalisation urbaine doit choisir ses essences."],
["l'essence végétale","수종","Certaines essences végétales sont très allergisantes."],
["la politique de plantation","식재 정책","La politique de plantation relève des communes."],
["la santé scolaire","학교 보건","La santé scolaire manque de moyens."],
["l'anticipation du risque","위험 예측","L'anticipation du risque suppose une surveillance fine."]],

"c1-sante::les addictions":[
["la politique de santé","보건 정책","La politique de santé s'écarte du droit pénal."],
["la cohérence des politiques publiques","정책 일관성","La cohérence des politiques publiques fait défaut."]],

"c1-sante::l'automédication":[
["le circuit légal","합법 유통","Le circuit légal garantit la traçabilité."],
["la banalisation du soin","치료의 일상화","La banalisation du soin comporte des risques."],
["l'accès direct","직접 접근","L'accès direct au pharmacien a été élargi."],
["la délégation de compétences","권한 위임","La délégation de compétences suscite des tensions."],
["la sécurité sanitaire","보건 안전","La sécurité sanitaire doit primer."],
["le conseil personnalisé","맞춤 상담","Le conseil personnalisé distingue la pharmacie du commerce en ligne."]],

"c1-sante::la méditation":[
["la mode managériale","경영 유행","Chaque décennie apporte sa mode managériale."],
["le discours du bien-être","웰빙 담론","Le discours du bien-être a colonisé l'entreprise."],
["la responsabilité de l'employeur","고용주의 책임","La responsabilité de l'employeur est engagée."],
["le cadre thérapeutique","치료적 틀","Hors cadre thérapeutique, la pratique change de nature."],
["l'intervenant formé","훈련된 지도자","Seul un intervenant formé peut encadrer ces séances."],
["la portée limitée","제한적 효과","La portée de ces dispositifs reste limitée."],
["le déplacement de responsabilité","책임의 전가","On assiste à un déplacement de responsabilité."]]
};
for(const k in ADD){ if(window.SUBVOCAB[k]) window.SUBVOCAB[k].push(...ADD[k]); }
})();
