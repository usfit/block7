let readMoreBrands = document.querySelector('.container-brands__button');
let elementsAllBrands = document.querySelector('.container-brands__list');

let readMoreTypes = document.querySelector('.container-types__button');
let elementsAllTypes = document.querySelector('.container-types__list');

readMoreBrands.addEventListener('click', function(evt) {
    evt.preventDefault;
    elementsAllBrands.classList.toggle('container-brands__hidden');
    if (elementsAllBrands.classList.contains('container-brands__hidden')) {
        readMoreBrands.querySelector('p').textContent = 'Скрыть';
        readMoreBrands.querySelector('img').src = 'img/icons/read_hide.svg';
    } else {
        readMoreBrands.querySelector('p').textContent = 'Показать все';
        readMoreBrands.querySelector('img').src = 'img/icons/read_more.svg'
    }
});

readMoreTypes.addEventListener('click', function(evt) {
    evt.preventDefault;
    elementsAllTypes.classList.toggle('container-types__hidden');
    if (elementsAllTypes.classList.contains('container-types__hidden')) {
        readMoreTypes.querySelector('p').textContent = 'Скрыть';
        readMoreTypes.querySelector('img').src = 'img/icons/read_hide.svg';
    } else {
        readMoreTypes.querySelector('p').textContent = 'Показать все';
        readMoreTypes.querySelector('img').src = 'img/icons/read_more.svg';
    }
});