$(document).ready(function () {
  $(".menu").click(function () {
    $(".nav_links").toggleClass("active");
    $("body").toggleClass("active");
    $(this).find(".fa-bars").toggleClass("fa-x");
  });


  var swiper = new Swiper(".footer_slider", {
    loop: true,
    slidesPerView: 1,
    speed: 500,
    direction: "vertical",
    autoplay: {
      delay: 3000, // Set the delay in milliseconds
      disableOnInteraction: false, // Allow manual navigation to stop autoplay
    },
  });

  $(".deals_item").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  const searchInput = $(".search_input");
  const headerSearchResult = $(".header_search_result");
  const headerForm = $(".form");

  searchInput.on("input", function () {
    if (searchInput.val().trim() !== "") {
      headerSearchResult.addClass("Active");
      headerForm.addClass("Active");
    } else {
      headerSearchResult.removeClass("Active");
      headerForm.removeClass("Active");
    }
  });
  // Simulate loading content
  setTimeout(function () {
    // Hide the loader
    document.getElementById("loader").style.display = "none";

    // Show the content
    document.getElementById("content").style.display = "block";
  }, 2000); // Simulate a 2-second loading time

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
    const selectedAlphabet = $(this).text().trim().toUpperCase();
    $(".store_card_wrraper").hide();

    if (selectedAlphabet === "ALL STORE") {
      $(".store_card_wrraper").show();
    } else {
      $(`.store-${selectedAlphabet}`).show();
    }

    $(this).addClass("active").siblings().removeClass("active");
  });

  var swiper_thumb = new Swiper(".hero_swiper_thumb", {
    spaceBetween: 10,
    slidesPerView: "auto",
    freeMode: true,
    watchSlidesProgress: true,
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
  });
});
