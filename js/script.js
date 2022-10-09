var swiper = new Swiper(".slide-content", {
    slidesPerView: 6,
    spaceBetween: 0,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
        1300: {
            slidesPerView: 4,
        },
        1600: {
            slidesPerView: 5,
        },
        1920: {
            slidesPerView: 6, 
        },
    },
  });