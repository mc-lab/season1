// 位置固定
$(function() {
  var $target = $('.nh_wrap'),
      targetOffsetTop = $target.offset().top;
  $(window).on('scroll', function () {
    if($(this).scrollTop() > targetOffsetTop) {
      $('.nh_wrap').addClass('nh_fixed');
    } else {
      $('.nh_wrap').removeClass('nh_fixed');
    }
  });

});


//線を書く
$(function() {
  var canvas = document.getElementById('nh_canvas');

  if (canvas.getContext){
    var context = canvas.getContext('2d');

    //ここに具体的な描画内容を指定する(｀・ω・´)b
    context.scale(2,2);
    context.strokeStyle = '#e5004f';
    context.lineWidth = 5;
    context.lineCap = 'round';
    context.lineJoin = 'round';

    // //新しいパスを開始する
    // context.beginPath();
    // context.lineTo(270,388);
    // context.lineTo(245,368);
    // context.lineTo(356,221);
    // //現在のパスを輪郭表示する
    // context.stroke();
  }

});


// GoogleMap表示
google.maps.event.addDomListener(window,'load',function(){
  var latlng = new google.maps.LatLng(35.666359, 139.714000);
  var mapOptions = {
    zoom: 17,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false,
    mapTypeControl: false
  };
  var map = new google.maps.Map(document.getElementById('nh_map'), mapOptions);

  var points = [
    new google.maps.LatLng(35.66494694441677, 139.71301339566708),
    new google.maps.LatLng(35.664924063496926, 139.71299193799496),
    new google.maps.LatLng(35.66511255849831, 139.71271634101868),
    new google.maps.LatLng(35.66641076487424, 139.7138737142086),
    new google.maps.LatLng(35.66638461573047, 139.71391662955284)]

  var polyLineOptions = {path: points, strokeWeight: 5, strokeColor: "#e5004f"}
  var polyObj = new google.maps.Polyline(polyLineOptions)
  polyObj.setMap(map)

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
});
