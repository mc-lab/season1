$(function(){
  // オールを漕ぐ
  $('.kayac').addClass('animate');
  setInterval(kogu,2000);

  // ニュースをボヨンボヨン表示する
  $('.dynamic-list .news-item').css('visibility','hidden');
  $(window).scroll(function(){
      $('.dynamic-list .news-item').each(function(){
        var koredaPosition = $(this).offset().top;
        if ($(window).scrollTop() + $(window).height() > koredaPosition + 250) {
            $(this).css('visibility','visible');
            $(this).addClass('boyoon');
        }
      });
  });
});

function kogu(){ //漕ぐアニメーションセット
  $('.kayac').toggleClass('animate');
}

