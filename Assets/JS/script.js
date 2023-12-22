// $(document).ready(function () {
//     // When the menu button is clicked
//     $("#btn-menu").click(function () {
//         // Toggle the visibility of the navigation
//         $(".hd-nav").slideToggle();
//     });
// });

$(document).ready(function(){
    var subimg=$('.subimg').height();
    $('.subimg').height(subimg);
})

$('#blog-slider-slick').slick({
    slidesToShow: 3,        // Number of slides to show at a time
    slidesToScroll: 2,      // Number of slides to scroll
    autoplay: false,         // Enable autoplay
    autoplaySpeed: 1000,    // Autoplay interval in milliseconds
    arrows: true,           // Display navigation arrows
    dots: true,
  
  
    responsive: [
      {
        breakpoint: 800,
        settings: { 
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,      // Number of slides to scroll
  
        }
      }
    ]
  });