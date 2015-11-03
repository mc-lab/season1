$(function() {
    setInterval(function(){
        $('.wrapper').show();
    } , '5000');


    $.ajax({
        url: 'contents.html',
        type: 'GET',
        dataType: 'html'
    })
    .success(function(res) {
        $('.wrapper').append(res);

    });


});