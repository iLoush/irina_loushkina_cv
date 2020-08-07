// 'use strict';

window.addEventListener('DOMContentLoaded', () => {

   // show text in section about
   const text = document.querySelector('.about__text-invisible');
   const readMore = document.querySelector('.show');

   function showText() {
      if (text.style.display === 'none') {
         text.style.display = "block";
      } else {
         text.style.display = "none";
      }
   }

   readMore.addEventListener('click', showText);


   // slider
   $(function () {
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

});