document.addEventListener('DOMContentLoaded', function () {
  const track = document.getElementById('iconCarouselTrack');
  if (!track) return;

  // ใช้เฉพาะ element จริง (ไม่รวม clone)
  const items = Array.from(track.children);
  const itemCount = items.length;
  if (itemCount < 2) return;

  // Clone ด้านหน้าและหลัง
  items.forEach(item => {
    track.appendChild(item.cloneNode(true));
  });
  items.forEach(item => {
    track.insertBefore(item.cloneNode(true), track.firstChild);
  });

  // รอ render ให้ offsetWidth ถูกต้อง
  setTimeout(() => {
    // หา gap จริงจาก computed style
    const style = window.getComputedStyle(track);
    let gap = 0;
    if (style.gap) gap = parseInt(style.gap);
    // ใช้ offsetWidth จริงของ card (responsive)
    const realItem = track.children[itemCount];
    const itemWidth = realItem.offsetWidth + gap;
    const scrollStart = itemWidth * itemCount;
    track.scrollLeft = scrollStart;

    let isJumping = false;
    track.addEventListener('scroll', function () {
      if (isJumping) return;
      // ถ้าเลื่อนไปซ้ายสุดจริง (clone)
      if (track.scrollLeft < itemWidth) {
        isJumping = true;
        track.scrollLeft = scrollStart + (track.scrollLeft - itemWidth);
        setTimeout(() => { isJumping = false; }, 20);
      }
      // ถ้าเลื่อนไปขวาสุดจริง (clone)
      else if (track.scrollLeft > (track.scrollWidth - track.clientWidth - itemWidth)) {
        isJumping = true;
        track.scrollLeft = scrollStart - (track.scrollWidth - track.clientWidth - track.scrollLeft - itemWidth);
        setTimeout(() => { isJumping = false; }, 20);
      }
    });
  }, 100);
});
