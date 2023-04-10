/**
 * @file
 * Global utilities.
 *
 */
(function (Drupal) {

  'use strict';

  Drupal.behaviors.huntifypro = {
    attach: function (context, settings) {

      //Frontpage carousal
      $(document).ready(function () {
        $("#carousal").owlCarousel(
          {navigation : true, // Show next and prev buttons
          slideSpeed : 1000,
          paginationSpeed : 1000,
          items : 4,
          loop:true,
          itemsDesktop : false,
          itemsDesktopSmall : false,
          itemsTablet: false,
          itemsMobile : false,
          margin:10,
          autoplay:true,
          autoplayTimeout:2000,
          autoplayHoverPause:true,
          autoHeight: true,
          nav:true
          }
        );

        $("#toppick-carousal").owlCarousel(
          {navigation : true, // Show next and prev buttons
          slideSpeed : 1000,
          paginationSpeed : 1000,
          items : 4,
          loop:true,
          itemsDesktop : false,
          itemsDesktopSmall : false,
          itemsTablet: false,
          itemsMobile : false,
          margin:10,
          autoplay:true,
          autoplayTimeout:1500,
          autoplayHoverPause:true,
          autoHeight: true,
          nav:true
          }
        );

        $(".frontpage-carousal").owlCarousel(
          {navigation : true, // Show next and prev buttons
          slideSpeed : 1000,
          paginationSpeed : 1000,
          items : 4,
          loop:true,
          itemsDesktop : false,
          itemsDesktopSmall : false,
          itemsTablet: false,
          itemsMobile : false,
          margin:10,
          autoplay:true,
          autoplayTimeout:1500,
          autoplayHoverPause:true,
          autoHeight: true,
          nav:true
          }
        );
      });

      //Frontpage slider
      $("#slider").on("initialized.owl.carousel", () => {
        setTimeout(() => {
          $(".owl-item.active .owl-slide-animated").addClass("is-transitioned");
          $("section").show();
        }, 200);
      });

      const $owlCarousel = $("#slider").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: true,
        navText: [
          '<svg width="50" height="50" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>',
          '<svg width="50" height="50" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>' /* icons from https://iconmonstr.com */
        ]
      });

      $owlCarousel.on("changed.owl.carousel", e => {
        $(".owl-slide-animated").removeClass("is-transitioned");

        const $currentOwlItem = $(".owl-item").eq(e.item.index);
        $currentOwlItem.find(".owl-slide-animated").addClass("is-transitioned");

        const $target = $currentOwlItem.find(".owl-slide-text");
        doDotsCalculations($target);
      });

      $owlCarousel.on("resize.owl.carousel", () => {
        setTimeout(() => {
          setOwlDotsPosition();
        }, 50);
      });

      /*if there isn't content underneath the carousel*/
      //$owlCarousel.trigger("refresh.owl.carousel");

      setOwlDotsPosition();

      function setOwlDotsPosition() {
        const $target = $(".owl-item.active .owl-slide-text");
        doDotsCalculations($target);
      }

      function doDotsCalculations(el) {
        const height = el.height();
        const { top, left } = el.position();
        const res = height + top + 20;

        $("#slider .owl-dots").css({
          top: `${res}px`,
          left: `${left}px`
        });
      }
    }
  };

})(Drupal);