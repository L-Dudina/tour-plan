const hotelSwiper = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  speed: 600,

  keyboard: {
    enabled: true,
  }
});

const reviewsSwiper = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
  speed: 600,

  keyboard: {
    enabled: true,
  }
});

// ymaps.ready(init);

// function init() {
//     var map = new ymaps.Map("map", {
//             center: [7.890689916012718,98.29477115090043],
//             zoom: 16,
//             controls: ['zoomControl'],
//             behaviors: ['drag']
//     });

//     var Placemark = new ymaps.Placemark([7.890689916012718,98.29477115090043], {

//     },
//     {
//       iconLayout: 'default#image',
//       iconImageHref: 'img/icon-hotel.png',
//       iconImageSize: [40, 40]
//     });

//     map.geoObjects.add(Placemark);
//   }
// $(document).ready(function(){
// 		$('.parallax-window').parallax({imageSrc: '../img/newsletter-bg.jpg'});
// });