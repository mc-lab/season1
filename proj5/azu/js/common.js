
$(".menu").click(function () {
  $(this).siblings(".sub-menu").toggle();
});

$(".right-menu .menu").click(function () {
  $(this).siblings(".sub-menu").children("li").toggleClass("expand");
});

$(".right-menu .sub-menu li").click(function () {
  var category = $("a", this).data("category");
  $(".cassette").slideUp();
  if ('ALL' == category) {
	  $(".cassette").slideDown();
  } else {
	  $(".cassette.category_" + category).slideDown();
  }
});


$(".footer-menu .menu").click(function () {
  $(this).siblings(".sub-menu").children("li").toggleClass("spin-expand").children("a").removeClass("clicked");
});

$(".footer-menu .sub-menu li").click(function () {
  $("a", this).addClass("clicked");
  $("a", this).delay(1000).queue(
    function(){
      $(this).removeClass("clicked");

    });
});
