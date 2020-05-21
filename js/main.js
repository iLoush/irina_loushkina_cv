$(document).ready(function () {
   $('.slider__inner').slick({
      arrows: false,
      dots: true,
      adaptiveHeight: true,
      speed: 800,
      // autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
   });

   $('.header__burger').click(function (event) {
      $('.header__burger, .header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   });

});