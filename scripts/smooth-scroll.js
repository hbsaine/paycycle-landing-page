'use strict';

const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const navHeight = document.querySelector('.nav')?.offsetHeight || 0;
      const targetTop = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top: targetTop, behavior: 'smooth' });
      const mobileMenu = document.querySelector('.nav__links');
      if (mobileMenu?.classList.contains('open')) {
        mobileMenu.classList.remove('open');
      }
    });
  });
};

export { initSmoothScroll };
