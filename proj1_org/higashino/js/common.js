$(function(){
	$(".mt_member li").click(function(){
		index = '.'+$(this).data('modal');
		console.log(index);
		$(".mt_modal").show();
		$(index).show();
		$(index).addClass('kenzan');
		
	});
	
	$(".mt_modal_bg").click(function(){
		$(".mt_modal").hide();
		$(".mt_prof").hide()
		    .removeClass('kenzan');
		
	})

/* add HIGASHINO */

	//色をランダム変更
	for(var i=0; i < $('.mh_cassette').length; i++){
		var mhval = Math.ceil( Math.random()*5 );
		$('.mh_cassette').eq(i).addClass('color0' + mhval);
	}

	//listのアニメーション
	$(window).scroll(function() {
		var scrollY = jQuery(this).scrollTop(),
				windowH = $(window).height();
		$('.mh_cassette').each(function() {
			var elPosition = $(this).offset().top;
			if (scrollY > elPosition - windowH + 300) {
				$(this).addClass('is-active');
			}
		});
	});

	//モーダル
  var effect = {
    open: function(duration, complete) {
      this.css({
        display: 'block',
        opacity: 0,
        top: -50 - this.outerHeight(),
        marginTop: 0
      })
      .animate({opacity: 1, top: 100}, duration, complete);
    },
    close: function(duration, complete) {
      this.animate({
        opacity: 0,
        top: -50 - this.outerHeight()
      }, duration, function() {
        $(this).css({display: 'none'});
        $('.mh_imgMovie01.mh_bgAuto').addClass('is-active');
        complete();
      });
    }
  },
  modal = $('.mh_js-modal').plainModal({
  	effect: effect,
  	duration: 500
  });
  $('.mh_js-viewMore').click(function(){
  	modal.plainModal('open');
  	$('.mh_imgMovie01.mh_bgAuto').removeClass('is-active');
  });

/* add HIGASHINO */

});