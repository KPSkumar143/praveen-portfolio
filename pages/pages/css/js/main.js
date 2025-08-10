// js/main.js - interactions for one-page portfolio

document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // close mobile nav if open
        document.getElementById('mobileNav')?.classList.add('hidden');
      }
    });
  });

  // Theme toggle (persist in localStorage)
  const themeToggle = document.getElementById('themeToggle');
  const mobileThemeToggle = document.getElementById('mobileThemeToggle');
  const saved = localStorage.getItem('theme');
  if (saved === 'light') document.documentElement.classList.add('light');

  function toggleTheme() {
    document.documentElement.classList.toggle('light');
    localStorage.setItem('theme', document.documentElement.classList.contains('light') ? 'light' : 'dark');
  }
  themeToggle?.addEventListener('click', toggleTheme);
  mobileThemeToggle?.addEventListener('click', toggleTheme);

  // Mobile nav toggle
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');
  mobileBtn?.addEventListener('click', () => {
    mobileNav?.classList.toggle('hidden');
  });

  // Modal open/close
  document.querySelectorAll('[data-open]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-open');
      const modal = document.getElementById(id);
      if (modal) modal.style.display = 'flex';
    });
  });
  document.querySelectorAll('.modal-close').forEach(b => {
    b.addEventListener('click', () => {
      b.closest('.modal-back').style.display = 'none';
    });
  });

  // Reveal on scroll (simple)
  const reveal = (entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        obs.unobserve(entry.target);
      }
    });
  };
  const obs = new IntersectionObserver(reveal, { threshold: 0.12 });
  document.querySelectorAll('.panel, .card').forEach(el => obs.observe(el));

  // Form feedback (Formspree will handle delivery)
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      formStatus.textContent = 'Sending…';
      // let browser submit to Formspree; show message after small delay
      setTimeout(() => {
        formStatus.textContent = 'If you don\'t receive confirmation, check your spam or Formspree dashboard.';
      }, 1500);
    });
  }
});
