(function(){
	$(function(){
		mt = 0;
		FRAME = 120;

		MAX_MARGIN_TOP = -parseInt($('.img').css('height'), 10);

		$('.contents').scrollTop(0,0);
	    $('.contents').scroll(function(){
	    	mt = Math.floor($(this).scrollTop() / 80) * -FRAME;
	        if (mt > MAX_MARGIN_TOP) {
		    	$('.img').css({"margin-top": mt});
	        }
	    });
	});
})();