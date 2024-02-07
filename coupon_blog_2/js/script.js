$(document).ready(function () {

    $('.menu_toggler, .menu-close').click(function () {
       $(".header_bottom").toggleClass("active");
       $("body").toggleClass("active");
    });
    var swiper = new Swiper('.slider_blogs',{
       slidesPerView: "auto",
       spaceBetween: 10,
       centeredSlides: false,
       loop: true,
       speed: 800,
       autoplay: false
    });

    $(".coupon-details").click(function (e) {
       e.preventDefault();
       $(this).parents(".card-store").siblings(".details-hide").slideToggle()
       $(this).children('.fa-solid').toggleClass('active')
    });
 
 
    $('.star').click(function () {
       $(this).prevAll().addBack().css('color', '#ffcc00');
       $(this).nextAll().css('color', '#ccc');
    });

    $(".star").click(function (){
        $(this).removeClass("orange-star") ;
    })
    $(".switchers-items").click(function(){
        $(this).addClass("active").siblings().removeClass('active') ;
    })
 
 
   //  $(window).scroll(function(event) {
   //      let $headerHeight = $('.header').height();
   //      if ($(document).scrollTop() > $headerHeight) {
   //         $('.header').addClass("fixed");
   //      } else if ($(document).scrollTop() < 0.1) {
   //         $('.header').removeClass("fixed")
   //      }
   //   });
    
    const mainAlpha = $('.main-alphabet');
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    for (let index = 0; index < alphabet.length; index++) {
       $(mainAlpha).append(`<a href="#" class="alphabet-item">${alphabet[index]}</a>`);
       $('.alphabet-item').first().addClass("active");
    }
    $('.alphabet-item').click(function () {
       $(this).addClass('active').siblings().removeClass('active')
    });
 
 
 })