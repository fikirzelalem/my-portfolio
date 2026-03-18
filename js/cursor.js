//Fikir Demeke 

// ── Custom cursor with particle trail ──
(function () {
  // Skip on touch devices
  if (window.matchMedia('(hover: none)').matches) return;

  var COLORS = ['#e91e8c', '#f59e0b', '#c2185b', '#a855f7', '#e8901a'];
  var PARTICLE_COUNT = 18;
  var particles = [];
  var mouse = { x: -200, y: -200 };

  // ── Custom cursor dot ──
  var cursor = document.createElement('div');
  cursor.id = 'customCursor';
  cursor.style.cssText = [
    'position:fixed',
    'width:10px',
    'height:10px',
    'border-radius:50%',
    'background:#e91e8c',
    'pointer-events:none',
    'z-index:99999',
    'transform:translate(-50%,-50%)',
    'transition:width 0.15s,height 0.15s,background 0.15s',
    'mix-blend-mode:difference',
    'top:0',
    'left:0',
  ].join(';');
  document.body.appendChild(cursor);

  // ── Cursor ring ──
  var ring = document.createElement('div');
  ring.style.cssText = [
    'position:fixed',
    'width:32px',
    'height:32px',
    'border-radius:50%',
    'border:1.5px solid rgba(233,30,140,0.5)',
    'pointer-events:none',
    'z-index:99998',
    'transform:translate(-50%,-50%)',
    'transition:width 0.2s,height 0.2s,border-color 0.2s',
    'top:0',
    'left:0',
  ].join(';');
  document.body.appendChild(ring);

  // ── Particle pool ──
  for (var i = 0; i < PARTICLE_COUNT; i++) {
    var p = document.createElement('div');
    p.style.cssText = [
      'position:fixed',
      'border-radius:50%',
      'pointer-events:none',
      'z-index:99997',
      'transform:translate(-50%,-50%)',
      'top:0',
      'left:0',
      'opacity:0',
    ].join(';');
    document.body.appendChild(p);
    particles.push({
      el: p,
      x: 0, y: 0,
      size: 0,
      opacity: 0,
      life: 0,
    });
  }

  var ringX = -200, ringY = -200;
  var poolIndex = 0;

  document.addEventListener('mousemove', function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;

    // Spawn a particle at the cursor position
    var p = particles[poolIndex % PARTICLE_COUNT];
    poolIndex++;
    var size = 4 + Math.random() * 6;
    p.x = mouse.x + (Math.random() - 0.5) * 8;
    p.y = mouse.y + (Math.random() - 0.5) * 8;
    p.size = size;
    p.opacity = 0.7 + Math.random() * 0.3;
    p.life = 1;
    p.color = COLORS[Math.floor(Math.random() * COLORS.length)];
    p.el.style.width  = size + 'px';
    p.el.style.height = size + 'px';
    p.el.style.background = p.color;
    p.el.style.left = p.x + 'px';
    p.el.style.top  = p.y + 'px';
    p.el.style.opacity = p.opacity;
  }, { passive: true });

  // Grow cursor on interactive elements
  document.addEventListener('mouseover', function (e) {
    if (e.target.closest('a, button, [role="button"], .project-card, .cert-card')) {
      cursor.style.width  = '16px';
      cursor.style.height = '16px';
      cursor.style.background = '#f59e0b';
      ring.style.width  = '48px';
      ring.style.height = '48px';
      ring.style.borderColor = 'rgba(245,158,11,0.6)';
    }
  });
  document.addEventListener('mouseout', function (e) {
    if (e.target.closest('a, button, [role="button"], .project-card, .cert-card')) {
      cursor.style.width  = '10px';
      cursor.style.height = '10px';
      cursor.style.background = '#e91e8c';
      ring.style.width  = '32px';
      ring.style.height = '32px';
      ring.style.borderColor = 'rgba(233,30,140,0.5)';
    }
  });

  // Hide default cursor
  document.documentElement.style.cursor = 'none';
  document.addEventListener('mouseleave', function () {
    cursor.style.opacity = '0';
    ring.style.opacity = '0';
  });
  document.addEventListener('mouseenter', function () {
    cursor.style.opacity = '1';
    ring.style.opacity = '1';
  });

  // Animation loop — fade out particles + lag ring
  function animate() {
    // Move main cursor
    cursor.style.left = mouse.x + 'px';
    cursor.style.top  = mouse.y + 'px';

    // Lag the ring
    ringX += (mouse.x - ringX) * 0.12;
    ringY += (mouse.y - ringY) * 0.12;
    ring.style.left = ringX + 'px';
    ring.style.top  = ringY + 'px';

    // Fade out particles
    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      if (p.life > 0) {
        p.life -= 0.045;
        p.y += 0.6; // gentle drift down
        p.size *= 0.97;
        if (p.life <= 0) {
          p.el.style.opacity = '0';
        } else {
          p.el.style.opacity = (p.life * p.opacity).toFixed(3);
          p.el.style.top  = p.y + 'px';
          p.el.style.width  = p.size + 'px';
          p.el.style.height = p.size + 'px';
        }
      }
    }
    requestAnimationFrame(animate);
  }
  animate();
})();
