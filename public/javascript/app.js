$(document).ready(function() {
  var app = document.getElementById('slogan');

  //Typewriter javascript
  var typewriter = new Typewriter(app, {
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
});
