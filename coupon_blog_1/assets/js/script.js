$(document).ready(function () {
  $('.navbar-toggler-icon , .menu-close').click(function () {
    $(".menu").toggleClass("active");
  });


  // $('.see-more-store').click(function () {
  //   $(this).parent('.code-btn').siblings(".hide-tags").slideToggle();
  // });



  var swiper = new Swiper(".hero-slider", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 4,
  });

  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    slidesPerView: 1,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });






  // letter //


  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });




});







// letter //




