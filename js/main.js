/**
 * ============================================================
 *  MAIN.JS — 인터랙션 (캐러셀, 탭, 태그 필터, 언어 전환)
 *  ⚠️ 여기는 건드리지 않아도 됩니다.
 *     텍스트 수정은 content.js에서 하세요!
 * ============================================================
 */

/* ══════════════════════════════════════════════════════════
   캐러셀 (메인 페이지 히어로)
   ══════════════════════════════════════════════════════════ */
function initCarousel(wrapperSelector, opts = {}) {
  const wrapper = document.querySelector(wrapperSelector);
  if (!wrapper) return;

  const track   = wrapper.querySelector('.carousel-track');
  const slides  = wrapper.querySelectorAll('.carousel-slide');
  const dotsEl  = wrapper.parentElement?.querySelector('.carousel-dots');
  const total   = slides.length;
  if (total === 0) return;

  let current   = 0;
  let autoTimer = null;

  /* 도트 생성 */
  if (dotsEl) {
    dotsEl.innerHTML = Array.from({ length: total }, (_, i) =>
      `<span class="dot${i === 0 ? ' active' : ''}" data-idx="${i}"></span>`
    ).join('');
    dotsEl.querySelectorAll('.dot').forEach(dot => {
      dot.addEventListener('click', () => goTo(+dot.dataset.idx));
    });
  }

  function goTo(idx) {
    current = (idx + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    dotsEl?.querySelectorAll('.dot').forEach((d, i) =>
      d.classList.toggle('active', i === current)
    );
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  /* 화살표 버튼 */
  wrapper.querySelector('.prev-btn')?.addEventListener('click', () => { prev(); resetAuto(); });
  wrapper.querySelector('.next-btn')?.addEventListener('click', () => { next(); resetAuto(); });

  /* 자동 슬라이드 */
  function startAuto() {
    autoTimer = setInterval(next, opts.interval || 4000);
  }
  function resetAuto() {
    clearInterval(autoTimer);
    startAuto();
  }

  /* 터치 스와이프 */
  let touchStartX = 0;
  wrapper.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  wrapper.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) { dx < 0 ? next() : prev(); resetAuto(); }
  });

  if (opts.auto !== false) startAuto();
  return { goTo, next, prev };
}


/* ══════════════════════════════════════════════════════════
   탭 (통번역 페이지)
   ══════════════════════════════════════════════════════════ */
function initTabs(barSelector) {
  const bar = document.querySelector(barSelector);
  if (!bar) return;

  function activateTab(tabId) {
    bar.querySelectorAll('.tab-btn').forEach(b =>
      b.classList.toggle('active', b.dataset.tab === tabId)
    );
    /* 현재 활성 lang-panel 안의 패널만 전환 */
    const activeLang = document.querySelector('.lang-panel.active') || document;
    activeLang.querySelectorAll('.tab-panel').forEach(p =>
      p.classList.toggle('active', p.dataset.tab === tabId)
    );
  }

  bar.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => activateTab(btn.dataset.tab));
  });

  /* 탭 전환 시 lang-panel도 함께 업데이트 */
  window._activateTab = activateTab;

  /* 첫 번째 탭 활성화 */
  const firstTab = bar.querySelector('.tab-btn')?.dataset.tab;
  if (firstTab) activateTab(firstTab);
}


/* ══════════════════════════════════════════════════════════
   태그 필터 (학습 컨텐츠 페이지)
   ══════════════════════════════════════════════════════════ */
function initTagFilter(barSelector, cardsSelector) {
  const bar   = document.querySelector(barSelector);
  const cards = document.querySelectorAll(cardsSelector);
  if (!bar || !cards.length) return;

  bar.querySelectorAll('.tag-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      bar.querySelectorAll('.tag-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const tag = chip.dataset.tag;
      cards.forEach(card => {
        if (tag === 'all') {
          card.removeAttribute('data-hidden');
        } else {
          const tags = (card.dataset.tags || '').split(',');
          card.dataset.hidden = tags.includes(tag) ? 'false' : 'true';
        }
      });
    });
  });

  /* 전체 칩 기본 활성화 */
  bar.querySelector('.tag-chip[data-tag="all"]')?.click();
}


/* ══════════════════════════════════════════════════════════
   통번역 페이지 언어 전환
   ══════════════════════════════════════════════════════════ */
let portfolioLang = 'ko';

function switchPortfolioLang(lang) {
  portfolioLang = lang;

  /* 드롭다운 버튼 상태 업데이트 */
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  /* 언어 패널 전환 */
  document.querySelectorAll('.lang-panel').forEach(panel => {
    panel.classList.toggle('active', panel.dataset.lang === lang);
  });

  /* 현재 활성 탭을 새 언어 패널에도 적용 */
  const activeTab = document.querySelector('.tab-btn.active')?.dataset.tab;
  if (activeTab && window._activateTab) window._activateTab(activeTab);

  /* 드롭다운 닫기 */
  document.getElementById('lang-dropdown')?.classList.remove('open');
}
