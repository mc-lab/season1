$(function() {

    var canvas = $('.map_canvas').get(0);
    var startX = 152;
    var startY = 395;

    var gorlX = 123;
    var gorlY = 372;

    var gorl2X = 227;
    var gorl2Y = 226;

    var nowStartX = startX;
    var nowStartY = startY;

    var nowGorlX = gorlX;
    var nowGorlY = gorlY;


    var nowX = startX;
    var nowY = startY;

    var beforScroll = 0;

    var distance = 0;


    window.scrollTo(0,0);

    if (canvas.getContext) {
        var context = canvas.getContext('2d');
        context.strokeStyle = '#be0018';
        context.lineWidth = 5;
        context.lineCap = 'round';
        context.lineJoin = 'round';
        // context.beginPath();
        // context.moveTo(152, 395);
        // context.lineTo(123, 372);
        // context.stroke();
        // context.beginPath();
        // context.moveTo(123, 372);
        // context.lineTo(227, 226);
        // context.stroke();
        // context.closePath();
    }

    $(window).scroll(function() {
        if (beforScroll < $(window).scrollTop()) {
            context.globalCompositeOperation = 'source-over';
            context.lineWidth = 5;

            if (nowX < nowGorlX) {
                nowStartX = gorlX;
                nowStartY = gorlY;

                nowGorlX = gorl2X;
                nowGorlY = gorl2Y;

                distance = 2000;
            }


            if (nowY < gorl2Y) {
                return;
            }

        } else {
            context.globalCompositeOperation = 'destination-out';
            context.lineWidth = 6;

            if (nowX > nowGorlX) {
                nowStartX = startX;
                nowStartY = startY;

                nowGorlX = gorlX;
                nowGorlY = gorlY;


                distance = 0;
            }
        }

        var prog = ($(window).scrollTop() - distance) / 2000;


        var diffX = nowGorlX - nowStartX;
        var diffY = nowGorlY - nowStartY;
        var moveToX =  diffX * prog + nowStartX;
        var moveToY =  diffY * prog + nowStartY;

        context.beginPath();
        context.moveTo(nowX, nowY);
        context.lineTo(moveToX, moveToY);
        context.stroke();
        context.closePath();

        nowX = moveToX;
        nowY = moveToY;

        beforScroll = $(window).scrollTop();
    });
});