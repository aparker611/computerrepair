$(document).ready(function() {
  var $menu = false;
  var $header = $('header');
  var $sticky = $header.before($header.clone().addClass("sticky"));
  var $gallery_menu = true

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
    $('.clean').hide();
    $('.screen').hide();
    $('.data').hide();
    $('.home-week').hide();
    $('.home-end').hide();

    console.log("Loaded successfully");
    $('.cleanup').hover(function() {
      $('.clean').show();
      $('.screen').hide();
      $('.data').hide();
      $('.home-week').hide();
      $('.home-end').hide();
    });

    $('.screen-replacement').hover(function() {
      $('.clean').hide();
      $('.screen').show();
      $('.data').hide();
      $('.home-week').hide();
      $('.home-end').hide();
    });

    $('.data-transfer').hover(function() {
      $('.clean').hide();
      $('.screen').hide();
      $('.data').show();
      $('.home-week').hide();
      $('.home-end').hide();
    });

    $('.home-weekday').hover(function() {
      $('.clean').hide();
      $('.screen').hide();
      $('.data').hide();
      $('.home-week').show();
      $('.home-end').hide();

    });

    $('.home-weekend').hover(function() {
      $('.clean').hide();
      $('.screen').hide();
      $('.data').hide();
      $('.home-week').hide();
      $('.home-end').show();
    });

    $('.screen-replacement').click(function() {
      $('.clean').hide();
      $('.screen').show();
      $('.data').hide();
      $('.home-week').hide();
      $('.home-end').hide();
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
