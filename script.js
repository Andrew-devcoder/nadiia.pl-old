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



//click add classs 

// const listLanguages = document.querySelector('.swith-languages');
// console.log(listLanguages);

// listLanguages.onclick = function (e) {
//     for (let i = 0; i < listLanguages.children.lenght; i++) {
//         listLanguages.children[1].classList.remove('swith-languages--active');
//     };
//     e.target.classList.add('swith-languages--active');
// };



const list = document.querySelectorAll('.swith-languages a')
list.forEach(item => {
    item.addEventListener('click', (e) => {
        list.forEach(el => { el.classList.remove('swith-languages--active'); });
        item.classList.add('swith-languages--active')
    })
})



// $(document).ready(function () {
//     $(".button__footer").click(function () {
//         $(".hidden").slideToggle();
//     });
// });

// let allCity = document.querySelector('.hidden');
// document.querySelector('.button__footer').addEventListener('click', (e) => {
//     allCity.display = getComputedStyle(allCity).display == 'block' ? 'none' : 'block';
// });


let buttonAllCity = document.querySelector('.button__footer');
let allCity = document.querySelector('div .hidden');

buttonAllCity.addEventListener('click', function (e) {
    e.preventDefault();
    allCity.classList.toggle('hidden');
    buttonAllCity.classList.toggle('button__footer--rotate');
});

