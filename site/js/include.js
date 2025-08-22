// โหลด partials ตาม attribute data-include
async function includePartials() {
  const nodes = document.querySelectorAll('[data-include]');
  await Promise.all([...nodes].map(async (el) => {
    const url = el.getAttribute('data-include');
    const html = await fetch(url).then(r => r.text());
    el.outerHTML = html;
  }));
}
document.addEventListener('DOMContentLoaded', includePartials);
