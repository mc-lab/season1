$(function(){
    setInterval(function(){
        $('.hn_loading').fadeOut();
        $('.hn_main-visual').show();
        $('.hn_container').addClass('active');
    } , '5000');
})