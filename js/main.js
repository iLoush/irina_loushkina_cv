// 'use strict';

window.addEventListener('DOMContentLoaded', () => {

   // tabs
   function setupTabs() {

      document.querySelectorAll('.tab__button').forEach(button => {
         button.addEventListener('click', () => {
            const sideBar = button.parentElement;
            const tabContainer = sideBar.parentElement;
            const tabNumer = button.dataset.forTab;
            const tabToActivate = tabContainer.querySelector(`.tab__content[data-tab="${tabNumer}"]`);

            sideBar.querySelectorAll('.tab__button').forEach(button => {
               button.classList.remove('tab__button--active');
            });

            tabContainer.querySelectorAll('.tab__content').forEach(tab => {
               tab.classList.remove('tab__content--active');
            });

            button.classList.add('tab__button--active');
            tabToActivate.classList.add('tab__content--active');
         });
      });

   }

   setupTabs();

   // slider
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


});