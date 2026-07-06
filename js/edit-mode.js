/**
 * ================================================================
 *  EDIT-MODE.JS — 인페이지 수정 모드 v4
 *  ✏️ 텍스트 수정 · 포맷 툴바(하단 고정) · 블록 드래그 순서 변경
 * ================================================================
 */
(function () {
  'use strict';

  const PAGE_KEY  = (location.pathname.split('/').pop() || 'index').replace('.html', '');
  const LS_KEY    = 'douri_edits_v1_'  + PAGE_KEY;
  const ORDER_KEY = 'douri_order_v1_'  + PAGE_KEY;

  /* ── 수정 가능한 텍스트 요소 ──────────────────────────────── */
  const EDITABLE_SEL = [
    '.block-title', '.block-text',
    '.page-hero-title', '.page-hero-desc', '.page-hero-chip',
    '.info-value',
    '.slide-title', '.slide-desc', '.slide-chip',
    '.pf-title', '.pf-place', '.pf-year', '.pf-list li',
    '.phase-body p', '.phase-goal', '.phase-change',
    '.step-body p', '.step-name',
    '.reason-card p', '.reason-card h3',
    '.review-q p', '.review-q .who',
    '.price-main', '.price-sub', '.price-note', '.price-chip',
    '.target-card', '.checklist-warn',
    '.journey-text', '.journey-label',
    '.feature-body h4', '.feature-body p',
    '.country-name', '.country-desc',
    '.msg-box p',
    '.chapter-label', '.chapter-sub', '.chapter-num',
    '.pf-stat-n', '.pf-stat-l',
    '.reel-item p',
    '.review-text', '.review-name',
    '.checklist-item',
  ].join(', ');

  /* ── 드래그 가능한 블록 요소 ─────────────────────────────── */
  const DRAG_SEL = '.section-block, .reel-item, .review-card-full';

  let isOn       = false;
  let savedEdits = {};
  let dragSrc    = null;
  let savedRange = null;

  /* ══════════════════════════════════════════════════════════
     CSS 주입
  ══════════════════════════════════════════════════════════ */
  function injectCSS() {
    if (document.getElementById('em-style')) return;
    const s = document.createElement('style');
    s.id = 'em-style';
    s.textContent = `
      /* ── 플로팅 버튼 ── */
      #em-wrap {
        position: fixed; bottom: 20px; left: 20px;
        display: flex; flex-direction: column; align-items: flex-start;
        gap: 6px; z-index: 9000; font-family: 'Pretendard', sans-serif;
      }
      #em-btn {
        display: flex; align-items: center; gap: 6px;
        padding: 10px 18px; border: none; border-radius: 24px;
        font-size: 0.82rem; font-weight: 700; font-family: inherit;
        cursor: pointer; background: #2E0E0C; color: #fff;
        box-shadow: 0 4px 16px rgba(0,0,0,0.3);
        transition: background 0.2s, transform 0.15s; white-space: nowrap;
      }
      #em-btn:hover   { background: #450e0b; transform: scale(1.03); }
      body.em-on #em-btn { background: #1a8f1a; }
      #em-reset {
        display: none; padding: 8px 14px;
        border: 1px solid #EDE5E3; border-radius: 20px;
        font-size: 0.76rem; font-weight: 600; font-family: inherit;
        cursor: pointer; background: #FAF7F6; color: #7A5550;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1); white-space: nowrap;
      }
      #em-reset:hover { color: #C24A35; }

      /* ── 수정 가능 하이라이트 ── */
      body.em-on [data-eid] {
        outline: 1.5px dashed rgba(194,74,53,0.4); border-radius: 3px;
        cursor: text; transition: outline-color 0.15s, background 0.15s;
      }
      body.em-on [data-eid]:hover { outline-color: #C24A35; background: rgba(194,74,53,0.04); }
      body.em-on [data-eid]:focus {
        outline: 2px solid #C24A35 !important;
        background: rgba(255,255,255,0.98) !important;
        box-shadow: 0 2px 14px rgba(194,74,53,0.18); border-radius: 4px;
      }

      /* ══ 포맷 툴바 — 하단 중앙 고정 ══ */
      #em-toolbar {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        display: none;                   /* JS로 em-on 시 flex 로 변경 */
        align-items: center;
        gap: 3px;
        padding: 7px 10px;
        background: #1e0a08;
        border-radius: 16px;
        box-shadow: 0 4px 28px rgba(0,0,0,0.55);
        z-index: 9100;
        font-family: 'Pretendard', sans-serif;
        overflow-x: auto;
        scrollbar-width: none;
        max-width: calc(100vw - 120px); /* #em-wrap 영역 제외 */
        white-space: nowrap;
      }
      #em-toolbar::-webkit-scrollbar { display: none; }

      /* ── 툴바 버튼 공통 ── */
      #em-toolbar button {
        background: transparent;
        border: none;
        color: #fff !important;
        font-size: 0.82rem;
        font-weight: 700;
        padding: 5px 8px;
        border-radius: 7px;
        cursor: pointer;
        font-family: inherit;
        line-height: 1;
        transition: background 0.15s;
        white-space: nowrap;
        min-width: 28px;
        flex-shrink: 0;
      }
      #em-toolbar button:hover  { background: rgba(255,255,255,0.18); }
      #em-toolbar button.em-act { background: rgba(255,255,255,0.28); }

      /* ── 구분선 ── */
      .em-sep {
        width: 1px; height: 18px;
        background: rgba(255,255,255,0.22);
        margin: 0 3px; flex-shrink: 0;
      }

      /* ── 글꼴 select ── */
      #em-fontfamily {
        -webkit-appearance: none;
        appearance: none;
        background: rgba(255,255,255,0.14)
          url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='5'%3E%3Cpath fill='%23fff' d='M0 0l4 5 4-5z'/%3E%3C/svg%3E")
          no-repeat right 5px center;
        background-size: 8px 5px;
        border: 1px solid rgba(255,255,255,0.28);
        color: #fff;
        border-radius: 7px;
        padding: 5px 22px 5px 7px;
        font-size: 0.72rem;
        font-family: inherit;
        cursor: pointer;
        max-width: 90px;
        flex-shrink: 0;
      }
      /* option은 OS가 렌더링 — 배경만 지정 */
      #em-fontfamily option { background: #2E0E0C; }

      /* 굵기 select — 글꼴 select와 동일 스타일 */
      #em-fontweight {
        -webkit-appearance: none;
        appearance: none;
        background: rgba(255,255,255,0.14)
          url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='5'%3E%3Cpath fill='%23fff' d='M0 0l4 5 4-5z'/%3E%3C/svg%3E")
          no-repeat right 5px center;
        background-size: 8px 5px;
        border: 1px solid rgba(255,255,255,0.28);
        color: #fff;
        border-radius: 7px;
        padding: 5px 22px 5px 7px;
        font-size: 0.72rem;
        font-family: inherit;
        cursor: pointer;
        max-width: 72px;
        flex-shrink: 0;
      }
      #em-fontweight option { background: #2E0E0C; }

      /* 여백 프리셋 버튼 */
      .em-sp {
        font-size: 0.65rem !important;
        font-weight: 500 !important;
        opacity: 0.85;
        letter-spacing: -0.03em;
        padding: 4px 5px !important;
        min-width: 24px !important;
        background: rgba(255,255,255,0.08) !important;
        border: 1px solid rgba(255,255,255,0.18) !important;
        border-radius: 5px !important;
      }
      .em-sp:hover { opacity: 1; background: rgba(255,255,255,0.2) !important; }

      /* ── 폰트 크기 컨트롤 ── */
      .em-size-wrap {
        display: flex; align-items: center; flex-shrink: 0;
        background: rgba(255,255,255,0.12);
        border: 1px solid rgba(255,255,255,0.25);
        border-radius: 7px; overflow: hidden;
      }
      .em-size-wrap button {
        padding: 4px 8px !important;
        min-width: 24px !important;
        border-radius: 0 !important;
        font-size: 1.1rem !important;
        font-weight: 400 !important;
      }
      .em-size-wrap button:first-child { border-right: 1px solid rgba(255,255,255,0.18) !important; }
      .em-size-wrap button:last-child  { border-left:  1px solid rgba(255,255,255,0.18) !important; }
      #em-fontsize {
        width: 36px; background: transparent; border: none; color: #fff;
        text-align: center; font-size: 0.82rem; font-family: inherit;
        padding: 3px 0; -moz-appearance: textfield;
      }
      #em-fontsize::-webkit-inner-spin-button,
      #em-fontsize::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
      #em-fontsize:focus { outline: none; background: rgba(255,255,255,0.1); border-radius: 3px; }

      /* ── 색상 스와치 ── */
      .em-swatch {
        width: 18px !important; height: 18px !important;
        border-radius: 50% !important;
        min-width: unset !important; padding: 0 !important;
        flex-shrink: 0; cursor: pointer;
        border: 2px solid rgba(255,255,255,0.3) !important;
        transition: transform 0.12s, border-color 0.12s;
      }
      .em-swatch:hover {
        transform: scale(1.28) !important;
        border-color: #fff !important;
      }

      /* ── 드래그 블록 ── */
      body.em-on [data-drag] { position: relative; cursor: grab; }
      body.em-on [data-drag]::before {
        content: '⠿';
        position: absolute; top: 6px; left: 6px;
        font-size: 1.1rem; color: rgba(194,74,53,0.45);
        cursor: grab; z-index: 10; line-height: 1;
        pointer-events: none; user-select: none;
      }
      body.em-on [data-drag]:hover::before { color: #C24A35; }
      [data-drag].em-dragging  { opacity: 0.35; }
      [data-drag].em-drag-over {
        outline: 2px dashed #C24A35 !important;
        background: rgba(194,74,53,0.07) !important;
        border-radius: 8px;
      }

      /* ── 토스트 ── */
      #em-toast {
        position: fixed; bottom: 80px; left: 50%; transform: translateX(-50%);
        background: #2E0E0C; color: #fff; padding: 10px 20px; border-radius: 20px;
        font-size: 0.8rem; font-weight: 600; font-family: 'Pretendard', sans-serif;
        z-index: 9999; opacity: 0; pointer-events: none; transition: opacity 0.3s;
        white-space: nowrap;
      }
      #em-toast.show { opacity: 1; }
    `;
    document.head.appendChild(s);
  }

  /* ══════════════════════════════════════════════════════════
     토스트
  ══════════════════════════════════════════════════════════ */
  function toast(msg, duration = 1800) {
    let el = document.getElementById('em-toast');
    if (!el) { el = document.createElement('div'); el.id = 'em-toast'; document.body.appendChild(el); }
    el.textContent = msg;
    el.classList.add('show');
    setTimeout(() => el.classList.remove('show'), duration);
  }

  /* ══════════════════════════════════════════════════════════
     localStorage
  ══════════════════════════════════════════════════════════ */
  function loadEdits() {
    try { savedEdits = JSON.parse(localStorage.getItem(LS_KEY) || '{}'); }
    catch (e) { savedEdits = {}; }
    Object.entries(savedEdits).forEach(([id, html]) => {
      const el = document.querySelector(`[data-eid="${id}"]`);
      if (el) el.innerHTML = html;
    });
  }

  function triggerSave() {
    const focused = document.querySelector('body.em-on [data-eid]:focus');
    if (!focused) return;
    savedEdits[focused.dataset.eid] = focused.innerHTML;
    try { localStorage.setItem(LS_KEY, JSON.stringify(savedEdits)); } catch(e) {}
  }

  /* ══════════════════════════════════════════════════════════
     Selection 보존
  ══════════════════════════════════════════════════════════ */
  function saveSelection() {
    const sel = window.getSelection();
    if (sel && sel.rangeCount) {
      try { savedRange = sel.getRangeAt(0).cloneRange(); } catch(e) {}
    }
  }

  function restoreSelection() {
    if (!savedRange) return;
    try {
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(savedRange.cloneRange());
    } catch(e) {}
  }

  /* ══════════════════════════════════════════════════════════
     텍스트 요소 등록
  ══════════════════════════════════════════════════════════ */
  function tagElements() {
    document.querySelectorAll(EDITABLE_SEL).forEach((el, i) => {
      if (!el.dataset.eid) el.dataset.eid = String(i);

      el.addEventListener('input', triggerSave);
      el.addEventListener('mouseup', () => { saveSelection(); syncFontSize(el); });
      el.addEventListener('keyup',   () => { saveSelection(); syncFontSize(el); });
      el.addEventListener('focus',   () => { if (isOn) syncFontSize(el); });

      // contenteditable 안에서 드래그 시작 차단 (텍스트 선택 보장)
      el.addEventListener('dragstart', e => { e.preventDefault(); e.stopPropagation(); });

      el.addEventListener('keydown', e => {
        if (e.key === 'Escape') el.blur();
        if (e.key === 'Enter' && el.matches(
          '.block-title, .page-hero-title, .pf-title, .price-main'
        )) { e.preventDefault(); el.blur(); }
      });
    });
  }

  /* ── 툴바 폰트 크기 입력란 동기화 ─────────────────────────── */
  function syncFontSize(el) {
    const inp = document.getElementById('em-fontsize');
    if (!inp || !el) return;
    inp.value = Math.round(parseFloat(getComputedStyle(el).fontSize)) || 16;
  }

  /* ══════════════════════════════════════════════════════════
     포맷 툴바 생성
  ══════════════════════════════════════════════════════════ */
  function createToolbar() {
    if (document.getElementById('em-toolbar')) return;
    const tb = document.createElement('div');
    tb.id = 'em-toolbar';
    tb.setAttribute('role', 'toolbar');

    tb.innerHTML = `
      <!-- ① 글꼴 — Pretendard(본문) + Gowun Batang(제목) -->
      <select id="em-fontfamily" title="글꼴">
        <option value="Pretendard,sans-serif">Pretendard</option>
        <option value="'Gowun Batang',Georgia,serif">고운바탕</option>
        <option value="'Malgun Gothic',sans-serif">맑은 고딕</option>
        <option value="Georgia,serif">Georgia</option>
      </select>

      <!-- ② 굵기 — 400 Regular / 700 Bold -->
      <select id="em-fontweight" title="굵기">
        <option value="400">400 일반</option>
        <option value="700">700 굵게</option>
        <option value="800">800 특굵</option>
      </select>

      <!-- ③ 크기 -->
      <div class="em-size-wrap">
        <button id="em-sz-dn" title="1px 작게">−</button>
        <input type="number" id="em-fontsize" min="8" max="120" value="16" title="크기(px)">
        <button id="em-sz-up" title="1px 크게">+</button>
      </div>

      <span class="em-sep"></span>

      <!-- ④ 서식 -->
      <button data-cmd="bold"          title="굵게"><b>B</b></button>
      <button data-cmd="italic"        title="기울임"><i>I</i></button>
      <button data-cmd="underline"     title="밑줄"><u>U</u></button>
      <button data-cmd="strikeThrough" title="취소선"><s>S</s></button>

      <span class="em-sep"></span>

      <!-- ⑤ 브랜드 컬러 시스템 (5색) -->
      <button class="em-swatch" data-color="#C24A35" style="background:#C24A35" title="브릭 레드 (Accent 10%)"></button>
      <button class="em-swatch" data-color="#A83D2C" style="background:#A83D2C" title="브릭 다크"></button>
      <button class="em-swatch" data-color="#2E0E0C" style="background:#2E0E0C" title="다크 브라운 (FG 30%)"></button>
      <button class="em-swatch" data-color="#7A5550" style="background:#7A5550" title="뮤티드"></button>
      <button class="em-swatch" data-color="#FAF7F6" style="background:#FAF7F6;border-color:rgba(194,74,53,.5)!important" title="서피스 (BG 60%)"></button>
      <button class="em-swatch" data-color="#ffffff" style="background:#fff" title="흰색"></button>

      <span class="em-sep"></span>

      <!-- ⑥ 정렬 -->
      <button data-align="justifyLeft"   title="왼쪽">좌</button>
      <button data-align="justifyCenter" title="가운데">중</button>
      <button data-align="justifyRight"  title="오른쪽">우</button>

      <span class="em-sep"></span>

      <!-- ⑦ 8px 여백 프리셋 (블록 padding 조정) -->
      <button class="em-sp" data-sp="8"  title="여백 8px">p8</button>
      <button class="em-sp" data-sp="16" title="여백 16px">p16</button>
      <button class="em-sp" data-sp="24" title="여백 24px">p24</button>
      <button class="em-sp" data-sp="32" title="여백 32px">p32</button>
      <button class="em-sp" data-sp="64" title="여백 64px">p64</button>

      <span class="em-sep"></span>

      <!-- ⑧ 위·아래 첨자 / 서식 제거 -->
      <button data-cmd="superscript" title="위 첨자" style="font-size:0.72rem">A<sup>1</sup></button>
      <button data-cmd="subscript"   title="아래 첨자" style="font-size:0.72rem">A<sub>1</sub></button>
      <span class="em-sep"></span>
      <button data-cmd="removeFormat" title="서식 제거" style="opacity:0.75;font-weight:400;">✕</button>
    `;
    document.body.appendChild(tb);

    /* ── ① 글꼴 ── */
    const ffSel = document.getElementById('em-fontfamily');
    ffSel.addEventListener('mousedown', saveSelection);
    ffSel.addEventListener('change', function () {
      restoreSelection();
      // span으로 직접 적용 (execCommand fontName은 <font> 태그 생성)
      applyInlineStyle('fontFamily', this.value);
    });

    /* ── ② 굵기 ── */
    const fwSel = document.getElementById('em-fontweight');
    fwSel.addEventListener('mousedown', saveSelection);
    fwSel.addEventListener('change', function () {
      restoreSelection();
      applyInlineStyle('fontWeight', this.value);
    });

    /* ── 폰트 크기 ±1 ── */
    document.getElementById('em-sz-dn').addEventListener('mousedown', e => {
      e.preventDefault(); applyFontSize(-1);
    });
    document.getElementById('em-sz-up').addEventListener('mousedown', e => {
      e.preventDefault(); applyFontSize(+1);
    });

    /* ── 폰트 크기 직접 입력 ── */
    const sizeInp = document.getElementById('em-fontsize');
    sizeInp.addEventListener('mousedown', saveSelection);
    sizeInp.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        restoreSelection();
        applyFontSizeExact(parseInt(sizeInp.value, 10));
      }
    });

    /* ── 버튼 일괄 처리 (mousedown + e.preventDefault = focus 유지) ── */
    tb.addEventListener('mousedown', e => {
      // ⑤ 색상 스와치
      const swatch = e.target.closest('.em-swatch[data-color]');
      if (swatch) {
        e.preventDefault();
        document.execCommand('foreColor', false, swatch.dataset.color);
        triggerSave();
        return;
      }
      // ④ 서식 버튼
      const btn = e.target.closest('button[data-cmd]');
      if (btn) {
        e.preventDefault();
        document.execCommand(btn.dataset.cmd, false, null);
        triggerSave();
        return;
      }
      // ⑥ 정렬 버튼
      const aln = e.target.closest('button[data-align]');
      if (aln) {
        e.preventDefault();
        applyAlignment(aln.dataset.align);
        return;
      }
      // ⑦ 여백 프리셋 — 포커스된 블록 요소의 padding 변경
      const sp = e.target.closest('button.em-sp[data-sp]');
      if (sp) {
        e.preventDefault();
        applySpacing(sp.dataset.sp + 'px');
      }
    });
  }

  /* ── 인라인 스타일 적용 (fontFamily / fontWeight) ────────── */
  function applyInlineStyle(prop, value) {
    const sel = window.getSelection();
    if (!sel || !sel.rangeCount || sel.getRangeAt(0).collapsed) return;
    const range = sel.getRangeAt(0);
    const span  = document.createElement('span');
    span.style[prop] = value;
    try { range.surroundContents(span); }
    catch (_) { span.appendChild(range.extractContents()); range.insertNode(span); }
    const nr = document.createRange();
    nr.selectNodeContents(span);
    sel.removeAllRanges(); sel.addRange(nr);
    savedRange = nr.cloneRange();
    triggerSave();
  }

  /* ── 8px 여백 프리셋 — 포커스된 섹션 블록에 padding 적용 ── */
  function applySpacing(px) {
    // 현재 포커스된 editable 요소의 가장 가까운 드래그 가능 부모 찾기
    const focused = document.querySelector('body.em-on [data-eid]:focus');
    let target = focused;
    while (target && !target.dataset.drag) target = target.parentElement;
    if (!target) return;
    target.style.padding = px;
    triggerSave();
    toast('여백 ' + px + ' 적용 ✓');
  }

  /* ── 폰트 크기 ±1px ─────────────────────────────────────── */
  function applyFontSize(delta) {
    const sel = window.getSelection();
    if (!sel || !sel.rangeCount || sel.getRangeAt(0).collapsed) return;
    const anchor = sel.anchorNode;
    const el     = anchor.nodeType === 3 ? anchor.parentElement : anchor;
    const curPx  = parseFloat(getComputedStyle(el).fontSize) || 16;
    applyFontSizeExact(Math.max(8, Math.min(120, Math.round(curPx + delta))));
  }

  function applyFontSizeExact(newPx) {
    if (!newPx || newPx < 8 || newPx > 120) return;
    const sel = window.getSelection();
    // selection이 없으면 저장해 둔 것 복원
    if (!sel || !sel.rangeCount || sel.getRangeAt(0).collapsed) restoreSelection();
    if (!sel || !sel.rangeCount || sel.getRangeAt(0).collapsed) return;

    const range = sel.getRangeAt(0);
    const span  = document.createElement('span');
    span.style.fontSize = newPx + 'px';
    try { range.surroundContents(span); }
    catch (_) { span.appendChild(range.extractContents()); range.insertNode(span); }

    const nr = document.createRange();
    nr.selectNodeContents(span);
    sel.removeAllRanges(); sel.addRange(nr);
    savedRange = nr.cloneRange();

    const inp = document.getElementById('em-fontsize');
    if (inp) inp.value = newPx;
    triggerSave();
  }

  /* ── 텍스트 정렬 ─────────────────────────────────────────── */
  function applyAlignment(cmd) {
    restoreSelection();
    const sel  = window.getSelection();
    const node = sel && sel.anchorNode;
    if (!node) return;
    let el = node.nodeType === 3 ? node.parentElement : node;
    const BLOCKS = ['P','H1','H2','H3','H4','H5','H6','LI','DIV','BLOCKQUOTE'];
    while (el && !BLOCKS.includes(el.tagName.toUpperCase())) {
      el = el.parentElement;
      if (!el || !el.isContentEditable) break;
    }
    if (!el) return;
    const map = { justifyLeft:'left', justifyCenter:'center', justifyRight:'right' };
    el.style.textAlign = map[cmd] || '';
    triggerSave();
    toast({ justifyLeft:'왼쪽', justifyCenter:'가운데', justifyRight:'오른쪽' }[cmd] + ' 정렬 ✓');
  }

  /* ══════════════════════════════════════════════════════════
     드래그로 블록 순서 변경
  ══════════════════════════════════════════════════════════ */
  function assignDragIds() {
    let i = 0;
    document.querySelectorAll(DRAG_SEL).forEach(el => {
      if (!el.dataset.doid) el.dataset.doid = 'doid_' + (i++);
    });
  }

  function loadOrder() {
    let orders = {};
    try { orders = JSON.parse(localStorage.getItem(ORDER_KEY) || '{}'); } catch(e) {}
    Object.entries(orders).forEach(([pid, doids]) => {
      const parent = document.getElementById(pid)
        || document.querySelector('.' + pid.split(' ')[0]);
      if (!parent) return;
      doids.forEach(doid => {
        const el = parent.querySelector(`[data-doid="${doid}"]`);
        if (el) parent.appendChild(el);
      });
    });
  }

  function saveOrder() {
    let orders = {};
    try { orders = JSON.parse(localStorage.getItem(ORDER_KEY) || '{}'); } catch(e) {}
    const parents = new Set();
    document.querySelectorAll('[data-drag]').forEach(el => {
      if (el.parentElement) parents.add(el.parentElement);
    });
    parents.forEach(parent => {
      const pid = parent.id || Array.from(parent.classList).join(' ') || 'root';
      orders[pid] = Array.from(parent.querySelectorAll(':scope > [data-doid]'))
                         .map(el => el.dataset.doid);
    });
    localStorage.setItem(ORDER_KEY, JSON.stringify(orders));
  }

  function onDragStart(e) {
    // contenteditable 안에서 시작된 드래그는 차단
    let t = e.target;
    while (t && t !== this) {
      if (t.contentEditable === 'true') { e.preventDefault(); return; }
      t = t.parentElement;
    }
    dragSrc = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', this.dataset.doid || '');
    setTimeout(() => { if (dragSrc) dragSrc.classList.add('em-dragging'); }, 0);
  }
  function onDragOver(e) {
    e.preventDefault(); e.dataTransfer.dropEffect = 'move';
    if (this !== dragSrc && dragSrc && this.parentNode === dragSrc.parentNode)
      this.classList.add('em-drag-over');
  }
  function onDragLeave() { this.classList.remove('em-drag-over'); }
  function onDrop(e) {
    e.stopPropagation();
    this.classList.remove('em-drag-over');
    if (!dragSrc || this === dragSrc || this.parentNode !== dragSrc.parentNode) return;
    const parent = this.parentNode;
    const ch     = Array.from(parent.children);
    if (ch.indexOf(dragSrc) < ch.indexOf(this)) parent.insertBefore(dragSrc, this.nextSibling);
    else                                          parent.insertBefore(dragSrc, this);
    saveOrder();
    toast('순서 저장 ✓');
  }
  function onDragEnd() {
    dragSrc?.classList.remove('em-dragging');
    document.querySelectorAll('.em-drag-over').forEach(el => el.classList.remove('em-drag-over'));
    dragSrc = null;
  }

  function enableDrag() {
    document.querySelectorAll(DRAG_SEL).forEach(el => {
      el.setAttribute('draggable', 'true');
      el.dataset.drag = '1';
      el.addEventListener('dragstart', onDragStart);
      el.addEventListener('dragover',  onDragOver);
      el.addEventListener('dragleave', onDragLeave);
      el.addEventListener('drop',      onDrop);
      el.addEventListener('dragend',   onDragEnd);
    });
  }

  function disableDrag() {
    document.querySelectorAll('[data-drag]').forEach(el => {
      el.setAttribute('draggable', 'false');
      delete el.dataset.drag;
      el.classList.remove('em-drag-over', 'em-dragging');
      el.removeEventListener('dragstart', onDragStart);
      el.removeEventListener('dragover',  onDragOver);
      el.removeEventListener('dragleave', onDragLeave);
      el.removeEventListener('drop',      onDrop);
      el.removeEventListener('dragend',   onDragEnd);
    });
    dragSrc = null;
  }

  /* ══════════════════════════════════════════════════════════
     수정 모드 ON / OFF
  ══════════════════════════════════════════════════════════ */
  function toggle() {
    isOn = !isOn;
    document.body.classList.toggle('em-on', isOn);

    document.querySelectorAll('[data-eid]').forEach(el => {
      el.contentEditable = isOn ? 'true' : 'false';
    });

    const tb = document.getElementById('em-toolbar');

    if (isOn) {
      enableDrag();
      if (tb) tb.style.display = 'flex';
      toast('텍스트 클릭 → 수정 ✏️  |  블록 드래그 → 이동 ⠿', 3000);
    } else {
      disableDrag();
      if (tb) tb.style.display = 'none';
      toast('저장 완료 ✓');
    }

    const btn   = document.getElementById('em-btn');
    const reset = document.getElementById('em-reset');
    if (btn)   btn.innerHTML        = isOn ? '✅&nbsp;수정 완료' : '✏️&nbsp;수정 모드';
    if (reset) reset.style.display = isOn ? 'block' : 'none';
  }

  /* ══════════════════════════════════════════════════════════
     초기화 / UI
  ══════════════════════════════════════════════════════════ */
  function resetEdits() {
    if (!confirm('이 페이지의 수정 내용을 모두 초기화할까요?')) return;
    localStorage.removeItem(LS_KEY);
    localStorage.removeItem(ORDER_KEY);
    toast('초기화 중...');
    setTimeout(() => location.reload(), 500);
  }

  function createUI() {
    if (document.getElementById('em-wrap')) return;
    const wrap = document.createElement('div');
    wrap.id = 'em-wrap';
    wrap.innerHTML = `
      <button id="em-btn">✏️&nbsp;수정 모드</button>
      <button id="em-reset">↩ 초기화</button>
    `;
    document.body.appendChild(wrap);
    document.getElementById('em-btn').addEventListener('click', toggle);
    document.getElementById('em-reset').addEventListener('click', resetEdits);
  }

  /* ══════════════════════════════════════════════════════════
     초기화
  ══════════════════════════════════════════════════════════ */
  function init() {
    injectCSS();
    tagElements();
    loadEdits();
    assignDragIds();
    loadOrder();
    createUI();
    createToolbar();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    setTimeout(init, 100);
  }
})();
