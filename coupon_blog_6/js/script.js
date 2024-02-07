

$(document).ready(function () {


  $(function () {
    $('.lazy').Lazy();
  });
  
  $('.search_icon').click(function () {
    $('.header_search , .header_Ssearch_main , .header_search_result').toggleClass('active');
    $('.search_icon .ti').toggleClass("ti-pointer-search ti-x");

    // Check if the header wrapper has the "active" class
    var headerWrapper = $('header .header_wrapper');
    var hasActiveClass = headerWrapper.hasClass("active");

    // Applying delay only when adding the "active" class
    if (!hasActiveClass) {
      setTimeout(function() {
        headerWrapper.addClass("active");
      }, 700);
    } else {
      // If the class is already present, just remove it without a delay
      headerWrapper.removeClass("active");
    }
  });
});


function updateSearchResults() {
  var searchText = $("#searchInput").val().toLowerCase().trim();
  var hasResults = false;

  if (searchText === "") {
     $(".header_search_result").css("display", "none");
     return;
  }

  $(".search_result_post").each(function() {
     var postTitle = $(this).find("h4.webkit").text().toLowerCase();
     if (postTitle.includes(searchText)) {
        $(this).addClass("visible");
        hasResults = true; // Set hasResults to true if there are matching posts
     } else {
        $(this).removeClass("visible");
     }
  });

  // Show/hide the header_search_result based on search results, but only if the search bar has some content
  $(".header_search_result").css("display", hasResults ? "flex" : "none");
}

// Trigger the search function on input event
$("#searchInput").on("input", updateSearchResults);


$('.menu').click(function () {
  $(".nav_links").toggleClass('Active');
  $('.menu .ti').toggleClass("ti-pointer-search , ti-x");
  $('body').toggleClass("active");
});




$('.search_menu_icon').click(function () {
  $(".search_bottom").toggleClass('Active');
  $(".menu_search").toggleClass('Active');

  $('.search_menu_icon .ti').toggleClass("ti-pointer-search , ti-x");

});


$(".filter_").click(function (e) {
  e.preventDefault()
  var myVariable = $(this).attr("data-type");

  $(`.single_card_[data-type="${myVariable}"]`).show().siblings(".single_card_").hide();
  if (myVariable == "all") {
    $(".single_card_").show();
  }
})
$('.filter_').click(function () {
  $(this).addClass('active').siblings().removeClass('active');
});







// Keyup event listener on search input
$('#searchInput').keyup(function () {
  if ($(this).val() != "") {
    $(".form").addClass('active')
    $(".search_result").slideDown();
  }
  else {
    $(".form").removeClass('active')
    $(".search_result").slideUp();
  }
});

var swiper = new Swiper(".p_cate_main", {
  loop: true,
  slidesPerView: "auto",
  speed: 500, 
  spaceBetween: 30,
  pagination: {
    clickable: true,
    el: ".Popular_Category .main_heading .swiper-pagination",
  }, 


});
$(".filter_blog").click(function (e) { 
  e.preventDefault();
  $(".filter_blog").toggleClass("active");
  var attr =   $(this).attr("data-type") ;

$(`.side_bar_post_main[data-type="${attr}"]`).addClass("active").siblings().removeClass("active");
});





var swiper = new Swiper(".latest_post_wrapper", {
  loop: true,
  slidesPerView: "auto",
  speed: 500, 
  spaceBetween: 30,
  
  pagination: {
    clickable: true,

    el: ".swiper-pagination",
  },

});


// $('.filters_btn').click(function () {
//   $(this).addClass('active').siblings().removeClass('active')
// });

$('.alphabet-item , .filters_btn ').click(function () {
  $(this).addClass('active').siblings().removeClass('active')
});
$('.contact_field input, .contact_field textarea').on('focus', function() {
  // Add the 'active' class to the label associated with the focused input
  $(this).siblings('label').addClass('active');
});

$('.contact_field input, .contact_field textarea').on('blur', function() {
  // Remove the 'active' class from the label if input/textarea is empty
  if (!$(this).val().trim()) {
    $(this).siblings('label').removeClass('active');
  }
});

// Initialize the active state on page load
$('.contact_field input, .contact_field textarea').each(function() {
  if ($(this).val().trim()) {
    $(this).siblings('label').addClass('active');
  }
});


$('#contact-form').submit(function(e) {
  e.preventDefault(); // Prevent the default form submission behavior
  
  // Initialize EmailJS with your user ID
  emailjs.init("ciiT7-l6Joqijcejz"); // Replace with your EmailJS user ID
  
  // Get form data
  var formData = {
    name: $('#contact-form input[name="name"]').val(),
    email: $('#contact-form input[name="email"]').val(),
    subject: $('#contact-form input[name="subject"]').val(),
    message: $('#contact-form textarea[name="message"]').val()
  };
  
  // Send email using EmailJS
  emailjs.send("service_exypb5a", "template_y0lm608", formData)
     .then(function(response) {
        console.log("Email sent:", response);
        // Handle success (e.g., show a success message)
        alert("Email sent successfully!");
        
        // Clear form inputs
        $('#contact-form')[0].reset();
     }, function(error) {
        console.error("Email error:", error);
        // Handle error (e.g., display an error message)
        alert("Error sending email.");
     });
});