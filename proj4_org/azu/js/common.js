(function(){
	$(function(){
		mt = 0;
		FRAME = 360;

		MAX_MARGIN_TOP = -parseInt($('.img').css('height'), 10);
		$('.obj').css('height', MAX_MARGIN_TOP+'pt');
		$('.obj-wrap').scrollTop(0,0);

	    $('.obj-wrap').scroll(function(){
	    	mt = Math.floor($(this).scrollTop() / 180) * -FRAME;
	        if (mt >= 0) {
	    		$('#scroll-message').show();
		    	$('.img').css({"margin-top": mt});
	        } else if (mt > MAX_MARGIN_TOP) {
	    		$('#scroll-message').hide();
		    	$('.img').css({"margin-top": mt});
	        	$('.back').css('display', 'none');
	        } else {
	        	$('.back').slideDown();
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
	});
})();