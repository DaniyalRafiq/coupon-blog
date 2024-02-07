$(document).ready(function () {
    $(".search-icon").click(function (e) {
        $(this).children('.fa').toggleClass('fa-times').toggleClass('fa-search');
        $('.header-form').toggleClass("active");
        $('.header-form').children('input').focus()
        $('.search-icon').toggleClass("active");
    });

    $('.menu, .menu-close').click(function () {
        $(".menu, .menu-close").toggleClass("active");
        $('.mobile_menu').toggleClass("active");
       
        $('body').toggleClass("active");

        $('.menu').click(function() {
            $('body').addClass('glass-effect');
          });
          
          $('.mobile-menu-close-button').click(function() {
            $('body').removeClass('glass-effect');
          });
     })

    //  swiper //
    
  var swiper = new Swiper(".hero_slider", {
    centeredSlides: true,
    loop: true,
    slidesPerView: 1,
    speed:500,
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      } , 
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
      breakpoints: {
        // When window width is >= 768px

        // When window width is >= 992px
        992: {
          slidesPerView: 1,
        }
      }
  });
  const mainAlpha = $('.alphabet');
  const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  for (let index = 0; index < alphabet.length; index++) {
     $(mainAlpha).append(`<a href="#" class="alphabet-item">${alphabet[index]}</a>`);
     $('.alphabet-item').first().addClass("active");
  }
  $('.alphabet-item').click(function () {
     $(this).addClass('active').siblings().removeClass('active')
  });
  $('.deals_item').click(function () {
    $(this).addClass('active').siblings().removeClass('active')
 });

 //Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
})