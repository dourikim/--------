/**
 * CONTENT-DATA.JS, 학습 콘텐츠 데이터
 *
 * 이 파일은 노션 '불어 에센셜' 표에서 가져와 만들었습니다.
 * 노션에서 글을 추가하신 뒤 "노션에서 다시 가져와줘"라고 하시면 새로 채워 드립니다.
 *
 * ✏️ 직접 수정 방법:
 *   - 새 포스트 추가: 배열 맨 위에 { title, preview, href, tags, date } 객체 추가
 *   - 포스트 삭제: 해당 줄 삭제
 *   - 링크 변경: href 값 수정
 *
 * 사용 가능한 태그 값 (tags 배열에 조합해서 사용):
 *   "완전입문자"  "초보자"  "중급자"
 *   "프랑스문화"  "프랑스유머"  "학습툴"  "발음"  "튜터링"
 */

const CONTENT_DATA = [
  {
    title: "프랑스어로 기싸움하기... 깐족대지 마래이... 1차적인 chercher와 trouver는 쉽죠? \"Si tu me cherches, tu vas me trouver.\"",
    preview: "1차적인 chercher와 trouver는 쉽죠?\n- Je cherche ma clé. (열쇠를 찾고 있어)\n- J'ai trouvé ma voiture. (내 차 찾았어)\n하지만 이 문장을 만난다면?\n💥\"Si tu me cherches, tu vas me trouver.\"",
    href: "https://www.threads.com/@douri.french/post/DVTtqZND5cb",
    tags: ["프랑스유머", "프랑스문화", "중급자", "초보자", "완전입문자"],
    date: "2026년 3월 1일"
  },
  {
    title: "헷갈리는 눈 관련 프랑스어 단어 정리, œil / regard / vue / vision",
    preview: "œil / regard / vue / vision\n비슷해 보이지만, 쓰임은 완전히 달라요!\n1️⃣ œil = 눈 (신체 기관)\n✔️ Jette un œil au document. - 서류 좀 훑어봐.\n✔️ Garde un œil sur lui. - 애기 잘 좀 지켜봐. 👶",
    href: "https://www.threads.com/@douri.french/post/DVLobMdj3Wj",
    tags: ["초보자", "중급자", "완전입문자"],
    date: "2026년 2월 25일"
  },
  {
    title: "자꾸 내 이름을 불어화(franciser)하려는 친구의 딸…",
    preview: "매번 헤어질 때 카드를 써주는데 (쓰다가 멈칫, 엄청 진지하게)\n\"Douri ? ton nom, c'est avec E à la fin ?\"\n= \"두히 이모, 이름 끝에 E 있어? 🧐🧐\"\n매번 들을 때마다 친구와 저는 깔깔깔 😂😂\n💡 프랑스어에서는 명사나 형용사에 성(性)이 있죠.",
    href: "https://www.threads.com/@douri.french/post/DU0W_Taj_n5",
    tags: ["프랑스유머", "초보자", "완전입문자", "프랑스문화"],
    date: "2026년 2월 16일"
  },
  {
    title: "오늘의 미묘한 프랑스어 - petit : 감정을 줄여 말하기, 해장이 필요할 때, 회복이 필요할 때 쓰는 일상의 petit 표현들",
    preview: "해장이 필요할 때, 회복이 필요할 때 쓰는 일상의 petit 표현들\n1️⃣ Je suis en petite forme 🥴\n👉 컨디션이 별로야 / 좀 힘들어 (기운이 없어)\n2️⃣ J'ai un petit appétit 😮‍💨\n👉 입맛이 별로 없어 / 많이 못 먹겠어",
    href: "https://www.threads.com/@douri.french/post/DUytI2kE0rE",
    tags: ["완전입문자", "초보자", "중급자"],
    date: "2026년 2월 16일"
  },
  {
    title: "오늘의 귀여운 프랑스어, 비는 안 그치고, 이번 연휴에 쉬지도 못 하고… 나 좀 꿀꿀해 → Je boude.",
    preview: "비는 안 그치고, 이번 연휴에 쉬지도 못 하고… 나 좀 꿀꿀해\n👉 Je boude. ☹️\n🧸 일상에서 자주 쓰이는 bouder 동사 = 삐지다 / 토라지다 / 새침하게 굴다\n1️⃣ 아이가 아이스크림 못 먹어서 입 뾰죽~ - Il boude.\n2️⃣ 여친이 삐져서 팔짱끼고 침묵... - Elle boude.",
    href: "https://www.threads.com/@douri.french/post/DUqKvnzD9Wt",
    tags: ["초보자", "완전입문자", "중급자"],
    date: "2026년 2월 12일"
  },
  {
    title: "오늘의 곱씹어 볼 프랑스어 표현, On n'est pas à l'abri de rien. = 그 어떤 가능성도 배제할 수 없다.",
    preview: "프랑스어로 abri는 단순히 집보다는\n비/바람/위험을 피할 수 있는 \"피신처, 보호막\"의 개념이예요.\n- être à l'abri de quelque chose = ~로부터 안전하다\n✅ On n'est pas à l'abri de rien.\n= 그 어떤 가능성도 배제할 수 없다. 경험이 있어도 방심하면 안 돼.",
    href: "https://www.threads.com/@douri.french/post/DUk9bMgj68i",
    tags: ["프랑스문화", "초보자", "중급자"],
    date: "2026년 2월 10일"
  },
  {
    title: "오늘의 유용한 프랑스어 표현 - valoir 동사, 이게 로레알(L'Oréal)의 전설적인 슬로건, 한국의 \"당신은 소중하니까요\" 입니다!",
    preview: "Valoir의 기본 뜻은 아주 단순해요.\n→ 가치가 있다 / ~만하다\n✅ Ça vaut la peine / Ça vaut le coup\nC'est cher j'avoue mais ça vaut le coup ! → 좀 비싸긴 한데, 해볼 만 해\n✅ \"Vous le valez bien\" → 당신은 그럴 만한 가치가 있어요.",
    href: "https://www.threads.com/@douri.french/post/DUX3BQtj6Rf",
    tags: ["발음", "초보자", "중급자"],
    date: "2026년 2월 5일"
  },
  {
    title: "시즌 1 탈락 → 시즌 2 재도전 → 결국 우승한 최강록 셰프님, 이 경우는 à nouveau 일까요? de nouveau 일까요?",
    preview: "프랑스어로 \"다시 도전하다\"를 말할 때 à nouveau와 de nouveau를 자주 씁니다.\n1️⃣ à nouveau - 새롭게, 다른 방식으로 다시 (리셋 후 재도전 느낌)\n✔️ On repart à nouveau, sur de nouvelles bases. → 우리 새 마음으로 다시 시작하자.\n2️⃣ de nouveau - 또다시, 반복적으로 (\"또야?!\"의 느낌 😓)\n✔️ Elle a fait la même erreur de nouveau. → 그녀는 또 같은 실수를 했다.",
    href: "https://www.threads.com/@douri.french/post/DUSjQYjjy_R",
    tags: ["초보자", "중급자"],
    date: "2026년 2월 3일"
  },
  {
    title: "'동서양 간 공간 개념 차이' - se priver de",
    preview: "프랑스에서도 청소년 자녀에게 이렇게 말할 수 있어요.\n👉 Tu seras privé de sortie pendant deux semaines. - 너 2주 동안 외출 금지!\n여기에 사용된 être privé(e) de의 핵심은\n💡 단순한 금지가 아니라 \"접근에 대한 통제\"입니다.\n같은 맥락에서 👉 Je me prive du sucre. - 나는 요즘 설탕 끊고 있어.",
    href: "https://www.threads.com/@douri.french/post/DUQA7piD0pS",
    tags: ["프랑스문화", "중급자", "초보자"],
    date: "2026년 2월 2일"
  },
  {
    title: "요즘 제 자신에게 자주 거는 주문, manifeste-toi → 원하는 걸 밖으로 표현해라",
    preview: "💥 '대모'의 나라로 유명한 프랑스... 🇫🇷\n프랑스어로 manifestation은 단순한 파업이 아니라\n👉 의사를 '밖으로 드러내는 행위'에 더 가까움\n이런 말도 있어요.\n- Ce qui n'est pas exprimé n'existe pas vraiment. 표현되지 않은 것은 존재하지 않는 것과 같다.",
    href: "https://www.threads.com/@douri.french/post/DUAQ2PAD19x",
    tags: ["프랑스문화", "초보자", "완전입문자", "중급자"],
    date: "2026년 1월 27일"
  },
  {
    title: "막상 사용할 때는 잘 못 느끼다가 나중에야 \"아, 단어가 이렇게 쓰이고 있었네?\", \"정당성\"을 뜻하는 la légitimité [레지띠미때]",
    preview: "무게감이 느껴지는 프랑스 단어 📌 la légitimité [레지띠미때]\n💡 Est-ce que c'est légitime qu'il parle de ça ?\n→ 그가 이 얘기를 할 자격이 있을까?\n법정에서나 들을 것 같지만 🧑🏻‍⚖️ 프랑스 일상 토론에서도 흔히 들을 수 있어요.\n→ \"그 사람이 이 말을 할 위치에 있는가\"에 더 가까운 표현",
    href: "https://www.threads.com/@douri.french/post/DTuvuSIj9d6",
    tags: ["프랑스문화", "초보자", "중급자"],
    date: "2026년 1월 20일"
  },
  {
    title: "발음의 장벽이 유독 높은 프랑스어... 휘리릭~ 발음 확인이 필요할 때 있죠?",
    preview: "영어 쉐도잉 툴로 이미 유명한 유글리쉬\n🇫🇷 프랑스 특유의 '소리 법칙'을 확인할 때도 훌륭합니다!\n✅ 연음 (liaison): bon appétit → [보나빼띠]\n✅ 이어 읽기 (enchaînement): cette rue → [쎗휘]\n✅ 고정된 연음 표현: c'est-à-dire → [쎄따디흐], tout à coup → [뚜따꾸]",
    href: "https://www.threads.com/@douri.french/post/DTpTqOPDzVK",
    tags: ["발음", "학습툴", "초보자", "완전입문자", "중급자"],
    date: "2026년 1월 18일"
  },
  {
    title: "두쫀쿠 먹어본 뒤 리얼 반응, 불어로 말해",
    preview: "🤨 기대했는데… 그냥 그런데?\n⚬ C'est moyen / C'est bof / C'est correct 무난해\n⚬ C'est pas trop mon truc 내 스탈 아님 🤷🏻‍♀️\n🤤 개존맛 / trop bon\n⚬ Une tuerie ! 직이네~ / C'est mon nouveau coup de cœur ! 😍",
    href: "https://www.threads.com/@douri.french/post/DTiDbZYj0xN",
    tags: ["프랑스유머", "초보자", "중급자"],
    date: "2026년 1월 15일"
  },
  {
    title: "오늘의 프랑스어 단어 : instant, 짧은 '순간'을 뜻하는 단어, 일상에서 어떻게 쓰이는지 살펴볼게요.",
    preview: "1️⃣ instant - 잠깐, 아주 짧은 순간\n✔️ Un instant, je reviens tout de suite. → 잠시만요, 바로 올게요.\n2️⃣ à l'instant - 방금, 막, 바로 직전에\n✔️ Il est sorti à l'instant. → 그는 방금 막 나갔어.\n3️⃣ pour l'instant - 지금은, 현재로서는",
    href: "https://www.threads.com/@douri.french/post/DTfQav2Dyi3",
    tags: ["완전입문자", "초보자", "중급자"],
    date: "2026년 1월 14일"
  },
  {
    title: "케데헌 이재 수상 소감에 나온 문장 \"Rejection is redirection.\" 프랑스어로는 어떻게 표현할까요?",
    preview: "🇫🇷 🇺🇸 프-영 가짜 친구(faux amis)를 잘 보여주는 예시!\n✨ Le rejet est une réorientation.\n1️⃣ rejection ≠ rejet → 명사형: rejet [흐제], rejection (❌)\n2️⃣ redirection ≠ réorientation\n✅ réorientation - 방향을 다시 설정하는 과정, 진로, 커리어 맥락에서 자주 쓰임",
    href: "https://www.threads.com/@douri.french/post/DTb3Ap6j8-G",
    tags: ["초보자", "중급자"],
    date: "2026년 1월 13일"
  },
  {
    title: "라떼는 말이야... 전화번호를 어떻게 주고받았냐 하면, 프랑스 핸드폰 번호가 모두 06로 시작하던 시절…",
    preview: "🇫🇷 프랑스 핸드폰 번호가 모두 06로 시작하던 시절...\n- Donne-moi ton 06 [제호 시쓰]\n- Tu peux me donner ton 06 ?\n공감하시는 분 있나요?? 😁\n이후 07 번호도 나오고, 각종 SNS들이 생기면서 C'est quoi ton Insta? 도 흔해졌어요.",
    href: "https://www.threads.com/@douri.french/post/DTZ5INlDwcC",
    tags: ["완전입문자", "초보자", "프랑스문화", "중급자", "프랑스유머"],
    date: "2026년 1월 12일"
  },
  {
    title: "시사회에서 친한 배우들에게 나올 법한 질문 (2/2), \"네 비밀 얘기 공개해도 돼?\" 불어로 어떻게 표현할 수 있을까요?",
    preview: "2️⃣ Avoir le dossier sur quelqu'un\n📌 원래 의미: 프로젝트/사람과 관련된 모든 정보가 취합되는 '폴더' 📁\n💡 \"누군가의 비밀 정보 / 흑역사\"로 의미가 확장!\n✔️ Oh là là, j'ai un gros dossier sur toi ! 😏 → 나 네 자료들 엄청 많은데?\n✔️ Tu veux que je balance ton dossier ? → 네 비밀 공개해도 돼? 🤭",
    href: "https://www.threads.com/@douri.french/post/DTT7J8jEj3A",
    tags: ["초보자", "중급자"],
    date: "2026년 1월 10일"
  },
  {
    title: "드라마, 영화 개봉 전 시사회에서 이런 질문, 정말 자주 나오죠? (1/2), \"재밌었던 비하인드 스토리 좀 알려주세요\"",
    preview: "1️⃣ Anecdote [아넥도뜨]\n📌 뜻: 재미있는 일화, 비하인드 스토리, 썰\n📌 어원: 그리스어 anekdotos = 출판되지 않은, 공개되지 않은\n✔️ Vous avez des anecdotes à nous raconter ? → 들려줄 비하인드 스토리 있나요?\n✔️ Il a raconté une anecdote de tournage. → 그는 촬영 에피소드를 하나 풀었다.",
    href: "https://www.threads.com/@douri.french/post/DTRgvQfD6cd",
    tags: ["중급자", "초보자"],
    date: "2026년 1월 9일"
  },
  {
    title: "\"숫자\"가 자주 쓰이는 프랑스의 시간 관련 표현",
    preview: "프랑스어를 관찰하면 전반적으로\n- 시간을 잘 쪼개고 (15분 단위)\n- 숫자가 들어간 표현이 많고 - 특히 2(deux)가 자주 등장해요.\n📌 프랑스의 \"숫자 2️⃣\" → 아주 조금 / 감각적인 '근사치'\n✅ Deux secondes!! → 잠깐만!! / Ça prend deux minutes. → 금방이야",
    href: "https://www.threads.com/@douri.french/post/DTPwaNyD3gG",
    tags: ["초보자", "프랑스문화", "중급자"],
    date: "2026년 1월 8일"
  },
  {
    title: "2026년의 첫 글로 긍정적인 단어가 \"두 개\"나 들어간 프랑스어 표현으로 시작!, Bel et bien (직역: 아름답고 + 좋게)",
    preview: "💫 Bel et bien - 직역: 아름답고 + 좋게\n🎯 언제 쓸까요? 실제로는 확실한 사실을 강조하는 표현입니다!\n🇰🇷 한국어로 \"진짜로, 제대로, 확실히, 정말로\"의 뉘앙스\n📌 Il est bel et bien parti... → 그는 정말로 떠났어...\n📌 Le projet a bel et bien été approuvé. → 프로젝트는 확실히 승인되었습니다.",
    href: "https://www.threads.com/@douri.french/post/DTFqh0Lj0Jw",
    tags: ["프랑스문화", "초보자", "중급자"],
    date: "2026년 1월 4일"
  },
  {
    title: "크리스마스 가족 식사, 각종 연말 모임... Tu digères bien? 소화 잘 돼?, 프랑스에서는 digérer가 음식만 소화하는 게 아닙니다!",
    preview: "프랑스🇫🇷에서는 digérer가 음식만 소화하는 게 아닙니다!\n📌 충격/상황/감정을 소화하다 = 받아들이다\n1️⃣ J'ai du mal à digérer ce qu'il m'a dit. → 걔가 한 말 그냥 못 넘기겠어. 😤\n2️⃣ Il n'a toujours pas digéré leur rupture. → 그는 아직도 이별을 받아들이지 못했어. 💔\n3️⃣ Cette défaite, l'équipe ne l'a pas digérée. → 팀이 그 패배를 아직도 못 털어냈어.",
    href: "https://www.threads.com/@douri.french/post/DS06X83E_-9",
    tags: ["완전입문자", "초보자", "프랑스문화", "중급자", "프랑스유머"],
    date: "2025년 12월 29일"
  },
  {
    title: "연말, 성탄 선물 준비할 때 유용한 프랑스어, 품절 안내, 배송 지연... 이럴 때 아주 유용한 표현",
    preview: "🛍️ 상점 주인: 지금 품절인데 곧 재입고 돼요.\n📦 온라인 샵: 연휴 때문에 배송이 지연될 수 있어요.\n📌 La livraison à temps, c'est faisable ?\n→ 제시간에 배송 가능할까요?\n✅ Faisable = 할 수 있는, 실현 가능한 [f프자블르]",
    href: "https://www.threads.com/@douri.french/post/DSmJQJCj8Kt",
    tags: ["완전입문자", "초보자", "중급자"],
    date: "2025년 12월 23일"
  },
  {
    title: "\"chaud\"의 반전 매력! (2/2), 위험하고 아슬아슬한 상황에서 마음 따뜻한 순간까지!",
    preview: "1️⃣ [위기, 아찔] 간신히 넘긴 순간\n📌 C'était chaud, j'ai failli rater mon vol ! → 진짜 아찔했어 😵‍💫, 비행기 거의 놓칠 뻔!\n2️⃣ [현실적으로 빡셈] C'est chaud là !\n→ 이틀 후 제출이라고? 너무 빡빡한데? 😰\n4️⃣ [반전] Merci pour ton message, ça fait chaud au cœur ! → 진심 감동했어! 🥹",
    href: "https://www.threads.com/@douri.french/post/DShhsGPDxLN",
    tags: ["초보자", "중급자", "완전입문자"],
    date: "2025년 12월 21일"
  },
  {
    title: "chocolat chaud 많이 드시죠? ☕️ (1/2), 프랑스어로 \"chaud [쇼]\"하면 '뜨거운'을 떠올리죠. 맥락에 따라 다양한 온도의 뉘앙스를!",
    preview: "맥락에 따라 '다양한 온도의 뉘앙스'를 알아보세요!\n1️⃣ [기본 의미] '뜨겁거나 더운' 상태\n📌 Il fait chaud au Brésil. → 브라질은 더워\n📌 J'ai très chaud. → 나 지금 너무 더워\n2️⃣ [순간적인] 몸의 발열 - il est chaud ! 작업 모드 풀가동!",
    href: "https://www.threads.com/@douri.french/post/DSgwziDD-oR",
    tags: ["중급자", "초보자", "완전입문자"],
    date: "2025년 12월 21일"
  },
  {
    title: "JPP... 뭔가요? 프랑스 은행? 금융 기업? 아니요!, 프랑스인들이 지인들과 메신저에서 자주 쓰는 축약어입니다! (SNS, 밈스에도 자주 등장)",
    preview: "📱 JPP = J'en peux plus\n(Je n'en peux plus에서 ne를 생략한 회화체)\n💡 직역: 나는 더 이상 (그것을) 견딜 수 없어\n⚬ 의미: 지쳤어 / 못 참겠어 / 감당이 안 돼\n✔️ 긍정적 상황 (너무 웃겨서 🤣) / 부정적 상황 (너무 힘들어서 😩) 모두에 사용",
    href: "https://www.threads.com/@douri.french/post/DSbEBVQEnVj",
    tags: ["프랑스유머", "초보자", "중급자", "프랑스문화"],
    date: "2025년 12월 19일"
  },
  {
    title: "\"드디어 입을 열었다\", 논란, 루머, 스캔들 후, 오랜 침묵 끝에 드디어 당사자가 말을 꺼냈을 때 프랑스어로 어떻게 표현할 수 있을까요?",
    preview: "📌 Sortir du silence - 침묵에서 나오다 🔇->🔊\n📌 Prendre la parole - 발언권을 잡다 / 입을 열다 🎤\n📌 S'exprimer publiquement - 공개적으로 의견을 표명하다\n📌 Briser le silence - 침묵을 깨다 💥\n💡 공식 성명, 기자회견, 공개 발언에 적합한 표현들",
    href: "https://www.threads.com/@douri.french/post/DSWwhdZj9e9",
    tags: ["중급자", "프랑스문화", "초보자"],
    date: "2025년 12월 17일"
  },
  {
    title: "오늘의 프랑스어 표현, 성숙하게 과거를 바라보고 성찰하기 → avec du recul",
    preview: "💡 avec du recul 🥾🔙\n⚬ 직역: 물러서서 / 거리를 두고\n⚬ 의미: 시간이 지나고 되돌아보니, 객관적으로 보니\n① Avec du recul, j'ai été trop dur avec moi-même. → 돌이켜보니 나 자신에게 너무 엄격했어. 🥺\n② Avec du recul, je comprends mieux sa réaction. → 지나고 보니 그가 왜 그랬는지 알겠어.",
    href: "https://www.threads.com/@douri.french/post/DSSWo7zjxyR",
    tags: ["프랑스문화", "초보자", "완전입문자", "중급자"],
    date: "2025년 12월 15일"
  },
  {
    title: "[시벨롬], 한국어 어감으로는 욕처럼 들리지만 직역하면 프랑스어로 \"굉장히 아름다운 남자\". si bel homme의 캐쥬얼한 버전이 있다면?",
    preview: "직역하면 🇫🇷 프랑스어로 \"굉장히 아름다운 남자\"\n⚡ 캐쥬얼한 버전 → Beau/Belle gosse [보고쓰/벨고쓰]\n파티나 데이트 전, 멋지게 꾸미고 나왔을 때\n\"Waaaah, quel BG!\" 😎 → \"와, 겁나 멋져!!\"\n💡 BG = Beau/Belle Gosse의 축약형 (남녀 모두에게 사용)",
    href: "https://www.threads.com/@douri.french/post/DSFJMU5j5F-",
    tags: ["프랑스문화", "프랑스유머", "중급자", "초보자"],
    date: "2025년 12월 10일"
  },
  {
    title: "프랑스어로 \"이해했어?\" Tu comprends? 만 쓰고 계신가요?, 격식 있는 회의실부터 친구들과의 수다까지 [ 이해했어요? - 상황에 따른 표현 TOP 5 ]",
    preview: "격식 있는 회의실부터 친구들과의 수다까지 생동감 넘치는 표현!\n1️⃣ Vous voyez? (격식 - 행정/공식) 📌 보이다 voir = 상황, 맥락을 이해하다\n2️⃣ J'entends, mais… (비즈니스 - 신중한 반대) 📌 듣다 entendre = 들어주다\n3️⃣ Vous me suivez? (프레젠테이션, 강의)\n4️⃣ T'as capté? (친구들 사이, 완전 캐쥬얼)",
    href: "https://www.threads.com/@douri.french/post/DSAkLOVE5ba",
    tags: ["초보자", "중급자", "프랑스문화", "학습툴"],
    date: "2025년 12월 9일"
  },
  {
    title: "프랑스어 배우면서 한 번씩은 꼭 하는 귀여운 실수, Je me trompe vs Je trompe quelqu'un → \"나 착각했어\" vs \"나 바람폈어\"",
    preview: "💬 말하고 싶은 것: \"나 착각했어\"\n👂🏼 실제로 들리는 것: \"나 바람폈어\" 🤯\n작은 'me' 하나 때문에 '바람둥이'로 오해받지 맙시다!!\n1️⃣ Je me trompe - 재귀 동사: se tromper = 착각하다, 헷갈리다\n2️⃣ Je trompe quelqu'un - 일반 동사: 바람피우다, 속이다",
    href: "https://www.threads.com/@douri.french/post/DR9iHjCjwJr",
    tags: ["중급자", "프랑스문화", "프랑스유머"],
    date: "2025년 12월 7일"
  },
  {
    title: "\"걔 좀 쎄하다, 별로야...\" \"느낌이 안 좋은데...?\" 프랑스어로 어떻게 표현할까요?",
    preview: "💡 프랑스어도 마찬가지!\n- sentir \"냄새 맡다👃🏽 / 감각적으로 느끼다\" 동사로 직관적 느낌을 표현\n1️⃣ 소개팅 후기: hum… je le/la sens pas… → 칭구야, 걔 좀 쎄해... 😬\n2️⃣ 직장에서 불안한 신호: Oulà… ça sent pas bon… → 분위기 심상치 않다\n3️⃣ 면접 후: Je le sens bien ! → 느낌이 좋다~",
    href: "https://www.threads.com/@douri.french/post/DR1_hEcj9kx",
    tags: ["초보자", "프랑스문화", "중급자"],
    date: "2025년 12월 4일"
  },
  {
    title: "C'est la dernière ligne droite, 마지막 스프린트",
    preview: "On y est presque, c'est la dernière ligne droite !\n→ 거의 다 왔어, 이제 막바지야!\n올 한 해, 진짜 열심히 달려왔죠. 🏃🏻‍♀️\n지금이 바로 \"마지막 직선 구간\"!\n12월, 우리 모두 각자의 자리에서 멋진 마무리로 결승선 함께 통과해요! 💙",
    href: "https://www.threads.com/@douri.french/post/DRyLzZbj-bU",
    tags: ["완전입문자", "초보자", "프랑스문화", "중급자"],
    date: "2025년 12월 3일"
  },
  {
    title: "\"Il est un peu 뜐뜐해~\", Gros 대신 쓸 수 있는 다양한 프랑스어 표현. 단어 하나로 인상, 분위기, 친밀도가 달라집니다!",
    preview: "Gros 대신 쓸 수 있는 다양한 프랑스어 표현 🇫🇷\n1️⃣ 귀여운, 훈훈한 톤\n✔️ Il est un peu rond rond. → 걔 약간 통통하더라구, 귀엽게 😌\n✔️ Il est costaud. 🏋🏻‍♂️ → 한 덩치하는 근육질\n2️⃣ 바디 포지티브 무드: Elle a des formes. (칭찬!) → 곡선미 있는 스타일",
    href: "https://www.threads.com/@douri.french/post/DRwaQbrj3ds",
    tags: ["초보자", "중급자", "프랑스문화"],
    date: "2025년 12월 2일"
  },
  {
    title: "프랑스 중급으로 넘어갈 때 알면 좋은 두 동사 (2), permettre의 반대격 → empêcher",
    preview: "🇫🇷 프랑스에서 자주 들을 수 있는 표현\n👉 J'ai un empêchement, je peux pas venir. - 나 불가피한 일이 생겨서 못 가게 됐어 😔\n2️⃣ Empêcher → (누구에게) ~하는 것을 막다, 방해하다\n✅ La censure empêche les journalistes de faire leur travail.\n→ 검열은 언론인들의 활동을 제한한다. 📰",
    href: "https://www.threads.com/@douri.french/post/DRuM7PhjwMC",
    tags: ["중급자", "학습툴", "프랑스문화"],
    date: "2025년 12월 1일"
  },
  {
    title: "프랑스어 중급으로 넘어갈 때 알면 좋은 두 동사 (1), DELF/DALF 작문, 구술에서 빛을 발하는 첫 번째 동사 → permettre!",
    preview: "DELF/DALF에서 작문✍🏽과 구술 시험, 발표, 인터뷰에서 빛을 발하는\n✨ 첫 번째 동사는 바로 permettre!\n1️⃣ Permettre → ~에게 ~을 할 수 있게 / 가능하게 하다\n✅ Cette loi permet de réduire les inégalités économiques.\n→ 이 법은 경제적 불평등 감소를 가능하게 한다. 🏛️",
    href: "https://www.threads.com/@douri.french/post/DRrZ5OCj46P",
    tags: ["중급자", "초보자", "학습툴"],
    date: "2025년 11월 30일"
  },
  {
    title: "오늘의 프랑스어 문제아, au fur et à mesure → 단어 4개가 묶인 하나의 표현이라니!!",
    preview: "💡 뜻 - 조금씩, 시간이 지나면서, 점진적으로\n😵 단어는 또 왜 이렇게 길까요?\n- fur = 비율, 속도 (고어) / mesure = 단계 / 정도\n🥹 발음 챌린지: [오 / fㅟrㅔ아 / 므쥬ㅎ]\n💬 Au fur et à mesure, tu vas t'habituer. → 시간이 지나면 익숙해질 거야.",
    href: "https://www.threads.com/@douri.french/post/DRj_S2Zj0pX",
    tags: ["초보자", "중급자", "발음"],
    date: "2025년 11월 27일"
  },
  {
    title: "나름 자부심 있는 힙합쟁이로서 의견을 드리자면, 프랑스어 발음과 힙합의 관계",
    preview: "언어가 현대화됨에 따라 힙합/랩도 많이 변한 건 사실\n요즘 인기 힙합 음악에는 은어, verlan(음절 도치), 아랍어 남용\n리드미컬하면서 \"순수\" 프랑스어 힙합:\n- Orelsan, Bigflo & Oli, Nekfeu\n🇫🇷 slam 장르: Grand Corps Malade, Oxmo Puccino, Gaël Faye",
    href: "https://www.threads.com/@douri.french/post/DRhXYS6D26Z",
    tags: ["발음", "중급자", "프랑스문화", "학습툴", "초보자"],
    date: "2025년 11월 26일"
  },
  {
    title: "프랑스 사람들이 다툴 때 자주 들리는 표현, rajouter une couche (직역: 층을 하나 더 추가하다)",
    preview: "⚡ rajouter une couche\n- 직역: 층을 하나 더 추가하다\n- 뉘앙스: 괜히 더 보태서 기름 붓다, 상황을 악화시키다 💣\n이미 분위기 안 좋은데 옆에서 굳이 한마디 더 하는 사람, 꼭 있죠? 🤪\n📌 Pas besoin de rajouter une couche, hein ! → 괜히 보태지 마!",
    href: "https://www.threads.com/@douri.french/post/DRgbmsVD0WB",
    tags: ["프랑스문화", "초보자", "중급자"],
    date: "2025년 11월 26일"
  },
  {
    title: "불어 삐약이 레벨을 넘기고 프랑스어 공부하기, 일상에서의 상황 다이얼로그 듣기",
    preview: "일단 오디오가 있고, 대화들이 길지 않아서\n각잡지 않고 하루에 한 개씩만 해도 공부한 양이 꽤 될 거예요.\n일상에서의 대화들을 다뤄 유용하고 그때그때 궁금한 주제 선택 가능!\nniveau 레벨별로 나뉘어져 있어서 débutant으로 시작하세요.\n추천: podcastfrancaisfacile.com",
    href: "https://www.threads.com/@douri.french/post/DRbS0jaj4QU",
    tags: ["완전입문자", "초보자", "중급자", "학습툴"],
    date: "2025년 11월 24일"
  },
  {
    title: "잦은 프랑스어 실수 - 중급편 : \"나한테 이 일이 얼마나 중요한지 알아?!\", '얼마나'를 표현한다면?",
    preview: "\"얼마나\"를 표현한다면? How much의 의미로 \"Comment?\"을 떠올리기 쉬운데요.\n💡 이 경우엔 \"À quel point\"이 더 적절합니다.\n1️⃣ Comment → 방법, 방식: 어떻게\n2️⃣ À quel point → 정도, 감정의 강도: 얼마나\nTu sais à quel point ça me tient à cœur ? → 이게 나에게 얼마나 큰 의미인지 알아?",
    href: "https://www.threads.com/@douri.french/post/DRZIfmFD2um",
    tags: ["중급자"],
    date: "2025년 11월 23일"
  },
  {
    title: "아래 두 문장은 완전히 다른 뜻입니다. 왜일까요?, Je suis à côté. vs Je mets ça de côté. → 전치사 하나 차이!",
    preview: "정답은… 전치사 하나 차이! 🤓\ncôté [꼬떼]는 영어의 side로 '옆, 측면'을 뜻하는 기본 단어예요.\n1️⃣ À côté → 바로 ~옆에 (물리적 위치)\n💬 Il y a un bar sympa à côté. → 근처에 괜찮은 바 하나 있어.\n2️⃣ De côté → 따로, 옆으로 (추상적, 비유적 의미)",
    href: "https://www.threads.com/@douri.french/post/DRRW-AFj6ti",
    tags: ["완전입문자", "초보자", "중급자"],
    date: "2025년 11월 20일"
  },
  {
    title: "과거형에도 쓰이는 il y a의 다양한 의미",
    preview: "Il y a가 현재형에서는 비인칭 패턴으로 there is/there are에 해당해요.\n그런데 과거형에서는 '~ ago'의 의미가 있어요.\n1. ça fait deux ans que J'habite à Paris.\n2. Il y a deux ans que J'habite à Paris.\n3. J'habite à Paris depuis deux ans. (세 가지 모두 같은 의미)",
    href: "https://www.threads.com/@douri.french/post/DRMXzZfD0ad",
    tags: ["완전입문자", "초보자"],
    date: "2025년 11월 18일"
  },
  {
    title: "\"파리 테러 10주기\"를 추모하기, Paris fait son deuil.",
    preview: "\"파리 테러 10주기\"를 추모하는 동네는 나의 20대의 추억이 가득한 곳이다.\nFaire son deuil 🕊️\n단순히 '애도하다, 마음을 추스리다'를 넘어\n상실의 현실을 받아들이고 시간을 필요로 하는 '치유의 여정❤️‍🩹'을 의미\nAu final, c'est toujours l'amour qui gagne ! ✊🏽",
    href: "https://www.threads.com/@douri.french/post/DRHeJ9uD2Ly",
    tags: ["프랑스문화", "중급자", "초보자"],
    date: "2025년 11월 16일"
  },
  {
    title: "KBS World French, 한불 역으로 프랑스어 공부하기",
    preview: "KBS World French의 강점\n🎯 \"한국의 actualités\"를 기반으로 하기 때문에\n→ 역으로 내가 어느 정도 알고 있는 내용이\n프랑스어로 어떻게 표현되었는지를 관찰할 수 있음\n✨ B2에서 C1로 넘어가는 프랑스어 학습자에게 추천",
    href: "https://www.threads.com/@douri.french/post/DRABx_fDyv7",
    tags: ["초보자", "학습툴", "중급자"],
    date: "2025년 11월 13일"
  },
  {
    title: "\"기다리다\"로 알고 있던 attendre, 사실은 '기대하다'의 의미도 있습니다 → Je m'attendais pas à ça !! (전혀 생각(기대)하지 못했어!)",
    preview: "💬 Je m'attendais pas à ça !!\n👉 전혀 생각(기대)하지 못했어! 🥳🫣\n🎯 Attendre의 두 가지 핵심 용법\n1️⃣ 기다리다 (wait for ⏳): Mon patron m'attend. - 상사는 나를 기다린다.\n2️⃣ 기대하다 (expect 👐🏽): Mon patron attend beaucoup de moi. - 내 상사는 나에게 기대하는 바가 크다.",
    href: "https://www.threads.com/@douri.french/post/DQ8LXhyjz4J",
    tags: ["초보자", "중급자"],
    date: "2025년 11월 12일"
  },
  {
    title: "프랑스에서도 큰 논란이었던 이 사건 기억하시나요?, « Casse-toi, pauvre con ! » 어떤 의미일까요?",
    preview: "2008년, 🇫🇷 사르코지 전 대통령이 내뱉은 유명한 한마디!! 💥\n⚠️ 단어 분석\n1️⃣ casse-toi: '꺼져' (Va-t'en보다 더 센 명령법)\n2️⃣ con: 직역하면 '바보, 멍청이' - 심각한 모욕이 될 수 있음\n3️⃣ pauvre con: 비꼼과 경멸이 담긴 표현 → 벌금형까지 받았습니다.",
    href: "https://www.threads.com/@douri.french/post/DQ34xtlDuK0",
    tags: ["초보자", "프랑스유머", "프랑스문화"],
    date: "2025년 11월 10일"
  },
  {
    title: "프랑스어로 \"Il est pauvre / riche\" 대신, 경제적 상황을 섬세하게 표현하기",
    preview: "📺 최근 프랑스 미디어에서 접할 수 있는 격식적 사회, 경제 용어들\nLes ménages à revenus faibles → 저소득층 가정들\nLe niveau de vie élevé / faible → 높은 / 낮은 생활 수준\nLes foyers avec peu de moyens → 경제적 여유가 적은 가정들\nIl vient d'une famille aisée → 그는 부유한 가정 출신이다",
    href: "https://www.threads.com/@douri.french/post/DQzPKKKD19Q",
    tags: ["중급자", "프랑스문화", "초보자"],
    date: "2025년 11월 9일"
  },
  {
    title: "프랑스어에서 제일 무서운 특수문자는?!, 영어의 마침표(period)에는 그냥 \".\" 하나지만 프랑스어에는... 바로 그 이름도 무서운 \"point barre\"!!",
    preview: "📌 표현 분석\n- point = 마침표 '.' / barre = 막대, 선을 긋다\n👉 \"마침표 찍고 선까지 그어버림\" → 완전 종결 선언!! 🕹️\n😨 C'est non, point barre ! → 안 된다면 안 되는 거야!\n이 표현이 들리면 일단... 들어주는 게 정신 건강에 좋습니다. 🥲",
    href: "https://www.threads.com/@douri.french/post/DQtFZicD8Yv",
    tags: ["프랑스유머", "프랑스문화", "초보자", "중급자"],
    date: "2025년 11월 5일"
  },
  {
    title: "소싯적 프랑스에서 데이팅 앱으로 실제로 주고받았던 메세지, L'amour avec un grand A 이게 어떤 의미일까요?!",
    preview: "소싯적 프랑스에서 데이팅 앱으로 실제로 주고받았던 메세지 💬📱\n👩🏻: Tu cherches quoi ici ? - 여기서 찾는 게 뭐야?\n🧑🏽‍🦱: Je cherche l'amour avec un grand A - 큰 A로 쓰는 사랑\n💖 크고 특별한 사랑 - 기대나 조건 없이 상호적인 사랑\n'petit a(작은 a)'의 일상적인 사랑보다 훨씬 깊고, 넓은 찐 사랑을 뜻해요!",
    href: "https://www.threads.com/@douri.french/post/DQovO1Jj89k",
    tags: ["프랑스문화", "중급자", "초보자", "완전입문자"],
    date: "2025년 11월 4일"
  },
  {
    title: "🇫🇷 전치사 de 하나로 나뉘는 \"없음\"과 \"부족함\"의 미묘한 차이",
    preview: "manquer = 아예 없다 🚫 / manquer de = 모자라다 ⚖️",
    href: "https://www.threads.com/@douri.french/post/DQiJRNJEjTO",
    tags: ["초보자", "중급자"],
    date: "2025년 11월 4일"
  },
  {
    title: "🇫🇷 지저분한 빨래는 각자 집에서... 🤭",
    preview: "🧺 Laver son linge sale en public",
    href: "https://www.threads.com/@douri.french/post/DQY_CHdjxAP",
    tags: ["프랑스유머", "중급자", "초보자", "프랑스문화"],
    date: "2025년 10월 29일"
  },
  {
    title: "🇫🇷 요즘 프랑스에서 화제인 'mots remplisseurs'! 🧠",
    preview: "📍 도대체 뭘 채우는 걸까요? 😝",
    href: "https://www.threads.com/@douri.french/post/DQVbSj0j9sk",
    tags: ["프랑스문화", "중급자", "프랑스유머", "튜터링"],
    date: "2025년 10월 28일"
  },
  {
    title: "🎒 은근히 헷갈리는 프랑스어 단어 🇫🇷 - cours / course / classe / leçon",
    preview: "전부 '수업' 관련인 것 알겠는데... 매번 헷갈려~ 😲",
    href: "https://www.threads.com/@douri.french/post/DQG8_RTD7JI",
    tags: ["초보자", "중급자", "완전입문자"],
    date: "2025년 10월 22일"
  },
  {
    title: "세계적으로 '투덜쟁이😒'로 유명한 프랑스인들🇫🇷...",
    preview: "Il râle pour rien ! / Il râle pour une bonne raison.",
    href: "https://www.threads.com/@douri.french/post/DQDNEgkElLm",
    tags: ["프랑스문화", "완전입문자", "초보자", "중급자"],
    date: "2025년 10월 21일"
  },
  {
    title: "일상에서 터무니없음, 불필요한 상황을 💅🏻 격식있게 표현하고 싶을 때!",
    preview: "Ça n'a pas lieu d'être = 지금은 그럴 때가 아니야 🙂‍↔️",
    href: "https://www.threads.com/@douri.french/post/DP1Uhi7j-LH",
    tags: ["중급자", "초보자"],
    date: "2025년 10월 15일"
  },
  {
    title: "💬 오래된 연인 사이에서 들을 수 있는 🇫🇷 subjonctif",
    preview: "💔 Qu'est-ce que tu veux que je te dise ?",
    href: "https://www.threads.com/@douri.french/post/DPyV5XFj9_u",
    tags: ["초보자", "프랑스문화", "중급자", "프랑스유머"],
    date: "2025년 10월 14일"
  },
  {
    title: "[일상에서 매일 듣는 tomber 표현 TOP 10 🔥]",
    preview: "Tomber = '넘어지다🩹'로만 알고 계신가요? 그건 프랑스어의 시작일 뿐이에요! 🇫🇷",
    href: "https://www.threads.com/@douri.french/post/DPjd3iej8XT",
    tags: ["초보자", "중급자"],
    date: "2025년 10월 9일"
  },
  {
    title: "[내가 좋아하는 불어 표현 - 찬반 저울질하기 ⚖️]",
    preview: "🎯 peser le pour et le contre",
    href: "https://www.threads.com/@douri.french/post/DPdA4O-D_y4",
    tags: ["초보자", "중급자"],
    date: "2025년 10월 6일"
  },
  {
    title: "오해를 살 수 있는 \"다운증후군\"의 프랑스어 용어",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DPds4TEDwox",
    tags: ["프랑스문화", "중급자", "학습툴", "초보자"],
    date: "2025년 10월 6일"
  },
  {
    title: "[오늘의 불어 - 추석 친척 특집 🌕]",
    preview: "🇫🇷 Mettre son grain de sel 🧂 - 눼눼, 알았다고요~ 소금 좀 적당히.... 😅",
    href: "https://www.threads.com/@douri.french/post/DPXe1w8jz-e",
    tags: ["프랑스문화", "초보자", "중급자", "프랑스유머"],
    date: "2025년 10월 4일"
  },
  {
    title: "[오늘의 불어 - 강한 의지의 표현] 무슨 일이 있어도!! 👊🏽",
    preview: "🇫🇷 Quoi qu'il arrive [꾸아 낄아히브]",
    href: "https://www.threads.com/@douri.french/post/DPStCx3Dz9J",
    tags: ["중급자", "프랑스문화", "초보자"],
    date: "2025년 10월 2일"
  },
  {
    title: "[오늘의 불어 - 파리 한 마리 못 해칠 사람 🪰]",
    preview: "- 곤충을 무서워하는 사람일까요?? 🫣",
    href: "https://www.threads.com/@douri.french/post/DPQxDccD3JF",
    tags: ["프랑스문화", "초보자", "중급자"],
    date: "2025년 10월 1일"
  },
  {
    title: "[오늘의 불어 - 내가 말했었잖아! 😤]",
    preview: "🇫🇷 Je te l'avais dit !",
    href: "https://www.threads.com/@douri.french/post/DPOVWwHDwVM",
    tags: ["중급자", "초보자"],
    date: "2025년 9월 30일"
  },
  {
    title: "일상에서 자주 쓰는 형용사들로 🇫🇷 \"장난 아니야, 끝내줘🔥\"를 표현한다면?",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DPKzt_bjwsc",
    tags: ["초보자", "중급자"],
    date: "2025년 9월 29일"
  },
  {
    title: "🎵 재미있는 프랑스어 어감의 단어 - 딱꼬딱!",
    preview: "tac au tac – 닭이 우는 소리일까요? 🐓",
    href: "https://www.threads.com/@douri.french/post/DPGvjb1jyaN",
    tags: ["발음", "완전입문자", "초보자", "중급자"],
    date: "2025년 9월 27일"
  },
  {
    title: "주체되지 않는 감정🎆의 \"꺄, 너무 기대돼, 설레!!😚\"는 🇫🇷 프랑스어로 어떻게 말할 수 있을까요?",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DPAMC7JEgBT",
    tags: ["초보자", "완전입문자", "중급자"],
    date: "2025년 9월 25일"
  },
  {
    title: "어학원에서 쓰면 안 된다고 했던 문장들 (2)",
    preview: "Je suis excité… 🔞 - 성적인 뉘앙스가 있다구요? 😳",
    href: "https://www.threads.com/@douri.french/post/DO9-Ozbj4Aw",
    tags: ["초보자", "완전입문자", "중급자"],
    date: "2025년 9월 24일"
  },
  {
    title: "[오늘의 불어 - 완료가 중요할 때]",
    preview: "On fait avec - 있는 대로 하자 💫",
    href: "https://www.threads.com/@douri.french/post/DO54gW1jz7-",
    tags: ["프랑스문화", "초보자", "중급자", "완전입문자"],
    date: "2025년 9월 22일"
  },
  {
    title: "'연애 실험: 블라인드 러브 프랑스편' 표현 (1)",
    preview: "- 🇫🇷 은근히 실수가 잦은 형용사 성별 선택 🤥",
    href: "https://www.threads.com/@douri.french/post/DOeuiH8Evnf",
    tags: ["초보자", "완전입문자", "중급자"],
    date: "2025년 9월 12일"
  },
  {
    title: "넷플릭스 '러브 이즈 블라인드' 프랑스편 개봉!! 🎬",
    preview: "🍿 '일상에서의 자연스러운 구어체'와 '오늘날의 불어🇫🇷'를 익히기! ✨",
    href: "https://www.threads.com/@douri.french/post/DOawMwuj1Rc",
    tags: ["중급자", "학습툴", "프랑스문화"],
    date: "2025년 9월 10일"
  },
  {
    title: "어학원에서 쓰면 안 된다고 했던 문장들 (1)",
    preview: "Je vais bien 🙆🏻 🆚 Je suis bien 🙅🏻",
    href: "https://www.threads.com/@douri.french/post/DOXhb_Cjwmi",
    tags: ["완전입문자", "초보자"],
    date: "2025년 9월 9일"
  },
  {
    title: "Tant mieux, Tant pis [떵미유, 떵삐]",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DOS_qhSj0gM",
    tags: ["완전입문자", "프랑스문화", "초보자", "중급자"],
    date: "2025년 9월 7일"
  },
  {
    title: "🇫🇷 프랑스어의 마법의 부사 Bien 파헤치기 ✨",
    preview: "- 잘(well) 외의 주요 역할",
    href: "https://www.threads.com/@douri.french/post/DOQWUV1j-i2",
    tags: ["완전입문자", "초보자", "중급자"],
    date: "2025년 9월 6일"
  },
  {
    title: "🇫🇷 9월, reprise 시즌과 prise 표현들",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DOD1X_OD6i3",
    tags: ["초보자", "중급자"],
    date: "2025년 9월 1일"
  },
  {
    title: "\"저랑 친한 언니의 남자 친구의 전 직장 동료\"",
    preview: "한국어로도 표현하기",
    href: "https://www.threads.com/@douri.french/post/DN9rAxBD1yA",
    tags: ["학습툴", "초보자", "중급자"],
    date: "2025년 8월 30일"
  },
  {
    title: "🇫🇷 프랑스어 별명 짓기 꿀팁 ✨",
    preview: "'마담 Madame', '므쓔 Monsieur' 뒤에 그 사람의 특징을 별명처럼 붙이기",
    href: "https://www.threads.com/@douri.french/post/DN5m-VND-HJ",
    tags: ["중급자", "초보자", "학습툴"],
    date: "2025년 8월 28일"
  },
  {
    title: "프랑스어 명령법 (L'impératif)으로 응원하기! 💪",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DN1drOlZJhJ",
    tags: ["초보자", "중급자"],
    date: "2025년 8월 27일"
  },
  {
    title: "금발을 놀릴 때 쓰는 프랑스 농담! 🤭 - \"à huis clos\"",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DNzswHb3lI3",
    tags: ["프랑스유머", "중급자", "초보자", "프랑스문화"],
    date: "2025년 8월 26일"
  },
  {
    title: "Q: 저는 일상 회화 능력을 늘리고 싶은데 Langage formel까지 공부해야 할까요? 🤷🏻‍♂️",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DNxAoWHXjZG",
    tags: ["학습툴", "초보자", "중급자"],
    date: "2025년 8월 25일"
  },
  {
    title: "🍷 우아하게 회피하기",
    preview: "👉 Je dis ça, je dis rien = 그냥 그렇다고, 그냥 하는 말이야 🤷‍♀️",
    href: "https://www.threads.com/@douri.french/post/DNvRzFD3p2b",
    tags: ["프랑스문화", "중급자", "초보자"],
    date: "2025년 8월 24일"
  },
  {
    title: "중급 표현 - '야, 김칫국 마시지 마~' 표현하기",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DNmZAPMP4WN",
    tags: ["중급자"],
    date: "2025년 8월 21일"
  },
  {
    title: "🌙 프랑스어 단어 \"SOMMEIL\" 마스터하기! 💤",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DNkBxtlvsuw",
    tags: ["중급자"],
    date: "2025년 8월 20일"
  },
  {
    title: "🥹 사랑하는 사람에게 '조심해, 잘 지내~' 프랑스어로 표현하기! 💕",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DNSYScAPMpc",
    tags: ["중급자", "초보자"],
    date: "2025년 8월 13일"
  },
  {
    title: "프랑스어로 만화책(BD), 웹툰 💭, 그룹 채팅방📱, SNS에서 인플루언서😎가 쓴 글도 눈여겨보세요!",
    preview: "- S 발음",
    href: "https://www.threads.com/@douri.french/post/DNQjxBNvQjK",
    tags: ["발음", "초보자", "중급자"],
    date: "2025년 8월 12일"
  },
  {
    title: "📝 Devoir 단어 제대로 활용하기 - 영어의 owe",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DNNDIM9vKX0",
    tags: ["초보자", "중급자"],
    date: "2025년 8월 11일"
  },
  {
    title: "[🇫🇷 오늘의 불어 퀴즈 - plus의 's' 발음 🧐]",
    preview: "마농이 얘기합니다 🗣️ J'en veux plus - 'plus' 안의 's'는 발음을 할까요?",
    href: "https://www.threads.com/@douri.french/post/DNMR-pPS8lf",
    tags: ["완전입문자", "초보자", "발음"],
    date: "2025년 8월 11일"
  },
  {
    title: "내가 생각하는 가장 '프랑스'다운 불어 표현 😆 - permettre",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DNHgwNTvRN1",
    tags: ["초보자", "프랑스문화", "중급자", "프랑스유머"],
    date: "2025년 8월 9일"
  },
  {
    title: "믿기지 않겠지만 이 모든 단어가 프랑스어로 '돈'을 뜻합니다 ⚖️🏦",
    preview: "- 무역 시대의 감자, 밀부터 금융 단어까지!",
    href: "https://www.threads.com/@douri.french/post/DNEmH1TzJ8N",
    tags: ["중급자", "초보자", "프랑스문화"],
    date: "2025년 8월 8일"
  },
  {
    title: "[문장 개선] J'espère que je vais sentir bien la semaine prochaine.",
    preview: "J'espérais pouvoir me sentir mieux la semaine d'après. 이게 말이 될까요?",
    href: "https://www.threads.com/@douri.french/post/DNCbD5VvjNv",
    tags: ["초보자", "중급자"],
    date: "2025년 8월 7일"
  },
  {
    title: "[🇫🇷 오늘의 불어 - '다음 주' 표현 방법 3가지 📅]",
    preview: "prochain, suivant, d'après... 헷갈리시죠? 😢 (+ 퀴즈)",
    href: "https://www.threads.com/@douri.french/post/DM_xBcDvzyz",
    tags: ["초보자", "중급자"],
    date: "2025년 8월 6일"
  },
  {
    title: "[오늘의 재밌는 불어 표현 - 프랑스인들의 직설적인 화법 🤪]",
    preview: "👉🏼 Ne pas mâcher ses mots",
    href: "https://www.threads.com/@douri.french/post/DM7c9Fgv1eN",
    tags: ["초보자", "중급자", "프랑스문화"],
    date: "2025년 8월 4일"
  },
  {
    title: "🇫🇷 프랑스어 입문 - '누구를 만나다' 뉘앙스 Rencontrer? Voir? 🤔",
    preview: "🧡 + Bonus : 데이팅앱에서 자주 쓰는 표현!",
    href: "https://www.threads.com/@douri.french/post/DM5H9NFvgu5",
    tags: ["초보자", "완전입문자"],
    date: "2025년 8월 3일"
  },
  {
    title: "[라포, RSVP, déjà vu에 이은 🌎 글로벌 프랑스어 표현 - carte blanche!]",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DM0GJMWvnDB",
    tags: ["프랑스문화", "중급자", "초보자"],
    date: "2025년 8월 1일"
  },
  {
    title: "[프랑스어로 귀여운 실수 😅 - 가짜 친구 10]",
    preview: "📌 Pain - 우리가 좋아하는 빵🍞이 영어로는 고통이죠 😖!",
    href: "https://www.threads.com/@douri.french/post/DMwjBYUvvSB",
    tags: ["완전입문자", "초보자", "중급자"],
    date: "2025년 7월 31일"
  },
  {
    title: "🇫🇷 프랑스어로 귀여운 실수 😙",
    preview: "~ 하는 척 하다 = faire semblant",
    href: "https://www.threads.com/@douri.french/post/DMrGFe3yFK0",
    tags: ["초보자", "중급자"],
    date: "2025년 7월 29일"
  },
  {
    title: "🇫🇷 들으면 안심되는 프랑스어 표현",
    preview: "🤲 être entre de bonnes mains - 좋은 손들 사이에 있다.",
    href: "https://www.threads.com/@douri.french/post/DMhSGRFvhs0",
    tags: ["초보자", "중급자"],
    date: "2025년 7월 25일"
  },
  {
    title: "'니 뭐 쫌 되나?😡'를 프랑스어로?",
    preview: "👉 Tu te prends pour qui, toi !?",
    href: "https://www.threads.com/@douri.french/post/DMcT4SsP5G3",
    tags: ["중급자", "초보자"],
    date: "2025년 7월 23일"
  },
  {
    title: "우리 한국어에서는 '정말, 많이, 너무'처럼 부사를 많이 넣어야 감정이 잘 전달된다고 생각하잖아요?",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DMc5lqQPYXc",
    tags: ["초보자", "완전입문자", "프랑스문화", "중급자"],
    date: "2025년 7월 23일"
  },
  {
    title: "[🇫🇷 같은 단어, 전혀 다른 뜻? 🫨]",
    preview: "🎯 형용사 위치 하나로 달라지는 프랑스어 단어 8개 총정리!",
    href: "https://www.threads.com/@douri.french/post/DMXNPP1PCyE",
    tags: ["완전입문자", "초보자", "중급자"],
    date: "2025년 7월 21일"
  },
  {
    title: "[🇫🇷 오늘의 불어 - je suis bien armé] 무기를 잘 소지한!",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DMJTzvnTlqS",
    tags: ["초보자", "프랑스문화", "중급자"],
    date: "2025년 7월 16일"
  },
  {
    title: "[🇫🇷 tête 하나로 표현하는 사람 유형 3가지 😉]",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DMHOs5XvgbD",
    tags: ["프랑스문화", "중급자"],
    date: "2025년 7월 15일"
  },
  {
    title: "[🇫🇷 내가 좋아하는 불어 단어 - sérénité 🌿] 마음의 평화",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DMCjKCkPKvI",
    tags: ["프랑스문화", "초보자", "중급자"],
    date: "2025년 7월 13일"
  },
  {
    title: "[🇫🇷 오늘의 불어 - bien mérité 🍾] 누릴 자격이 있어!",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DL9VX1fPtVU",
    tags: ["프랑스문화", "초보자", "중급자"],
    date: "2025년 7월 11일"
  },
  {
    title: "[Passer 동사 하나로 10가지 상황 말하기 💬] 뜻 알아보기",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DL6VbipPe8X",
    tags: ["초보자", "중급자"],
    date: "2025년 7월 10일"
  },
  {
    title: "[🇫🇷 passer 동사] 일상 속 10가지 쓰임새 모음",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DL10cmKv92x",
    tags: ["초보자", "중급자"],
    date: "2025년 7월 8일"
  },
  {
    title: "[🇫🇷 프랑스어 문법 공부 챌린지] 수요조사",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DLwtBaEvxWG",
    tags: ["중급자", "학습툴", "초보자", "튜터링"],
    date: "2025년 7월 6일"
  },
  {
    title: "📌 자주 하는 프랑스어 실수!",
    preview: "시험 결과 전에 축하는 안돼요~ 🎉🙅🏻‍♀️ passer는 단순히 '시험을 보다'랍니다!",
    href: "https://www.threads.com/@douri.french/post/DLqwm7VvsF6",
    tags: ["초보자", "중급자", "프랑스문화"],
    date: "2025년 7월 4일"
  },
  {
    title: "📢 \"Je veux atteindre le DELF B1\"의 atteindre 발음",
    preview: "- 실전 연습 🇫🇷 (최종 편)",
    href: "https://www.threads.com/@douri.french/post/DLmu-_8P70L",
    tags: ["중급자", "초보자", "발음"],
    date: "2025년 7월 2일"
  },
  {
    title: "📢 ein 발음 마스터하기 - 실전 팁 편 🇫🇷 (2/3)",
    preview: "\"자, 이제 입 근육 준비하실게요~\" 😄",
    href: "https://www.threads.com/@douri.french/post/DLmo4WUv-LN",
    tags: ["발음", "중급자", "초보자"],
    date: "2025년 7월 2일"
  },
  {
    title: "📢 며칠 전 프랑스어 발음 챌린지🇫🇷에 등장했던 그 빌런 🤡, 바로 'ein'입니다! (1/3)",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DLmkOYuPNtW",
    tags: ["발음", "중급자", "초보자"],
    date: "2025년 7월 2일"
  },
  {
    title: "[입문자들을 위한 오늘의 불어 🍯팁]",
    preview: "헷갈리기 쉬운 alors와 alors que",
    href: "https://www.threads.com/@douri.french/post/DLkXQYlPSGi",
    tags: ["완전입문자", "초보자"],
    date: "2025년 7월 1일"
  },
  {
    title: "🗣️ 프랑스어 발음 챌린지 🇫🇷 입 주변 근육, 이제 프랑스어로 깨워봅시다! 💪",
    preview: "entendre / attendre / atteindre / étendre / éteindre",
    href: "https://www.threads.com/@douri.french/post/DLgdpwNvuA_",
    tags: ["초보자", "중급자", "발음"],
    date: "2025년 6월 30일"
  },
  {
    title: "[🎳 ~몇 번째 연속으로 표현하기 - consécutif]",
    preview: "4️⃣ consécutif (형용사)",
    href: "https://www.threads.com/@douri.french/post/DLbENbhygWh",
    tags: ["초보자", "학습툴", "중급자"],
    date: "2025년 6월 28일"
  },
  {
    title: "[오늘의 불어 - enchaîner 기계적인 연속성 🏭]",
    preview: "3️⃣ enchaîner입니다!",
    href: "https://www.threads.com/@douri.french/post/DLV0Zm0z0G1",
    tags: ["초보자", "학습툴", "중급자"],
    date: "2025년 6월 26일"
  },
  {
    title: "[🇫🇷프랑스어로 \"연달아, 바로 이어서\" 표현하기]",
    preview: "2️⃣ de suite (부사구) 🏃‍♂️",
    href: "https://www.threads.com/@douri.french/post/DLQuGyNT3-E",
    tags: ["초보자", "학습툴", "중급자"],
    date: "2025년 6월 24일"
  },
  {
    title: "[오늘의 중급 불어 – 연달아, 바로 이어서 ✨]",
    preview: "1️⃣ d'affilée (부사구) ⛓️",
    href: "https://www.threads.com/@douri.french/post/DLOiKPjvKKl",
    tags: ["학습툴", "중급자", "초보자"],
    date: "2025년 6월 23일"
  },
  {
    title: "한국인들이 자주 쓰는 '그러니까~': 부사 justement의 쓰임새",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DLPLXBGvFFC",
    tags: ["프랑스문화", "완전입문자", "초보자", "중급자"],
    date: "2025년 6월 23일"
  },
  {
    title: "[오늘의 재미있는 불어 표현 👶🏻]",
    preview: "💬 엄마/아빠 빼박이네!! 😻 🇫🇷 C'est maman/papa tout craché!",
    href: "https://www.threads.com/@douri.french/post/DKhV0eNvbVp",
    tags: ["프랑스문화", "초보자", "중급자"],
    date: "2025년 6월 5일"
  },
  {
    title: "[오늘의 불어 표현 - contre toute attente]",
    preview: "🍀기대하지 않았던 기분 좋은 결과가 있을 때🍀",
    href: "https://www.threads.com/@douri.french/post/DKQO84hTu1R",
    tags: ["초보자", "중급자"],
    date: "2025년 5월 30일"
  },
  {
    title: "[오늘의 프랑스어 🇫🇷 - Quel culot!]",
    preview: "- 간땡이가 부었네, 거짓말을 저렇게?? 😱",
    href: "https://www.threads.com/@douri.french/post/DKKBxG1vBhu",
    tags: ["초보자", "중급자"],
    date: "2025년 5월 27일"
  },
  {
    title: "[📢 제가 좋아하는 불어 표현 - 중급]",
    preview: "힙합처럼 라임으로 짜증내기 - ça rime à rien 라임 맞는 게 없어",
    href: "https://www.threads.com/@douri.french/post/DJ-Pht3TeKP",
    tags: ["중급자", "초보자", "프랑스문화"],
    date: "2025년 5월 23일"
  },
  {
    title: "[제가 좋아하는 불어 표현 – 초급]",
    preview: "je vais t'épauler – 너에게 내 어깨를 내줄게 🙆🏻‍♂️",
    href: "https://www.threads.com/@douri.french/post/DJ7tXkbzu6c",
    tags: ["초보자", "중급자"],
    date: "2025년 5월 22일"
  },
  {
    title: "[시각화 & 자체 제작 자료의 장점] 외형 묘사 단어",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DJxyt5zvz9h",
    tags: ["학습툴", "초보자", "완전입문자", "튜터링"],
    date: "2025년 5월 18일"
  },
  {
    title: "베니스비엔날레 국제건축전을 위한 불어 수업",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DJbuETWvNBy",
    tags: ["튜터링", "중급자"],
    date: "2025년 5월 9일"
  },
  {
    title: "[외국어를 공부하는 분들에게 💌] faut tourner la page",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DJWS1gSvpDX",
    tags: ["학습툴", "초보자", "중급자"],
    date: "2025년 5월 7일"
  },
  {
    title: "[ChatGPT로 재밌게 프랑스어 입문하기]",
    preview: "- 2주 만에 불어 단어 수 10배로 늘리기! 🚀",
    href: "https://www.threads.com/@douri.french/post/DI8hQhxPWGK",
    tags: ["학습툴", "완전입문자", "초보자", "중급자"],
    date: "2025년 4월 27일"
  },
  {
    title: "[오늘의 불어 🇫🇷 - j'avoue]",
    preview: "왜 프랑스인들은 그렇게 자주 고백할까요? 😲",
    href: "https://www.threads.com/@douri.french/post/DI2k5EDvx3h",
    tags: ["초보자", "중급자"],
    date: "2025년 4월 25일"
  },
  {
    title: "[오늘의 불어 - je suis aux anges]",
    preview: "'천사들과 함께 있다.' 헉... 혹시 하늘나라?? 😳",
    href: "https://www.threads.com/@douri.french/post/DIyalpzNgP8",
    tags: ["초보자", "중급자"],
    date: "2025년 4월 23일"
  },
  {
    title: "[오늘의 불어 - Le monde à l'envers]",
    preview: "어질어질... 😵‍💫 로꾸거 세상",
    href: "https://www.threads.com/@douri.french/post/DIAJykrT6RR",
    tags: ["초보자", "중급자"],
    date: "2025년 4월 4일"
  },
  {
    title: "주 35시간 근무와 워라밸을 중요시하는",
    preview: "프랑스에도 야근이 있을까요? 🇫🇷 💼",
    href: "https://www.threads.com/@douri.french/post/DH69ErxzZvb",
    tags: ["초보자", "프랑스문화"],
    date: "2025년 4월 2일"
  },
  {
    title: "[오늘의 불어 - rire jaune]",
    preview: "나를 바라보며 '노랗게 웃지마~'\n이거 인종차별 표현 아닌가요? 🤨",
    href: "https://www.threads.com/@douri.french/post/DH24viMPUWc",
    tags: ["프랑스문화", "초보자", "중급자"],
    date: "2025년 3월 31일"
  },
  {
    title: "개인적으로 좋아하는 'bienveillance [비앙베이엉스]'라는 프랑스어 단어에 대해",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DHccsnov4ZJ",
    tags: ["프랑스문화", "중급자", "초보자"],
    date: "2025년 3월 21일"
  },
  {
    title: "[🇫🇷 오늘의 불어 - 중급]",
    preview: "à l’arrache 휘뚜루마뚜루~ 🙃",
    href: "https://www.threads.com/@douri.french/post/DHQOg8Wv1ZZ",
    tags: ["중급자", "초보자"],
    date: "2025년 3월 16일"
  },
  {
    title: "[🇫🇷 프랑스 문화를 파헤쳐드립니다!",
    preview: "질문에만 답하기 🫠 - C'est hors sujet]",
    href: "https://www.threads.com/@douri.french/post/DHHeXwOT4Eb",
    tags: ["프랑스문화", "초보자", "완전입문자"],
    date: "2025년 3월 13일"
  },
  {
    title: "[오늘의 불어 - être gourmand]",
    preview: "- 인생은 라따뚜이의 레미처럼! 🐭🧀",
    href: "https://www.threads.com/@douri.french/post/DG2aLk7vZuU",
    tags: ["초보자", "완전입문자"],
    date: "2025년 3월 6일"
  },
  {
    title: "재밌는 프랑스어 공부를 도와드립니다!",
    preview: "- 이 문법 책 하나면 충분합니다 📚",
    href: "https://www.threads.com/@douri.french/post/DGxzbSYvbhs",
    tags: ["완전입문자", "초보자", "학습툴"],
    date: "2025년 3월 4일"
  },
  {
    title: "Tu suis Timothée Chalamet sur Insta.?",
    preview: "- 너는 인스타에서 티모시 샬라메...야? 🤔",
    href: "https://www.threads.com/@douri.french/post/DGomXA2TLlk",
    tags: ["완전입문자", "초보자", "중급자"],
    date: "2025년 3월 1일"
  },
  {
    title: "['파헤치다🦫’를 프랑스어로?? - Part 2.]",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DGjySXrvJLN",
    tags: ["초보자", "중급자"],
    date: "2025년 2월 27일"
  },
  {
    title: "[‘파헤치다🔍’의 프랑스어 표현 - Part 1.]",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DGh0BTpvCEa",
    tags: ["중급자", "초보자"],
    date: "2025년 2월 26일"
  },
  {
    title: "효율적인 프랑스어 학습 툴",
    preview: "- dictée 받아쓰기로 여러 토끼🐰잡기]",
    href: "https://www.threads.com/@douri.french/post/DGcvTQ-Ji2m",
    tags: ["학습툴", "초보자", "중급자"],
    date: "2025년 2월 24일"
  },
  {
    title: "[Passé composé 정복하기 - 왕래동사]",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DGcILGDpSK0",
    tags: ["초보자", "완전입문자"],
    date: "2025년 2월 24일"
  },
  {
    title: "[자주 쓰는 프랑스어 동사 슬랭 버젼]",
    preview: "🍿Plan Cœur로 불어 공부하기 - 마지막 편",
    href: "https://www.threads.com/@douri.french/post/DGWp4SsyM5o",
    tags: ["완전입문자", "초보자", "중급자"],
    date: "2025년 2월 22일"
  },
  {
    title: "[🔎오늘의 프랑스어 발견]",
    preview: "왜 ‘어린 왕자’는 Le Petit Prince일까요?",
    href: "https://www.threads.com/@douri.french/post/DGUQYP4SWht",
    tags: ["완전입문자", "초보자", "프랑스문화"],
    date: "2025년 2월 21일"
  },
  {
    title: "원어민처럼 '바로 그 순간!⚡' 표현하기",
    preview: "🎬Plan Cœur로 불어 공부하기 (5)",
    href: "https://www.threads.com/@douri.french/post/DGPtWl1v5sW",
    tags: ["초보자", "완전입문자"],
    date: "2025년 2월 19일"
  },
  {
    title: "[반복되는 주기 표현하기] - 구글 아젠다📆로 불어 공부하기",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DGMuqY4PtYW",
    tags: ["완전입문자", "학습툴", "초보자", "중급자"],
    date: "2025년 2월 18일"
  },
  {
    title: "[오늘의 불어 - 초급]",
    preview: "불어로 '읽씹'은 어떻게 표현할까요? 💌",
    href: "https://www.threads.com/@douri.french/post/DGIoap-P3Q0",
    tags: ["초보자", "프랑스문화", "완전입문자"],
    date: "2025년 2월 16일"
  },
  {
    title: "🎬L'hiver à Sokcho 감독 인터뷰 파헤치기 - (마지막)",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DGFaJMzv7vk",
    tags: ["중급자"],
    date: "2025년 2월 15일"
  },
  {
    title: "💘로맨틱한 날에는 로맨틱한 불어로💘",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DGCXMWnP8-k",
    tags: ["초보자", "프랑스문화"],
    date: "2025년 2월 14일"
  },
  {
    title: "[Plan Cœur로 불어 공부하기 - 4] J'ai vachement envie de toi 프랑스어 표현",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DF_r6dZSw6V",
    tags: ["초보자", "완전입문자", "프랑스문화"],
    date: "2025년 2월 13일"
  },
  {
    title: "불어하는 0개국어 능력자들 모이세요! - 단어가 기억 안 날 때",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DF9T9fHvmZp",
    tags: ["초보자", "중급자"],
    date: "2025년 2월 12일"
  },
  {
    title: "🎬L'hiver à Sokcho 감독 인터뷰 파헤치기 - (2)",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DF4oFWfvCuP",
    tags: ["중급자"],
    date: "2025년 2월 10일"
  },
  {
    title: "[오늘의 불어 - 초급] utiliser sa baguette magique",
    preview: "\"마법의 바게뜨🥖를 사용한다?”",
    href: "https://www.threads.com/@douri.french/post/DF2ipu_vvYw",
    tags: ["초보자"],
    date: "2025년 2월 9일"
  },
  {
    title: "🎬L'hiver à Sokcho 감독 인터뷰 파헤치기 - (1)",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DFytpP4yIUE",
    tags: ["중급자"],
    date: "2025년 2월 8일"
  },
  {
    title: "⛔부정형 만들기 : NE보다 더 중요한 것",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DFwmmOKveUu",
    tags: ["완전입문자"],
    date: "2025년 2월 7일"
  },
  {
    title: "실제로 쓰이는 왕래동사의 쓰임새",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DGhtxXaPy4g",
    tags: ["초보자", "중급자"],
    date: "2025년 2월 6일"
  },
  {
    title: "[Plan Cœur로 불어 공부하기 - 3] 프랑스어로 '돼지'의 다양한 의미",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DFqtB9ITAsd",
    tags: ["초보자", "프랑스문화"],
    date: "2025년 2월 5일"
  },
  {
    title: "[Plan Cœur로 불어 공부하기 - 2] 'travail 일, 직장'의 동의어",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DFmyh8Epdjc",
    tags: ["초보자", "완전입문자"],
    date: "2025년 2월 3일"
  },
  {
    title: "[오늘의 불어 - 초급] à la lettre 있는 그대로",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DFl-5CWTWPS",
    tags: ["초보자"],
    date: "2025년 2월 3일"
  },
  {
    title: "[Plan Cœur로 불어 공부하기 - 1] Il y a 의 주요 용법",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DFkPAvFpVf4",
    tags: ["완전입문자", "초보자"],
    date: "2025년 2월 2일"
  },
  {
    title: "[이제 두통약 필요 없는 프랑스어 숫자 파헤치기] Part 2.",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DFUgANZJBrI",
    tags: ["초보자", "완전입문자"],
    date: "2025년 1월 27일"
  },
  {
    title: "[추천 넷플릭스 시리즈 - Plan Cœur🫀]",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DFP9Yi5z4UQ",
    tags: ["학습툴", "초보자", "중급자"],
    date: "2025년 1월 25일"
  },
  {
    title: "[오늘의 불어 - 중급] 라포가 프랑스어 단어인지 알고 계셨나요? 🤓",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DFJtSPaTye0",
    tags: ["중급자", "초보자"],
    date: "2025년 1월 23일"
  },
  {
    title: "[오늘의 불어 - 초급] étaler는 버터에만 바른다? 🤔",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DFGorPgTNCw",
    tags: ["초보자"],
    date: "2025년 1월 22일"
  },
  {
    title: "[오늘의 불어 - 초급] sur un coup de tête 충동적으로",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DFFPs5XJYzL",
    tags: ["초보자"],
    date: "2025년 1월 21일"
  },
  {
    title: "[오늘의 유머 - 관사 싫어!]",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DFC1IlgJ_6C",
    tags: ["프랑스유머"],
    date: "2025년 1월 20일"
  },
  {
    title: "[오늘의 불어 - 초급] pour la nième fois 도대체 몇 번째야?! 😠",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DE8oL_3zkeH",
    tags: ["초보자"],
    date: "2025년 1월 18일"
  },
  {
    title: "[오늘의 불어 - 초급] Je n'ai pas le moral 기운이 없어",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DDs-yMrz34M",
    tags: ["초보자"],
    date: "2025년 1월 18일"
  },
  {
    title: "[오늘의 불어 - 중급] habitude 단어로 습관 뉘앙스 표현하기",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DE4U9gfpt5s",
    tags: ["중급자", "초보자"],
    date: "2025년 1월 16일"
  },
  {
    title: "[오늘의 불어 - 초급] c'est bon의 활용법",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DE0nvSQzBR8",
    tags: ["초보자", "완전입문자"],
    date: "2025년 1월 15일"
  },
  {
    title: "[오늘의 불어 - 중급] j'ai pété 방귀 뿡~💨",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DEyCgFNzFHL",
    tags: ["중급자"],
    date: "2025년 1월 14일"
  },
  {
    title: "[오늘의 프랑스 문화] 프랑스에서 대화 시 무례할 수 있는 제스처 🙅‍♀️",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DEqh9DoTfza",
    tags: ["프랑스문화", "완전입문자", "초보자"],
    date: "2025년 1월 11일"
  },
  {
    title: "[오늘의 불어 - 초급] avoir du caractère 주관이 뚜렷한",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DEnvyjVz41-",
    tags: ["초보자"],
    date: "2025년 1월 10일"
  },
  {
    title: "[오늘의 불어 - 초급] accouche! 출산해!🤰🏻",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DEjudHcpZ3I",
    tags: ["초보자"],
    date: "2025년 1월 8일"
  },
  {
    title: "[오늘의 불어 - 초급] la galère : 짜증나는 상황",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DEeY-iBpkK0",
    tags: ["초보자"],
    date: "2025년 1월 6일"
  },
  {
    title: "[오늘의 불어 - 중급] 유용한 전화 관련 표현",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DEcOSQzpmQ2",
    tags: ["초보자", "완전입문자", "중급자"],
    date: "2025년 1월 5일"
  },
  {
    title: "[숫자 퀴즈 - mille quatre는 얼마일까요?]",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DEUV8K6Jp_4",
    tags: ["초보자", "완전입문자"],
    date: "2025년 1월 3일"
  },
  {
    title: "[오늘의 불어 - 초급] 다재다능한 chez의 쓰임새",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DEW5mZdJdCn",
    tags: ["초보자", "완전입문자"],
    date: "2025년 1월 3일"
  },
  {
    title: "[오늘의 불어 - 초급] 데일리 불어의 축약 버젼",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DETnaf0TX0L",
    tags: ["초보자", "완전입문자", "중급자"],
    date: "2025년 1월 2일"
  },
  {
    title: "[오늘의 불어 - 초급] 2025년 소망 리스트",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DERgOMrJxGA",
    tags: ["완전입문자", "초보자"],
    date: "2025년 1월 1일"
  },
  {
    title: "[오늘의 유머 - 발음 생략하기]",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DEMpafWpgbm",
    tags: ["프랑스유머", "발음"],
    date: "2024년 12월 30일"
  },
  {
    title: "[오늘의 불어 - 초급] La flemme 귀찮아~",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DEL1_52Tm05",
    tags: ["초보자"],
    date: "2024년 12월 30일"
  },
  {
    title: "[오늘의 불어 - 초급] Je suis au courant 나 알고 있어",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DEGkPVOzT-m",
    tags: ["초보자"],
    date: "2024년 12월 28일"
  },
  {
    title: "[어지어질한 프랑스어 숫자 파헤치기] Part 1.",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DEBPKZpMJLC",
    tags: ["초보자", "완전입문자"],
    date: "2024년 12월 26일"
  },
  {
    title: "[오늘의 불어 - 초급] Pas très catholique 가톨릭스럽지 않다",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DD-vWctTyXD",
    tags: ["초보자"],
    date: "2024년 12월 25일"
  },
  {
    title: "[프랑스 문화 - \"크게 소리를 지르세요! 상대방이 알.아.서. 기어요.”]",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DD9BF05JKyo",
    tags: ["프랑스문화", "프랑스유머"],
    date: "2024년 12월 24일"
  },
  {
    title: "[오늘의 불어 - 초급] 절약 관련 표현",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DD59pV6Mi-m",
    tags: ["중급자", "초보자"],
    date: "2024년 12월 23일"
  },
  {
    title: "[불어 튜터링 - 질문하는 학생의 성장기]",
    preview: "질문하는 사람은 밉지 않아요, 더 도와주고 싶어요.",
    href: "https://www.threads.com/@douri.french/post/DD67B1RTvrH",
    tags: ["튜터링"],
    date: "2024년 12월 23일"
  },
  {
    title: "[불어 공부 툴 - 중급] 귀로 듣고, 눈으로 보고,",
    preview: "실용 불어를 학습하는 Hugo InnerFrench",
    href: "https://www.threads.com/@douri.french/post/DD3jNSIJS8N",
    tags: ["학습툴", "중급자"],
    date: "2024년 12월 22일"
  },
  {
    title: "[오늘의 불어 - 초급] Je suis de bonne humeur 기분이 좋아, 업 됐어",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DDylbjLpxOz",
    tags: ["초보자"],
    date: "2024년 12월 20일"
  },
  {
    title: "저희 모두 하루에도 여러 번 듀오링고를 키는 이유…",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DDt5MrsTFrb",
    tags: ["학습툴", "완전입문자", "초보자"],
    date: "2024년 12월 18일"
  },
  {
    title: "[오늘의 불어 - 중급] Je pense que 대신, 더 다양한 방법으로",
    preview: "자신의 생각, 의견 표현하기",
    href: "https://www.threads.com/@douri.french/post/DDrldl0TrtQ",
    tags: ["중급자"],
    date: "2024년 12월 17일"
  },
  {
    title: "제가 지금까지 고도화하면서 느낀 프랑스어 1:1 튜터링의 장점",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DDo4CCPTBMA",
    tags: ["튜터링"],
    date: "2024년 12월 16일"
  },
  {
    title: "[오늘의 불어 - 초급] Dire des gros mots 욕하다, 심한 말을 하다",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DDoJC5Qzjmx",
    tags: ["프랑스문화", "초보자"],
    date: "2024년 12월 16일"
  },
  {
    title: "[프랑스어 발음 - 소리반 공기반 J편]",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DDlYYjGzLZD",
    tags: ["발음"],
    date: "2024년 12월 15일"
  },
  {
    title: "브라질에서 불어 튜터링 고도화 이력",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DDhL-WRz8Vb",
    tags: ["튜터링"],
    date: "2024년 12월 13일"
  },
  {
    title: "[오늘의 불어 - 초급]",
    preview: "J'ai du mal 힘들어",
    href: "https://www.threads.com/@douri.french/post/DDgYSfJpn6i",
    tags: ["초보자"],
    date: "2024년 12월 13일"
  },
  {
    title: "불어 학습 - 실수를 두려워 하지 마세요.",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DDe9vvWTV7I",
    tags: ["학습툴", "완전입문자", "초보자", "중급자"],
    date: "2024년 12월 13일"
  },
  {
    title: "[오늘의 불어 - 초급]",
    preview: "Il y a moyen",
    href: "https://www.threads.com/@douri.french/post/DDd_iJmoKP9",
    tags: ["초보자"],
    date: "2024년 12월 12일"
  },
  {
    title: "[오늘의 불어 단어 - 초급]",
    preview: "식사 예절이 중요한 프랑스에서 아이에게\n쩝쩝거리면 안 된다고 어떻게 표현할 수 있을까요?",
    href: "https://www.threads.com/@douri.french/post/DDacOncTpmf",
    tags: ["프랑스문화", "초보자"],
    date: "2024년 12월 11일"
  },
  {
    title: "[불어 파헤치기] 대화 상대, 상황, 목적에 따라 엄격히 달라지는 레지스터",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DDZgRCcNeWJ",
    tags: ["완전입문자", "초보자", "중급자"],
    date: "2024년 12월 10일"
  },
  {
    title: "[오늘의 불어 단어 - 초급]",
    preview: "불어로 사랑하는 사람은 어떻게 부를까요?",
    href: "https://www.threads.com/@douri.french/post/DDW3R-uTKgI",
    tags: ["완전입문자", "초보자"],
    date: "2024년 12월 9일"
  },
  {
    title: "[불어 공부 툴 - 초/중급] 쉐도잉",
    preview: "",
    href: "https://www.threads.com/@douri.french/post/DDT-8YAh_o8",
    tags: ["학습툴", "초보자", "중급자"],
    date: "2024년 12월 8일"
  },
  {
    title: "[오늘의 불어 단어 - 초급]",
    preview: "흑백요리사에서 자주 나왔던 단어, 뀌쏭\nCuisson (보편적으로 고기의) 익힘 정도",
    href: "https://www.threads.com/@douri.french/post/DDQ0QSRIOOR",
    tags: ["초보자"],
    date: "2024년 12월 7일"
  },
  {
    title: "[오늘의 불어 단어 - 초급]",
    preview: "C'est dingue!",
    href: "https://www.threads.com/@douri.french/post/DDPOdLEIg4d",
    tags: ["초보자"],
    date: "2024년 12월 6일"
  }
];

