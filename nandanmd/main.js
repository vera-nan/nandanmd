(function () {
  'use strict';

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu toggle
  var menuToggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav');
  var header = document.querySelector('.site-header');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      document.body.style.overflow = open ? 'hidden' : '';
    });
  }

  // Optional: add .is-open styles for mobile nav in CSS (we'll add a minimal one)
  if (nav) {
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }

  // Sticky CTA: show after user scrolls past hero
  var stickyCta = document.getElementById('sticky-cta');
  if (stickyCta) {
    function checkSticky() {
      var showAfter = 400;
      if (window.pageYOffset > showAfter) {
        stickyCta.classList.add('is-visible');
      } else {
        stickyCta.classList.remove('is-visible');
      }
    }
    window.addEventListener('scroll', checkSticky, { passive: true });
    checkSticky();
  }
})();
