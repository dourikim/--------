/**
 * COMPONENTS.JS — 공통 헤더 / 사이드메뉴 / 푸터 / 카카오 버튼
 * 모든 페이지에서 자동 실행됩니다. 수정 불필요.
 *
 * ⚠️ 카카오 링크 변경: KAKAO_URL 값만 바꾸세요 (아래 31번째 줄)
 */

/* ── 메뉴 구조 ─────────────────────────────────────────── */
const NAV_ITEMS = [
  { id: 'index',          label: '홈',                        icon: '🏠', href: 'index.html' },
  { id: 'lesson',         label: '1:1 프랑스어 수업',          icon: '🧑🏻‍💻', href: 'lesson.html' },
  { id: 'reviews',        label: '수업 후기',                  icon: '💬', href: 'reviews.html', sub: true },
  { id: 'class101',       label: '프랑스어 문법책 재해석 인강', icon: '📘', href: 'class101.html' },
  { id: 'content',        label: '학습 콘텐츠',                icon: '📒', href: 'content.html' },
  { id: 'portfolio',      label: '통번역 · 로컬화 이력',       icon: '📑', href: 'portfolio.html' },
  { id: 'service-finder', label: '🎯 학습 유형 테스트',         icon: '🎯', href: 'service-finder.html', sub: true },
];

/* ── 카카오 오픈채팅 URL ─────────────────────────────────
   ⚠️ 여기에 실제 링크를 넣으세요
   ─────────────────────────────────────────────────────── */
const KAKAO_URL = 'https://open.kakao.com/o/s7eqNH9g';   /* 카카오 오픈채팅 */

/* ── 현재 페이지 ID ─────────────────────────────────────── */
function getCurrentPageId() {
  const file = window.location.pathname.split('/').pop() || 'index.html';
  return file.replace('.html', '') || 'index';
}

/* ── 헤더 렌더 ─────────────────────────────────────────── */
function renderHeader({ showLang = false } = {}) {
  const cur = getCurrentPageId();

  // 데스크톱 네비 링크 (sub 제외)
  const desktopLinks = NAV_ITEMS
    .filter(i => !i.sub)
    .map(i => `<a href="${i.href}" class="${cur === i.id ? 'active' : ''}">${i.label}</a>`)
    .join('');

  const el = document.getElementById('site-header');
  if (!el) return;

  el.innerHTML = `
    <a href="index.html" class="header-logo">
      프랑스어 전문가 <span>김두우리</span>
    </a>

    <nav class="desktop-nav" aria-label="주 메뉴">
      ${desktopLinks}
    </nav>

    <div class="header-right">
      ${showLang ? `
        <button class="lang-globe-btn" onclick="toggleLangMenu(event)" aria-label="언어 선택">🌐</button>
        <div class="lang-dropdown" id="lang-dropdown">
          <button class="lang-option active" data-lang="ko" onclick="switchPortfolioLang('ko')">🇰🇷 한국어</button>
          <button class="lang-option"        data-lang="en" onclick="switchPortfolioLang('en')">🇺🇸 English</button>
          <button class="lang-option"        data-lang="fr" onclick="switchPortfolioLang('fr')">🇫🇷 Français</button>
        </div>
      ` : ''}
      <button class="hamburger-btn" onclick="openMenu()" aria-label="메뉴 열기">
        <span></span><span></span><span></span>
      </button>
    </div>
  `;
}

/* ── 사이드 메뉴 렌더 ──────────────────────────────────── */
function renderSideMenu() {
  const cur = getCurrentPageId();

  const items = NAV_ITEMS.map(i => `
    <a href="${i.href}"
       class="menu-item ${i.sub ? 'sub' : ''} ${cur === i.id ? 'active' : ''}"
       onclick="closeMenu()">
      <span class="menu-item-icon">${i.icon}</span>
      ${i.label}
    </a>
  `).join('');

  const el = document.getElementById('side-menu');
  if (!el) return;

  el.innerHTML = `
    <div class="side-menu-top">
      <span class="side-menu-brand">프랑스어 전문가 김두우리</span>
      <button class="close-menu-btn" onclick="closeMenu()" aria-label="닫기">✕</button>
    </div>
    <nav class="side-menu-nav">
      ${items}
    </nav>
    <div class="side-menu-bottom">
      <a href="${KAKAO_URL}" class="menu-cta" target="_blank">📣 카카오로 문의하기</a>
    </div>
  `;
}

/* ── 푸터 렌더 ─────────────────────────────────────────── */
function renderFooter() {
  const el = document.getElementById('site-footer');
  if (!el) return;
  el.innerHTML = `
    <div class="footer-logo">프랑스어 전문가 김두우리</div>
    <p>© 2025 김두우리. All rights reserved.</p>
    <p style="margin-top:4px;">
      <a href="mailto:douri.kim@gmail.com" class="footer-link">douri.kim@gmail.com</a>
    </p>
  `;
}

/* ── 카카오 플로팅 버튼 ───────────────────────────────── */
function renderKakaoBtn() {
  const el = document.getElementById('kakao-float');
  if (!el) return;
  el.innerHTML = `
    <a href="${KAKAO_URL}" class="kakao-float-btn" target="_blank" rel="noopener" aria-label="카카오 문의">
      <svg viewBox="0 0 24 24" fill="#3C1E1E" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3C7.03 3 3 6.36 3 10.5c0 2.62 1.55 4.93 3.9 6.3L6 21l4.55-2.87c.47.07.95.11 1.45.11 4.97 0 9-3.36 9-7.5C21 6.36 16.97 3 12 3z"/>
      </svg>
    </a>
    <span class="kakao-tooltip">카카오 문의</span>
  `;
}

/* ── 메뉴 열기/닫기 ────────────────────────────────────── */
function openMenu() {
  document.getElementById('side-menu')?.classList.add('open');
  document.getElementById('menu-overlay')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMenu() {
  document.getElementById('side-menu')?.classList.remove('open');
  document.getElementById('menu-overlay')?.classList.remove('open');
  document.body.style.overflow = '';
}

/* ── 언어 드롭다운 토글 ─────────────────────────────────── */
function toggleLangMenu(e) {
  e.stopPropagation();
  document.getElementById('lang-dropdown')?.classList.toggle('open');
}
document.addEventListener('click', () => {
  document.getElementById('lang-dropdown')?.classList.remove('open');
});

/* ── 초기화 ─────────────────────────────────────────────── */
function initComponents(opts = {}) {
  renderHeader(opts);
  renderSideMenu();
  renderFooter();
  renderKakaoBtn();
  renderAdminBar();
  loadEditMode();
}

/* ── 관리자 미리보기 바 ──────────────────────────────────── */
function renderAdminBar() {
  if (!sessionStorage.getItem('admin-auth')) return;
  if (document.getElementById('admin-preview-bar')) return;

  const bar = document.createElement('div');
  bar.id = 'admin-preview-bar';
  bar.style.cssText = [
    'position:fixed', 'bottom:0', 'left:0', 'right:0', 'height:44px',
    'background:#2E0E0C', 'border-top:1px solid rgba(255,255,255,.1)',
    'display:flex', 'align-items:center', 'justify-content:space-between',
    'padding:0 20px', 'z-index:9998',
    'font-family:Pretendard,sans-serif', 'font-size:0.78rem',
  ].join(';');

  bar.innerHTML = `
    <span style="color:rgba(255,255,255,.6);">🔧 관리자 미리보기 모드 — 방문자에게는 이 바가 보이지 않아요</span>
    <a href="admin.html" style="
      color:#E8896F; font-weight:700; text-decoration:none;
      background:rgba(255,255,255,.08); padding:6px 14px;
      border-radius:6px; font-size:0.78rem;
      border:1px solid rgba(255,255,255,.12);
    ">← 관리자 페이지</a>
  `;

  document.body.appendChild(bar);

  /* 하단 여백 확보 (카카오 버튼 위로 올라오지 않도록) */
  document.body.style.paddingBottom = '44px';
}

/* ── 수정 모드 자동 로드 ─────────────────────────────────── */
function loadEditMode() {
  if (document.getElementById('edit-mode-script')) return;
  const s = document.createElement('script');
  s.id  = 'edit-mode-script';
  s.src = 'js/edit-mode.js';
  document.body.appendChild(s);
}
