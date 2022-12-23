var first = new Swiper('.swiper-one', {
    // navigator: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    touchRatio: 2,
    grabCursor: true,
    slidesPerView: 1,
    watchOverflow: true,
    spaceBetween: 1000,
    autoplay: {
        delay: 1000,
        stopOnLastSlide: true,
        disableOnInteraction: false,
    },
    speed: 4000,
    freeMode: true, // можно скроллить как ленту без фиксации на блоке 
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

    // effect: 'coverflow',
    // coverflowEffect: {
    //     rotate: 20,
    //     stretch: 50,
    //     slideShadow: true,

    // },
    // breakpoints: {
    //     320: {
    //         slidesPerView: 1,
    //     },
    // },

});

var two = new Swiper('.swiper-two', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    slidesPerView: 4,
    watchOverflow: true,
    grabCursor: true,
    spaceBetween: 30,
    // autoplay: {
    //     delay: 1000,
    //     stopOnLastSlide: true,
    //     disableOnInteraction: false,
    // },
    // loop: true,
    speed: 2000,
    nested: true,
});


//change items class active

const listLanguages = document.querySelector('.swith-languages');
console.log('listLanguages');

listLanguages.onclick = function (e) {
    for (let i = 0; i < listLanguages.children.lenght; i++) {
        listLanguages.children[1].classList.remove('swith-languages--active');
    };
    e.target.classList.add('swith-languages--active');
};

