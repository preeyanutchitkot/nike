document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.custom-carousel__track');
  const prev = document.querySelector('.custom-carousel__arrow--prev');
  const next = document.querySelector('.custom-carousel__arrow--next');
  if (!track || !prev || !next) return;
  const scrollAmount = track.querySelector('.custom-carousel__item')?.offsetWidth + 32 || 440;

  prev.addEventListener('click', () => {
    track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });
  next.addEventListener('click', () => {
    track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
});
