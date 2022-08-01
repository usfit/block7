let burgerOpen = document.querySelector('.burger__icon--open');
let burgerClose = document.querySelector('.burger__icon--close');
let navigation = document.querySelector('.navigation');
let mask = document.querySelector('.mask');
let swiper = document.querySelectorAll('.swiper-wrapper');
// let container = document.querySelector('.container');

let openCloseMask = function() {
    mask.classList.toggle('mask--close');
    for (let i = 0; i < swiper.length; i++) {
        swiper[i].classList.toggle('swiper-wrapper');
    };
};

burgerOpen.addEventListener('click', function(evt) {
    evt.preventDefault;
    openCloseMask();
    navigation.classList.toggle('navigation--open');
});

burgerClose.addEventListener('click', function(evt) {
    evt.preventDefault;
    openCloseMask();
    navigation.classList.toggle('navigation--open');
});

mask.addEventListener('click', function() {
    if (navigation.classList.contains('navigation--open')) {
        navigation.classList.toggle('navigation--open');
        openCloseMask();
    }
});

