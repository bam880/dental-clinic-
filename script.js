/* ══════════════════════════════
   FAQ — открыть / закрыть
══════════════════════════════ */
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');

  // Закрыть все открытые
  document.querySelectorAll('.faq-item.open').forEach(el => {
    el.classList.remove('open');
  });

  // Открыть нажатый (если он был закрыт)
  if (!isOpen) {
    item.classList.add('open');
  }
}

/* ══════════════════════════════
   SCROLL REVEAL — появление блоков
══════════════════════════════ */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