/* 태그 → 이모지 매핑 */
function getEmoji(tags) {
  if (tags.includes('프랑스유머'))  return '😄';
  if (tags.includes('발음'))        return '🗣️';
  if (tags.includes('학습툴'))      return '🛠️';
  if (tags.includes('프랑스문화'))  return '🥐';
  if (tags.includes('완전입문자'))  return '🌱';
  if (tags.includes('중급자'))      return '📚';
  return '💬';
}

/* 태그 → 한국어 레이블 */
const TAG_LABELS = {
  '완전입문자': '완전 입문자',
  '초보자':    '초보자',
  '중급자':    '중급자',
  '프랑스문화':'프랑스 문화',
  '프랑스유머':'프랑스 유머',
  '학습툴':    '학습 툴/방법',
  '발음':      '불어 발음',
  '튜터링':    '불어 튜터링',
};

/* 레벨 태그 (첫 번째로 보여줄 칩) */
const LEVEL_TAGS = ['완전입문자', '초보자', '중급자'];


/* ══════════════════════════════════════════════════════════════
   읽을거리
     type: 'post'  = 내 사이트가 원본. href 는 사이트 안 주소
     type: 'naver' = 네이버가 원본. 새 탭으로 열림
   ══════════════════════════════════════════════════════════════ */
