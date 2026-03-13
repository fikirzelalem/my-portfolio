// Intro splash — terminal typer with laptop + coffee
(function () {
  var termBody = document.getElementById('terminalBody');
  var overlay  = document.getElementById('introOverlay');
  if (!termBody || !overlay) return;

  // Lines: each has a plain prompt+text portion and an optional colored suffix
  var LINES = [
    { main: '> initializing fikirdemeke.dev...', suf: '', sufCls: '' },
  ];

  var TYPE_SPEED = 36;  // ms per character
  var LINE_GAP   = 280; // ms pause before starting next line

  // Blinking cursor element — moved to the end of the active line
  var cursor = document.createElement('span');
  cursor.className = 't-cursor';

  /* ── helpers ── */
  function esc(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function renderLine(el, L, visibleChars) {
    var full  = L.main + L.suf;
    var typed = full.substring(0, visibleChars);
    var html  = '';

    if (typed.length <= L.main.length) {
      // Still typing the main (prompt-coloured) portion
      html = '<span class="t-prompt">' + esc(typed) + '</span>';
    } else {
      // Main done, typing into the suffix
      var sufPart = typed.substring(L.main.length);
      html = '<span class="t-prompt">' + esc(L.main) + '</span>'
           + (L.sufCls
               ? '<span class="' + L.sufCls + '">' + esc(sufPart) + '</span>'
               : esc(sufPart));
    }

    el.innerHTML = html;
    el.appendChild(cursor);
  }

  /* ── core typer ── */
  function typeAll(lineIdx, charIdx, lineEl) {
    if (lineIdx >= LINES.length) {
      cursor.style.display = 'none';
      setTimeout(exitIntro, 750);
      return;
    }

    var L    = LINES[lineIdx];
    var full = L.main + L.suf;

    // New line — create a DOM element for it
    if (!lineEl) {
      lineEl = document.createElement('span');
      lineEl.className = 't-line';
      termBody.appendChild(lineEl);
    }

    if (charIdx <= full.length) {
      renderLine(lineEl, L, charIdx);
      setTimeout(function () { typeAll(lineIdx, charIdx + 1, lineEl); }, TYPE_SPEED);
    } else {
      // Line complete — finalize without cursor
      var html = '<span class="t-prompt">' + esc(L.main) + '</span>'
               + (L.sufCls
                   ? '<span class="' + L.sufCls + '">' + esc(L.suf) + '</span>'
                   : esc(L.suf));
      lineEl.innerHTML = html;
      setTimeout(function () { typeAll(lineIdx + 1, 0, null); }, LINE_GAP);
    }
  }

  /* ── exit: scene fades up and out ── */
  function exitIntro() {
    var scene = document.querySelector('.intro-scene');
    if (!scene) return;

    scene.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    scene.style.opacity    = '0';
    scene.style.transform  = 'scale(0.96) translateY(-14px)';

    setTimeout(function () {
      overlay.style.transition = 'opacity 0.35s ease';
      overlay.style.opacity    = '0';
      setTimeout(function () { overlay.remove(); }, 380);
    }, 320);
  }

  // Start typing after the icons have slid in (~0.35s delay + settle)
  setTimeout(function () { typeAll(0, 0, null); }, 800);
})();
