let swiper;

if (window.matchMedia('(max-width: 767.9px)').matches) {
    swiper = new Swiper('.swiper-container', {
        spaceBetween: 16,
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}


// window.addEventListener('resize', function () {
//     if (window.matchMedia('(max-width: 767.9px)').matches) {
//         swiper = new Swiper('.swiper-container', {
//             spaceBetween: 16,
//             pagination: {
//                 el: '.swiper-pagination',
//                 clickable: true,
//             },
//         });
//         swiper.enable();
//     } else {
//         swiper.disable();
//         swiper.destroy();
//     }
// });