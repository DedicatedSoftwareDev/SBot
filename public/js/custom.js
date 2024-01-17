$(function () {
  "use strict";
  var e = $(window);
  $.scrollIt({
    upKey: 38,
    downKey: 40,
    easing: "swing",
    scrollTime: 600,
    activeClass: "active",
    onPageChange: null,
    topOffset: -70
  }), e.on("scroll", function () {
    var a = e.scrollTop(),
      t = $(".navbar"),
      r = $(".mobileMenu"),
      n = $(".navbar .logo> img");
    a > 100 ? (t.addClass("nav-scroll"), n.attr("src", "img/logo.png")) : (t.removeClass("nav-scroll"), n.attr("src", "img/logo.png"))
    a > 100 ? r.addClass("mobileMenuShow ") : (r.removeClass("mobileMenuShow "))
  }), $(".navbar-nav .dropdown-item a").on("click", function () {
    $(".navbar-collapse").removeClass("show")
  });
  var a = $(".bg-img, section");
  a.each(function (e) {
    $(this).attr("data-background") && $(this).css("background-image", "url(" + $(this).data("background") + ")")
  })
  var t = function () {
    $(".animate-box").waypoint(function (e) {
      "down" !== e || $(this.element).hasClass("animated") || (0, $(this.element).addClass("item-animate"), setTimeout(function () {
        $("body .animate-box.item-animate").each(function (e) {
          var a = $(this);
          setTimeout(function () {
            var e = a.data("animate-effect");
            "fadeIn" === e ? a.addClass("fadeIn animated") : "fadeInLeft" === e ? a.addClass("fadeInLeft animated") : "fadeInRight" === e ? a.addClass("fadeInRight animated") : a.addClass("fadeInUp animated"), a.removeClass("item-animate")
          }, 200 * e, "easeInOutExpo")
        })
      }, 100))
    }, {
      offset: "85%"
    })
  };
  $(function () {
    t()
  }), $(".img-zoom").magnificPopup({
    type: "image",
    closeOnContentClick: !0,
    mainClass: "mfp-fade",
    gallery: {
      enabled: !0,
      navigateByImgClick: !0,
      preload: [0, 1]
    }
  }), $(".magnific-youtube, .magnific-vimeo, .magnific-custom").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 300,
    preloader: !1,
    fixedContentPos: !1
  });
  var s = 150,
    l = 550;
  jQuery(window).on("scroll", function () {
    jQuery(this).scrollTop() > s ? jQuery(".progress-wrap").addClass("active-progress") : jQuery(".progress-wrap").removeClass("active-progress")
  }), jQuery(".progress-wrap").on("click", function (e) {
    return e.preventDefault(), jQuery("html, body").animate({
      scrollTop: 0
    }, l), !1
  })
}), $(".accordion-box").length && $(".accordion-box").on("click", ".acc-btn", function () {
  var e = $(this).parents(".accordion-box"),
    a = $(this).parents(".accordion");
  $(this).next(".acc-content").is(":visible") ? ($(this).removeClass("active"), $(this).next(".acc-content").slideUp(300), $(e).children(".accordion").removeClass("active-block")) : ($(e).find(".accordion .acc-btn").removeClass("active"), $(this).addClass("active"), $(e).children(".accordion").removeClass("active-block"), $(e).find(".accordion").children(".acc-content").slideUp(300), a.addClass("active-block"), $(this).next(".acc-content").slideDown(300))
}), paceOptions = {
  ajax: !0,
  document: !0,
  eventLag: !1
}, Pace.on("done", function () {
  $("#preloader").delay(500).fadeOut(800)
}), jQuery;