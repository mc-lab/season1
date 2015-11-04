$(function(){
  $('.dynamic-list ka_animation-item').css('visibility','hidden');
  $(window).scroll(function(){
      $('.dynamic-list .ka_animation-item:odd').each(function(){
        var pos = $(this).offset().top;
        if ($(window).scrollTop() + $(window).height() > pos) {
            $(this).css('visibility','visible');
            $(this).addClass('animeL');
        }
      });
      $('.dynamic-list .ka_animation-item:even').each(function(){
        var pos = $(this).offset().top;
        if ($(window).scrollTop() + $(window).height() > pos) {
            $(this).css('visibility','visible');
            $(this).addClass('animeR');
        }
      });  
  }).scroll();
});

