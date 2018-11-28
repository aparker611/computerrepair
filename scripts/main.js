$(document).ready(function() {

  var $header = $('header');
  var $sticky = $header.before($header.clone().addClass("sticky"));

  //Sticky
  $(window).on("scroll", function() {
    var scrollFromTop = $(window).scrollTop();
    $("body").toggleClass("scroll", (scrollFromTop > 350));
  });


  // Slick JS
  // Values: Breakpoint 1920 x 1080?
  $('.slider-grid').slick( ({
    infinite: true,
    autoplay: true,
    arrows: true,
    dots: true
  }));

});
