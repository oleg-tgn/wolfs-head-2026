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

(function () {
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav-link[href^="#"]');
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        navLinks.forEach(function (link) {
          link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
        });
      } else if (entry.target === sections[0] && entry.boundingClientRect.top > 0) {
        navLinks.forEach(function (link) { link.classList.remove('active'); });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(function (s) { observer.observe(s); });

  var logo = document.querySelector('.nav-logo');
  if (logo) {
    logo.addEventListener('click', function () {
      navLinks.forEach(function (link) { link.classList.remove('active'); });
    });
  }
})();

document.addEventListener('DOMContentLoaded', function () {
  if (typeof GLightbox !== 'undefined') {
    GLightbox({ selector: '.glightbox', touchNavigation: true, loop: true });
  }
});
