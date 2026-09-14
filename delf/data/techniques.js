/* techniques.js — 작문 기술
 *
 * 한국어 «~이다 / ~가 있다»를 그대로 옮긴 « c'est … » « il y a … » 패턴에서 벗어나게 하는 표현 기술.
 * «한국인이 쉽게 만들 문장»은 문법적으로 틀리지 않고 뜻도 통합니다 — 바뀌는 것은 감각과 급입니다.
 *
 * 구조: {id, fr, ko, tag, quoi, gram[], quand[], ex[{av, ap, note}], pieges[{txt, x?, o?}], sous[]?}
 */
window.TECHNIQUES = [

/* ─────────────────────────────────────────────────────────── 1 */
{
  id:'passif', fr:"Effacer l'agent", ko:"행위자 지우기", tag:"수동태 · 명사화 · 비인칭",
  quoi:"한국어는 «정부가 법을 만들었다», «사람들이 많이 쓴다»처럼 행위자를 문장 앞에 세웁니다. 그대로 옮기면 주어가 계속 le gouvernement / les gens / on 으로 튀고, 논술문이 아니라 이야기처럼 읽힙니다. 프랑스어 논술은 반대로 **행위자를 지우고 사실 자체를 주어로** 세웁니다. 행위자가 논점이 아닐 때는 아예 말하지 않는 것이 규칙에 가깝습니다.",
  gram:[
    "**수동태** — être + 과거분사. 시제는 être 가 짊어집니다 : a été instauré · sera supprimé · avait été adopté.",
    "행위자를 밝히는 par 는 **꼭 필요할 때만**. 감정·상태 동사는 de 를 씁니다 : suivi **de**, connu **de**, respecté **de**.",
    "**비인칭 구문** — Il existe… · Il apparaît que… · Il convient de… · On assiste à… · Force est de constater que…",
    "**명사화**가 가장 강력합니다 : Le gouvernement a réformé les retraites → **la réforme des retraites**. 동사를 명사로 접으면 그 문장에 다른 정보를 더 실을 수 있습니다.",
    "명사화 자주 쓰는 짝 : mettre en place → **la mise en place** · prendre en charge → **la prise en charge** · remettre en cause → **la remise en cause**."
  ],
  quand:[
    "PE essai 의 introduction — 현상을 «누가 했다»가 아니라 «무엇이 일어났다»로 제시할 때.",
    "synthèse 전체. 문서의 저자를 반복해서 주어로 세우지 않아도 되게 해 줍니다.",
    "CE 답안에서 지문 내용을 옮길 때.",
    "반대로 PO 에서 **자기 경험**을 말할 때는 행위자를 살려야 자연스럽습니다. 이 기술은 논증문 전용입니다."
  ],
  ex:[
    { av:"Le gouvernement a créé cette loi en 2021 pour protéger les consommateurs.",
      ap:"Cette loi, adoptée en 2021, visait à protéger les consommateurs.",
      note:"행위자(정부)는 누구나 아는 사실이라 정보가 없습니다. 지우면 문장의 무게가 loi 로 옮겨가고, 동격 분사(adoptée en 2021)가 연도를 접어 넣어 한 문장이 두 정보를 나릅니다." },
    { av:"Beaucoup de gens utilisent cette application aujourd'hui.",
      ap:"L'usage de cette application s'est largement répandu.",
      note:"beaucoup de gens 는 거의 모든 학생이 쓰는 말입니다. 명사화(l'usage)로 현상을 주어로 세우면 같은 내용이 관찰 기록처럼 읽힙니다." },
    { av:"Le ministère a mis en place ce dispositif et cela a causé des débats.",
      ap:"La mise en place de ce dispositif a suscité de vifs débats.",
      note:"두 문장이 한 문장이 됩니다. mettre en place → la mise en place 라는 명사화 하나로 주어가 만들어지고, causer → susciter 로 동사도 한 단계 올라갑니다." },
    { av:"Il y a de plus en plus de personnes qui travaillent à distance.",
      ap:"Le travail à distance ne cesse de gagner du terrain.",
      note:"il y a … qui 는 «~하는 사람이 점점 많다»의 직역입니다. 현상 자체를 주어로 세우고 동사를 올리면 문장 하나가 통째로 한 단계 올라갑니다." }
  ],
  pieges:[
    { txt:"**과거분사 성수 일치**를 빠뜨리는 것이 가장 흔하고 가장 확실하게 감점됩니다. 수동태의 과거분사는 주어에 맞춥니다.",
      x:"Cette loi a été adopté en 2021.", o:"Cette loi a été adoptée en 2021." },
    { txt:"막연한 행위자에 **par 를 붙이지 마세요**. 그럴 거면 행위자를 아예 지우는 편이 낫습니다.",
      x:"Cette pratique est utilisée par les gens.", o:"Cette pratique se répand." },
    { txt:"한 단락을 전부 수동태로 채우면 글이 무거워집니다. **명사화와 섞으세요.**",
      x:"Une loi a été adoptée. Des mesures ont été prises. Des critiques ont été formulées.",
      o:"Une loi a été adoptée ; les mesures qui en découlent suscitent des critiques." }
  ]
},

/* ─────────────────────────────────────────────────────────── 2 */
{
  id:'pronominal', fr:"Le phénomène se fait tout seul", ko:"현상이 스스로 일어나게 하기", tag:"verbe pronominal · s'observer, se répandre",
  quoi:"한국어는 «~가 일어나고 있다», «~를 볼 수 있다», «사람들이 ~한다»로 현상을 서술합니다. 그대로 옮기면 il y a / on peut voir / les gens 로 몰립니다. 프랑스어 논설문과 기사문은 **현상 자체를 주어로 세우고 대명동사로** 서술합니다 — 행위자도 관찰자도 없이, 현상이 스스로 일어나는 것처럼. «객관적 서술»이라는 말의 문법적 실체가 바로 이것입니다.",
  gram:[
    "**se + 동사**, 주어는 사물·현상. 관찰 : s'observer · se constater · se remarquer · se vérifier.",
    "확산·변화 : se répandre · se généraliser · se développer · se multiplier · s'accentuer · s'atténuer · se stabiliser.",
    "설명·동반 : **s'expliquer par** · **se traduire par** · **se caractériser par** · **s'accompagner de** · se manifester par.",
    "제기·충돌 : la question **se pose** · le problème **se heurte à** · une tendance **se dessine**.",
    "복합시제는 조동사 **être** + 성수 일치 : cette pratique **s'est répandue** (e 가 붙습니다).",
    "**수동태와의 차이** — 수동태는 «누군가 했다»가 뒤에 숨어 있고, 대명동사는 행위자가 아예 없습니다. Le mot **a été employé**(누가 썼다) / Le mot **s'emploie**(그렇게 쓰인다)."
  ],
  quand:[
    "PE essai 의 도입부에서 현상을 제시할 때 — 가장 프랑스어다운 첫 문장이 여기서 나옵니다.",
    "통계·추세를 말할 때 : une hausse **se constate** · l'écart **se creuse** · la tendance **s'inverse**.",
    "synthèse 에서 두 문서에 공통으로 나타나는 사실을 서술할 때.",
    "원인을 단정하지 않고 대고 싶을 때 : **s'expliquer par** 는 «~로 설명된다»라서 «~때문이다»보다 신중합니다."
  ],
  ex:[
    { av:"On peut voir que ce phénomène existe dans beaucoup de pays.",
      ap:"Ce phénomène s'observe dans de nombreux pays.",
      note:"on peut voir que 는 «내가 볼 수 있다»라서 관찰자가 남습니다. s'observer 는 관찰자를 지우고 현상만 남깁니다. 프랑스 논설문 도입부의 기본 문형입니다." },
    { av:"Il y a beaucoup de jeunes qui utilisent cette application.",
      ap:"Cet usage se répand rapidement chez les jeunes.",
      note:"il y a … qui 를 «현상 주어 + 대명동사»로. «사람이 많다»가 «현상이 퍼진다»가 됩니다. 문장의 초점이 사람에서 흐름으로 옮겨갑니다." },
    { av:"La raison de cette situation, c'est la crise économique.",
      ap:"Cette situation s'explique en grande partie par la crise économique.",
      note:"«~의 이유는 ~이다»의 직역이 la raison…, c'est 입니다. s'expliquer par 하나로 정리되고, en grande partie 를 끼워 단정까지 피합니다." },
    { av:"Ce changement a aussi causé des problèmes sociaux.",
      ap:"Ce changement s'est accompagné de tensions sociales.",
      note:"causer 는 인과를 못 박습니다. s'accompagner de 는 «함께 나타났다»만 말해 훨씬 신중합니다. 복합시제라 être + 성수 일치(s'est accompagné)가 적용됩니다." }
  ],
  pieges:[
    { txt:"복합시제 조동사는 **avoir 가 아니라 être**이고, 과거분사는 주어에 일치합니다.",
      x:"Cette pratique a répandu dans tout le pays.", o:"Cette pratique s'est répandue dans tout le pays." },
    { txt:"대명동사는 **par + 행위자와 함께 쓰지 않습니다.** 행위자를 밝혀야 하면 그건 수동태 자리입니다.",
      x:"La loi s'est votée par le Parlement.", o:"La loi a été votée par le Parlement." },
    { txt:"주어가 **사람**이면 재귀(자기 자신에게)로 읽혀 뜻이 달라집니다. 현상 서술에는 사물·추상 주어를 쓰세요.",
      x:"Les jeunes s'observent partout.", o:"Ce comportement s'observe surtout chez les jeunes." }
  ]
},

/* ─────────────────────────────────────────────────────────── 3 */
{
  id:'permettre', fr:"permettre / empêcher", ko:"무엇이 가능하게 하고, 무엇이 가로막는가", tag:"pouvoir 탈출 · 사물 주어",
  quoi:"초급에서는 **pouvoir / ne pas pouvoir** 로 «할 수 있다 / 없다»만 말합니다. 중급부터는 **무엇이 그것을 가능하게 하고 무엇이 가로막는지**를 말합니다. 주어가 사람(on, le gouvernement, je)에서 사물·제도·현상으로 옮겨가는 것이 핵심입니다. grâce à + on peut, à cause de + on ne peut pas 라는 두 마디가 동사 하나로 접힙니다.",
  gram:[
    "**permettre à qn de** + 동사원형 — 사람에는 **à**, 행위에는 **de** : Ce dispositif permet **aux** familles **de** réduire leur facture.",
    "사람을 빼면 그냥 : Cette mesure permet **de** réduire les émissions.",
    "**empêcher qn de** + 동사원형 — 여기는 **à 없이 직접목적** : La pluie **nous** a empêché**s** de sortir. (직접목적이므로 과거분사 일치)",
    "**avoir un empêchement** — 불가피한 일이 생기다. J'ai un empêchement, je ne pourrai pas venir.",
    "논술에서 특히 유용한 부정형 : **rien ne permet d'affirmer que** … · cela **ne permet pas de** conclure que …",
    "같은 계열로 확장하면 전치사가 동사마다 다릅니다 — 아래 «한눈에 보기» 참고."
  ],
  quand:[
    "essai 본론에서 **조치의 효과**를 말할 때 — 주어가 조치가 되면 문장이 저절로 논증문이 됩니다.",
    "원인을 사물로 돌려 «누구 탓»을 피할 때.",
    "synthèse·essai 에서 자료만으로 단정할 수 없을 때 : Rien ne permet d'affirmer que…",
    "PO·메일에서 «사정이 생겨 못 간다»를 정중하게 : J'ai un empêchement."
  ],
  ex:[
    { av:"Grâce à cette mesure, on peut réduire la pollution.",
      ap:"Cette mesure permet de réduire sensiblement la pollution.",
      note:"grâce à + on peut 는 «덕분에 ~할 수 있다»의 직역입니다. permettre 하나가 grâce à 와 pouvoir 를 동시에 흡수하고, 주어가 사람(on)에서 조치로 옮겨갑니다." },
    { av:"À cause de la pluie, nous n'avons pas pu sortir.",
      ap:"La pluie nous a empêchés de sortir.",
      note:"à cause de + ne pas pouvoir 가 동사 하나가 됩니다. 비가 주어가 되면서 인과가 동사 안으로 들어갑니다. empêcher 는 직접목적이라 과거분사가 nous 에 일치합니다 — empêché**s**." },
    { av:"On ne peut pas dire que cette politique a réussi.",
      ap:"Rien ne permet d'affirmer que cette politique a atteint ses objectifs.",
      note:"on ne peut pas dire 는 화자가 남습니다. rien ne permet de 는 **근거 쪽에 책임을 돌려** 훨씬 신중하고 학술적입니다. 통째로 외워 쓸 만한 구문입니다." },
    { av:"Le gouvernement peut aider les entreprises avec ce programme.",
      ap:"Ce programme permet aux entreprises de surmonter leurs difficultés de trésorerie.",
      note:"주어가 «정부»에서 «프로그램»으로 옮겨가면 정치적 판단이 사라지고 제도의 작동만 남습니다. permettre **à** qn **de** + 동사원형 구조가 그대로 보입니다." },
    { av:"Je ne peux pas venir parce que j'ai quelque chose à faire.",
      ap:"J'ai un empêchement, je ne pourrai malheureusement pas venir.",
      note:"«사정이 생겼다»를 명사 하나로 말합니다. 이유를 밝히지 않아도 예의에 어긋나지 않는다는 점이 이 표현의 쓸모입니다." }
  ],
  pieges:[
    { txt:"**permettre 는 사람에게 à, empêcher 는 사람을 직접** 받습니다. 대칭이 아니라는 것이 함정입니다.",
      x:"Cette loi empêche aux entreprises de licencier.", o:"Cette loi empêche les entreprises de licencier." },
    { txt:"empêcher 의 **과거분사는 직접목적에 일치**합니다.",
      x:"La pluie nous a empêché de sortir.", o:"La pluie nous a empêchés de sortir." },
    { txt:"**interdire 는 à**, **autoriser 는 직접** — 같은 «금지/허가»인데 전치사가 반대입니다.",
      x:"La loi interdit les mineurs de travailler la nuit.", o:"La loi interdit aux mineurs de travailler la nuit." },
    { txt:"**empêcher qn de**(남을 막다)와 **s'empêcher de**(자기를 참다)는 뜻이 다릅니다.",
      x:"Je me suis empêché de le faire sortir. (막았다는 뜻이 아님)", o:"Je l'ai empêché de sortir." }
  ],
  sous:[
    { fr:"permettre à qn de + inf.", ko:"~가 ~할 수 있게 하다", note:"Ce dispositif permet aux familles de réduire leur facture." },
    { fr:"empêcher qn de + inf.", ko:"~가 ~하지 못하게 막다", note:"à 없이 직접목적. 과거분사 일치에 주의." },
    { fr:"interdire à qn de + inf.", ko:"~에게 ~를 금지하다", note:"permettre 와 같은 à 구조." },
    { fr:"autoriser qn à + inf.", ko:"~가 ~하도록 허가하다", note:"직접목적 + à. interdire 와 반대 구조." },
    { fr:"obliger / contraindre / forcer qn à + inf.", ko:"~하게 만들다 · 강제하다", note:"La crise a contraint les entreprises à licencier." },
    { fr:"inciter / pousser qn à + inf.", ko:"~하도록 유도하다", note:"Cette prime incite les ménages à rénover leur logement." },
    { fr:"amener / conduire qn à + inf.", ko:"~하기에 이르게 하다", note:"결과를 말할 때. Ces difficultés l'ont conduit à démissionner." },
    { fr:"dissuader qn de + inf.", ko:"~하지 않도록 단념시키다", note:"empêcher 보다 부드럽습니다. Le prix dissuade les jeunes d'acheter." },
    { fr:"aider qn à + inf.", ko:"~하도록 돕다", note:"à 를 받습니다. permettre 와 혼동 주의." },
    { fr:"favoriser / freiner / entraîner + 명사", ko:"촉진하다 · 저해하다 · 초래하다", note:"사물 주어 + 명사 목적어. 동사원형을 받지 않습니다." },
    { fr:"avoir un empêchement", ko:"불가피한 일이 생기다", note:"구어·메일에서 매우 유용. 이유를 밝히지 않아도 실례가 아닙니다." },
    { fr:"rien ne permet d'affirmer que…", ko:"~라고 단정할 근거가 없다", note:"논술·synthèse 의 표준 구문. 화자를 지우고 근거에 책임을 돌립니다." }
  ]
},

/* ─────────────────────────────────────────────────────────── 4 */
{
  id:'qui', fr:"Enchaîner avec « qui »", ko:"두 문장을 관계절로 잇기", tag:"문장 끊지 않기 · est bon pour 탈출",
  quoi:"한국어는 한 문장에 하나씩 말하고 끊습니다. «이 제도는 3년 됐다. 그런데 한 번도 평가받은 적이 없다.» 그대로 옮기면 짧은 문장이 연달아 나오고, et / mais / aussi 로 이어 붙이게 됩니다. 프랑스어 논술은 **명사를 세우고 관계절로 정보를 계속 실어 나릅니다** — 문장 수는 줄고 논리 밀도는 올라갑니다.\n\n핵심은 **무엇을 주절에 남길지 고르는 것**입니다. 부가 정보는 qui 절에 내려 보내고, 진짜 하고 싶은 말만 주절에 둡니다. «이 방법은 좋다»처럼 **판정으로 끝나는 문장**(est bon pour)이 이 기술이 가장 크게 먹히는 자리입니다 — 형용사는 판정이고, 관계절은 근거이기 때문입니다.",
  gram:[
    "**명사 + qui + 직설법** — une solution **qui** réduit… · une mesure **qui** permet de… · un dispositif **qui** s'adresse à…",
    "qui 절 안의 **동사가 내용을 나릅니다** : qui permet de · qui présente l'avantage de · qui repose sur · qui vise à · qui tient compte de · qui se heurte à.",
    "**쉼표가 뜻을 바꿉니다.** 쉼표 없으면 **제한**(그중에서 ~한 것만), 쉼표 있으면 **부가**(어차피 다 그런데) : Les étudiants **qui** travaillent réussissent mieux.(일하는 학생들만) / Les étudiants, **qui** travaillent, réussissent mieux.(학생들은 다 일하는데)",
    "**양보를 관계절 안에서** 처리 : une piste intéressante, **qui** se heurte toutefois à des contraintes budgétaires.",
    "**qui 는 주어 자리, que 는 목적어 자리** : une mesure **qui** protège(주어) / une mesure **que** le gouvernement a prise(목적어).",
    "que 절의 과거분사는 **선행사에 일치**합니다 : les mesures **que** le gouvernement a **prises**.",
    "앞 **문장 전체**를 받는 것은 ce qui / ce que 입니다(별도 기술). 여기는 **명사**를 받습니다."
  ],
  quand:[
    "짧은 문장이 세 개 연달아 나올 때 — 가운데 하나를 관계절로 내려 보냅니다.",
    "essai 본론에서 **해결책을 제시**할 때. «좋다»로 끝내면 논거가 없는 문장이 됩니다.",
    "양보할 때 — mais 로 새 절을 세우지 않고 관계절 안에 toutefois 를 넣습니다.",
    "synthèse 에서 두 문서를 한 문장에 담을 때 — 명사 + qui 가 접착제 역할을 합니다."
  ],
  ex:[
    { av:"Le dispositif existe depuis trois ans. Il n'a jamais été évalué.",
      ap:"Le dispositif, qui existe depuis trois ans, n'a jamais fait l'objet d'une évaluation.",
      note:"두 문장을 잇는 가장 기본적인 방법입니다. 중요한 것은 **무엇을 주절에 남기느냐** — «평가받은 적 없다»가 하고 싶은 말이므로 그것이 주절에 남고, 기간은 qui 절로 내려갑니다. 순서를 바꾸면 강조점이 바뀝니다." },
    { av:"Cette solution est bonne pour l'environnement.",
      ap:"C'est une solution qui réduit les émissions sans peser sur les ménages.",
      note:"est bonne pour 는 **판정만** 하고 끝납니다. qui 절이 «무엇을 하는지»를 말하면서 sans peser sur les ménages 라는 조건까지 실어 나릅니다. 같은 자리에 정보가 두 배로 들어갑니다." },
    { av:"Le télétravail est utile pour les entreprises.",
      ap:"Le télétravail constitue un dispositif qui permet aux entreprises de réduire leurs coûts immobiliers.",
      note:"est utile pour 는 «누구에게 왜» 유용한지 말하지 않습니다. qui permet à … de … 로 바꾸면 수혜자와 효과가 동시에 드러납니다." },
    { av:"C'est une bonne mesure, mais elle coûte cher.",
      ap:"Une piste intéressante, qui suppose toutefois un financement pérenne.",
      note:"mais 로 새 절을 세우는 대신 **양보를 관계절 안에** 넣습니다. toutefois 가 qui 절 안으로 들어가면서 문장 하나로 끝납니다." },
    { av:"Il y a une autre méthode. Elle est basée sur la participation des habitants.",
      ap:"Une autre voie, qui repose sur la participation des habitants, mérite d'être explorée.",
      note:"두 문장이 한 문장이 됩니다. il y a → 명사 주어, elle est basée sur → qui repose sur. mérite d'être explorée 로 단정까지 피했습니다." }
  ],
  pieges:[
    { txt:"**qui 는 주어, que 는 목적어**입니다. qui 뒤에 주어가 또 오면 안 됩니다.",
      x:"une mesure qui le gouvernement a prise", o:"une mesure que le gouvernement a prise" },
    { txt:"que 절의 **과거분사는 선행사에 일치**합니다(조동사 avoir, 직접목적이 앞에 있을 때).",
      x:"les mesures que le gouvernement a pris", o:"les mesures que le gouvernement a prises" },
    { txt:"관계절을 **et qui 로 계속 잇지 마세요**. 한 절에 한 생각, 나머지는 tout en + 현재분사로 접습니다.",
      x:"une solution qui réduit les coûts et qui favorise l'emploi et qui protège l'environnement",
      o:"une solution qui réduit les coûts tout en favorisant l'emploi" },
    { txt:"**형용사만으로 끝내지 마세요.** 판정 뒤에 반드시 근거가 오게 합니다.",
      x:"Cette politique est très bonne.", o:"Cette politique présente l'avantage de cibler les ménages les plus exposés." },
    { txt:"**쉼표를 함부로 넣지 마세요.** 쉼표 하나가 «일부만»을 «전부 다»로 바꿉니다.",
      x:"Les pays, qui ont adopté cette loi, ont vu les accidents baisser. (세상 모든 나라가 채택했다는 뜻)",
      o:"Les pays qui ont adopté cette loi ont vu les accidents baisser. (채택한 나라들만)" }
  ],
  sous:[
    { fr:"qui permet de + inf.", ko:"~할 수 있게 하는", note:"가장 널리 쓰이는 기본형. permettre 기술과 짝을 이룹니다." },
    { fr:"qui présente l'avantage de + inf.", ko:"~라는 이점이 있는", note:"«좋다»를 대신하는 가장 정확한 표현." },
    { fr:"qui vise à + inf.", ko:"~를 목표로 하는", note:"제도·정책의 의도를 말할 때." },
    { fr:"qui repose sur + 명사", ko:"~에 기반한", note:"être basé sur 보다 문어체." },
    { fr:"qui tient compte de + 명사", ko:"~를 고려한", note:"신중함을 표시합니다." },
    { fr:"qui s'adresse à + 명사", ko:"~를 대상으로 하는", note:"수혜자를 명시할 때." },
    { fr:"qui ménage + 명사", ko:"~를 해치지 않는", note:"…qui ménage le pouvoir d'achat des ménages." },
    { fr:"qui se heurte à + 명사", ko:"~에 부딪히는", note:"양보를 관계절 안에서 처리합니다." },
    { fr:"qui suppose + 명사", ko:"~를 전제로 하는", note:"조건을 붙이는 가장 간결한 방법." },
    { fr:"qui n'a de sens que si…", ko:"~일 때만 의미가 있는", note:"C1 급 양보 구문. une mesure qui n'a de sens que si elle s'inscrit dans la durée." }
  ]
},

/* ─────────────────────────────────────────────────────────── 5 */
{
  id:'gerondif', fr:"Le gérondif", ko:"선(線)을 입체로 — 제롱디프", tag:"en + -ant · 동시 · 수단 · 원인 · 조건 · 양보",
  quoi:"한국어는 사건을 시간 순서대로 «~하면서», «~하고»로 이어 붙입니다. 문장이 길어지고 말끝이 흐려집니다. 프랑스어는 **주된 사건 하나를 정하고 나머지를 그 배경·수단·원인·조건으로 내려 붙입니다**. 선(線)이 입체가 되는 것입니다. gérondif 는 그 «내려 붙이는» 장치이고, 단어 하나로 논리 관계까지 표시합니다. 작문할 때는 «무엇이 주절인가»를 먼저 정하고, 나머지를 gérondif 로 내려 보내는 순서로 생각합니다.",
  gram:[
    "**형태** — 현재형 nous 어간에서 -ons 를 떼고 **-ant**, 앞에 **en** : nous parl**ons** → en parl**ant** · nous pren**ons** → en pren**ant** · nous fais**ons** → en fais**ant**.",
    "**불규칙은 셋뿐** : être → **en étant** · avoir → **en ayant** · savoir → **en sachant**.",
    "**논리 관계 다섯 가지** — ① 동시 Il répond aux mails **en déjeunant** ② 수단 **En s'entraînant** tous les jours, on progresse ③ 원인 **En étant** malade, il n'a pas pu venir ④ 조건 **En prenant** ce chemin, vous gagnerez du temps ⑤ 방식 Il a présenté son idée **en faisant** un schéma.",
    "**tout en + -ant = 양보·대조** («~하면서도») : Il est malheureux **tout en étant** très riche.",
    "숨은 주어는 **반드시 주절의 주어와 같아야** 합니다. 다르면 종속절이나 명사구로 풉니다.",
    "부정은 en **ne** + 현재분사 + **pas** : **en ne** prenant **pas** la voiture.",
    "**격식체 도입·마무리 정형** — Étant donné que(~이므로) · En considérant(~를 고려하여) · En sachant que(~를 알면서도) · En attendant(~를 기다리며) · en comptant sur · en vous invitant à."
  ],
  quand:[
    "PE essai 본론에서 **수단·조건**을 주절에 접어 넣을 때.",
    "lettre formelle 의 **도입**(En considérant… / Étant donné que…)과 **마무리**(En attendant une réponse favorable…). 공식 서신의 골격이 이 둘입니다.",
    "PO 토론에서 **양보** — tout en reconnaissant ses limites, … 로 상대 논거를 인정하고 넘어갈 때.",
    "문장이 자꾸 길어지고 «그리고 … 그리고 …»가 될 때. gérondif 하나가 접속사 두세 개를 대신합니다."
  ],
  ex:[
    { av:"Il a regardé beaucoup de séries et il a appris le français.",
      ap:"Il a appris le français en regardant des séries.",
      note:"et 로 나열하면 **순서**만 남습니다. gérondif 는 «드라마 보기»가 **수단**이라는 관계를 표시합니다. 어느 쪽이 주절인지 정하는 것이 이 기술의 전부입니다." },
    { av:"Si vous prenez ce chemin, vous gagnerez du temps.",
      ap:"En prenant ce chemin, vous gagnerez du temps.",
      note:"si 절은 조건을 별도의 절로 세웁니다. gérondif 는 그 조건을 주절 안으로 접어 넣어 **한 호흡**으로 만듭니다. 뜻은 같고 밀도가 다릅니다." },
    { av:"Nous respectons votre autonomie, mais nous voulons renforcer les temps de collaboration.",
      ap:"Tout en respectant votre autonomie, nous souhaitons renforcer les temps de collaboration.",
      note:"mais 로 대립시키면 두 주장이 **대등해집니다**. tout en 은 앞의 것을 인정하되 **종속시킵니다** — 공지문과 서신에서 가장 자주 쓰이는 균형 장치입니다." },
    { av:"Je suis client depuis cinq ans, donc je vous écris cette réclamation.",
      ap:"Étant client fidèle de votre établissement depuis plus de cinq ans, je me permets de vous adresser cette réclamation.",
      note:"donc 로 이유를 이어 붙이는 대신 분사구로 **자격을 먼저 세우고** 본론에 들어갑니다. 공식 서신 도입부의 정형이고, 그대로 외워 쓸 수 있습니다." },
    { av:"On progresse par l'entraînement quotidien.",
      ap:"En s'entraînant tous les jours, on progresse.",
      note:"내용은 같지만 명사구(par l'entraînement)는 **회화체**, gérondif 는 **문어체**입니다. 어느 쪽이 맞느냐가 아니라 레지스터의 선택이고, 그 선택이 문장의 밀도를 정합니다." }
  ],
  pieges:[
    { txt:"**주어 일치** — gérondif 의 숨은 주어는 주절의 주어와 같아야 합니다. 아래 ✕ 문장에서 «도착한 것»은 기차가 되어 버립니다.",
      x:"En arrivant à la gare, le train était parti.", o:"En arrivant à la gare, j'ai vu que le train était parti." },
    { txt:"**en 없는 현재분사**는 명사를 수식합니다(관계절 대용). 부사적 의미가 목적이면 en 을 빠뜨리지 마세요.",
      x:"Arrivant à la gare, j'ai appelé Marie. (관계절처럼 읽힘)", o:"En arrivant à la gare, j'ai appelé Marie." },
    { txt:"**한 문장에 gérondif 하나**가 기본입니다. 나머지는 pendant · à cause de · avec 로 풉니다.",
      x:"Il travaille en écoutant de la musique en mangeant.", o:"Il travaille en écoutant de la musique, pendant le week-end." },
    { txt:"«~하면서»를 전부 gérondif 로 옮기려 하지 마세요. 주어가 다르면 **pendant que** 가 맞습니다.",
      x:"En parlant le professeur, les élèves prenaient des notes.", o:"Pendant que le professeur parlait, les élèves prenaient des notes." }
  ],
  sous:[
    { fr:"Étant donné que + 직설법", ko:"도입 — ~이므로", note:"Étant donné qu'il pleut, on reste à la maison. 공지문·서신의 첫 문장에 그대로 씁니다." },
    { fr:"En considérant + 명사", ko:"도입 — ~를 고려하여", note:"En considérant l'efficacité de ces derniers mois, la direction a décidé de… 근거를 먼저 세우는 격식체 정형." },
    { fr:"Étant + 명사/형용사", ko:"도입 — ~로서", note:"Étant client fidèle depuis cinq ans, je me permets de… 자격을 세우고 본론에 들어갑니다." },
    { fr:"en + -ant (MOYEN)", ko:"전개 — ~함으로써", note:"La Ville encourage une mobilité douce en augmentant les subventions. 본론에서 수단을 설명하는 자리." },
    { fr:"Tout en + -ant", ko:"균형 — ~하면서도", note:"Tout en respectant votre autonomie, nous souhaitons… 반대 입장을 인정한 뒤 주장을 유지합니다." },
    { fr:"En sachant que + 직설법", ko:"양보 — ~를 알면서도", note:"Je l'ai accepté en sachant que c'était risqué." },
    { fr:"En attendant (+ 명사)", ko:"마무리 — ~를 기다리며", note:"En attendant une réponse favorable de votre part, je vous prie d'agréer… 서신 맺음의 표준." },
    { fr:"en comptant sur / en vous invitant à", ko:"마무리 — ~를 믿고 / ~하시길 청하며", note:"En comptant sur votre compréhension, … 요청과 기대를 표명하는 맺음." }
  ]
},

/* ─────────────────────────────────────────────────────────── 6 */
{
  id:'mesure', fr:"dans la mesure où", ko:"범위를 그은 인과", tag:"접속사 · 조건부 논거",
  quoi:"이유를 대면서 **동시에 그 이유가 통하는 범위를 스스로 좁히는** 접속사입니다. parce que 는 인과를 사실로 못 박지만, 이것은 «~하는 한에서»라고 조건을 답니다. 논거를 약하게 만드는 것이 아니라, 반론이 들어올 자리를 미리 막아 더 단단하게 만듭니다. C1 채점표의 « nuance » 가 정확히 이 동작입니다.",
  gram:[
    "**직설법**을 씁니다. 접속법이 아닙니다 — 가장 흔한 오류입니다.",
    "주절 앞·뒤 모두 가능합니다. **문두**에 놓으면 논거 → 결론 순서가 되어 더 논술다워집니다.",
    "où 다음에 on 이 오면 **l'on** 을 씁니다 : dans la mesure où **l'on** raisonne… (문어체의 표시).",
    "부정 : dans la mesure où l'on **ne** dispose **pas** de données fiables…",
    "가까운 친척들 : **pour peu que** + 접속법(조금이라도 ~하면) · **du moment que** + 직설법(~하기만 하면) · **à condition que** + 접속법(~한다는 조건에서)."
  ],
  quand:[
    "PE essai 에서 **양보한 뒤 되받아칠 때** — 상대 논거를 인정하되 그것이 성립하는 조건을 드러냅니다.",
    "전면 찬성이 부담스러워 **조건부로 찬성**할 때.",
    "PO 토론에서 시험관의 반론을 받아칠 때. 즉답으로 쓰기 좋은 한 구절입니다."
  ],
  ex:[
    { av:"Le télétravail est bon pour l'environnement parce qu'il réduit les trajets.",
      ap:"Le télétravail présente un intérêt écologique dans la mesure où il supprime des déplacements quotidiens.",
      note:"parce que 는 인과를 사실로 못 박습니다. 바꾸면 «그 조건이 성립하는 범위에서»가 되어, 채점자가 떠올릴 반론(재택이 늘면 다른 이동이 는다)을 문장이 미리 흡수합니다. est bon → présente un intérêt 도 같은 방향의 상승입니다." },
    { av:"La gratuité est utile car elle aide les ménages modestes.",
      ap:"La gratuité conserve une utilité sociale dans la mesure où elle touche des ménages qui renonçaient à se déplacer.",
      note:"논거를 좁히면 오히려 강해집니다. 스스로 범위를 그은 주장은 반박할 여지가 줄어듭니다." },
    { av:"C'est vrai que cet argument est juste, mais cela coûte cher.",
      ap:"L'argument vaut dans la mesure où l'on raisonne à budget constant — ce qui reste à démontrer.",
      note:"상대 논거를 인정하는 듯하면서 그것이 성립하는 조건을 드러내 무력화합니다. C1 essai 의 고급 동작이고, 시험관이 가장 반기는 움직임입니다." }
  ],
  pieges:[
    { txt:"**접속법을 쓰지 마세요.** dans la mesure où 는 직설법입니다.",
      x:"dans la mesure où il soit possible de vérifier", o:"dans la mesure où il est possible de vérifier" },
    { txt:"**진짜 단순한 인과**에는 parce que · car 가 맞습니다. 조건이 붙지 않는 곳에 쓰면 어색합니다.",
      x:"Il est absent dans la mesure où il est malade.", o:"Il est absent parce qu'il est malade." },
    { txt:"**dans une certaine mesure**(어느 정도는)와 혼동하지 마세요. 그쪽은 접속사가 아니라 부사구라 절을 받지 않습니다.",
      x:"Cette affirmation est vraie dans la mesure où.", o:"Cette affirmation est vraie dans une certaine mesure." },
    { txt:"essai 한 편에 **1~2회**. 세 번을 넘으면 «외운 표현»이라는 인상을 줍니다." }
  ]
},

/* ─────────────────────────────────────────────────────────── 7 */
{
  id:'relatifs', fr:"en · y · ce dont · ce à quoi", ko:"전치사가 대명사를 결정한다", tag:"pronoms simples & relatifs composés",
  quoi:"한국어는 «내가 관심 있는 것», «그가 반대하는 것»처럼 전부 «것»으로 처리하고, 같은 말을 반복할 때도 그냥 다시 씁니다 (« 이 문제를 이야기한다 … 이 문제를 이야기하지 않는다 »). 프랑스어는 둘 다 허용하지 않습니다. 반복은 **en / y** 가 지우고, «것»은 **ce dont / ce à quoi / ce sur quoi** 가 정확히 받습니다.\n\n그런데 이 둘은 사실 **같은 규칙**입니다. 결정하는 것은 언제나 **동사가 요구하는 전치사** 하나뿐입니다. parler **de** 이면 → **en** / **ce dont**. réfléchir **à** 이면 → **y** / **ce à quoi**. 전치사를 알면 두 개가 동시에 풀리고, 모르면 두 개가 동시에 틀립니다.\n\n**학습 방법** — 동사를 외울 때 절대 동사만 외우지 마세요. 공책을 세로로 두 칸으로 나누고 왼쪽에 **de 동사**, 오른쪽에 **à 동사**를 쌓아가세요. 그리고 새 동사를 만날 때마다 그 자리에서 세 줄을 같이 씁니다 : ① parler **de** qqch ② Ils **en** parlent. ③ **ce dont** ils parlent. 이 세 줄을 한 덩어리로 외우면 시험장에서 고민할 일이 없어집니다. 아래 «한눈에 보기» 표가 그 공책의 완성본입니다.",
  gram:[
    "**en = de + 사물** · **y = à + 사물**. 둘 다 **동사 바로 앞**에 옵니다 : Ils **en** parlent. · Nous **y** réfléchissons. · Je n'**en** ai pas besoin.",
    "복합시제는 **조동사 앞**, 부정사가 있으면 **부정사 바로 앞** : J'**y** ai longuement réfléchi. · Il faudra **y** remédier. · On ne peut pas **en** faire abstraction.",
    "**en 은 수량도 받습니다** — 부정관사·부분관사·수사와 함께 쓰면 en 이 **의무**입니다 : Des solutions ? Il **en** existe plusieurs. · Ce risque, peu d'États **en** mesurent l'ampleur.",
    "**y 는 장소**도 받습니다 : dans ce pays → on **y** observe… / 단, aller 의 미래·조건법 앞에서는 쓰지 않습니다 (j'irai, ∅ j'y irai).",
    "**사람에게는 쓰지 않습니다.** à + 사람 → **lui / leur** (répondre, parler, expliquer) 또는 **à + 강세형** (penser à lui, s'intéresser à eux, tenir à elle). de + 사람 → **de lui / d'eux**.",
    "같은 전치사가 **관계사**도 결정합니다 : de → **ce dont** · à → **ce à quoi** · sur → **ce sur quoi** · contre → **ce contre quoi**. 전치사가 없으면(직접목적) **ce que**, 주어 자리면 **ce qui**.",
    "선행사가 사물일 때는 전치사 + **lequel / laquelle / lesquels / lesquelles** : la raison **pour laquelle** · les moyens **par lesquels** · le contexte **dans lequel**. 축약 : à+lequel → **auquel** · de+lequel → **duquel** · à+lesquels → **auxquels**.",
    "**문장 전체를 받을 때** — 앞 문장을 통째로 받아 «, ce qui / ce que / ce à quoi …». 논술에서 가장 쓸모 있는 용법입니다."
  ],
  quand:[
    "**같은 보어가 두 번째 나올 때** — 프랑스어 글은 같은 명사구를 반복하지 않습니다. 두 번째는 반드시 en / y 입니다. 채점자가 가장 빨리 알아채는 «한국어 냄새»가 이 반복입니다.",
    "synthèse 에서 **두 문서를 한 문장에 비교**할 때 : « Le premier document traite de … ; le second n'**en** parle qu'incidemment. »",
    "essai 에서 앞 문장의 **결과·귀결**을 이어 붙일 때 (, ce qui / ce à quoi). 문장 두 개가 하나가 되면서 논리가 눈에 보이게 됩니다.",
    "강조·도치 구문과 함께 : « Ce risque, personne n'**y** prête attention. » « voilà **ce à quoi**… » « tel est **ce dont**… »"
  ],
  ex:[
    { av:"Le premier document parle de l'immigration. Le second document parle aussi de l'immigration.",
      ap:"Le premier document traite longuement de l'immigration ; le second n'en parle qu'incidemment.",
      note:"synthèse 도입부에서 매 시험 나오는 문장입니다. 문법은 둘 다 맞지만, 위 문장은 **같은 보어를 두 번** 썼습니다. parler **de** → **en**. 반복 하나를 지우는 것만으로 «번역투»가 사라집니다." },
    { av:"Il faut réfléchir à cette question. Mais on ne réfléchit pas assez à cette question.",
      ap:"Cette question mérite réflexion ; or on n'y réfléchit pas assez.",
      note:"réfléchir **à** → **y**. 그리고 같은 전치사가 관계사도 줍니다 — « … cette question, **ce à quoi** on ne réfléchit pas assez ». 전치사 하나로 두 문장이 동시에 풀립니다." },
    { av:"Les jeunes ont besoin d'une formation. C'est la chose la plus importante.",
      ap:"D'une formation solide, voilà ce dont les jeunes ont le plus besoin — et ce dont ils bénéficient le moins.",
      note:"avoir besoin **de** → en / **ce dont**. C'est la chose la plus importante 같은 밋밋한 평가문을 voilà ce dont 으로 바꾸면 같은 내용이 논술 문장이 됩니다. bénéficier **de** 도 같은 de 계열이라 그대로 이어집니다." },
    { av:"Des solutions existent. Mais il y a beaucoup de solutions qu'on n'applique pas.",
      ap:"Des solutions, il en existe beaucoup ; on n'en applique que très peu.",
      note:"**수량의 en** 입니다. beaucoup / peu / trois 앞에서는 en 이 의무이고, 앞에 명사를 떼어 놓는 mise en relief (« Des solutions, il en existe… ») 는 프랑스어 논술에서 아주 흔한 리듬입니다." },
    { av:"Personne n'attendait ce résultat.",
      ap:"Ce résultat, personne ne s'y attendait.",
      note:"같은 뜻인데 동사가 바뀌면 대명사도 바뀝니다. attendre (직접목적) → **le** / ce **que**. s'attendre **à** → **y** / ce **à quoi**. **동사를 바꾸면 구문이 따라온다** — 이 기술의 핵심입니다." },
    { av:"Le gouvernement a réduit les aides. Les associations sont contre cela.",
      ap:"Le gouvernement a réduit les aides, ce contre quoi les associations s'élèvent depuis un an.",
      note:"contre 에는 간단 대명사가 없습니다. 이럴 때가 **ce contre quoi** 의 자리입니다. être contre cela 는 뜻은 통하지만 초급 구조 — s'élever contre 로 바꾸면 같은 내용이 신문 문장이 됩니다." },
    { av:"Le prix a beaucoup augmenté. Cela a surpris les consommateurs.",
      ap:"Le prix a fortement augmenté, ce qui a surpris les consommateurs.",
      note:"앞 문장 **전체**를 ce qui 로 받기. Cela 로 새 문장을 시작하는 습관만 고쳐도 글이 달라집니다." },
    { av:"Il y a plusieurs raisons. C'est pour cela que la réforme a échoué.",
      ap:"Les raisons pour lesquelles la réforme a échoué sont multiples.",
      note:"il y a … c'est pour cela que 라는 두 마디를 pour lesquelles 하나가 대신합니다. 문장이 짧아지는데 정보는 그대로입니다." }
  ],
  pieges:[
    { txt:"**en / y 는 사람에게 쓰지 않습니다.** à + 사람은 lui / leur 또는 à + 강세형입니다.",
      x:"Je pense souvent à mon directeur → J'y pense souvent.", o:"Je pense souvent à lui. (penser à + 강세형)" },
    { txt:"같은 à 라도 **동사에 따라 lui/leur 와 à+강세형이 갈립니다.** répondre·parler·expliquer 는 lui/leur, penser·tenir·s'intéresser 는 à + 강세형.",
      x:"J'ai répondu à lui hier.", o:"Je lui ai répondu hier. / Je tiens à elle." },
    { txt:"**위치** — en / y 는 동사 바로 앞, 부정사가 있으면 부정사 앞입니다. 한국어 어순대로 뒤에 붙이면 바로 틀립니다.",
      x:"J'ai y pensé. / Je vais réfléchir y.", o:"J'y ai pensé. / Je vais y réfléchir." },
    { txt:"**en 뒤의 과거분사는 일치하지 않습니다.**",
      x:"Des articles, j'en ai lus trois.", o:"Des articles, j'en ai lu trois." },
    { txt:"**y 와 en 이 함께 오면 y 가 먼저**입니다.",
      x:"Il en y a plusieurs.", o:"Il y en a plusieurs." },
    { txt:"**ce que 만능 사용**이 가장 흔합니다. 쓰기 전에 동사의 전치사를 먼저 보세요. avoir besoin **de** → ce **dont**.",
      x:"C'est ce que j'ai besoin.", o:"C'est ce dont j'ai besoin." },
    { txt:"**ce qui / ce que** 구별 — 뒤에 주어가 없으면 ce qui, 있으면 ce que.",
      x:"Je ne sais pas ce qui il veut.", o:"Je ne sais pas ce qu'il veut." },
    { txt:"선행사가 **사람**이면 lequel 계열보다 qui 가 자연스럽습니다.",
      x:"La personne à laquelle j'ai parlé était aimable.", o:"La personne à qui j'ai parlé était aimable." },
    { txt:"앞 문장을 **Cela 로 새 문장 시작**하는 습관. ce qui 로 이어 붙이면 논리가 한 호흡에 들어옵니다.",
      x:"Le prix a augmenté. Cela a surpris tout le monde.", o:"Le prix a augmenté, ce qui a surpris tout le monde." }
  ],
  sous:[
    { fr:"parler de · traiter de · débattre de", ko:"→ en / ce dont", note:"Les auteurs en parlent peu. — ce dont les auteurs parlent peu" },
    { fr:"avoir besoin de · manquer de", ko:"→ en / ce dont", note:"Le pays en manque cruellement. — ce dont le pays manque" },
    { fr:"avoir envie de · rêver de", ko:"→ en / ce dont", note:"Beaucoup en rêvent sans oser le dire. — ce dont beaucoup rêvent" },
    { fr:"se plaindre de · souffrir de", ko:"→ en / ce dont", note:"Les usagers s'en plaignent depuis des années. — ce dont les usagers se plaignent" },
    { fr:"profiter de · bénéficier de", ko:"→ en / ce dont", note:"Seule une minorité en bénéficie. — ce dont seule une minorité bénéficie" },
    { fr:"se rendre compte de · tenir compte de", ko:"→ en / ce dont", note:"Le rapport n'en tient pas compte. — ce dont le rapport ne tient pas compte" },
    { fr:"douter de · se passer de", ko:"→ en / ce dont", note:"Nul ne peut s'en passer aujourd'hui. — ce dont nul ne peut se passer" },
    { fr:"penser à · songer à", ko:"→ y / ce à quoi", note:"Personne n'y avait songé avant la crise. — ce à quoi personne n'avait songé" },
    { fr:"réfléchir à · s'intéresser à", ko:"→ y / ce à quoi", note:"On n'y réfléchit pas assez. — ce à quoi on ne réfléchit pas assez" },
    { fr:"s'attendre à · aspirer à", ko:"→ y / ce à quoi", note:"Personne ne s'y attendait. — ce à quoi personne ne s'attendait" },
    { fr:"répondre à · participer à · contribuer à", ko:"→ y / ce à quoi", note:"Les pouvoirs publics n'y ont pas répondu. — ce à quoi les pouvoirs publics n'ont pas répondu" },
    { fr:"renoncer à · tenir à · s'opposer à", ko:"→ y / ce à quoi", note:"Les industriels s'y opposent fermement. — ce à quoi les industriels s'opposent" },
    { fr:"remédier à · faire face à · aboutir à", ko:"→ y / ce à quoi", note:"Il faudra bien y remédier. — ce à quoi il faudra remédier" },
    { fr:"compter sur · insister sur", ko:"→ y / ce sur quoi", note:"Les deux auteurs y insistent. — ce sur quoi les deux auteurs insistent" },
    { fr:"lutter contre · s'élever contre", ko:"→ (간단 대명사 없음) / ce contre quoi", note:"간단 대명사가 없어 contre cela 로 받습니다. — ce contre quoi les associations s'élèvent" },
    { fr:"beaucoup de · peu de · trois · aucun", ko:"→ en (의무)", note:"Des solutions ? Il en existe plusieurs. · Ce risque, peu d'États en mesurent l'ampleur." },
    { fr:"dans ce pays · à Genève (장소)", ko:"→ y", note:"On y observe le même phénomène. / aller 의 미래·조건법 앞에서는 쓰지 않습니다 (j'irai)." },
    { fr:"à / de + 사람", ko:"→ lui, leur · à+강세형 · de lui", note:"Je lui ai répondu. · Je pense à lui. · Les auteurs parlent d'eux avec réserve." }
  ]
},

/* ─────────────────────────────────────────────────────────── 8 */
{
  id:'ajout', fr:"Au-delà de « non seulement… mais aussi »", ko:"«~뿐만 아니라»를 넓히기", tag:"열거 · 범위 · 점층 · 위계",
  quoi:"«~뿐만 아니라 ~도»를 배우면 거의 모두 **non seulement … mais aussi** 로 갑니다. 틀리지 않지만 essai 한 편에 두 번만 나와도 눈에 띕니다. 게다가 이 표현은 **두 요소를 대등하게** 놓는 것 하나밖에 못 합니다.\n\n프랑스어는 «더한다»는 관계를 훨씬 세분합니다 — **범위를 그리거나**(de … à …, en passant par), **양쪽을 나란히 놓거나**(tant … que), **한 단계 넘어서거나**(au-delà de), **강도를 올리거나**(voire), 아예 **동사 하나로 접거나**(allier). 무엇을 고르느냐에 따라 문장이 말하는 것이 달라집니다.",
  gram:[
    "**de A à B, en passant par C** — 범위·스펙트럼. 양 끝과 중간을 보여줘 «전 영역»임을 구조로 증명합니다.",
    "**tant A que B** — 양쪽 모두(문어체). A와 B는 같은 품사·기능이어야 합니다. 접속사 tant que(~하는 한)와 형태만 같습니다.",
    "**au-delà de** + 명사 / **au-delà du fait que** + 직설법 — 대등이 아니라 **위계**. 앞의 것을 인정하고 «진짜 문제는 이것»으로 넘어갑니다.",
    "**voire** — 심지어(점층). 뒤에 쉼표 없이 바로 옵니다. voire même 는 중복입니다.",
    "**outre** + 명사 / **outre que** + 직설법 — ~외에도. 동사원형을 직접 받지 않습니다.",
    "**non content de** + 동사원형 — ~하는 데 그치지 않고. **주어가 주절과 같아야** 합니다.",
    "**non seulement** 이 문두에 오면 **주어-동사 도치**가 원칙입니다 : Non seulement cette mesure **coûte-t-elle** cher, mais… 도치가 부담스러우면 주어 뒤로 옮기세요.",
    "동사로 접기 : **allier** A **et** B · **conjuguer** A **et** B · **s'accompagner de** · **aller de pair avec**."
  ],
  quand:[
    "essai 본론에서 논거를 추가할 때 — 매번 de plus / en outre 로 시작하지 않기 위해.",
    "**1부에서 2부로 넘어가는 전환점** — au-delà de 가 여기서 가장 강력합니다.",
    "여러 분야·집단에 걸친 현상을 말할 때 — de … à …, en passant par.",
    "결론 문장 — allier / conjuguer 로 두 성질을 한 대상에 모읍니다."
  ],
  ex:[
    { av:"Cette mesure n'est pas seulement coûteuse, mais elle est aussi inefficace.",
      ap:"Cette mesure est coûteuse, voire inefficace.",
      note:"mais aussi 는 «둘 다»만 말합니다. voire 는 **점층** — «비쌀 뿐 아니라 심지어 효과도 없다»는 강도의 상승이 단어 하나에 들어갑니다. 문장이 절반으로 줄면서 뜻은 더 세집니다." },
    { av:"Le problème touche l'industrie, les services et aussi l'agriculture.",
      ap:"Le problème touche tous les secteurs, de l'industrie aux services, en passant par l'agriculture.",
      note:"A, B et C 는 셋을 나열할 뿐입니다. de … à …, en passant par 는 **폭을 그립니다** — 셋이 스펙트럼의 양 끝과 중간이 되면서 «전 부문»이라는 주장이 문장 구조로 증명됩니다." },
    { av:"Non seulement le coût est élevé, mais aussi la légitimité du dispositif pose problème.",
      ap:"Au-delà de la question financière, c'est la légitimité même du dispositif qui est en jeu.",
      note:"non seulement…mais aussi 는 둘을 **대등하게** 놓습니다. au-delà de 는 **위계**를 만듭니다 — 앞의 것을 인정하고 넘어갑니다. essai 1부에서 2부로 넘어가는 자리에 가장 잘 맞고, c'est … qui 강조 구문과 짝을 이룹니다." },
    { av:"Cette mesure concerne les entreprises et les particuliers.",
      ap:"La mesure concerne tant les entreprises que les particuliers.",
      note:"et 는 단순 연결, tant … que 는 «양쪽 모두»를 강조합니다. non seulement…mais aussi 보다 훨씬 짧으면서 같은 일을 하고, 도치 걱정도 없습니다." },
    { av:"Cette solution est efficace pour l'économie et elle est aussi acceptable socialement.",
      ap:"Cette solution allie efficacité économique et acceptabilité sociale.",
      note:"«뿐만 아니라»를 **동사 하나로** 접습니다. allier·conjuguer 는 두 성질이 한 대상 안에 공존함을 말하는 동사입니다. 가장 우아한 형태이고 결론 문장에 특히 잘 맞습니다." },
    { av:"Ce dispositif coûte cher. De plus, il demande beaucoup de travail administratif.",
      ap:"Outre son coût, ce dispositif exige un suivi administratif lourd.",
      note:"De plus 로 새 문장을 시작하는 대신 outre 로 앞의 것을 문장 안에 흡수합니다. 두 문장이 하나가 되고, 무엇이 주된 논거인지가 분명해집니다." }
  ],
  pieges:[
    { txt:"**non seulement 이 문두에 오면 도치**가 원칙입니다. 시험 작문에서는 지키세요.",
      x:"Non seulement cette mesure coûte cher, mais elle est inefficace.",
      o:"Non seulement cette mesure coûte-t-elle cher, mais elle se révèle inefficace." },
    { txt:"**voire même 은 중복**입니다. voire 하나로 «심지어»가 이미 표현됩니다.",
      x:"Ce dispositif est coûteux, voire même inefficace.", o:"Ce dispositif est coûteux, voire inefficace." },
    { txt:"**outre 는 명사**를 받습니다. 동사를 받으려면 outre que + 직설법.",
      x:"Outre coûter cher, cette mesure est inefficace.", o:"Outre son coût, cette mesure se révèle inefficace." },
    { txt:"열거의 **tant A que B** 에는 앞의 que 가 없습니다. 접속사 tant que(~하는 한)와 헷갈리는 자리입니다.",
      x:"Tant que les entreprises que les particuliers sont concernés.", o:"Tant les entreprises que les particuliers sont concernés." },
    { txt:"**non content de** 는 주어가 주절과 같아야 합니다. 아래 ✕ 에서는 비용을 줄이는 것이 «기업»이 되어 버립니다.",
      x:"Non content de réduire les coûts, les entreprises apprécient ce dispositif.",
      o:"Non content de réduire les coûts, ce dispositif améliore la qualité du service." }
  ],
  sous:[
    { fr:"de A à B, en passant par C", ko:"A에서 B까지, C를 거쳐", note:"범위·스펙트럼. …de l'industrie aux services, en passant par l'agriculture." },
    { fr:"tant A que B", ko:"A든 B든 양쪽 모두", note:"문어체. non seulement…mais aussi 의 가장 짧은 대체." },
    { fr:"aussi bien A que B", ko:"A에서나 B에서나 똑같이", note:"Cette question se pose aussi bien en ville qu'à la campagne." },
    { fr:"au-delà de + 명사", ko:"~를 넘어서 (위계)", note:"Au-delà de la question financière, c'est la légitimité qui est en jeu. 전환점 전용." },
    { fr:"au-delà du fait que + 직설법", ko:"~라는 사실을 넘어서", note:"절을 받아야 할 때." },
    { fr:"voire", ko:"심지어 (점층)", note:"coûteux, voire inefficace. voire même 는 중복." },
    { fr:"outre + 명사 / outre que + 직설법", ko:"~외에도", note:"문두에 자주 옵니다. 가장 간결한 추가." },
    { fr:"non content de + inf.", ko:"~하는 데 그치지 않고", note:"주어 일치 필수. 약간 문학적이지만 essai 에서 잘 먹힙니다." },
    { fr:"sans compter (que)", ko:"~는 말할 것도 없고", note:"Sans compter que le suivi administratif est lourd." },
    { fr:"à quoi s'ajoute + 명사", ko:"거기에 더해 ~가 있다", note:"앞 문장 전체를 받아 하나 더 얹습니다. ce à quoi 기술과 같은 계열." },
    { fr:"allier / conjuguer A et B", ko:"A와 B를 겸비하다", note:"«뿐만 아니라»를 동사 하나로. 결론 문장에 최적." },
    { fr:"aller de pair avec", ko:"~와 나란히 간다", note:"두 현상이 함께 나타남을 말할 때. L'urbanisation va de pair avec…" }
  ]
},

/* ─────────────────────────────────────────────────────────── 9 */
{
  id:'nuance', fr:"Ne pas trancher", ko:"단정짓지 않는 표현", tag:"완곡 · 한정 · 출처 분리",
  quoi:"한국어 논술은 «~이다»로 단정해도 무례하지 않지만, 프랑스어 논술에서 근거 없는 단정은 **미숙함의 표시**로 읽힙니다. C1 채점표가 요구하는 것은 강한 주장이 아니라 **범위가 그어진 주장**입니다. 아래 표현들은 문장의 내용을 바꾸지 않고 «내가 어디까지 말하고 있는지»만 표시합니다. 그것만으로 글의 급이 달라집니다.",
  gram:[
    "정도 : **plutôt**(~한 편) · **assez**(꽤) · **relativement**(기준상 상대적으로)",
    "범위 : **certains** + 복수 · **un certain** + 단수 · **dans une certaine mesure** · **en général** · **dans certains cas**",
    "경향 : **tendre à** + 동사원형 · **avoir tendance à** + 동사원형",
    "관찰 : **sembler** · **paraître** (+ 형용사 또는 que + 직설법)",
    "가능성 : **pouvoir** — 논술에서는 «능력»이 아니라 «해석의 여지»를 여는 동사입니다.",
    "출처 분리 : **selon** · **d'après** + 조건법(aurait, serait) — 전언임을 분명히 합니다."
  ],
  quand:[
    "PE essai 전체. 특히 통계·집단을 말할 때는 반드시 하나 이상 붙입니다.",
    "synthèse 에서 문서 내용을 옮길 때 — selon / d'après + 조건법이 표준입니다.",
    "민감한 주제(집단·문화·건강)를 다룰 때. 단정하면 내용이 맞아도 감점됩니다.",
    "PO 에서 시험관이 «Vous en êtes sûr ?» 라고 물었을 때 물러설 자리를 만들어 둡니다."
  ],
  ex:[
    { av:"Les Français sont sales.",
      ap:"Les Français ont une réputation plutôt négative en matière d'hygiène.",
      note:"사실 판단(sont)이 평판에 대한 서술(ont une réputation)로 바뀌고, plutôt 가 정도를 낮춥니다. 같은 이야기를 하면서 책임질 범위만 줄인 것입니다." },
    { av:"Les Français se douchent une fois par jour.",
      ap:"Les Français se douchent généralement une fois par jour.",
      note:"단어 하나로 «전원»이 «대체로»가 됩니다. 예외가 있어도 문장이 무너지지 않습니다." },
    { av:"Les normes d'hygiène varient selon les cultures.",
      ap:"Les normes d'hygiène tendent à varier selon les cultures.",
      note:"tendre à 는 직접 단정(varient)과 달리 분석적 거리를 만듭니다. 매우 프랑스어다운 동사이고, 사회 현상을 말할 때 거의 항상 쓸 수 있습니다." },
    { av:"Cette réputation est exagérée.",
      ap:"Cette réputation semble largement exagérée.",
      note:"sembler 가 «관찰»과 «사실»을 분리합니다. 화자는 판단을 내리지 않고 보이는 것을 보고할 뿐입니다." },
    { av:"Le climat chaud explique la fréquence des douches.",
      ap:"Le climat chaud peut expliquer la fréquence des douches.",
      note:"pouvoir 하나로 «유일한 원인»이 «가능한 설명 중 하나»가 됩니다. 학생들이 가장 과소평가하는 동사입니다." },
    { av:"Cette réputation vient des différences culturelles.",
      ap:"Cette réputation repose davantage sur des différences culturelles que sur la réalité actuelle.",
      note:"원인을 하나로 못 박지 않고 **비중**을 말합니다. «원인은 이것이다»가 아니라 «여러 원인 중 이것이 더 크다»." },
    { av:"Cette évolution s'explique par les découvertes scientifiques.",
      ap:"Cette évolution s'explique par plusieurs facteurs, notamment les découvertes scientifiques.",
      note:"notamment 가 «이것이 전부가 아님»을 표시합니다. par exemple 만 반복하는 학생에게 줄 수 있는 가장 쉬운 확장입니다." },
    { av:"Cette réputation a des origines historiques.",
      ap:"Selon le document, cette réputation aurait des origines historiques.",
      note:"출처(selon)와 조건법(aurait)을 함께 쓰면 «내가 사실로 단정한다»와 «자료가 그렇게 말한다»가 분리됩니다. 이것이 신문 프랑스어의 표준이고 synthèse 에서는 사실상 필수입니다." },
    { av:"Une odeur corporelle signifie un manque d'hygiène.",
      ap:"Une odeur corporelle ne signifie pas forcément un manque d'hygiène.",
      note:"상대의 생각을 완전히 부정하지 않고 «필연은 아니다»로만 좁힙니다. 반박의 가장 예의 바른 형태입니다." }
  ],
  pieges:[
    { txt:"완곡 표현을 **한 문장에 겹치면** 글이 흐릿해집니다. 하나면 충분합니다.",
      x:"Il semblerait que cela puisse peut-être tendre à poser problème.", o:"Cela tend à poser problème." },
    { txt:"**assez 는 «꽤»**라서 완곡이 아니라 강조로 읽힐 수 있습니다. 낮추려는 의도라면 plutôt 쪽입니다.",
      x:"Cette affirmation est assez fausse.", o:"Cette affirmation est plutôt discutable." },
    { txt:"**relativement 는 비교 기준**이 있어야 합니다. 없으면 «무엇에 비해?»라는 질문이 남습니다.",
      x:"Le climat est relativement humide.", o:"Le climat y est relativement humide par rapport au nord du pays." },
    { txt:"**certain 은 위치에 따라 뜻이 바뀝니다.** 명사 뒤에 오면 «확실한»입니다.",
      x:"une certaine information (어떤 정보 — «확실한 정보» 뜻이 아님)", o:"une information certaine (확실한 정보)" },
    { txt:"**dans une certaine mesure**(부사구)와 **dans la mesure où**(접속사)를 혼동하지 마세요.",
      x:"Cette affirmation est vraie dans la mesure où.", o:"Cette affirmation est vraie dans une certaine mesure." }
  ],
  sous:[
    { fr:"plutôt", ko:"~한 편이다", note:"형용사·부사 앞. ou plutôt 는 앞말을 정정합니다 : C'est difficile, ou plutôt inhabituel.(어렵다기보다 낯설다)" },
    { fr:"relativement", ko:"기준상 상대적으로", note:"plutôt 보다 문어체·객관적. 비교 기준이 전제되어야 합니다." },
    { fr:"assez", ko:"꽤 (생각보다 강함)", note:"완곡이 아니라 강조로 읽힐 수 있으니 주의." },
    { fr:"certains + 복수명사", ko:"일부의", note:"Certains Français se douchent plusieurs fois par jour." },
    { fr:"un certain + 단수명사", ko:"어느 정도의", note:"Il existe une certaine méfiance à l'égard de cette pratique." },
    { fr:"dans une certaine mesure", ko:"어느 정도는", note:"주장을 일부 인정하며 범위를 제한. 논술·토론에서 최상급 양보 표현." },
    { fr:"une particularité", ko:"고유한 특징", note:"avoir la particularité de + inf. / présenter une particularité. 단독으로는 완화되지 않고 une partie de · certains · peut 와 함께 써야 효과가 납니다." },
    { fr:"en général / généralement", ko:"일반적으로 · 대체로", note:"민감한 주제에서는 범위를 더 좁히세요 : en général, dans les enquêtes citées…" },
    { fr:"souvent / parfois / dans certains cas", ko:"빈도로 예외를 남기기", note:"Dans certains cas, le climat influence la fréquence des douches." },
    { fr:"tendre à + inf.", ko:"~하는 경향이 있다", note:"직접 단정보다 분석적 거리가 생깁니다. 사회 현상 서술의 기본기." },
    { fr:"sembler / paraître", ko:"~인 듯하다 / ~처럼 보이다", note:"sembler 는 일반적 추정, paraître 는 외부 관찰. 뒤에 형용사 또는 que + 직설법." },
    { fr:"pouvoir", ko:"~할 수 있다 (가능성)", note:"논술에서는 능력이 아니라 해석의 여지를 여는 동사." },
    { fr:"pas forcément / pas nécessairement", ko:"반드시 ~인 것은 아니다", note:"forcément 는 구어에서도 흔하고, nécessairement 는 더 문어체." },
    { fr:"davantage / surtout / principalement", ko:"비중을 조절하기", note:"repose davantage sur A que sur B / s'explique surtout par / est principalement liée à." },
    { fr:"notamment / entre autres", ko:"특히 · 그중에서도", note:"예시가 전체를 대표하지 않음을 표시. par exemple 의 상위 호환." },
    { fr:"selon / d'après (+ 조건법)", ko:"~에 따르면", note:"Selon le document, cette mesure aurait produit peu d'effets. 출처와 화자의 판단을 분리합니다." }
  ]
}

];
