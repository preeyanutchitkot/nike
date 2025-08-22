// เพิ่มเงาให้ header เมื่อมีการสกรอลล์
const header = () => document.getElementById('siteHeader');
function toggleHeaderShadow(){
  const el = header();
  if (!el) return;
  if (window.scrollY > 4) el.classList.add('is-scrolled');
  else el.classList.remove('is-scrolled');
}
window.addEventListener('scroll', toggleHeaderShadow, { passive:true });
document.addEventListener('DOMContentLoaded', toggleHeaderShadow);
