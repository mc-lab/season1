$(function(){
  $('.categories li').click(function() {
    var cat = $(this).data('cat');
    console.log(cat);

    $('.contents li').each(function () {
        if ($(this).hasClass(cat)) {
            $(this).addClass('showed');
            $(this).removeClass('hidden');
            $(this).show('600');
        } else {
            $(this).removeClass('showed');
            $(this).addClass('hidden');
            $(this).hide('600');
        }
    });
  });
});