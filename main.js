// main.js - Smooth scroll, AOS init, mobile nav toggle

document.addEventListener('DOMContentLoaded', function () {
  // init AOS
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      mirror: false
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        e.preventDefault();
        const el = document.querySelector(targetId);
        if (el) {
          window.scrollTo({
            top: el.getBoundingClientRect().top + window.scrollY - 72, // offset for sticky nav
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      // simple inline display toggle for small screens
      if (navLinks.classList.contains('open')) {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
      } else {
        navLinks.style.display = '';
      }
    });
  }
});
