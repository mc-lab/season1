$(function(){

$('#grid').mixItUp(
	{
		animation: {
			animateResizeContainer: false,
		},
		load: {
			filter: '.ka_mcl',
			sort: 'date:asc'
		}
	}
);

var ka_wp_image = 'img/wp_600x600.png';

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
	if ($(this).attr('src') != null) {
		$(this).attr('data-src', $(this).attr('src'));
	}
	$(this).attr('src', ka_wp_image);
	$(this).addClass('ka_noimage');
});

});
