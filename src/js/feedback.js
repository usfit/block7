let feedbackOpen = document.querySelector('.chat__icon--open');
let feedbackOpenBurger = document.querySelector('.burger-chat__icon--open');
let feedbackClose = document.querySelector('.feedback__icon--close');
let feedbackCallClose = document.querySelector('.feedback__call--close');

let feedbackCallOpen = document.querySelector('.call__icon--open');
let feedbackCallOpenBurger = document.querySelector('.burger-call__icon--open');

let feedback = document.querySelector('.feedback');
let feedbackCall = document.querySelector('.feedback--call');

let container = document.querySelector('.container');
let navigation = document.querySelector('.navigation');

let openClose = function(feedbackClass) {
    container.classList.toggle('container--close');
    feedbackClass.classList.toggle('feedback--open');
    navigation.classList.toggle('container--close');
};

feedbackCallOpen.addEventListener('click', function(evt) {
    evt.preventDefault;
    openClose(feedbackCall);
});

feedbackCallOpenBurger.addEventListener('click', function(evt) {
    if (window.matchMedia('(max-width: 1119.9px)').matches) {
        evt.preventDefault;
        feedbackCall.classList.toggle('feedback--open');
        navigation.classList.toggle('navigation--open');
    } else {
        openClose(feedbackCall);
    }
});

feedbackCallClose.addEventListener('click', function(evt) {
    evt.preventDefault;
    openClose(feedbackCall);
});

feedbackOpen.addEventListener('click', function(evt) {
    evt.preventDefault;
    openClose(feedback);
});

feedbackClose.addEventListener('click', function(evt) {
    evt.preventDefault;
    openClose(feedback);
});

feedbackOpenBurger.addEventListener('click', function(evt) {
    if (window.matchMedia('(max-width: 1119.9px)').matches) {
        evt.preventDefault;
        feedback.classList.toggle('feedback--open');
        navigation.classList.toggle('navigation--open');
    } else {
        openClose(feedback);
    }
});