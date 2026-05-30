// ---- Config: update these once with your real handles ----
const CONFIG = {
  whatsapp: "810000000000",      // your WhatsApp number, intl format, no "+" (e.g. 8190xxxxxxx)
  instagram: "tokyonaturewalks", // your Instagram handle, no "@"
  email: "yutaro.shimizu@uni.minerva.edu"
};

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Instagram link
const igLink = document.getElementById('igLink');
if (igLink) igLink.href = `https://instagram.com/${CONFIG.instagram}`;

// WhatsApp link
const waBtn = document.getElementById('waBtn');
if (waBtn) waBtn.href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent("Hi Yutaro, I'd like to book the Tokyo Nature Walk.")}`;

// Sticky nav state
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 60);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Mobile menu
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
toggle.addEventListener('click', () => {
  links.classList.toggle('open');
  nav.classList.toggle('menu-open');
});
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  links.classList.remove('open');
  nav.classList.remove('menu-open');
}));

// Scroll reveal
const revealEls = document.querySelectorAll('.experience__text, .experience__photo, .step, .guide__photo, .guide__text, .detail, .book__intro, .book__form, .faq__list, .gallery__intro');
revealEls.forEach(el => el.classList.add('reveal'));
const io = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));

// Lightbox
const items = Array.from(document.querySelectorAll('.gallery__item'));
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
const lbCap = document.getElementById('lbCap');
let current = 0;

function openLb(i) {
  current = (i + items.length) % items.length;
  const btn = items[current];
  lbImg.src = btn.dataset.full;
  lbImg.alt = btn.dataset.cap || '';
  lbCap.textContent = btn.dataset.cap || '';
  lb.classList.add('open');
  lb.setAttribute('aria-hidden', 'false');
}
function closeLb() { lb.classList.remove('open'); lb.setAttribute('aria-hidden', 'true'); }

items.forEach((btn, i) => btn.addEventListener('click', () => openLb(i)));
document.getElementById('lbClose').addEventListener('click', closeLb);
document.getElementById('lbNext').addEventListener('click', () => openLb(current + 1));
document.getElementById('lbPrev').addEventListener('click', () => openLb(current - 1));
lb.addEventListener('click', (e) => { if (e.target === lb) closeLb(); });
document.addEventListener('keydown', (e) => {
  if (!lb.classList.contains('open')) return;
  if (e.key === 'Escape') closeLb();
  if (e.key === 'ArrowRight') openLb(current + 1);
  if (e.key === 'ArrowLeft') openLb(current - 1);
});

// Availability: weekends + Japanese national holidays, from mid-June 2026
const FIRST_AVAILABLE = "2026-06-16";
const JP_HOLIDAYS = new Set([
  "2026-07-20", // Marine Day
  "2026-08-11", // Mountain Day
  "2026-09-21", // Respect for the Aged Day
  "2026-09-22", // Citizens' Holiday
  "2026-09-23", // Autumnal Equinox Day
  "2026-10-12", // Sports Day
  "2026-11-03", // Culture Day
  "2026-11-23", // Labor Thanksgiving Day
  "2027-01-01", // New Year's Day
  "2027-01-11", // Coming of Age Day
  "2027-02-11", // National Foundation Day
  "2027-02-23"  // Emperor's Birthday
]);

const dateInput = document.getElementById('date');
const dateHint = document.getElementById('dateHint');

function dateIsBookable(val) {
  if (!val) return { ok: false, reason: "Please choose a date." };
  if (val < FIRST_AVAILABLE) return { ok: false, reason: "First available dates are mid-June 2026." };
  const day = new Date(val + "T00:00:00").getDay(); // 0 Sun ... 6 Sat
  const isWeekend = day === 0 || day === 6;
  if (isWeekend || JP_HOLIDAYS.has(val)) return { ok: true };
  return { ok: false, reason: "Walks run on weekends & Japanese public holidays only — please pick a Saturday, Sunday, or public holiday." };
}

dateInput.addEventListener('change', () => {
  const res = dateIsBookable(dateInput.value);
  if (res.ok) {
    dateInput.setCustomValidity("");
    dateHint.textContent = "Great — that date works. I'll confirm by email.";
    dateHint.classList.remove('field__hint--error');
    dateHint.classList.add('field__hint--ok');
  } else {
    dateInput.setCustomValidity(res.reason);
    dateHint.textContent = res.reason;
    dateHint.classList.add('field__hint--error');
    dateHint.classList.remove('field__hint--ok');
  }
});

// Booking form -> pre-filled email (no backend needed)
const form = document.getElementById('bookForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const res = dateIsBookable(document.getElementById('date').value);
  if (!res.ok) {
    dateInput.setCustomValidity(res.reason);
    dateInput.reportValidity();
    dateHint.textContent = res.reason;
    dateHint.classList.add('field__hint--error');
    return;
  }
  const d = new FormData(form);
  const subject = `Walk request — ${d.get('name') || 'new guest'}`;
  const body =
`Hi Yutaro,

I'd like to request the Tokyo Nature Walk.

Name: ${d.get('name')}
Email: ${d.get('email')}
Preferred date: ${d.get('date') || '(flexible)'}
Guests: ${d.get('guests')}
Group type: ${d.get('type')}

Notes: ${d.get('message') || '-'}

Thank you!`;
  window.location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
