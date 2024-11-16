const swiperH = new Swiper('.hero__swiper-container', {

  loop: true,
  speed: 2000,
  autoplay: {
    delay: 2000
  },
  effect: "fade",
  allowTouchMove: false,

  a11y: {
    paginationBulletMessage: 'Тут название слайда {{index}}',
  }

});


const swiperG = new Swiper('.gallery__swiper-container', {

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  navigation: {
    nextEl: '.gallery__swiper-button-next',
    prevEl: '.gallery__swiper-button-prev',

  },

  slidesPerView: 3,
  spaceBetween: 35,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 34,
    },
    1920: {
      slidesPerView: 3,
    }
  }

});


const swiperE = new Swiper('.events__swiper-container', {

  navigation: {
    nextEl: '.events__swiper-button-next',
    prevEl: '.events__swiper-button-prev',
  },

  slidesPerView: 3,
  spaceBetween: 50,
  breakpoints: {
    320: {
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        bulletActiveClass: 'swiper-pagination-bullet-active',
        dynamicBullets: true,
        dynamicMainBullets: 5,
      }
    },

    529: {
      slidesPerView: 2,
      spaceBetween: 38,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        bulletActiveClass: 'swiper-pagination-bullet-active',
        dynamicBullets: true,
        dynamicMainBullets: 3,
      }
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 38,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        bulletActiveClass: 'swiper-pagination-bullet-active',
        dynamicBullets: true,
        dynamicMainBullets: 3,
      }
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 27,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        bulletActiveClass: 'swiper-pagination-bullet-active',
        dynamicBullets: true,
        dynamicMainBullets: 2,
      }

    },
    1920: {
      slidesPerView: 3,

    }
  }


})


const swiperP = new Swiper(".projects__swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: '.projects__swiper-button-next',
    prevEl: '.projects__swiper-button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 30,
    },
    464: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },
    1920: {
      slidesPerView: 3,
      slidesPerGroup: 3,

    }

  }

});
