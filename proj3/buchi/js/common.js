$(function() {

    var startX;
    var startY;
    var flag = false;
    var canvas = $('.draw_canvas').get(0);


    sizing();
    $(window).resize(function() {
        sizing();
    });

    $('.draw_area').mousemove(function(e) {
        $('#pen').css({
            left:e.pageX + 10,
            top:e.pageY - 210,
            opacity:1
        }).show();
    });

    if (canvas.getContext) {
        var context = canvas.getContext('2d');
        context.strokeStyle = '#be0018';
        context.lineWidth = 3;
    }

    $('.draw_canvas').mousedown(function(e) {
        $('.draw').show();
        $('.move').hide();
        flag = true;
        startX = e.pageX - $(this).offset().left;
        startY = e.pageY - $(this).offset().top;
        return false; // for chrome
    });

    $('.draw_canvas').mousemove(function(e) {
        if (flag) {
            var endX = e.pageX - $('.draw_canvas').offset().left + 15;
            var endY = e.pageY - $('.draw_canvas').offset().top + 13;
            context.beginPath();
            context.moveTo(startX, startY);
            context.lineTo(endX, endY);
            context.stroke();
            context.closePath();
            startX = endX;
            startY = endY;
        }
    });

    $('.draw_canvas').on('mouseup', function(e) {
        $('.draw').hide();
        $('.move').show();
        var doc = document;
        var startX = e.pageX;
        var startY = e.pageY;

        $("section.draw_area").append("<img src='../img/pay.png' style='opacity:0;width:100px;position:absolute;left:"+startX+"px; top:"+startY+"px;' class='pen_image'>");

        $('.draw_canvas').get(0).getContext("2d").clearRect(0,0,$(window).width(),$(window).height());
        flag = false;
    });

    function sizing(){
        $('.draw_canvas').attr('width' , $('.draw_area').width());
        $('.draw_canvas').attr('height' , $('.draw_area').height());
    }
});