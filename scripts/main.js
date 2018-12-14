$(document).ready(function() {
  var $menu = false;
  var $header = $('header');
  var $sticky = $header.before($header.clone().addClass("sticky"));

  //Sticky menu
  $(window).on("scroll", function() {
    var scrollFromTop = $(window).scrollTop();
    $("body").toggleClass("scroll", (scrollFromTop > 350));
  });

  // Make sure scripts run on certain pages START
  console.log(window.location.pathname)
  if(window.location.pathname === "/index.html" || window.location.pathname === "/index.html#" || window.location.pathname === "/") {
    // SLICK JS
    $('.slider-grid').slick({
      infinite: true,
      autoplay: true,
      arrows:   true,
      dots:     true
    });
    $('.work-grid').slick({
      infinite:     true,
      autoplay:     true,
      arrows:       true,
      dots:         true,
      slidesToShow: 2
    });

    //Particles JS
    console.log('callback - particles js config loaded');
    particlesJS.load('particles-js', '/particles.json', function() {});
  }
  //END

  //workhours menu
  $('.opening-menu').hide();
  $('.opening').click(function(){
    if($menu) {
      $('.opening-menu').slideToggle("fast", function(){});
      $('.opening').css({
        'bottom': '0',
        'width:':  '125px'
      });
      $menu = false;
    } else {
      $('.opening-menu').slideToggle("fast", function(){});
      $('.opening').css({
        'bottom': '370px',
        'width':  '300px'
      });
      $menu = true;
    }
  });

})
