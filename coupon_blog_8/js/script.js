$(document).ready(function () {
  var swiper = new Swiper(".blog_main", {
    slidesPerView: "auto",
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });
  function triggerAnimation() {
    $(".animate-on-scroll").each(function (index) {
      var card = $(this);
      var position = card.offset().top;
      var screenPosition = $(window).scrollTop() + $(window).height();

      if (position < screenPosition) {
        card.addClass("animate-visible");
      }
    });
  }

  // Trigger the animation on page load (refresh)
  triggerAnimation();

  // Re-trigger the animation when scrolling
  $(window).scroll(function () {
    triggerAnimation();
  });

  $(".menu_btn").click(function (e) {
    $(".nav_links").toggleClass("active");
    $("body").toggleClass("active");
    $(".search_btn_main").toggleClass("z-index");
    $(this).find(".ti").toggleClass("ti-x");
  });

  $(".search_btn").click(function (e) {
    $(".header_form").toggleClass("active");
    $(".menu_btn_main").toggleClass("z-index");
    $("body").toggleClass("active");
    $(this).find(".ti").toggleClass("ti-x");
    $(this).toggleClass("active");
  });
  const $searchInput = $("#searchInput");
  const $searchResultContainer = $(".header_serach_result");
  const $cards = $(".header_posts > .side_blog_card");

  // Listen for input changes
  $searchInput.on("input", function () {
    // Get the user's search query
    const query = $(this).val().trim(); // Remove leading/trailing spaces

    // Show or hide all cards based on input presence
    if (query !== "") {
      $cards.css("display", "flex");
      $searchResultContainer.css("max-width", "100%");
      $searchResultContainer.css("display", "flex");
    } else {
      $cards.css("display", "none");
      $searchResultContainer.css("display", "none");
    }
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
      ` <a href="#" class="alphabet-item">${alphabet[index]}</a>`
    );
  }
  $(".alphabet-item").first().addClass("active");

  $(".alphabet-item").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
  });


  $(".slide_down_btn").click(function(){
    // Find the .slide_down_icon within the parent of the clicked button
    const icon = $(this).find(".slide_down_icon");
    icon.toggleClass('rotate');
    
    // Find the .store_card element within siblings and toggle the 'animate' class
    $(this).parent().siblings().find('.store_card').toggleClass('animate');
});






  const slideBtn = $(".slide_down_btn");

  slideBtn.click(function () {
      // Find the parent .store_card_wrapper of the clicked button
      const parentWrapper = $(this).closest(".store_card_wrapper");

      // Find the .store_card_wrape element within the parent
      const storeCardWrap = parentWrapper.find(".store_card_wrape");

      // Toggle the visibility of store_card_wrape with sliding animation
      storeCardWrap.slideToggle();

      // Find the .store_heading element within the parent and toggle the class
      parentWrapper.find(".store_heading").toggleClass("border-radious");
  });
  $('.filter_code ').click(function () {
    $(this).addClass('active').siblings().removeClass('active')
  });


  $('.search_icon').click(function () {
    var $searchIcon = $(this);
    var $searchElement = $searchIcon.find('.ti-search');
    
    // Toggle class for ".search_icon" itself
    $searchIcon.toggleClass('active');
    
    // Toggle class for ".ti-search" element inside the clicked ".search_icon"
    $searchElement.toggleClass('ti-x');
    $('.header_form').slideToggle()
  });
  

  var swiper = new Swiper(".hero_wrapper", {
    slidesPerView: 1,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });
});