const POST_DATA = [
  {
    type: 'post',
    title: "DALF C1까지 땄는데 말이 안 나오는 이유, 시험이 측정하지 않는 3가지",
    preview: "DELF와 DALF는 2023년에 듣기와 읽기를 전부 객관식으로 바꿨습니다. 사라진 건 난이도가 아니라 생산 능력을 재던 자리였습니다.",
    href: "/content/dalf-c1",
    cover: "img/blog/dalf-c1-cover.jpg",
    topic: "시험",
    mins: 9,
    date: "2026년 10월 1일"
  },
  {
    type: 'post',
    title: "프랑스어 덕질하기, 오래가는 사람들의 프랑스어 공부법 8가지",
    preview: "교재도 유튜브 채널도 인강도 추천하지 않습니다. 25년째 프랑스어를 공부한 코치가 본, 오래 가는 사람들의 습관 여덟 가지.",
    href: "/content/french-immersion",
    cover: "img/blog/french-immersion-cover.jpg",
    topic: "공부법",
    mins: 9,
    date: "2026년 7월 4일"
  },
  {
    type: 'post',
    title: "프랑스어 받아쓰기, 아이들보다 어른이 더 많이 틀리는 이유",
    preview: "프랑스 초등학교 정규 과목인 딕떼. 같은 소리가 여러 철자로 쓰이는 프랑스어에서 왜 필수인지, TV5와 Dictaly로 연습하는 법까지.",
    href: "/content/french-dictee",
    cover: "img/blog/french-dictee-cover.jpg",
    topic: "노하우",
    mins: 8,
    date: "2026년 7월 2일"
  },
  {
    type: 'post',
    title: "프랑스어 시벨롬, 알고 보니 이런 문제가 있었다",
    preview: "한국에서 유행하는 프랑스어 시벨롬. 소리, 표기법, 문법 세 가지로 뜯어보면 프랑스인들이 갸우뚱하는 이유가 보입니다.",
    href: "/content/si-bel-homme",
    cover: "img/blog/si-bel-homme-cover.jpg",
    topic: "문화",
    mins: 6,
    date: "2026년 6월 25일"
  },
  {
    type: 'post',
    title: "프랑스 워홀 취업 준비, 졸업 전부터 시작됩니다",
    preview: "공고 없는 자리에 먼저 지원서를 보내는 프랑스의 Candidature spontanée. 외국인이었던 제가 실제로 효과를 본 방법입니다.",
    href: "/content/france-whv-job",
    cover: "img/blog/france-whv-job-cover.jpg",
    topic: "생활",
    mins: 8,
    date: "2026년 6월 22일"
  },
  {
    type: 'post',
    title: "프랑스어 과외 16년, 학생들이 직접 말해준 재수강 이유 5가지",
    preview: "대부분의 학생은 3개월 안에 과외를 그만둡니다. 평균 1~2년을 함께한 학생들이 직접 알려준 재수강 이유 다섯 가지.",
    href: "/content/french-tutoring",
    cover: "img/blog/french-tutoring-cover.jpg",
    topic: "수업",
    mins: 7,
    date: "2026년 6월 19일"
  },
  {
    type: 'post',
    title: "한국 학생들의 잘못된 프랑스어 공부법, 이 습관만 바꿔보세요",
    preview: "단어를 쓰면서 외우고, 말하기보다 쓰기에 집중하는 습관. 16년차 코치가 본 한국 학생들의 프랑스어 공부법 문제와 개선법.",
    href: "/content/french-study-habits",
    cover: "img/blog/french-study-habits-cover.jpg",
    topic: "공부법",
    mins: 5,
    date: "2026년 6월 17일"
  }
];

/* 읽을거리 주제 칩 */
const TOPIC_LABELS = {
  '문화':   '🇫🇷 프랑스 문화',
  '공부법': '🧠 공부법',
  '노하우': '🛠️ 나만의 노하우',
  '수업':   '🎓 수업 이야기',
  '생활':   '🥖 프랑스 생활',
  '시험':   '📝 시험 이야기'
};
