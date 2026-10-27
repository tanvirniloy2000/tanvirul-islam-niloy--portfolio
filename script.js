(() => {
  'use strict';
  document.documentElement.classList.add('js-enabled');

  const root = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('primary-nav');
  const year = document.getElementById('year');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (year) year.textContent = String(new Date().getFullYear());

  // Theme: explicit user choice wins; otherwise follow the browser preference.
  let savedTheme = null;
  try { savedTheme = window.localStorage.getItem('tn-portfolio-theme'); } catch (_) { /* storage may be blocked */ }
  const systemTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  root.dataset.theme = savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : systemTheme;

  function updateThemeControl() {
    const isDark = root.dataset.theme === 'dark';
    themeToggle.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
    themeToggle.setAttribute('title', isDark ? 'Switch to light theme' : 'Switch to dark theme');
  }
  updateThemeControl();
  themeToggle.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { window.localStorage.setItem('tn-portfolio-theme', root.dataset.theme); } catch (_) { /* theme still works without storage */ }
    updateThemeControl();
  });

  function closeNav() {
    nav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open navigation');
  }
  navToggle.addEventListener('click', () => {
    const willOpen = !nav.classList.contains('is-open');
    nav.classList.toggle('is-open', willOpen);
    navToggle.setAttribute('aria-expanded', String(willOpen));
    navToggle.setAttribute('aria-label', willOpen ? 'Close navigation' : 'Open navigation');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeNav));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeNav(); });
  window.addEventListener('resize', () => { if (window.innerWidth > 780) closeNav(); }, { passive: true });

  // Reveal on scroll, with an immediate fallback for browsers without IntersectionObserver.
  const revealItems = [...document.querySelectorAll('.reveal')];
  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -28px 0px' });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('is-visible'));
  }

  // Highlight the current section in the desktop/mobile navigation.
  const navLinks = [...nav.querySelectorAll('a[href^="#"]')];
  const sections = navLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(link => {
          const active = link.getAttribute('href') === `#${entry.target.id}`;
          if (active) link.classList.add('active'); else link.classList.remove('active');
        });
      });
    }, { rootMargin: '-22% 0px -65% 0px', threshold: 0 });
    sections.forEach(section => sectionObserver.observe(section));
  }
})();
