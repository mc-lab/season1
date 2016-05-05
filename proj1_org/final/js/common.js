$(function() {

    //西嶋担当分
    setInterval(function(){
        $('.hn_loading').fadeOut();
        $('.hn_main-visual').show();
        $('.hn_container').addClass('active');
    } , '5000');


    //笹野担当分
    setInterval(function(){
        $('.hn_main-visual').remove();
        $('html').removeClass('now_loading');
        $('html').addClass('loaded');
        $('.hn-cover').css('opacity','0');
    } , '9000');


    setInterval(function(){
        $('.wrapper').addClass('ts_showed');
    } , '9500');


    setInterval(function(){
        $('.ts_main_scroll').css('opacity','1');
        $('.ts_stories').addClass('show_contents').css('opacity','1');
    } , '56000');


    $.ajax({
        url: 'contents.html',
        type: 'GET',
        dataType: 'html'
    })
    .success(function(res) {
        $('.wrapper').append(res);

    });



    // 東担当分
    $('.dynamic-list .ka_animation-item').css('visibility','hidden');

    $(window).scroll(function(){
      $('.dynamic-list .ka_animation-item:odd').each(function(){
        var pos = $(this).offset().top;
        if ($(window).scrollTop() + $(window).height() > pos) {
            $(this).css('visibility','visible');
            $(this).addClass('ka_animeL');
        }
      });
      $('.dynamic-list .ka_animation-item:even').each(function(){
        var pos = $(this).offset().top;
        if ($(window).scrollTop() + $(window).height() > pos) {
            $(this).css('visibility','visible');
            $(this).addClass('ka_animeR');
        }
      });
    }).scroll();
});