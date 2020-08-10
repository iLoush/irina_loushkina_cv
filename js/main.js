// 'use strict';
window.addEventListener('DOMContentLoaded', () => {
   // navigation
   const navSlide = () => {
      const burger = document.querySelector('.burger');
      const nav = document.querySelector('.nav-links');
      const navLinks = document.querySelectorAll('.nav-links li');
      // toggle nav
      burger.addEventListener('click', () => {
         nav.classList.toggle('nav-active');
         // animate slide
         navLinks.forEach((link, index) => {
            if (link.style.animation) {
               link.style.animation = '';
            } else {
               link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;
            }
         });

         // burger animation
         burger.classList.toggle('toggle');
      });

   }

   navSlide();

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