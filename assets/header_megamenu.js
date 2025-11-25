$(document).ready(function () {
    $(".cust-menu-div, .cust-menu-2-div, .cust-menu-3-div").hide();

    $(".cust-lime-list").on("click", function () {
      let index = $(this).index();
      let $container = $(".cust-lime-container");
      let target;

      if (index === 0) target = $(".cust-menu-div");
      else if (index === 1) target = $(".cust-menu-3-div");
      else if (index === 2) target = $(".cust-menu-2-div").eq(0);
      else if (index === 3) target = $(".cust-menu-2-div").eq(1);
      else if (index === 4) target = $(".cust-menu-2-div").eq(2);
      else return;

      if (target.is(":visible")) {
        target.stop(true, true).slideUp();
        $(this).removeClass("active");
        $container.removeClass("active");
        $(".menu-overlay").fadeOut(); // 🔴 Hide overlay
      } else {
        $(".cust-menu-div, .cust-menu-2-div, .cust-menu-3-div").stop(true, true).slideUp();
        $(".cust-lime-list").removeClass("active");

        $(this).addClass("active");
        $container.addClass("active");
        target.stop(true, true).slideDown();
        $(".menu-overlay").fadeIn(); // ✅ Show overlay
      }
    });

    // Hide menu and overlay when clicking the overlay itself
    $(".menu-overlay").on("click", function () {
      $(".cust-menu-div, .cust-menu-2-div, .cust-menu-3-div").slideUp();
      $(".cust-lime-list").removeClass("active");
      $(".cust-lime-container").removeClass("active");
      $(this).fadeOut(); // 🔴 Hide overlay
    });

    $(".cust-lime-menu-icon-div").removeClass("active");
    $(".mobile-div").hide();
    $(".cust-mobile-menu-div").hide();
    $(".mobile-li").removeClass("active");

    $(".cust-lime-menu-icon-div .fa-bars").on("click", function () {
      $(".cust-lime-menu-icon-div").addClass("active");
      $(".mobile-div").slideDown();
      $(".cust-menu-div").stop(true, true).slideDown();
      $(".cust-lime-list").eq(0).addClass("active");
      $(".cust-lime-container").addClass("active");
      $(".menu-overlay").fadeIn(); // ✅ Show overlay on mobile menu too
    });

    $(".cust-lime-menu-icon-div .fa-xmark").on("click", function () {
      $(".cust-lime-menu-icon-div").removeClass("active");
      $(".mobile-div").slideUp();
      $(".mobile-li").removeClass("active");
      $(".cust-mobile-menu-div").slideUp();
      $(".cust-menu-div").stop(true, true).slideUp();
      $(".cust-lime-list").removeClass("active");
      $(".cust-lime-container").removeClass("active");
      $(".menu-overlay").fadeOut(); // 🔴 Hide overlay
    });

    $(".mobile-list-span-flx, .mobile-list-span-flx-1").on("click", function () {
      let parentLi = $(this).closest(".mobile-li");

      if (parentLi.hasClass("active")) {
        parentLi.removeClass("active");
        parentLi.find(".cust-mobile-menu-div").slideUp();
      } else {
        $(".mobile-li").removeClass("active");
        $(".cust-mobile-menu-div").slideUp();

        parentLi.addClass("active");
        parentLi.find(".cust-mobile-menu-div").slideDown();
      }
    });

    $(".cust-right-col-question").on("click", function () {
      let $faq = $(this).closest(".cust-rigth-col-faq");
      let $answer = $faq.find(".cust-rigth-col-answer");

      if ($faq.hasClass("active")) {
        $faq.removeClass("active");
        $answer.slideUp(300);
      } else {
        $(".cust-rigth-col-faq").removeClass("active");
        $(".cust-rigth-col-answer").slideUp(300);

        $faq.addClass("active");
        $answer.slideDown(300, function () {
          $("html, body").animate({
            scrollTop: $faq.offset().top - 60
          }, 500);
        });
      }
    });

    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayTimeout: 5000,
      responsive: {
        0: { items: 1 },
        600: { items: 1 },
        1000: { items: 1 }
      }
    });

    $(".mobile-slider").slick({
      dots: false,
      infinite: false,
      speed: 300,
      responsive: [
        { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1, dots: false } },
        { breakpoint: 480, settings: { slidesToShow: 1.3, slidesToScroll: 1, dots: false } }
      ]
    });

    $(".mobile-slider-1").slick({
      dots: false,
      infinite: false,
      speed: 300,
      responsive: [
        { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1, dots: false } },
        { breakpoint: 480, settings: { slidesToShow: 1.3, slidesToScroll: 1, dots: false } }
      ]
    });

    $(".mobile-slider-3").slick({
      dots: false,
      infinite: false,
      speed: 600,
      cssEase: "ease-in-out",
      responsive: [
        { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1, dots: false } },
        { breakpoint: 480, settings: { slidesToShow: 1.3, slidesToScroll: 1, dots: false } }
      ]
    });
  });