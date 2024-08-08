import Swiper from 'swiper/bundle';
// import '../../node_modules/swiper/swiper-bundle.min.css';

const isMobile = window.innerWidth < 1440;

const scale = isMobile ? 0.7954 : 0.7665;
const stretch = isMobile ? -20 : -45;

const swiper = new Swiper('.gallery-swiper-container', {
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  navigation: {
    nextEl: '.gallery-button-next',
    prevEl: '.gallery-button-prev',
  },

  effect: 'coverflow',
  coverflowEffect: {
    rotate: 0,
    stretch: stretch,
    depth: 0,
    modifier: 1,
    scale: scale,
    slideShadows: false,
  },
});
