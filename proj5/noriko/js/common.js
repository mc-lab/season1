$(function() {

  $('.toggle-btn').click(function() {
    $('.filter-btn').toggleClass('open');

  });

  $('.filter-btn a').click(function() {
    $('.filter-btn').removeClass('open');

  });


    $('#all').click(function() {

      $('ul.tasks li').slideDown(300);

    });

    $('#one').click(function() {
        console.log("aaa");
      $('.tasks li:not(.one)').slideUp(300, function() {
        $('.one').slideDown(300);

      });
    });

    $('#two').click(function() {
      $('.tasks li:not(.two)').slideUp(300, function() {
        $('.two').slideDown(300);

      });
    });
    $('#three').click(function() {
      $('.tasks li:not(.three)').slideUp(300, function() {
        $('.three').slideDown(300);

      });
    });

    $(".flyout-btn").click(function (){
      $(".flyout-btn").toggleClass("btn-rotate");
      $(".flyout").find("a").removeClass();
      return $(".flyout").removeClass("flyout-init fade").toggleClass("expand");
      });
    $(".flyout").find("a").click(function (){
      $(".flyout-btn").toggleClass("btn-rotate");
      $(".flyout").removeClass("expand").addClass("fade");
      return $(this).addClass("clicked");
      });

});