let burgerOpen = document.querySelector('.burger__icon--open');
let burgerClose = document.querySelector('.burger__icon--close');
let navigation = document.querySelector('.navigation');
let container = document.querySelector('.container');


burgerOpen.addEventListener('click', function(evt) {
    evt.preventDefault;
    container.classList.toggle('container--close');
    navigation.classList.toggle('navigation--open');
});

burgerClose.addEventListener('click', function(evt) {
    evt.preventDefault;
    container.classList.toggle('container--close');
    navigation.classList.toggle('navigation--open');
});

