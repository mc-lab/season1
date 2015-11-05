$(function(){

  $('.dynamic-list ka_animation-item').css('visibility','hidden');
  $(window).scroll(function(){
      $('.dynamic-list .ka_animation-item:odd').each(function(){
        var pos = $(this).offset().top;
        if ($(window).scrollTop() + $(window).height() > pos) {
            $(this).css('visibility','visible');
            $(this).addClass('animeL');
            // $('.ka_movie',this).addClass('ka_animate');
        }
      });
      $('.dynamic-list .ka_animation-item:even').each(function(){
        var pos = $(this).offset().top;
        if ($(window).scrollTop() + $(window).height() > pos) {
            $(this).css('visibility','visible');
            $(this).addClass('animeR');
            // $('.ka_movie',this).addClass('ka_animate');
        }
      });
  }).scroll();
  $('.ka_movie').click(function(){
    if($(this).hasClass('ka_clicked') == false) {
      $(this).addClass('ka_clicked');
      $(this).addClass('ka_animate');
      var self = $(this);
      setInterval(function(){play(self)}, 2000);
    }
  });

  function play(object) {
    $(object).toggleClass('ka_animate');
  }
});
