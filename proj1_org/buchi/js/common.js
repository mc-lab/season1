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
	

});