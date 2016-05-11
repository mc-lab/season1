$(function() {
  $(window).scroll(function() {
    var windowTop = $(window).scrollTop();
    var step = parseInt(windowTop / 100);

    var imagesTop = 360 * step * -1;

    $('.road_images').css('top' , imagesTop);
    console.log(step);
  });

  $('.back_to_top').click(function() {
    $("html,body").animate({scrollTop:0}, 10000);
  });
});