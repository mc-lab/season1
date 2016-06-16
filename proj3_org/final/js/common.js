$(function(){

    setTimeout(function(){
        $('.hn_loading').fadeOut();
        $('.hn_main-visual').show();
        $('.hn_container').addClass('active');
    } , '5000');

    setTimeout(function(){
        $('.hn_main-visual').remove();
        $('html').removeClass('now_loading');
        $('html').addClass('loaded');
        $('.hn-cover').css('opacity','0');
    } , '9000');

    setTimeout(function(){
        $('.wrapper').addClass('show');
        yomikondayo();
        chizu();
    } , '9500');

    $(".nf_nine_pieces").css({opacity: 0.0});


function yomikondayo(){
console.log('buchi');
    var DRAW_ARR = {
        MAIN_COPY : [
            // 結 （糸）
            [[19,4],[19,6],[18,7],[18,9],[17,9],[17,12],[16,12],[16,13],[14,13],[14,15],[13,15],[13,17],[11,17],[11,18],[10,18]],
            [[9,16],[9,17],[10,17],[10,18],[11,18],[11,19],[12,19],[12,20],[14,20],[14,22],[15,23],[16,23],[16,24],[17,24],[19,30]],
            [[26,20],[25,24],[25,26],[24,26],[24,27],[23,27],[23,28],[21,30],[20,33],[19,35],[17,38],[15,40],[12,45],[10,48],[5,48]],
            [[6,47],[14,47],[16,46],[20,44],[24,43],[28,42]],
            [[24,36],[25,38],[28,41],[30,44],[32,48]],
            [[19,46],[17,75],[19,81]],
            [[10,56],[10,62],[9,64],[8,66],[5,74],[4,77]],
            [[25,54],[27,55],[29,62],[31,70]],
            //　（士）
            [[35,24],[69,24],[73,23]],
            [[52,12],[52,23],[51,40]],
            [[36,42],[45,42],[50,40],[61,40],[66,41]],
            // (口)
            [[38,53],[39,66],[38,78]],
            [[41,56],[60,56],[65,54]],
            [[65,54],[65,74],[66,78]],
            [[42,75],[50,75],[53,75],[60,75],[64,74]],

            // 婚　（女）
            [[95,13],[93,15],[92,31],[91,36],[90,41],[88,48],[85,56]],
            [[85,56],[96,59],[101,63],[105,67],[109,72]],
            [[106,25],[106,36],[105,37],[105,53],[104,55],[103,59],[101,62],[99,64],[94,71],[90,75],[82,84]],
            [[82,33],[88,32],[99,30],[109,30]],
            // (氏）
            [[146,11],[140,11],[137,13],[130,15],[123,16],[117,17]],
            [[117,17],[117,44]],
            [[117,46],[123,44],[129,42],[132,41]],
            [[118,29],[122,30],[146,30],[150,28],[149,27]],
            [[130,17],[130,24],[133,28],[138,35],[142,40],[150,47],[152,48]],
            [[152,48],[153,46],[155,38]],
            // (日)
            [[116,53],[118,59],[118,81]],
            [[116,52],[145,52]],
            [[145,52],[145,75],[144,81]],
            [[117,64],[127,64],[143,65]],
            [[118,78],[134,78],[144,77],[145,79]],

            // を
            [[172,26],[173,27],[175,28],[175,29],[195,29],[195,28],[203,28],[203,27],[207,26],[208,24],[211,23]],
            [[193,14],[195,20],[193,25],[188,32],[183,42],[177,50],[173,53]],
            [[173,53],[176,51],[181,46],[186,42],[190,41],[196,44],[200,50],[201,57],[200,65]],
            [[222,36],[222,39],[219,40],[216,42],[210,45],[205,49],[195,55],[186,61],[182,72],[186,76],[218,76],[220,75]],

            // 、
            [[246,66],[250,70],[256,75],[260,80]],

            // も
            [[352,14],[353,20],[353,28],[352,29],[350,35],[348,50],[347,63],[354,77],[368,79],[382,67],[380,53],[374,47],[369,44]],
            [[336,26],[340,30],[347,34],[355,36],[359,37]],
            [[336,42],[336,50],[339,52],[345,56],[348,57],[356,58],[358,59]],

            // っ
            [[417,49],[423,47],[438,40],[452,39],[460,47],[455,65],[441,73],[433,76]],

            // と
            [[510,14],[510,35],[512,40],[514,47]],
            [[533,40],[526,42],[519,46],[509,53],[502,63],[506,73],[510,73],[518,74],[526,76],[535,76],[542,73]],

            // 幸
            [[12,141],[21,140],[50,142],[64,140]],
            [[38,131],[38,153]],
            [[4,154],[13,153],[36,153],[74,154]],
            [[20,157],[21,161],[24,165],[27,169]],
            [[55,156],[52,160],[48,166],[45,169]],
            [[6,170],[25,171],[70,170]],
            [[9,184],[24,184],[58,184],[69,183]],
            [[37,171],[38,200],[37,202]],

            // せ
            [[86,165],[94,167],[100,164],[107,162],[120,158],[131,157],[143,155],[150,155]],
            [[129,135],[130,139],[131,148],[131,166],[130,167],[127,173]],
            [[104,145],[105,149],[107,156],[107,171],[106,176],[109,185],[112,191],[118,194],[126,196],[133,196],[140,193]],

            // に
            [[176,139],[178,142],[178,147],[177,147],[175,154],[172,163],[173,174],[174,182],[177,189],[176,196],[180,186],[181,177]],
            [[196,148],[204,151],[212,151],[219,145],[208,154],[201,158]],
            [[192,175],[194,183],[199,187],[204,189],[215,190],[225,190]],

            // し
            [[261,135],[263,137],[264,140],[264,161],[264,188],[268,192],[275,198],[285,199],[290,196],[299,190],[306,182]],

            // よ
            [[359,156],[363,156],[371,153],[375,151],[380,149]],
            [[354,135],[357,139],[358,149],[358,189],[355,191],[353,194],[349,196],[342,197],[338,197],[337,197],[336,194],[340,184],[346,182],[350,180],[361,180],[365,183],[369,185],[375,188],[378,191],[380,195]],

            // う
            [[432,131],[434,132],[439,134],[443,135],[446,137],[448,139]],
            [[426,161],[430,159],[435,156],[442,154],[446,154],[452,160],[453,170],[453,180],[452,182],[451,184],[447,192],[447,192],[441,199],[435,202]],

            //　。
            [[485,190],[491,186],[498,188],[501,195],[494,206],[485,198],[486,188]],
        ]
    };

    var $target = $('.nf_container'),
    targetOffsetTop = $target.offset().top,
    windowHeight = $(window).height(),
    targetHeight =  8000;

    //■　■　■　スタート位置の設定
    var start_point = $('#contents').offset().top + $('#contents').height() + 50;
    var process = 0;
    //DRAW_ARR["MAIN_COPY"].length = 61  (61筆）
    for(j = 0; j < DRAW_ARR["MAIN_COPY"].length; j++){
        process += DRAW_ARR["MAIN_COPY"][j].length;
    }

    $(".nf_nine_pieces").css({opacity: 0.0});
    $(".nf_vision").css({opacity: 0.0});
    $(window).scroll(function () {
        var wariai = ($(window).scrollTop()-targetOffsetTop) / targetHeight;

        if(wariai > 0 && wariai <= 1.2) {
            $(".nf_mp_title").css({'opacity':1});
            $(".nf_nine_pieces").css({opacity: wariai-0.2});
            $('#nf_main').css({'visibility':'visible'});
            $('#nf_canvas').css({'opacity':1});
        } else if (wariai > 1.2){
            $(".nf_mp_title").css({'opacity':0});
            $(".nf_nine_pieces").css({'opacity':0});
            $('#nf_canvas').css({'opacity':0});
        }

        var ctx = $('#nf_canvas')[0].getContext('2d');
        ctx.lineWidth = 4;
        ctx.strokeStyle = "rgb(128, 128, 128)";

        if (wariai > 0.1) {
            $(".nf_title").css({'position':'fixed'});
            $(".nf_mp_title").css({'position':'fixed'});
            if(wariai < 1.2){
                $(".nf_mp_title").css({'opacity':1});
            }

            var end = parseInt((wariai - 0.2) * process*1/6);

            ctx.clearRect(0, 0, 550, 230);
            ctx.beginPath();
            
            var count = 0;
            if(count < process) {
                for(j = 0; j < DRAW_ARR["MAIN_COPY"].length; j++){
                    if(count >= end) break;
                    var pos = DRAW_ARR["MAIN_COPY"][j];
                    for(i = 0; i < pos.length - 1; i++){
                        ctx.moveTo(pos[i][0], pos[i][1]);
                        ctx.lineTo(pos[i+1][0], pos[i+1][1]);
                    }
                    count++;
                }
             }
             ctx.stroke();
        }
    });


    $('#grid').mixItUp({
            animation: {
                animateResizeContainer: false,
            },
            load: {
                filter: '.ka_mcl',
                sort: 'date:asc'
            }
    });
    $(window).scroll(function (event) {
        var ka_event_start_position = $(window).scrollTop();
        var ka_wh = $(window).height();

        if ($(".ka_container").offset().top - ka_wh / 3 * 2 < ka_event_start_position) {
            $(".ka_img-responsive").each(function(){
                var ka_pos = $(this).offset().top;
                if($(this).parents(".mix").css('display') == 'inline-block') {
                    if (ka_event_start_position > ka_pos - (ka_wh / 2)) {
                        if ($(this).hasClass("ka_noimage")) {
                            $(this).removeClass('ka_noimage');
                            $(this).addClass('ka_zoomIn');

                            if ($(this).attr('data-src') == null) {
                                $(this).attr('src', null);
                            } else {
                                console.log($(this).attr('data-src'));
                                $(this).attr('src', $(this).attr('data-src'));
                            }

                            if ($(this).attr('data-class') != null) {
                                $(this).addClass($(this).attr('data-class'));
                                $(this).attr('data-class', null);
                            }

                            if ($(this).attr('data-animation') != null) {
                                var ka_item = $(this);
                                setTimeout(function(){
                                    ka_item.removeClass('ka_zoomIn')
                                    ka_item.addClass(ka_item.attr('data-animation'));
                                    ka_item.attr('data-animation', null);
                                }.bind(ka_item), 300);
                            }
                        }
                    }
                }
            });
        }
    });

    $(".ka_img-responsive").each(function(){
        console.log('sasa');
        if ($(this).attr('src') != null) {
            $(this).attr('data-src', $(this).attr('src'));
        }
        $(this).attr('src', '../img/wp_600x600.png');
        $(this).addClass('ka_noimage');
    });

    $(".all").click(function(){
        $('.space').css({'height': '1000px'});
    });
}



    function chizu(){
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
}



    // (^o^)< 表示位置を固定
    var $target = $('#nh_container'),
        targetOffsetTop = $target.offset().top,
        windowHeight = $(window).height(),
        targetHeight = windowHeight + 2000;

    $(window).on('scroll', function () {
        $target = $('#nh_container'),
        targetOffsetTop = $target.offset().top,
        windowHeight = $(window).height(),
        targetHeight = windowHeight + 2000;

        if($(this).scrollTop() > targetOffsetTop) {
          $('.nh_wrap').css({'position': 'fixed', 'top': 0});
        } else {
          $('.nh_wrap').css({'position': 'relative', 'height': windowHeight});
        }
    });

});



