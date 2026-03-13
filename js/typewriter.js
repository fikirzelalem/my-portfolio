// Typewriter effect — cycles through roles
(function () {
  const roles = [
    'Full Stack Developer',
    'UI/UX Enthusiast',
    'Open Source Contributor',
    'Problem Solver',
    'Creative Coder',
  ];

  const el = document.getElementById('typewriter');
  if (!el) return;

  let roleIndex = 0;
  let charIndex  = 0;
  let isDeleting = false;

  function type() {
    const current = roles[roleIndex];

    if (isDeleting) {
      el.textContent = current.substring(0, charIndex - 1);
      charIndex--;
    } else {
      el.textContent = current.substring(0, charIndex + 1);
      charIndex++;
    }

    // Finished typing — pause then start deleting
    if (!isDeleting && charIndex === current.length) {
      isDeleting = true;
      setTimeout(type, 1800);
      return;
    }

    // Finished deleting — move to next role
    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }

    const speed = isDeleting ? 45 : 95;
    setTimeout(type, speed);
  }

  // Small initial delay so the page has settled
  setTimeout(type, 600);
})();
