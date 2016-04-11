$(function() {
  $(window).scroll(function() {
    var windowTop = $(window).scrollTop();
    var step = parseInt(windowTop / 100);
    var distance = 0;

    if (step >= 197) {
        distance = 240 * (step - 197);
    }

    var imagesTop = 120 * step * -1 - distance;

    $('.road_images').css('top' , imagesTop);
    console.log(step);
  });

  $('.back_to_top').click(function() {
    $("html,body").animate({scrollTop:0}, 10000);
  });
});