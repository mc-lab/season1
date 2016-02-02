$(function(){
  
  //初期値取得
  var maxHeight = 2320;
  var winH = $(window).height();

  //初期設定
  $(".line_horizontal").hide();
  $(".block_map").css({
    "top": 2500 - (winH/2) - 673 + "px"
  });
  $(".line_horizontal").css({
    "top": 2500 - (winH/2) - 673 + "px"
  });

  //スクロールイベント
  $(window).on('scroll', function(){

    //スクロール位置取得、手はscrollの1.2倍速
    var scrollPos = $(window).scrollTop(),
      pointY = scrollPos * 1.2;

    //マップ背景の画像位置を画面の高さから設定
    if(scrollPos < (2500 - winH - 673)){
      $(".drawArea").css({
        "margin-top": - scrollPos
      });
    } else {
       $(".drawArea").css({
        "margin-top": - (2500 - winH - 673)
      });
    }

    //縦の手が画面外まで動き切ったら、横の手を動かす処理
    if(pointY < maxHeight){
      $(".line_horizontal").hide();
      $(".line_vertical").css({
        "height": pointY
      });
    } else if(pointY > maxHeight) {
      $(".line_horizontal").show();
      $(".line_horizontal").css({
        "width": (scrollPos - maxHeight) * 1.2
      });
    }

  });

});