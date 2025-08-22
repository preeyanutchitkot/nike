// ไฮไลต์เมนูตามหน้า
// ใช้ data-page บน body และ data-page บน nav__link
// ให้เมนูที่ตรงกับหน้าปัจจุบันมี class is-active

document.addEventListener('DOMContentLoaded', () => {
  const current = document.body.dataset.page;
  const selector = `.nav__link[data-page="${current}"]`;
  document.querySelectorAll(selector).forEach(a => a.classList.add('is-active'));
});
