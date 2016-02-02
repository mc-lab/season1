$(function () {

    // onmousedown時のイベントハンドラ
    $('#pen')
        .on('mousedown', function(){
            //penをおろす
            onPenImageDown();
    
        });

    // onmouseup時のイベントハンドラ
    $('#pen')
        .on('mouseup', function(){
            //penをあげる
            onPenImageUp();
            //絵を描く
            onDrawing();
    
        });

    // マウスに画像を追従させる
    function mouseImage() {
        
        var cx = event.pageX;
        var cy = event.pageY - 220;
        console.log(cx,cy);
        $('#pen').css({
            left:cx,
            top:cy,
            opacity: 1
        }).show();  
        console.log("mouseImage");
    }
    
    // 絵を描く
    function onDrawing() {
        var x = y = 0;
        //描画コンテキストの取得
        var canvas = document.getElementById('canvas');
        var context = canvas.getContext('2d');
            
        x = event.pageX - canvas.offsetLeft;
        y = event.pageY - canvas.offsetTop;
        
        //丸を描く
        context.beginPath();
        context.arc(x,y,100,0,Math.PI*2,true);
        context.closePath();
        context.fill();
        this.context.stroke();
        //console.log(this);
        //var rect = this.getCreateCanvasRect();
        //this.set_draw_line_canvas(rect.x, rect.y, rect.w, rect.h);
    }
    
    function getCreateCanvasRect() {
            var min_X = this.anchor_edge_min.x - Brush.BRUSH_RADIUS;
            var min_Y = this.anchor_edge_min.y - Brush.BRUSH_RADIUS;
            if (min_X < 0) {
                min_X = 0;
            }
            if (min_Y < 0) {
                min_Y = 0;
            }
            var max_X = this.anchor_edge_max.x + Brush.BRUSH_RADIUS;
            var max_Y = this.anchor_edge_max.y + Brush.BRUSH_RADIUS;
            if (this.canvas_W < max_X) {
                max_X = this.canvas_W;
            }
            if (this.canvas_H < max_Y) {
                max_Y = this.canvas_H;
            }
            return {
                x: min_X,
                y: min_Y,
                w: max_X - min_X,
                h: max_Y - min_Y
            };
        };
        
    function set_draw_line_canvas(x, y, w, h) {
            var canvas = doc.createElement("canvas");
            var context = canvas.getContext("2d");
            $(canvas).attr({
                width: w,
                height: h
            }).css({
                position: "absolute",
                top: 0,
                left: 0
            }).end();
            context.drawImage(this.canvas, x, y, w, h, 0, 0, w, h);
            this.draw_line_canvas = canvas;
            this.wrap_div.append(this.draw_line_canvas);
        };
        
        
        
    // onmouseup時に画像を表示
    function onPenImageUp() {
        $("#imageArea").attr("src", "../img/pen_move.png");
    }
    // onmousedown時に画像を表示
    function onPenImageDown() {
        $("#imageArea").attr("src", "../img/pen_draw.png");
    }
    
    //document.onmousemove = mouseImage;
});