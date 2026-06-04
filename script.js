/* ─── Dark / Light Theme ─── */
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  const btn = document.getElementById('themeToggle');
  if (btn) btn.setAttribute('aria-label', next === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
}

/* ─── Mobile Menu ─── */
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  document.addEventListener('click', e => {
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target))
      navLinks.classList.remove('open');
  });
}

/* ─── Sticky header — keep white on scroll ─── */
const header = document.querySelector('.header');
if (header) {
  window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 20
      ? '0 2px 24px rgba(0, 119, 182, 0.12)'
      : '0 1px 20px rgba(0, 119, 182, 0.06)';
  }, { passive: true });
}

/* ─── Scroll Reveal ─── */
const reveals = document.querySelectorAll('.reveal');
if (reveals.length) {
  const obs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('show'), i * 80);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach(el => obs.observe(el));
}

/* ─── Auth Tabs ─── */
const tabBtns = document.querySelectorAll('.tab-btn');
const authForms = document.querySelectorAll('.auth-form');
tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;
    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    authForms.forEach(f => {
      f.classList.remove('active-form');
      if (f.id === target) f.classList.add('active-form');
    });
  });
});

/* ─── Magnetic buttons ─── */
document.querySelectorAll('.btn-primary').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const r = btn.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * 0.2;
    const y = (e.clientY - r.top - r.height / 2) * 0.2;
    btn.style.transform = `translate(${x}px, ${y}px) translateY(-3px)`;
  });
  btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
});

/* ─── Stat counter animation ─── */
function animateCount(el) {
  const target = parseFloat(el.dataset.count);
  const isFloat = el.dataset.count.includes('.');
  const suffix = el.dataset.suffix || '';
  const dur = 1600;
  const start = performance.now();
  (function tick(now) {
    const p = Math.min((now - start) / dur, 1);
    const ease = 1 - Math.pow(1 - p, 4);
    const val = target * ease;
    el.textContent = (isFloat ? val.toFixed(1) : Math.floor(val)) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  })(start);
}
const counters = document.querySelectorAll('[data-count]');
if (counters.length) {
  const co = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { animateCount(e.target); co.unobserve(e.target); }
    });
  }, { threshold: 0.5 });
  counters.forEach(el => co.observe(el));
}

/* ─── Pricing toggle ─── */
const toggle = document.querySelector('.toggle-pill');
const prices = document.querySelectorAll('[data-monthly][data-yearly]');
if (toggle) {
  let yearly = false;
  toggle.addEventListener('click', () => {
    yearly = !yearly;
    toggle.classList.toggle('on', yearly);
    prices.forEach(el => {
      el.textContent = yearly ? el.dataset.yearly : el.dataset.monthly;
    });
  });
}

/* ─── Card tilt ─── */
document.querySelectorAll('.feature-card, .stat-card, .pricing-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `perspective(600px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-8px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.transition = 'transform 0.6s var(--ease)';
    setTimeout(() => card.style.transition = '', 600);
  });
});