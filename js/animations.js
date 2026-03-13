// Scroll-driven animations:
//   • scroll reveal  (.reveal → .revealed)
//   • stat counters  ([data-target])
//   • skill bars     (.skill-animate-target)
//   • active nav link highlight

(function () {
  'use strict';

  /* ──────────────────────────────────────
     1. REVEAL ON SCROLL
  ────────────────────────────────────── */
  const revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  // Separate observer for slide elements — re-triggers on every scroll pass
  const slideObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        } else {
          entry.target.classList.remove('revealed');
        }
      });
    },
    { threshold: 0.2 }
  );

  function observeReveals() {
    document.querySelectorAll('.reveal').forEach(function (el) {
      revealObserver.observe(el);
    });
    document.querySelectorAll('.slide-left, .slide-right').forEach(function (el) {
      slideObserver.observe(el);
    });
  }

  /* ──────────────────────────────────────
     2. STAT COUNTERS
  ────────────────────────────────────── */
  function animateCounter(el, target, duration) {
    duration = duration || 1800;
    var start     = 0;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      // ease-out cubic
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target;
    }
    requestAnimationFrame(step);
  }

  var counterObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el     = entry.target;
          var target = parseInt(el.dataset.target, 10);
          animateCounter(el, target);
          counterObserver.unobserve(el);
        }
      });
    },
    { threshold: 0.6 }
  );

  function observeCounters() {
    document.querySelectorAll('[data-target]').forEach(function (el) {
      counterObserver.observe(el);
    });
  }

  /* ──────────────────────────────────────
     3. SKILL BARS
  ────────────────────────────────────── */
  var skillObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.skill-bar-fill').forEach(function (bar) {
            // Stagger each bar slightly
            var index = Array.from(bar.closest('.skill-list').querySelectorAll('.skill-bar-fill')).indexOf(bar);
            setTimeout(function () {
              bar.style.width = bar.dataset.width + '%';
            }, index * 80);
          });
          skillObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  function observeSkillBars() {
    document.querySelectorAll('.skill-animate-target').forEach(function (el) {
      skillObserver.observe(el);
    });
  }

  /* ──────────────────────────────────────
     4. ACTIVE NAV LINK
  ────────────────────────────────────── */
  function updateActiveNav() {
    var sections = document.querySelectorAll('section[id]');
    var scrollY  = window.scrollY + 120;

    sections.forEach(function (section) {
      var top    = section.offsetTop;
      var bottom = top + section.offsetHeight;

      if (scrollY >= top && scrollY < bottom) {
        var id = section.id;
        document.querySelectorAll('.nav-link').forEach(function (link) {
          var href = link.getAttribute('href');
          link.classList.toggle('active', href === '#' + id);
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });

  /* ──────────────────────────────────────
     INIT
  ────────────────────────────────────── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      observeReveals();
      observeCounters();
      observeSkillBars();
    });
  } else {
    observeReveals();
    observeCounters();
    observeSkillBars();
  }
})();
