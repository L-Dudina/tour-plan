$(document).ready(function(){new Swiper(".hotel-slider",{loop:!0,navigation:{nextEl:".hotel-slider__button--next",prevEl:".hotel-slider__button--prev"},speed:600,keyboard:{enabled:!0}});$(document).keydown(function(e){27===e.keyCode&&a()});new Swiper(".reviews-slider",{loop:!0,navigation:{nextEl:".reviews-slider__button--next",prevEl:".reviews-slider__button--prev"},speed:600,keyboard:{enabled:!0}});$(".newsletter").parallax({imageSrc:"./img/newsletter-bg.jpg"}),$(".menu-button").on("click",function(){$(".navbar-button").toggleClass("navbar-button--visible")});var e=$("[data-toggle=modal]"),o=$(".modal__close");function a(e){e&&e.preventDefault();var o=$(".modal__overlay"),e=$(".modal__dialog");o.removeClass("modal__overlay--visible"),e.removeClass("modal__dialog--visible")}e.on("click",function(){var e=$(".modal__overlay"),o=$(".modal__dialog");e.addClass("modal__overlay--visible"),o.addClass("modal__dialog--visible")}),o.on("click",a),$(".form").each(function(){$(this).validate({errorClass:"invalid",messages:{name:{required:"Please specify your name",minlength:"The name must be at least 2 letters"},email:{required:"We need your email address to contact you",email:"Your email address format of name@domain.com"},phone:{required:"Please enter your phone number",minlength:"Your phone number must be 11 digits long"}}})}),$(document).ready(function(){$(".phone").mask("+7 (999) 999-99-99")}),AOS.init()});
// function modalClose ( e ) {
//   if ( !e.keyCode |s| e.keyCode === 27 ) {
//     closeModal();
//   }
// }
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
