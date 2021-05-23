var hotelSwiper = new Swiper('.hotel-slider', {
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

var reviewsSwiper = new Swiper('.reviews-slider', {
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

$('.newsletter').parallax({imageSrc: './img/newsletter-bg.jpg'});

var menuButton = document.querySelector(".menu-button"); 
menuButton.addEventListener("click", function () {
  document
  .querySelector(".navbar-button")
  .classList.toggle("navbar-button--visible");
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