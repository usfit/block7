let text = document.querySelector('.block__text');
let pText = text.querySelectorAll('p');
let spanText = text.querySelector('span');
let readMore = document.querySelector('.read-more');

if (window.matchMedia('(max-width: 767.9px)').matches) {
    pText[1].classList.add('hidden');
}

if (window.matchMedia('(max-width: 1119.9px)').matches) {
    spanText.classList.add('hidden');
}

if (window.matchMedia('(min-width: 1120px)').matches) {
    readMore.querySelector('p').textContent = 'Скрыть';
    readMore.querySelector('img').src = 'img/icons/read_hide.svg';
}

readMore.addEventListener('click', function(evt) {
    evt.preventDefault;
    if (window.matchMedia('(min-width: 768px) and (max-width: 1119.9px)').matches) {
        spanText.classList.toggle('hidden');
    } else {
        pText[1].classList.toggle('hidden');
        spanText.classList.toggle('hidden');
    }
    if (!spanText.classList.contains('hidden')) {
        readMore.querySelector('p').textContent = 'Скрыть';
        readMore.querySelector('img').src = 'img/icons/read_hide.svg';
    } else {
        readMore.querySelector('p').textContent = 'Читать далее';
        readMore.querySelector('img').src = 'img/icons/read_more.svg';
    }
});