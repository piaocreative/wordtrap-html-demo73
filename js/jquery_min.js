$(document).ready(function () {
    /* jquery plugins codes start */
    /*owl-carousel plugins*/
    $(".bg_slider .owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        mouseDrag: true,
        //    autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
    });
    $(".home_small_slider .slider").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        mouseDrag: true,
        //    autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
    });

  $("#History .owl-carousel").owlCarousel({
      items: 1,
      loop: true,
      dots: false,
      nav: true,
  });
    /* jquery plugins codes start */

    $(".open_and_close .bars i").click(function () {
        $(".Moblie_nav,.open_and_close .times").addClass("d-block");
    });
    /*
    $(".open_and_close .times i").click(function () {
        $(".Moblie_nav,.open_and_close .times").removeClass("d-block");
    });
    */
});