'use strict';

import { initSmoothScroll } from './smooth-scroll.js';
import { initAnimations } from './animations.js';

const initNav = () => {
  const nav = document.querySelector('.nav');
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileMenu = document.querySelector('.nav__links');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }, { passive: true });

  hamburger?.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu?.classList.contains('open')) {
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initSmoothScroll();
  initAnimations();
});
