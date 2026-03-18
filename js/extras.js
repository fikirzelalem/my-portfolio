//Fikir Demeke 
// ── Scroll progress bar ──
(function () {
  var bar = document.getElementById('scrollProgress');
  if (!bar) return;

  function updateBar() {
    var scrolled = window.scrollY;
    var total    = document.body.scrollHeight - window.innerHeight;
    bar.style.width = (total > 0 ? (scrolled / total) * 100 : 0) + '%';
  }

  window.addEventListener('scroll', updateBar, { passive: true });
  updateBar();
})();

// ── Mouse parallax on hero ──
(function () {
  var hero    = document.getElementById('hero');
  var avatar  = document.querySelector('.avatar-wrapper');
  var orbs    = document.querySelectorAll('.orb');
  if (!hero) return;

  var cx = window.innerWidth  / 2;
  var cy = window.innerHeight / 2;

  hero.addEventListener('mousemove', function (e) {
    var dx = (e.clientX - cx) / cx; // -1 to 1
    var dy = (e.clientY - cy) / cy; // -1 to 1

    if (avatar) {
      avatar.style.transform = 'translate(' + (dx * 12) + 'px, ' + (dy * 8) + 'px)';
    }
    orbs.forEach(function (orb, i) {
      var factor = (i % 2 === 0) ? 20 : -14;
      orb.style.transform = 'translate(' + (dx * factor) + 'px, ' + (dy * factor * 0.6) + 'px)';
    });
  });

  hero.addEventListener('mouseleave', function () {
    if (avatar) avatar.style.transform = '';
    orbs.forEach(function (orb) { orb.style.transform = ''; });
  });

  window.addEventListener('resize', function () {
    cx = window.innerWidth  / 2;
    cy = window.innerHeight / 2;
  });
})();

