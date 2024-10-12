function swiperConfig() {

    const swiperEl = document.querySelector('swiper-container');


    Object.assign(swiperEl, {
        slidesPerView: 3.5,
        spaceBetween: 60,
        centeredSlides: true,
        loop: true,
        speed: 800,
        mousewheel: true,
        grabCursor: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        breakpoints: {
            350: {
                centeredSlides: true,
                slidesPerView: 1.5,
                spaceBetween: 20,
            },
            450: {
                centeredSlides: false,
                slidesPerView: 2,
                spaceBetween: 20,
            },
            550: {
                centeredSlides: false,
                slidesPerView: 3,
                spaceBetween: 20,
            },
            650: {
                centeredSlides: true,
                slidesPerView: 3,
                spaceBetween: 20,
            },
            768: {
                centeredSlides: false,
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 3.5,
                spaceBetween: 50,
            },
        },
    });

    swiperEl.initialize();
}

export {swiperConfig}