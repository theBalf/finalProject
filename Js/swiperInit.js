// swiperInit.js
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs";

export function initSwiper() {
  const swipers = document.querySelectorAll(".swiper");

  swipers.forEach((swiperEl) => {
    new Swiper(swiperEl, {  
      slidesPerView:"auto",
      spaceBetween: 20,
      navigation: {
        nextEl: swiperEl.querySelector(".swiper-button-next"),
        prevEl: swiperEl.querySelector(".swiper-button-prev"),
      },
      pagination: {
        el: swiperEl.querySelector(".swiper-pagination"),
        clickable: true,
      },
      breakpoints: {
        "@0.00": {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        "@1.50": {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      
      },
    });
  });
}


