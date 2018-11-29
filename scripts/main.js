$(document).ready(function() {
  var $menu = false
  var $header = $('header');
  var $sticky = $header.before($header.clone().addClass("sticky"));

  $('.opening-menu').hide();

  //Sticky
  $(window).on("scroll", function() {
    var scrollFromTop = $(window).scrollTop();
    $("body").toggleClass("scroll", (scrollFromTop > 350));
  });

  // Slick JS
  // Values: Breakpoint 1920 x 1080?
  $('.slider-grid').slick(({
    infinite: true,
    autoplay: true,
    arrows: true,
    dots: true
  }));

  $('.opening').click(function() {
    if ($menu) {
      $('.opening-menu').slideToggle("fast", function() {

      });
      $('.opening').css({
        'bottom': '0',
        'width': '125px'
      })
      $menu = false;
    } else {
      $('.opening-menu').slideToggle("fast", function() {

      });
      $('.opening').css({
        'bottom': '370px',
        'width': '300px',
        'z-index': '1'
      })
      $menu = true;
    }
  });


  particlesJS.load('particles-js', '/particles.json', function() {
  console.log('callback - particles.js config loaded');
});
});
