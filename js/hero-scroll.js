// Scroll-driven hero: cursive name fades out, content fades in
(function () {
  var wrapper = document.getElementById('heroScrollWrapper');
  var splash  = document.getElementById('nameSplash');
  var content = document.getElementById('heroContentLayer');

  if (!wrapper || !splash || !content) return;

  function clamp(v, lo, hi) { return Math.min(hi, Math.max(lo, v)); }

  function lerp(a, b, t) { return a + (b - a) * t; }

  // Map a value from [inLo, inHi] → [outLo, outHi], clamped
  function remap(v, inLo, inHi, outLo, outHi) {
    return lerp(outLo, outHi, clamp((v - inLo) / (inHi - inLo), 0, 1));
  }

  function update() {
    var wh      = window.innerHeight;
    var top     = wrapper.getBoundingClientRect().top;
    var scrollY = -top; // pixels scrolled into the wrapper
    var maxScroll = wrapper.offsetHeight - wh;
    if (maxScroll <= 0) return;

    var p = clamp(scrollY / maxScroll, 0, 1); // 0 → 1 as user scrolls through wrapper

    // Splash: visible at p=0, fully gone by p=0.45
    var splashOpacity   = remap(p, 0, 0.45, 1, 0);
    var splashTranslate = remap(p, 0, 0.45, 0, -30); // slides up

    // Content: invisible at p=0, fully visible by p=0.85
    var contentOpacity   = remap(p, 0.30, 0.85, 0, 1);
    var contentTranslate = remap(p, 0.30, 0.85, 30, 0); // slides up into place

    splash.style.opacity   = splashOpacity;
    splash.style.transform = 'translateY(' + splashTranslate + 'px)';

    content.style.opacity   = contentOpacity;
    content.style.transform = 'translateY(' + contentTranslate + 'px)';
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update, { passive: true });
  update();
})();

// ── Section fade-in: each section fades up when it enters the viewport ──
(function () {
  var sections = document.querySelectorAll('.section');
  if (!sections.length || !window.IntersectionObserver) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  sections.forEach(function (s) { observer.observe(s); });
})();
