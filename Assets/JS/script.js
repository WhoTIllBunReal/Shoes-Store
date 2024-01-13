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

  $(document).ready(function() {
    $('#shop-filter').click(function() {
      $('.side-menu-mobile').toggle();
    });
  });


  // $(document).ready(function() {
  //   $('.slider-for').slick({
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     arrows: false,
  //     fade: true,
  //     asNavFor: '.slider-nav'
  //   });
  //   $('.slider-nav').slick({
  //     slidesToShow: 3,
  //     slidesToScroll: 1,
  //     asNavFor: '.slider-for',
  //     dots: false,
  //     centerMode: true,
  //     focusOnSelect: true,
  //     prevArrow: '<button type="button" class="slick-prev">Previous</button>', // Add previous arrow
  //     nextArrow: '<button type="button" class="slick-next">Next</button>' // Add next arrow
  //   });
  // });


  $(document).ready(function() {
    // Initialize the main slider
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });

    // Initialize the navigation slider
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>',
        centerPadding: '0', // Adjust this value as needed
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '0' // Adjust this value for smaller screens
                }
            }
        ]
    });

    // Add "active" class to the selected slide in the main slider
    $('.slider-for').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        // Remove "active" class from all slides
        $('.slider-for .slick-slide').removeClass('active');
        // Add "active" class to the next slide
        $('.slider-for .slick-slide').eq(nextSlide).addClass('active');
    });
});

  $(document).ready(function(){

    var quantitiy=0;
       $('.quantity-right-plus').click(function(e){
            
            // Stop acting like a button
            e.preventDefault();
            // Get the field name
            var quantity = parseInt($('#quantity').val());
            
            // If is not undefined
                
                $('#quantity').val(quantity + 1);
    
              
                // Increment
            
        });
    
         $('.quantity-left-minus').click(function(e){
            // Stop acting like a button
            e.preventDefault();
            // Get the field name
            var quantity = parseInt($('#quantity').val());
            
            // If is not undefined
          
                // Increment
                if(quantity>0){
                $('#quantity').val(quantity - 1);
                }
        });
        
    });

    $('#related-pd').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
    $('#related-blg').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });