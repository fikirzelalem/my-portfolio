//Fikir Demeke 
// Main — header scroll · scroll progress · hamburger · project filter · form · year
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {

    /* ──────────────────────────────────────
       HEADER SCROLL GLASS EFFECT + PROGRESS
    ────────────────────────────────────── */
    var header   = document.getElementById('header');
    var progress = document.getElementById('scrollProgress');

    window.addEventListener('scroll', function () {
      if (window.scrollY > 60) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      var total = document.body.scrollHeight - window.innerHeight;
      var pct   = total > 0 ? (window.scrollY / total) * 100 : 0;
      if (progress) progress.style.width = pct + '%';
    }, { passive: true });

    /* ──────────────────────────────────────
       HAMBURGER MENU
    ────────────────────────────────────── */
    var hamburger = document.getElementById('hamburger');
    var mobileNav = document.getElementById('mobileNav');

    if (hamburger && mobileNav) {
      hamburger.addEventListener('click', function () {
        var isOpen = mobileNav.classList.toggle('open');
        hamburger.classList.toggle('open', isOpen);
        hamburger.setAttribute('aria-expanded', String(isOpen));
        mobileNav.setAttribute('aria-hidden', String(!isOpen));
        document.body.style.overflow = isOpen ? 'hidden' : '';
      });

      mobileNav.querySelectorAll('.nav-link').forEach(function (link) {
        link.addEventListener('click', function () {
          mobileNav.classList.remove('open');
          hamburger.classList.remove('open');
          hamburger.setAttribute('aria-expanded', 'false');
          mobileNav.setAttribute('aria-hidden', 'true');
          document.body.style.overflow = '';
        });
      });
    }

    /* ──────────────────────────────────────
       PROJECT FILTER TABS
    ────────────────────────────────────── */
    var filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');

        var filter = btn.dataset.filter;
        var cards  = document.querySelectorAll('.project-card');

        cards.forEach(function (card, i) {
          var match = filter === 'all' || card.dataset.category === filter;
          if (match) {
            card.style.display   = '';
            card.style.opacity   = '0';
            card.style.transform = 'translateY(20px) scale(0.97)';
            setTimeout(function () {
              card.style.transition = 'opacity 0.35s ease, transform 0.4s cubic-bezier(0.34,1.56,0.64,1)';
              card.style.opacity    = '1';
              card.style.transform  = '';
            }, i * 60);
          } else {
            card.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
            card.style.opacity    = '0';
            card.style.transform  = 'scale(0.95)';
            setTimeout(function () { card.style.display = 'none'; }, 280);
          }
        });
      });
    });

    /* ──────────────────────────────────────
       CONTACT FORM (mock submit)
    ────────────────────────────────────── */
    var form    = document.getElementById('contactForm');
    var success = document.getElementById('formSuccess');

    if (form && success) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var btn = form.querySelector('button[type="submit"]');
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending…';
        btn.disabled  = true;

        fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        }).then(function (res) {
          if (res.ok) {
            success.classList.add('visible');
            form.reset();
            setTimeout(function () { success.classList.remove('visible'); }, 5000);
          } else {
            alert('Something went wrong. Please email me directly.');
          }
        }).catch(function () {
          alert('Something went wrong. Please email me directly.');
        }).finally(function () {
          btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
          btn.disabled  = false;
        });
      });
    }

    /* ──────────────────────────────────────
       FOOTER YEAR
    ────────────────────────────────────── */
    var yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* ──────────────────────────────────────
       SMOOTH SCROLL
    ────────────────────────────────────── */
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var id = anchor.getAttribute('href').slice(1);
        if (!id) return;
        var target = document.getElementById(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

  });
})();
