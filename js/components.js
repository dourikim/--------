/**
 * COMPONENTS.JS : 공통 헤더 / 사이드메뉴 / 푸터 / 카카오 버튼
 * 모든 페이지에서 자동 실행됩니다. 수정 불필요.
 *
 * ⚠️ 카카오 링크 변경: KAKAO_URL 값만 바꾸세요 (아래 31번째 줄)
 */

/* ── 메뉴 구조 ─────────────────────────────────────────── */
const NAV_ITEMS = [
  { id: 'index',          label: '홈',                        icon: '🏠', href: '/' },
  { id: 'lesson',         label: '1:1 프랑스어 수업',          icon: '🧑🏻‍💻', href: '/lesson' },
  { id: 'reviews',        label: '수업 후기',                  icon: '💬', href: '/reviews', sub: true },
  { id: 'course',         label: '바이블 문법책 재해석 인강',   icon: '📘', href: '/course' },
  { id: 'content',        label: '학습 콘텐츠',                icon: '📒', href: '/content' },
  { id: 'portfolio',      label: '통번역, 로컬화',            icon: '📑', href: '/portfolio' },
  { id: 'service-finder', label: '학습 유형 테스트'   ,         icon: '🎯', href: '/service-finder', sub: true },
];

/* ── 카카오 오픈채팅 URL ─────────────────────────────────
   ⚠️ 여기에 실제 링크를 넣으세요
   ─────────────────────────────────────────────────────── */
const KAKAO_URL = 'https://open.kakao.com/o/s7eqNH9g';   /* 카카오 오픈채팅 */

/* ── 주소 변환 ───────────────────────────────────────────
   배포된 사이트는 /lesson 처럼 확장자 없는 주소를 씁니다.
   내 컴퓨터에서 파일로 열어볼 때(file://)는 그 주소가 없으므로
   lesson.html 로 되돌려서 로컬 미리보기가 그대로 되게 합니다. */
