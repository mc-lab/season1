$(function() {

  // (^o^)< googleMapがロードされたら
  google.maps.event.addDomListener(window,'load',function(){

    // (^o^)< googlemapの指定
    var latlng = new google.maps.LatLng(35.666359, 139.714000);
    var mapOptions = {
      zoom: 17,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false,
      mapTypeControl: false
    };
    var map = new google.maps.Map(document.getElementById('nh_map'), mapOptions);

    // (^o^)< ピンを変える
    var icon = new google.maps.MarkerImage('../img/nh_ico_pin.png',
               new google.maps.Size(50,56),
               new google.maps.Point(0,0));

    var markerOptions = {
      position: latlng,
      map: map,
      icon: icon,
      title: '株式会社ウエディングパーク'
    };
    var marker = new google.maps.Marker(markerOptions);

    // (^o^)< スクロールで地図描画
    $(window).on("scroll", function() {

      var startPointX = 35.66494694441677,
          startPointY = 139.71301339566708,
          magariPointX = 35.66511255849831,
          magariPointY = 139.71271634101868,
          goalPointX = 35.66641076487424,
          goalPointY = 139.7138737142086;

      var wariai = ($(window).scrollTop()-targetOffsetTop) / 2000;

      if(wariai <= 0.5) {
        var saX = magariPointX - startPointX;
        var ugokasuX = saX * wariai * 2;
        var imakokoX = startPointX + ugokasuX;

        var saY = magariPointY - startPointY;
        var ugokasuY = saY * wariai * 2;
        var imakokoY = startPointY + ugokasuY;

        var point = [
        new google.maps.LatLng(startPointX, startPointY),
        new google.maps.LatLng(imakokoX, imakokoY)]
      } else if(wariai <= 1){
        var saX = goalPointX - magariPointX;
        var ugokasuX = saX * (wariai - 0.5) * 2;
        var imakokoX = magariPointX + ugokasuX;

        var saY = goalPointY - magariPointY;
        var ugokasuY = saY * (wariai - 0.5) * 2;
        var imakokoY = magariPointY + ugokasuY;

        var point = [
        new google.maps.LatLng(magariPointX, magariPointY),
        new google.maps.LatLng(imakokoX, imakokoY)]
      }

      if (wariai >= 0 && wariai <= 1) {
        var polyLineOptions = {path: point, strokeWeight: 10, strokeColor: "#e5004f"}
        var polyObj = new google.maps.Polyline(polyLineOptions)
        polyObj.setMap(map)
      }

      // (^o^)< 会社までたどり着いたら固定表示をもどす
      if (wariai >= 1) {
        $('.nh_container').css({'height': targetHeight});
        $('.nh_wrap').css({'position': 'absolute', 'bottom': 0, 'top': 'auto'});
      }
    });

  });

  // (^o^)< 表示位置を固定
  var $target = $('.nh_wrap'),
      targetOffsetTop = $target.offset().top,
      windowHeight = $(window).height(),
      targetHeight = windowHeight + 2000;

  $(window).on('scroll', function () {
    if($(this).scrollTop() > targetOffsetTop) {
      $('.nh_wrap').css({'position': 'fixed', 'top': 0});
    } else {
      $('.nh_wrap').css({'position': 'relative', 'height': windowHeight});
    }
  });

});
