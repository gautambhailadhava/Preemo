// owl-carousel
$(".primary-carousel").owlCarousel({
  loop: true,
  margin: 10,
  items: 1,
  nav: false,
  dots: true,
});

// slick-slider
$(".secondary-carousel").owlCarousel({
  loop: true,
  center: true,
  margin: 10,
  responsiveClass: true,
  nav: false,
  dots: false,
  autoplay: true,
  responsive: {
    0: {
      items: 2,
      center: false,
    },
    768: {
      items: 5,
    },
    1024: {
      items: 8,
    },
  },
});

// $(document).ready(function(){
//     $(".hamburger-menu").click(function(){
//         $(".nav-block").toggle( );
//     })
// })

$(document).ready(function () {
  $(".hamburger-menu").click(function () {
    $(".nav-block").fadeToggle(200);
  });
});

// $(document).ready(function(){
//     $(".hamburger-menu").click(function(){
//         $("body").toggleClass(".open-menu" );
//     })
// })

// $(document).ready(function(){
//    var height = console.log($("header").height())
//     $("main-wrapper").css("top","height")
// })
function adj_header(){
    var hheight = ($("header").height());
    console.log(hheight)
     $(".main-wrapper").css("padding-top",hheight)
}
$(document).ready(function(){
    adj_header();
 })

 $(window).resize(function(){
    adj_header();
 })


//  footer

function adj_footer() {
  var fheight = $(".footer-part").height();
  console.log(fheight);
  $(".wrapper").css("padding-bottom", fheight);
  $(".footer-part").css("margin-top", -fheight);
}

$(document).ready(function () {
  adj_footer();
});

$(window).resize(function () {
  adj_footer();
});