const IS_FILE = location.protocol === 'file:';
function siteHref(h) {
  if (!IS_FILE || !h || h.charAt(0) !== '/') return h;
  if (h === '/') return 'index.html';
  const m = h.match(/^\/([A-Za-z0-9_-]+)(#.*)?$/);
  return m ? m[1] + '.html' + (m[2] || '') : h;
}
/* 페이지 본문에 직접 적힌 /주소 링크도 같이 되돌립니다 */
function fixLocalLinks() {
  if (!IS_FILE) return;
  document.querySelectorAll('a[href^="/"]').forEach(function (a) {
    a.setAttribute('href', siteHref(a.getAttribute('href')));
  });
}

/* ── 현재 페이지 ID ─────────────────────────────────────── */
function getCurrentPageId() {
  /* /lesson 처럼 확장자 없는 주소와 lesson.html 둘 다 받습니다 */
  const file = window.location.pathname.split('/').pop() || 'index';
  return file.replace('.html', '') || 'index';
}

/* ── 헤더 렌더 ─────────────────────────────────────────── */
function renderHeader({ showLang = false } = {}) {
  const cur = getCurrentPageId();

  // 데스크톱 네비 링크 (sub 제외)
  const desktopLinks = NAV_ITEMS
    .filter(i => !i.sub || i.id === 'reviews')
    .map(i => `<a href="${siteHref(i.href)}" class="${cur === i.id ? 'active' : ''}">${i.label}</a>`)
    .join('');

  const el = document.getElementById('site-header');
  if (!el) return;

  el.innerHTML = `
    <a href="${siteHref('/')}" class="header-logo">
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
    <a href="${siteHref(i.href)}"
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
      <a href="${KAKAO_URL}" class="menu-cta" target="_blank" rel="noopener noreferrer">📣 카카오로 문의하기</a>
    </div>
  `;
}

/* ── 소셜 미디어 ─────────────────────────────────────────
   푸터 오른쪽 아래에 다섯 개를 같은 크기, 같은 색으로 놓습니다. */
const SOCIALS = [
  { id: 'instagram', label: 'Instagram',    href: 'https://www.instagram.com/douri.french' },
  { id: 'youtube',   label: 'YouTube',      href: 'https://www.youtube.com/@douri.french' },
  { id: 'threads',   label: 'Threads',      href: 'https://www.threads.com/@douri.french' },
  { id: 'naver',     label: '네이버 블로그', href: 'https://blog.naver.com/frenchtude' },
  { id: 'linkedin',  label: 'LinkedIn',     href: 'https://www.linkedin.com/in/douri-kim-63613931/' },
  { id: 'class101',  label: 'CLASS101 인강', href: 'https://class101.net/ko/products/68bd844b4eced9473dee4f63' },
];
const SOCIAL_ICONS = {
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5.2" fill="none" stroke="currentColor" stroke-width="1.9"/><circle cx="12" cy="12" r="4.1" fill="none" stroke="currentColor" stroke-width="1.9"/><circle cx="17.1" cy="6.9" r="1.25" fill="currentColor"/>',
  youtube: '<rect x="2" y="5" width="20" height="14" rx="4.4" fill="none" stroke="currentColor" stroke-width="1.9"/><path d="M10.4 8.9v6.2L15.8 12z" fill="currentColor"/>',
  threads: '<path d="M12.5 21.4c-5.6 0-9-3.6-9-9.4 0-5.8 3.4-9.4 9-9.4 4 0 6.7 1.9 7.8 5.2l-2 .7c-.9-2.5-2.8-3.8-5.8-3.8-4.3 0-6.8 2.7-6.8 7.3 0 4.6 2.5 7.3 6.8 7.3 2.6 0 4.3-.9 5.3-2.3.8-1.2.7-2.5.1-3.3-.4-.5-.9-.9-1.6-1.2-.3 2.3-1.8 3.8-4.3 3.9-2.2.1-4-1.1-4.1-3.1-.1-2 1.6-3.4 4.2-3.5 1 0 1.9.1 2.7.2-.2-1.4-1-2.1-2.4-2.1-1 0-1.8.3-2.4 1.1l-1.7-1.2c1-1.4 2.5-2 4.2-2 3 0 4.7 1.8 4.9 4.7 1.9.8 3.1 2.2 3.4 4 .4 2.3-.6 4.3-2.4 5.5-1.4.9-3.1 1.4-5.2 1.4zm.6-9.3c-1.7 0-2.6.6-2.5 1.6.1 1 1.2 1.5 2.4 1.4 1.4-.1 2.3-.9 2.5-3-.8-.1-1.6-.1-2.4 0z" fill="currentColor"/>',
  naver: '<path d="M4.2 3.6h5.3l4.9 7.3V3.6h5.4v16.8h-5.3l-4.9-7.3v7.3H4.2z" fill="currentColor"/>',
  class101: '<rect x="1.6" y="5" width="5" height="14" fill="currentColor"/><circle cx="12" cy="12" r="5.6" fill="currentColor"/><rect x="17.4" y="5" width="5" height="14" fill="currentColor"/>',
  linkedin: '<rect x="2.4" y="2.4" width="19.2" height="19.2" rx="4" fill="none" stroke="currentColor" stroke-width="1.9"/><circle cx="7.3" cy="7.6" r="1.4" fill="currentColor"/><rect x="6.1" y="10.2" width="2.4" height="7.6" fill="currentColor"/><path d="M11 10.2h2.3v1.1c.4-.7 1.2-1.3 2.4-1.3 2 0 3.1 1.2 3.1 3.5v4.3h-2.4v-3.9c0-1.1-.4-1.8-1.4-1.8-.9 0-1.5.6-1.5 1.8v3.9H11z" fill="currentColor"/>'
};
function renderSocials() {
  return SOCIALS.map(function (s) {
    return '<a class="social-btn" href="' + s.href + '" target="_blank" rel="noopener noreferrer"' +
           ' aria-label="' + s.label + '" title="' + s.label + '">' +
           '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + SOCIAL_ICONS[s.id] + '</svg></a>';
  }).join('');
}

/* ── 푸터 렌더 ─────────────────────────────────────────── */
function renderFooter() {
  const el = document.getElementById('site-footer');
  if (!el) return;
  el.innerHTML = `
    <div class="footer-in">
      <div class="footer-id">
        <div class="footer-logo">프랑스어 전문가 김두우리</div>
        <p>© ${new Date().getFullYear()} 김두우리. All rights reserved.</p>
        <p><a href="mailto:douri.kim@gmail.com" class="footer-link">douri.kim@gmail.com</a></p>
      </div>
      <nav class="footer-social" aria-label="소셜 미디어">${renderSocials()}</nav>
    </div>
  `;
}

/* ── 카카오 플로팅 버튼 ───────────────────────────────── */
function renderKakaoBtn() {
  const el = document.getElementById('kakao-float');
  if (!el) return;
  el.innerHTML = `
    <a href="${KAKAO_URL}" class="kakao-float-btn" target="_blank" rel="noopener noreferrer" aria-label="카카오 문의">
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
  fixLocalLinks();
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
    <span style="color:rgba(255,255,255,.6);">🔧 관리자 미리보기 모드, 방문자에게는 이 바가 보이지 않아요</span>
    <a href="${siteHref('/admin')}" style="
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

/* ── 수정 모드 자동 로드 ───────────────────────────────────
   내 컴퓨터에서 파일을 열었을 때만 켜집니다.
   dourikim.com 처럼 배포된 주소에서는 절대 나타나지 않습니다. */
function loadEditMode() {
  var host = location.hostname;
  var isLocal = location.protocol === 'file:' ||
                host === 'localhost' || host === '127.0.0.1' || host === '';
  if (!isLocal) return;
  if (document.getElementById('edit-mode-script')) return;
  const s = document.createElement('script');
  s.id  = 'edit-mode-script';
  s.src = 'js/edit-mode.js';
  document.body.appendChild(s);
}
