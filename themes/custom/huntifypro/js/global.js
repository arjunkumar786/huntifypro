/**
 * @file
 * Global utilities.
 *
 */
(function (Drupal) {

  'use strict';

  Drupal.behaviors.huntifyprotheme = {
    attach: function (context, settings) {
      // Sticky Navbar
      $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
          $('#header').addClass('sticky-top shadow-sm');
        } else {
          $('#header').removeClass('sticky-top shadow-sm');
        }
      });
    }
  };

})(Drupal);
