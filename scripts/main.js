(function () {
  var nav = document.querySelector('nav');
  var btn = document.getElementById('burger-btn');
  var links = document.getElementById('nav-links');
  if (!btn || !links) return;

  function closeMenu() {
    links.classList.remove('open');
    btn.classList.remove('burger-active');
    btn.setAttribute('aria-expanded', 'false');
  }

  btn.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    btn.classList.toggle('burger-active', open);
    btn.setAttribute('aria-expanded', open);
  });

  // Close on any link click (nav links + logo)
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', closeMenu);
  });

  // Close on click outside nav
  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target)) closeMenu();
  });
})();
