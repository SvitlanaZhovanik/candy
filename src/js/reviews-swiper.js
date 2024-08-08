import Swiper from 'swiper/bundle';
// import '../../node_modules/swiper/swiper-bundle.min.css';

const swiper = new Swiper('.reviews-swiper-container', {
  debugger: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 24,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
  loop: true,
});
