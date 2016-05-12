$(function() {
  $(window).scroll(function() {
    var windowTop = $(window).scrollTop();
    var step = parseInt(windowTop / 100);
    var imagesTop = 360 * step * -1; // topの値をマイナスにしていくために-1

    $('.images').css('top' , imagesTop);
    console.log(step);
  });

});