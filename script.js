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
    // autoplay: {
    //     delay: 1000,
    //     stopOnLastSlide: true,
    //     disableOnInteraction: false,
    // },
    speed: 2000,
    freeMode: true, // можно скроллить как ленту без фиксации на блоке 
    // loop: true, // бесконечное прокручивание
    // initialSlide: 1, //дефолт второй слайд ( по индексу первый )
    centeredSlides: true,
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

// const listLanguages = document.querySelector('.switch-language');
// console.log(listLanguages);

// listLanguages.onclick = function (e) {
//     for (let i = 0; i < listLanguages.children.lenght; i++) {
//         listLanguages.children[1].classList.remove('switch-language--active');
//     };
//     e.target.classList.add('switch-language--active');
// };



const list = document.querySelectorAll('.switch-language a')
list.forEach(item => {
    item.addEventListener('click', (e) => {
        list.forEach(el => { el.classList.remove('switch-language--active'); });
        item.classList.add('switch-language--active')
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



// style dropdown list (select, options)
// let listVisible = document.querySelector('.dropdown__list').classList.toggle('dropdown__list--visible');

// let dropButton = document.querySelectorAll('.dropdown__button').forEach(function (e) {
//     listVisible.forEach(function (e) {

//     })
// });

// all buttons for dropdown list
let allButton = document.querySelectorAll('.dropdown__container');

allButton.forEach(function (dropWrapper) {
    let dropButton = dropWrapper.querySelector('.dropdown__button');
    let dropList = dropWrapper.querySelector('.dropdown__list');
    let allDropItems = dropList.querySelectorAll('.dropdown__list--item');
    let inputDropdown = dropWrapper.querySelector('.dropdown__input--hidden');


    // click button : open/close dropdown list
    dropButton.addEventListener('click', function (e) {
        dropList.classList.toggle('dropdown__list--visible');
        this.classList.add('dropdown__button--active');
    });

    // list : choose item 
    allDropItems.forEach(function (listItem) {
        listItem.addEventListener('click', function (e) {
            e.stopPropagation(); // click not count by list items 
            dropButton.innerText = this.innerText;
            dropButton.focus();
            inputDropdown.value = this.dataset.value;
            dropList.classList.remove('dropdown__list--visible');
        });
    });

    // click outside the droplist
    document.addEventListener('click', function (e) {
        if (e.target !== dropButton) {
            dropButton.classList.remove('dropdown__button--active');
            dropList.classList.remove('dropdown__list--visible');
        };
    });


    // click tab or esc
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Tab' || e.key === 'Escape') {
            dropButton.classList.remove('dropdown__button--active');
            dropList.classList.remove('dropdown__list--visible');
        }
    });

});

// let dropButton = document.querySelector('.dropdown__button');
// let dropList = document.querySelector('.dropdown__list');
// let allDropItems = document.querySelectorAll('.dropdown__list--item');
// let inputDropdown = document.querySelector('.dropdown__input--hidden');


// // click button : open/close dropdown list
// dropButton.addEventListener('click', function (e) {
//     dropList.classList.toggle('dropdown__list--visible');
//     this.classList.add('dropdown__button--active');
// });

// // list : choose item
// allDropItems.forEach(function (listItem) {
//     listItem.addEventListener('click', function (e) {
//         e.stopPropagation(); // click not count by list items
//         dropButton.innerText = this.innerText;
//         dropButton.focus();
//         inputDropdown.value = this.dataset.value;
//         dropList.classList.remove('dropdown__list--visible');
//     });
// });

// // click outside the droplist
// document.addEventListener('click', function (e) {
//     if (e.target !== dropButton) {
//         dropButton.classList.remove('dropdown__button--active');
//         dropList.classList.remove('dropdown__list--visible');
//     };
// });


// // click tab or esc
// document.addEventListener('keydown', function (e) {
//     if (e.key === 'Tab' || e.key === 'Escape') {
//         dropButton.classList.remove('dropdown__button--active');
//         dropList.classList.remove('dropdown__list--visible');
//     }
// });

