$(document).ready(function () {
  // Toggle header search on click
  $(".search_icon").click(function () {
    $(".header_search").toggleClass("active");
    $(".search_icon .ti").toggleClass("ti-pointer-search ti-x");
  });

  // Toggle menu and body class on menu click
  $(".menu").click(function () {
    $(".nav_links, .navbar_links, .header_logo").toggleClass("active");
    $(".menu .ti").toggleClass("ti-pointer-search ti-x");
    $("body").toggleClass("active");
  });

  // Add and remove 'active' class for alphabet items and filters
  $(".alphabet-item, .filters_btn").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  //  ==========SearchInputEnd========== //

  const searchInput = document.getElementById("searchInput");
  const searchText = document.getElementById("searchText");

  // Update the content of the span with the input value
  searchInput.addEventListener("input", function () {
    searchText.textContent = searchInput.value;
  });

  // Show search results on input field click
  $("#searchInput").click(function () {
    $(".search_blogs").show();
    $(".header_search").addClass("active");
  });

  // Hide search results on document click (outside search bar)
  $(document).click(function (event) {
    if (!$(event.target).closest(".header_search").length) {
      $(".search_blogs").hide();
      $(".header_search").removeClass("active");
    }
  });

  // Perform live search on keyup
  $("#searchInput").keyup(function () {
    searchBlogs();
  });

  function searchBlogs() {
    var searchQuery = $("#searchInput").val().toLowerCase().trim();
    var foundResults = false;

    if (searchQuery === "") {
      $(".search_blogs .post_sidebar .sidebar_card").show();
      return;
    }

    $(".search_blogs .post_sidebar .sidebar_card").each(function () {
      var currentCard = $(this);
      var title = $(this).find(".sidebar_card_content h4").text().toLowerCase();

      if (title.includes(searchQuery)) {
        currentCard.show();
        foundResults = true;
      } else {
        currentCard.hide();
      }
    });

    if (foundResults) {
      $("#noResults").hide();
    } else {
      $("#noResults").show();
    }
  }

  //  ==========SearchInputEnd========== //

  // Set the initial trigger position
  function setTriggerPosition() {
    var activeLi = $(".nav_links li.active");
    var liWidth = activeLi.width();
    $(".trigger").width(liWidth);

    var prevElement = activeLi.prev();
    if (prevElement.length > 0) {
      var prevWidth = prevElement.width();
      var prevLeft = prevElement.position().left;
      $(".trigger").css({ width: liWidth, left: prevLeft + prevWidth + 30 });
    } else {
      $(".trigger").css({ width: liWidth, left: 0 });
    }
  }

  setTriggerPosition(); // Set the trigger position on page load

  // Bind hover events for navigation links
  $(".nav_links li").hover(
    function () {
      var liWidth = $(this).width();
      var prevElement = $(this).prev();

      if (prevElement.length > 0) {
        var prevWidth = prevElement.width();
        var prevLeft = prevElement.position().left;
        $(".trigger").css({ width: liWidth, left: prevLeft + prevWidth + 30 });
      } else {
        $(".trigger").css({ width: liWidth, left: 0 });
      }
    },
    function () {
      setTriggerPosition(); // Reset trigger position on mouseleave
    }
  );

  // Trigger mouseenter event on the active list item after the page loads
  $(".nav_links li.active").trigger("mouseenter");


    

  var swiper = new Swiper(".hero_sub_card_main", {
    slidesPerView: "auto",
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 5000, // Delay between slides in milliseconds
      disableOnInteraction: false, // Autoplay will not be disabled after user interactions
    },
  });

  // Initialize Swiper instances
  var swiper = new Swiper(".cate_home_content", {
    slidesPerView: "auto",
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next.swiper_btn_next",
      prevEl: ".swiper-button-prev.swiper_btn_prev",
    },
  });


  var swiper = new Swiper(".latest_top_child_main", {
    slidesPerView: "auto",
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".latest_news_wrapper", {
    slidesPerView: "auto",
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next.latest_news_btn_next",
      prevEl: ".swiper-button-prev.latest_news_btn_prev",
    },
  });

});