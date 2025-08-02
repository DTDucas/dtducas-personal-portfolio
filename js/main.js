AOS.init({
  duration: 800,
  easing: "slide",
});
(function ($) {
  "use strict";
  $(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: "scroll",
  });
  var fullHeight = function () {
    $(".js-fullheight").css("height", $(window).height());
    $(window).resize(function () {
      $(".js-fullheight").css("height", $(window).height());
    });
  };
  fullHeight();
  var loader = function () {
    setTimeout(function () {
      if ($("#ftco-loader").length > 0) {
        $("#ftco-loader").removeClass("show");
      }
    }, 1);
  };
  loader();
  $.Scrollax();
  var burgerMenu = function () {
    $("body").on("click", ".js-fh5co-nav-toggle", function (event) {
      event.preventDefault();
      if ($("#ftco-nav").is(":visible")) {
        $(this).removeClass("active");
      } else {
        $(this).addClass("active");
      }
    });
  };
  burgerMenu();
  var onePageClick = function () {
    $(document).on("click", '#ftco-nav a[href^="#"]', function (event) {
      event.preventDefault();
      var href = $.attr(this, "href");
      $("html, body").animate(
        {
          scrollTop: $($.attr(this, "href")).offset().top - 70,
        },
        800,
        "easeInOutCubic",
        function () {
        }
      );
    });
  };
  onePageClick();
  var carousel = function () {
    $(".home-slider").owlCarousel({
      loop: true,
      autoplay: true,
      margin: 0,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      nav: false,
      autoplayHoverPause: true,
      items: 1,
      autoplayTimeout: 5000,
      navText: [
        "<span class='ion-md-arrow-back'></span>",
        "<span class='ion-chevron-right'></span>",
      ],
      responsive: {
        0: { items: 1 },
        600: { items: 1 },
        1000: { items: 1 },
      },
    });
  };
  carousel();
  $("nav .dropdown").hover(
    function () {
      var $this = $(this);
      $this.addClass("show");
      $this.find("> a").attr("aria-expanded", true);
      $this.find(".dropdown-menu").addClass("show");
    },
    function () {
      var $this = $(this);
      $this.removeClass("show");
      $this.find("> a").attr("aria-expanded", false);
      $this.find(".dropdown-menu").removeClass("show");
    }
  );
  var scrollWindow = function () {
    $(window).scroll(function () {
      var $w = $(this),
        st = $w.scrollTop(),
        navbar = $(".ftco_navbar"),
        sd = $(".js-scroll-wrap");
      if (st > 150) {
        if (!navbar.hasClass("scrolled")) {
          navbar.addClass("scrolled");
        }
      }
      if (st < 150) {
        if (navbar.hasClass("scrolled")) {
          navbar.removeClass("scrolled sleep");
        }
      }
      if (st > 350) {
        if (!navbar.hasClass("awake")) {
          navbar.addClass("awake");
        }
        if (sd.length > 0) {
          sd.addClass("sleep");
        }
      }
      if (st < 350) {
        if (navbar.hasClass("awake")) {
          navbar.removeClass("awake");
          navbar.addClass("sleep");
        }
        if (sd.length > 0) {
          sd.removeClass("sleep");
        }
      }
    });
  };
  scrollWindow();
  var counter = function () {
    $("#section-counter, .hero-wrap, .ftco-counter, .ftco-about").waypoint(
      function (direction) {
        if (
          direction === "down" &&
          !$(this.element).hasClass("ftco-animated")
        ) {
          var comma_separator_number_step =
            $.animateNumber.numberStepFactories.separator(",");
          $(".number").each(function () {
            var $this = $(this),
              num = $this.data("number");
            $this.animateNumber(
              {
                number: num,
                numberStep: comma_separator_number_step,
              },
              2000
            );
          });
        }
      },
      { offset: "95%" }
    );
  };
  counter();
  var contentWayPoint = function () {
    var i = 0;
    $(".ftco-animate").waypoint(
      function (direction) {
        if (
          direction === "down" &&
          !$(this.element).hasClass("ftco-animated")
        ) {
          i++;
          $(this.element).addClass("item-animate");
          setTimeout(function () {
            $("body .ftco-animate.item-animate").each(function (k) {
              var el = $(this);
              setTimeout(
                function () {
                  var effect = el.data("animate-effect");
                  if (effect === "fadeIn") {
                    el.addClass("fadeIn ftco-animated");
                  } else if (effect === "fadeInLeft") {
                    el.addClass("fadeInLeft ftco-animated");
                  } else if (effect === "fadeInRight") {
                    el.addClass("fadeInRight ftco-animated");
                  } else {
                    el.addClass("fadeInUp ftco-animated");
                  }
                  el.removeClass("item-animate");
                },
                k * 50,
                "easeInOutExpo"
              );
            });
          }, 100);
        }
      },
      { offset: "95%" }
    );
  };
  contentWayPoint();
  $(".image-popup").magnificPopup({
    type: "image",
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: "mfp-no-margins mfp-with-zoom mfp-wood-theme",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1],
    },
    image: {
      verticalFit: true,
    },
    zoom: {
      enabled: true,
      duration: 300,
    },
  });
  $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade mfp-wood-theme",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });
  var goHere = function () {
    $(".mouse-icon").on("click", function (event) {
      event.preventDefault();
      $("html,body").animate(
        {
          scrollTop: $(".goto-here").offset().top,
        },
        800,
        "easeInOutCubic"
      );
      return false;
    });
  };
  goHere();
  var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };
  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";
    var that = this;
    var delta = 150;
    if (this.isDeleting) {
      delta /= 2;
    }
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
    setTimeout(function () {
      that.tick();
    }, delta);
  };
  window.onload = function () {
    var elements = document.getElementsByClassName("txt-rotate");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-rotate");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML =
      ".txt-rotate > .wrap { border-right: 0.08em solid #1E88E5; }";
    document.body.appendChild(css);
  };
})(jQuery);
(function ($) {
  var sections = [];
  var id = false;
  var $navbara = $("#navi a");
  $navbara.click(function (e) {
    e.preventDefault();
    $navbara.removeClass("current");
    $(this).addClass("current");
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - 180,
      },
      800,
      "easeInOutCubic"
    );
    hash($(this).attr("href"));
  });
  $navbara.each(function () {
    sections.push($($(this).attr("href")));
  });
  $(window).scroll(function (e) {
    var scrollTop = $(this).scrollTop() + $(window).height() / 2;
    for (var i in sections) {
      var section = sections[i];
      if (scrollTop > section.offset().top) {
        var scrolled_id = section.attr("id");
      }
    }
    if (scrolled_id !== id) {
      id = scrolled_id;
      $($navbara).removeClass("current");
      $('#navi a[href="#' + id + '"]').addClass("current");
    }
  });
})(jQuery);
hash = function (h) {
  if (history.pushState) {
    history.pushState(null, null, h);
  } else {
    location.hash = h;
  }
};
$(function () {
  $(".progress").each(function () {
    var value = $(this).attr("data-value");
    var left = $(this).find(".progress-left .progress-bar");
    var right = $(this).find(".progress-right .progress-bar");
    if (value > 0) {
      if (value <= 50) {
        right.css("transform", "rotate(" + percentageToDegrees(value) + "deg)");
      } else {
        right.css("transform", "rotate(180deg)");
        left.css(
          "transform",
          "rotate(" + percentageToDegrees(value - 50) + "deg)"
        );
      }
    }
  });
  function percentageToDegrees(percentage) {
    return (percentage / 100) * 360;
  }
});
$(document).ready(function () {
  $(".services-1").hover(
    function () {
      $(this).find(".icon").addClass("animated pulse");
    },
    function () {
      $(this).find(".icon").removeClass("animated pulse");
    }
  );
  $(".skill-item").each(function () {
    var $this = $(this);
    $this.hover(
      function () {
        $(this).find("img").addClass("skill-hover");
      },
      function () {
        $(this).find("img").removeClass("skill-hover");
      }
    );
  });
  $(".contact-form input, .contact-form textarea")
    .focus(function () {
      $(this).parent().addClass("focused");
    })
    .blur(function () {
      if (!$(this).val()) {
        $(this).parent().removeClass("focused");
      }
    });
  $(window).scroll(function () {
    var scrollDistance = $(window).scrollTop();
    $("section[id]").each(function (i) {
      if ($(this).position().top <= scrollDistance + 100) {
        $(".navbar-nav a.active").removeClass("active");
        $(".navbar-nav a").eq(i).addClass("active");
      }
    });
  });
  $(window).on("load", function () {
    setTimeout(function () {
      $("#ftco-loader").fadeOut("slow");
    }, 1000);
  });
  function initScrollReveal() {
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "60px",
      duration: 1000,
      delay: 200,
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
    });
    sr.reveal(".scroll-reveal", { interval: 200 });
    sr.reveal(".services-1", { interval: 300 });
    sr.reveal(".resume-wrap", { interval: 250 });
  }
  if (typeof ScrollReveal !== "undefined") {
    initScrollReveal();
  }
  $(".contact-form").on("submit", function (e) {
    var isValid = true;
    var $form = $(this);
    $form.find("input[required], textarea[required]").each(function () {
      if (!$(this).val()) {
        isValid = false;
        $(this).addClass("error");
      } else {
        $(this).removeClass("error");
      }
    });
    if (!isValid) {
      e.preventDefault();
      if (!$form.find(".error-message").length) {
        $form.prepend(
          '<div class="error-message alert alert-warning">Please fill in all required fields.</div>'
        );
      }
    } else {
      $form.find(".error-message").remove();
    }
  });
  function enhancedTyping() {
    const typingElements = document.querySelectorAll(".txt-rotate");
    typingElements.forEach((element) => {
      element.style.borderRight = "2px solid #1E88E5";
    });
  }
  enhancedTyping();
  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top - 80,
            },
            1000,
            "easeInOutCubic"
          );
        }
      }
    });
});
