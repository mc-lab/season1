(function(){

	setTimeout(function(){
	    $('.hn_loading').fadeOut();
	    $('.hn_main-visual').show();
	    $('.hn_container').addClass('active');
	} , '5000');

	setTimeout(function(){
	    $('.hn_main-visual').remove();
	    $('.hn_loading').remove();
	    $('html').removeClass('now_loading');
	    $('.hn-cover').remove();
	} , '9000');

	setTimeout(function(){
	    $('.wrapper').show();
	    completeToRead();
	} , '9500');

	function completeToRead(){
		mt = 0;
		FRAME = 360;
		renderFlag = true;

		MAX_MARGIN_TOP = -parseInt($('.img').css('height'), 10);
		$('.obj').css('height', MAX_MARGIN_TOP+'pt');
		$('.obj-wrap').scrollTop(0,0);

	    $('.obj-wrap').scroll(function(){
	    	mt = Math.floor($(this).scrollTop() / 180) * -FRAME;
	        if (mt >= 0) {
	    		$('#scroll-message').show();
		    	$('.img').css({"margin-top": mt});
				renderFlag = true;
	        } else if (mt > MAX_MARGIN_TOP) {
	    		$('#scroll-message').hide();
		    	$('.img').css({"margin-top": mt});
	        	$('.back').css('display', 'none');
	        } else {
	        	$('.back').slideDown();
				if(renderFlag) {
			    	$('.img').css({"margin-top": mt});
			    	renderFlag = false;
				}
	        }
	    });

		$('#scroll-message').click(function(){
			$('.obj-wrap').animate(
				{scrollTop: (-MAX_MARGIN_TOP + FRAME) / 2 }, 
				60000, 'linear'
			);
		});


		$('.back').click(function(){
			$('.obj-wrap').scrollTop((-MAX_MARGIN_TOP + FRAME) / 2);
			$('.obj-wrap').animate(
				{scrollTop: 0}, 30000, 'linear'
			);
		});
	}
})();