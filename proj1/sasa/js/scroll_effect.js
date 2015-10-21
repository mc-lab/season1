$(function() {
    $(window).scroll(function() {
        var windowBottom = $(window).scrollTop() + $(window).height();
        $('.news-item:not(.show)').each(function() {
            if (windowBottom > $(this).offset().top + 50) {
                $(this).addClass('show');
            }
        });
    });
});