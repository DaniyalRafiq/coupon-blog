$(document).ready(function () {
  $(".alphabet-item").first().addClass("active");

  $(".alphabet-item").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  if ($(".scroll-to-target").length) {
    $(".scroll-to-target").on("click", function () {
      var target = $(this).attr("data-target");
      // animate
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        1000
      );
    });
  }
  $(".menu").click(function () {
    $(".nav_main").toggleClass("active");
    $("body").toggleClass("active");
  });
  var inputField = $(".header_form input");

  // Add an event listener for input change
  inputField.on("input", function () {
    // Check if the input field is empty
    if (inputField.val().trim() !== "") {
      // Slide down the header_form_result
      $(".header_form_result").slideDown();
    } else {
      // Slide up the header_form_result
      $(".header_form_result").slideUp();
    }
  });
  $(".filter_btn").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  var swiper = new Swiper('.category_main ', {
    slidesPerView: 'auto',
    spaceBetween: 20, 
    navigation: {
        nextEl: '.swiper-button-next.category_btn_next',
        prevEl: '.swiper-button-prev.category_btn_prev',
    },
    autoplay: {
      delay: 5000, // Adjust the delay (in milliseconds) between slides
      disableOnInteraction: false, // Autoplay will not be disabled after user interactions (swipes)
  },
  speed: 900,
  
});

var swiper = new Swiper('.latest_blog_main', {
  slidesPerView: 'auto',
  spaceBetween: 20, 
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 7000, // Adjust the delay (in milliseconds) between slides
    disableOnInteraction: false, // Autoplay will not be disabled after user interactions (swipes)
},
speed: 900,

});
var swiper = new Swiper('.latest_news_wrapper', {
  slidesPerView: 'auto',
  spaceBetween: 20, 
  navigation: {
      nextEl: '.swiper-button-next.latest_mews_next',
      prevEl: '.swiper-button-prev.latest_mews_prev',
  },
  autoplay: {
    delay: 7000, // Adjust the delay (in milliseconds) between slides
    disableOnInteraction: false, // Autoplay will not be disabled after user interactions (swipes)
},
pagination: {
  el: '.swiper-pagination',
  clickable: true,
},
speed: 900,
});

});
