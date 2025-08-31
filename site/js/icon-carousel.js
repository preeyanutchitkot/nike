// Simple JS for icon-carousel: scrolls to next/prev item on arrow click
(function() {
  const track = document.querySelector('.icon-carousel__track');
  const prevBtn = document.querySelector('.icon-carousel__arrow--prev');
  const nextBtn = document.querySelector('.icon-carousel__arrow--next');
  const items = document.querySelectorAll('.icon-carousel__item');
  let current = 0;
  const visibleCount = 3; // Number of visible items (adjust if needed)

  function scrollToIndex(idx) {
    if (!track || !items.length) return;
    const item = items[idx];
    if (item) {
      item.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }

  prevBtn && prevBtn.addEventListener('click', function() {
    current = Math.max(0, current - 1);
    scrollToIndex(current);
  });
  nextBtn && nextBtn.addEventListener('click', function() {
    current = Math.min(items.length - visibleCount, current + 1);
    scrollToIndex(current);
  });

  // Optional: click on icon to center it
  items.forEach((item, idx) => {
    item.addEventListener('click', function() {
      current = idx;
      scrollToIndex(current);
    });
  });
})();
