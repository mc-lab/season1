(function(){
	$(function(){
		mt = 0;
		FRAME = 360;

		MAX_MARGIN_TOP = -parseInt($('.img').css('height'), 10);
		$('.obj').css('height', (parseInt($('.img').css('height'), 10) + FRAME))+'pt';
		$('.contents').scrollTop(0,0);
	    $('.contents').scroll(function(){
	    	mt = Math.floor($(this).scrollTop() / 360) * -FRAME;
	        if (mt > MAX_MARGIN_TOP) {
		    	$('.img').css({"margin-top": mt});
	        	$('.back').css('display', 'none');
	        } else {
	        	$('.back').slideDown();
	        }
	    });

		$('.back').click(function(){
			$('.contents').animate({scrollTop: 0}, {
			duration: 5000});
		});
	});
})();