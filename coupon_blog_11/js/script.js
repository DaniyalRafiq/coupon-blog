$(document).ready(function () {
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

  $(".search_btn_main").click(function () {
    $(".header_from_result_main").slideToggle();
    $(".nav_wrapper_main").slideUp();
    $(".menu_btn i").removeClass("ti-x").addClass("ti-menu");
    $(".search_btn_main  i").toggleClass("ti-x");
  });

  $(".menu_btn").click(function () {
    $(".nav_wrapper_main").slideToggle();
    $(".header_from_result_main").slideUp();
    $(".menu_btn i").toggleClass("ti-x");
    $(".search_btn_main i").removeClass("ti-x").addClass("ti-search");
  });

  var swiper = new Swiper(".hero_card_slide", {
    loop: true,
    speed: 800,
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });
  
  var $searchInput = $("#searchInput");
  var $headerFormResult = $(".header_form_result");
  
  // Slide up the result when the page loads
  $headerFormResult.slideUp();
  
  // Attach an input event listener
  $searchInput.on("input", function () {
    // Check if the input value is empty
    if ($(this).val().trim() === "") {
      // If empty, slide up the result
      $headerFormResult.slideUp();
    } else {
      // If not empty, slide down the result
      $headerFormResult.slideDown();
    }
  });
  var swiper = new Swiper(".latest_blog_slide", {
    speed: 800,
    slidesPerView: 1,
    spaceBetween: 20,
    loop : true ,
    autoplay: {
      delay: 5000, // Set the autoplay delay in milliseconds (e.g., 5000 for 5 seconds)
      disableOnInteraction: false, // Set to false if you want the autoplay to continue even when the user interacts with the slider
  },
    breakpoints: {

    700: {
      slidesPerView: 2,
      spaceBetween: 20,
  },
  }
  });
});
