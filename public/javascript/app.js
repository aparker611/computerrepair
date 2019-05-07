$(document).ready(function() {
  var sloganApp = document.getElementById('slogan');

  //Typewriter javascript
  var typewriter = new Typewriter(sloganApp, {
    loop: true
  });

  typewriter.changeDelay(50)
    .typeString('Adding Care to your PC’S')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Quality repairing at your Affordability')
    .pauseFor(1500)
    .deleteAll()
    .typeString('<b>Fast and Excellent Care for Your Computers</b>')
    .pauseFor(1500)
    .start();

    //Owl Carousel
    $('.owl-carousel').owlCarousel({
      navigation: true,
      nav: true,
      dots: true,
      center: false,
      items: 1,
      slideSpeed: 200,
      paginationSpeed: 300,
      loop: true
    });
});
