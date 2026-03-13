// ─── SLIDER → CSS переменная ──────────────────────────────────────────────
const slider  = document.getElementById('brightness');
const root    = document.documentElement;
const pctEl   = document.getElementById('bright-pct');

function applyLight(val) {
  const t = val / 100;
  root.style.setProperty('--light', t);
  slider.style.setProperty('--pct', val + '%');
  if (pctEl) pctEl.textContent = val + '%';
  updateChandelierBulbs(t);
}

slider.addEventListener('input', () => applyLight(+slider.value));
applyLight(0); // стартуем в темноте


// ─── СВЕЧЕНИЕ ЛАМПОЧЕК ЛЮСТРЫ ─────────────────────────────────────────────
function updateChandelierBulbs(t) {
  const r = Math.round(201 + 54 * t);
  const g = Math.round(168 + 72 * t);
  const b = Math.round(76  + 44 * t);
  const col = `rgb(${r},${g},${b})`;

  document.querySelectorAll('.bulb-core').forEach(el => {
    el.style.fill    = col;
    el.style.opacity = 0.45 + 0.55 * t;
  });
  document.querySelectorAll('.bulb-outer').forEach(el => {
    el.style.fill    = col;
    el.style.opacity = 0.06 + 0.28 * t;
  });

  const f1 = document.querySelector('#bulbGlow feFlood');
  if (f1) { f1.setAttribute('flood-color', col); f1.setAttribute('flood-opacity', 0.6 + 0.4 * t); }

  const f2 = document.querySelector('#bulbGlow2 feFlood');
  if (f2) { f2.setAttribute('flood-color', col); f2.setAttribute('flood-opacity', 0.18 + 0.6 * t); }
}


// ─── МЕРЦАНИЕ КРИСТАЛЛОВ ──────────────────────────────────────────────────
(function crystalFlicker() {
  const t = +slider.value / 100;
  document.querySelectorAll('.crystal').forEach((el, i) => {
    const flicker = 0.82 + 0.18 * Math.sin(Date.now() * 0.0018 + i * 1.3);
    el.style.opacity = t * flicker * 0.75;
  });
  requestAnimationFrame(crystalFlicker);
})();


// ─── ЧАСТИЦЫ-ИСКРЫ ────────────────────────────────────────────────────────
const particlesEl = document.querySelector('.particles');

function createSpark() {
  const t = +slider.value / 100;
  if (t < 0.08) return;
  const spark = document.createElement('div');
  spark.className = 'spark';
  const cx = window.innerWidth / 2;
  spark.style.left   = (cx + (Math.random() - 0.5) * 200) + 'px';
  spark.style.top    = (200 + Math.random() * 80) + 'px';
  const dur = 4 + Math.random() * 6;
  spark.style.animationDuration = dur + 's';
  spark.style.animationDelay   = (Math.random() * 2) + 's';
  const sz = (1 + Math.random() * 2.5) + 'px';
  spark.style.width  = sz;
  spark.style.height = sz;
  particlesEl.appendChild(spark);
  setTimeout(() => spark.remove(), (dur + 2.5) * 1000);
}

setInterval(() => {
  const count = Math.floor((+slider.value / 100) * 4);
  for (let i = 0; i < count; i++) createSpark();
}, 550);


// ─── МАЯТНИКОВОЕ КАЧАНИЕ ЛЮСТРЫ ───────────────────────────────────────────
let swayAngle = 0, swayVel = 0.045;

(function sway() {
  swayVel += -0.0007 * swayAngle;
  swayVel *= 0.9985;
  swayAngle += swayVel;
  const body = document.querySelector('.chandelier-body');
  if (body) body.setAttribute('transform', `rotate(${swayAngle}, 160, 0)`);
  requestAnimationFrame(sway);
})();


// ─── ПОЯВЛЕНИЕ КАРТОЧКИ — только через ползунок ───────────────────────────
// Opacity управляется CSS-переменной --light, анимация не нужна
