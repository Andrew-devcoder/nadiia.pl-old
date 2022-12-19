new Swiper('.swiper-container', {
    navigator: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    touchRatio: 2,
    grabCursor: true,
    slidesPerView: 1,
    watchOverflow: true,
    spaceBetween: 120,
    autoplay: {
        delay: 1000,
        stopOnLastSlide: true,
        disableOnInteraction: false,
    },
    speed: 3000,
    // freeMode: true, // можно скроллить как ленту без фиксации на блоке 
    loop: true, // бесконечное прокручивание
    // initialSlide: 1, //дефолт второй слайд ( по индексу первый )
    // centeredSlides: true,
    // slideToClickedSlide: true,

    // direction: 'vertical',

    // effect: 'fade',
    // fadeEffect: {
    //     crossFade: true,
    // },

    // effect: 'flip',
    // flipEffect: {
    //     slideShadows: true,
    //     limitRotation: true,
    // },


});