// 3-D perspective tilt on project cards
(function () {
  const MAX_TILT = 12; // degrees

  function initTilt(card) {
    card.addEventListener('mousemove', onMove);
    card.addEventListener('mouseleave', onLeave);
    card.addEventListener('mouseenter', onEnter);
  }

  function onEnter(e) {
    e.currentTarget.style.transition = 'transform 0.1s ease, box-shadow 0.3s ease';
  }

  function onMove(e) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    // Normalised cursor position (-0.5 → 0.5)
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;

    const rotY =  x * MAX_TILT * 2;
    const rotX = -y * MAX_TILT * 2;

    card.style.transform =
      `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(12px)`;
  }

  function onLeave(e) {
    const card = e.currentTarget;
    card.style.transition = 'transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease';
    card.style.transform  = '';
  }

  // Initialise all existing tilt cards, and observe future DOM additions
  function attachAll() {
    document.querySelectorAll('.tilt-card').forEach(initTilt);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attachAll);
  } else {
    attachAll();
  }
})();
