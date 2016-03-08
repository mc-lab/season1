$(function() {

    var startX;
    var startY;
    var mouseDownflag = false;
    var canvas = $('.ts_canvas').get(0);


    sizing();
    $(window).resize(function() {
        sizing();
    });

    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.strokeStyle = '#fff';
        ctx.shadowBlur = 3;
        ctx.shadowColor = "#fff";
        ctx.lineWidth = 5;
        ctx.lineJoin = "round";
        ctx.globalAlpha = 0.8;
    }

    $('.ts_canvas').mousedown(function(e) {
        mouseDownflag = true;
        startX = e.pageX - $(this).offset().left;
        startY = e.pageY - $(this).offset().top;
        return false; // for chrome
    });

    $('.ts_canvas').mousemove(function(e) {
        if (mouseDownflag) {
            var endX = e.pageX - $('.ts_canvas').offset().left + 15;
            var endY = e.pageY - $('.ts_canvas').offset().top + 13;
            var relayX = (startX + endX) / 2;
            var relayY = (startY + endY) / 2;

            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.quadraticCurveTo(relayX, relayY, endX, endY);
            ctx.stroke();
            ctx.closePath();
            startX = endX;
            startY = endY;
        }
    });

    $('.ts_canvas').on('mouseup', function() {
        mouseDownflag = false;

        var canvasWidth = $('.ts_canvas').width();
        var canvasHeight = $('.ts_canvas').height();

        var imageData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);

        // imageData.data.forEach(function(val,index,ar) {
        //     if (this[index] == 1) {
        //         console.log('aaa');
        //     }
        //     console.log(this[index]);
        // });
        // console.log(imageData.data);

        ctx.clearRect(0, 0, canvasWidth,canvasHeight);

    });

    function sizing(){
        $('.ts_canvas').attr('width' , $('.ts_canvas').width());
        $('.ts_canvas').attr('height' , $('.ts_canvas').height());
    }


});