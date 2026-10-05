// Submenú "Products" de las páginas de producto
(function () {
  const wrap = document.getElementById('navProducts');
  const btn  = document.getElementById('productsBtn');
  const menu = document.getElementById('productsMenu');
  if (!wrap || !btn || !menu) return;

  function setOpen(open) {
    if (open) {
      const navBottom = document.querySelector('nav').getBoundingClientRect().bottom;
      document.documentElement.style.setProperty('--nav-bottom', (navBottom + 8) + 'px');
    }
    wrap.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  btn.addEventListener('click', e => { e.stopPropagation(); setOpen(!wrap.classList.contains('open')); });
  menu.addEventListener('click', e => e.stopPropagation());
  document.addEventListener('click', () => setOpen(false));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && wrap.classList.contains('open')) { setOpen(false); btn.focus(); }
  });
})();
