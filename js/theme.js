//Fikir Demeke 
// Theme toggle — persists to localStorage, smooth transition
(function () {
  var btn  = document.getElementById('themeToggle');
  var root = document.documentElement;

  function setTheme(dark) {
    // Brief class to drive smooth transitions
    root.classList.add('theme-animating');
    if (dark) {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', dark ? 'dark' : 'light');
    setTimeout(function () { root.classList.remove('theme-animating'); }, 400);
  }

  if (btn) {
    btn.addEventListener('click', function () {
      setTheme(root.getAttribute('data-theme') !== 'dark');
    });
  }
})();
