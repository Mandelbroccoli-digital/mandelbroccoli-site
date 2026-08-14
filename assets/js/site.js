// Mandelbroccoli Coalition — hub interactions.
// Lean, dependency-free. Highlights the active section in the topnav as you scroll.
(function () {
  'use strict';
  var sections = ['runtimes', 'agents', 'workspace', 'manifesto'];
  var navLinks = {};
  document.querySelectorAll('.topnav a').forEach(function (a) {
    var id = a.getAttribute('href');
    if (id && id.indexOf('#') === 0) navLinks[id.slice(1)] = a;
  });

  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          Object.keys(navLinks).forEach(function (k) {
            navLinks[k].style.color = '';
          });
          var link = navLinks[e.target.id];
          if (link) link.style.color = 'var(--accent)';
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach(function (id) {
      var el = document.getElementById(id);
      if (el) obs.observe(el);
    });
  }

  // Year in footer (defensive — template already hardcodes 2026, but future-proofs).
  // (no-op: static content is intentional for zero-build portability)
})();
