$(document).ready(function() {
  var $menu = false;
  var $header = $('header');
  var $sticky = $header.before($header.clone().addClass("sticky"));
  var $gallery_menu = true
  $('.topnav').hide();

  // HAMBURGER menu

  if( jQuery.browser.mobile ) {
    console.log("mobile");
    /* Showing hamburger menu and hiding our original navigation */
    $('.topnav').show();
    $('.nav-wrapper').hide();
    $('div').find('#mylinks').hide();

    var menuOpen = false;

    $('.icon').click(function() {
      if( menuOpen == false ) {
        $('div').find('#mylinks').show();
        menuOpen = true;
      } else {
        $('div').find('#mylinks').hide();
        menuOpen = false;
      }
    });

    /* Changing CSS to setup mobile use*/
    $('.logo').css('width', 50);
    $('.quote-wrapper').find("textarea").css("width", 350);
    $('#particles-js').css("width", "100%");
    $('.cover-main').css("margin-top", 0);

    $('.slider-img').css("width", "200px");
    $('.slider-img').css("height", "150px");

    $('.about-me').css("max-width", "100%");



  } else {
  }

  function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }
  // Make sure scripts run on certain pages START
  if (window.location.pathname === "/index.html" || window.location.pathname === "/index.html#" || window.location.pathname === "/") {
    //Sticky menu
    $(window).on("scroll", function() {
      var scrollFromTop = $(window).scrollTop();
      $("body").toggleClass("scroll", (scrollFromTop > 350));
    });

    // SLICK JS
    $('.slider-grid').slick({
      infinite: true,
      autoplay: true,
      arrows: true,
      dots: true
    });
    $('.work-grid').slick({
      infinite: true,
      autoplay: true,
      arrows: true,
      dots: true,
      slidesToShow: 2
    });

    //Particles JS
    console.log('callback - particles js config loaded');
    particlesJS.load('particles-js', '/particles.json', function() {});
  } else if (window.location.pathname === "/gallery.html") {
    console.log("ONLY GALLERY");
    $('.build-grid').masonry({
      columnWidth: 50,
      itemSelector: '.grid-item',
      fitWidth: true
    });
    $('.repair-grid').masonry({
      columnWidth: 50,
      itemSelector: '.grid-item',
      fitWidth: true
    });
    $('.repair-grid').hide();

    // GALLERY-MENU = true
    $('.repair-btn').click(function() {
      if($gallery_menu == true) {
        $('.build-grid').hide();
        $('.repair-grid').show();

        $('.build-btn').removeClass('active');
        $('.repair-btn').addClass('active');
        $gallery_menu = false
      }
    });

    $('.build-btn').click(function() {
      if($gallery_menu == false) {
        $('.build-grid').show();
        $('.repair-grid').hide();
        $('.build-btn').addClass('active');
        $('.repair-btn').removeClass('active');

        $gallery_menu = true;
      }
    })
  } else if (window.location.pathname === "/pricing.html") {

    console.log("Loaded successfully");
    $( ".pricing-item" )
      .filter( ":odd" )
        .hide()
      .end()
      .filter( ":even" )
        .hover(function() {
          $( this )
            .next()
              .stop( true, true )
              .slideToggle();
        });
  }
  //END

  //workhours menu
  $('.opening-menu').hide();
  $('.opening').click(function() {
    if ($menu) {
      $('.opening-menu').slideToggle("fast", function() {});
      $('.opening').css({
        'bottom': '0',
        'width:': '125px'
      });
      $menu = false;
    } else {
      $('.opening-menu').slideToggle("fast", function() {});
      $('.opening').css({
        'bottom': '370px',
        'width': '300px'
      });
      $menu = true;
    }
  });
})
