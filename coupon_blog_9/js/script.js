

$(document).ready(function () {

    var $backToTopBtn = $("#backToTopBtn");

    // Initially hide the button using flex
    $backToTopBtn.css("display", "flex");
  
    // Add a scroll event listener
    $(window).scroll(function () {
      // If the user scrolls down more than 300 pixels, show the button
      if ($(this).scrollTop() > 300) {
        $backToTopBtn.css("display", "flex");
      } else {
        $backToTopBtn.css("display", "none");
      }
    });
  
    // Add a click event listener to scroll back to the top
    var $input = $('.header_form input');
    var $headerResult = $('.header_serach_result');

    // Initially hide .header_serach_result
    $headerResult.hide();

    // Attach a keyup event handler to the input field
    $input.keyup(function () {
        // Check if the input field is empty
        if ($input.val().trim() === '') {
            $headerResult.slideUp(); // If empty, slide up .header_serach_result
        } else {
            $headerResult.slideDown(); // If not empty, slide down .header_serach_result
        }
    });

    // Attach a blur event handler to the input field
    $input.blur(function () {
        $headerResult.slideUp(); // Slide up .header_serach_result when input loses focus
    });
  


    const alphabet = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
  
    const mainAlpha = $(".alphabet");
    for (let index = 0; index < alphabet.length; index++) {
      $(mainAlpha).append(
        `<a href="#" class="alphabet-item">${alphabet[index]}</a>`
      );
    }
    $(".alphabet-item").first().addClass("active");
  
    $(".alphabet-item").click(function () {
      $(this).addClass("active");
      $(this).siblings().removeClass("active");
    });


    $(".sidebar_main_topics ul li").click(function () {
      $(this).addClass("active");
      $(this).siblings().removeClass("active");
    });

    $(".filter_btn").click(function () {
      $(this).addClass("active");
      $(this).siblings().removeClass("active");
    });
  

    var swiper = new Swiper(".latest_card_main_wrapper", {
      slidesPerView: 1,
      effect: "fade",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        dynamicBullets: true,
      },
    });

   
var swiper_thumb = new Swiper(".hero_thumbnail_slider", {
  spaceBetween: 10,
  slidesPerView: "auto",
  freeMode: true,
  watchSlidesProgress: true,
  autoplay: {
    delay: 5000, // Adjust the delay (in milliseconds) as needed
  },
  speed: 800,
});

var swiper2 = new Swiper(".hero_swiper_main", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
  thumbs: {
    swiper: swiper_thumb,
  },
  autoplay: {
    delay: 5000, // Adjust the delay (in milliseconds) as needed
  },
  speed: 800,
});

  var swiper = new Swiper(".featur_slider_main", {
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    speed: 800,
  });

});
