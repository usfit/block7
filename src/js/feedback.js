let feedbackOpen = document.querySelector('.chat__icon--open');
let feedbackOpenBurger = document.querySelector('.burger-chat__icon--open');
let feedbackClose = document.querySelector('.feedback__icon--close');
let feedbackCallClose = document.querySelector('.feedback__call--close');
let feedbackCallOpen = document.querySelector('.call__icon--open');
let feedbackCallOpenBurger = document.querySelector('.burger-call__icon--open');

let feedback = document.querySelector('.feedback');
let feedbackCall = document.querySelector('.feedback--call');

let mask = document.querySelector('.mask');
let swiper = document.querySelectorAll('.swiper-wrapper');

let navigation = document.querySelector('.navigation');

let openClose = function(feedbackClass) {
    feedbackClass.classList.toggle('feedback--open');
};

let openCloseMask = function() {
    mask.classList.toggle('mask--close');
    for (let i = 0; i < swiper.length; i++) {
        swiper[i].classList.toggle('swiper-wrapper');
    }
};

mask.addEventListener('click', function() {
    if (feedback.classList.contains('feedback--open')) {
        openClose(feedback);
        if (window.matchMedia('(max-width: 1119.9px)').matches) {
            openCloseMask();
        }
    } else if (feedbackCall.classList.contains('feedback--open')) {
        openClose(feedbackCall);
        if (window.matchMedia('(max-width: 1119.9px)').matches) {
            openCloseMask();
        }
    }
});

feedbackCallOpen.addEventListener('click', function(evt) {
    evt.preventDefault();
    openCloseMask();
    openClose(feedbackCall);
});

feedbackCallOpenBurger.addEventListener('click', function(evt) {
    openClose(feedbackCall);
    navigation.classList.toggle('navigation--open');
    if (window.matchMedia('(min-width: 1120px)').matches) {
        openCloseMask();
    }
});

feedbackCallClose.addEventListener('click', function(evt) {
    evt.preventDefault();
    openClose(feedbackCall);
    openCloseMask();
});

feedbackOpen.addEventListener('click', function(evt) {
    evt.preventDefault();
    openClose(feedback);
    openCloseMask();
});

feedbackClose.addEventListener('click', function(evt) {
    evt.preventDefault();
    openClose(feedback);
    openCloseMask();
});

feedbackOpenBurger.addEventListener('click', function(evt) {
    openClose(feedback);
    navigation.classList.toggle('navigation--open');
    if (window.matchMedia('(min-width: 1120px)').matches) {
        openCloseMask();
    }
});

