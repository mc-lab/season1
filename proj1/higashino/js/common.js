$(function(){

/* --------------------headerの動きをつける & listのフェードイン */
	var headerQuieteFlag = true;
	var siteHeader = $('#SiteHeader');

	$(window).scroll(function() {

		var scrollY = jQuery(this).scrollTop(),
				windowH = $(window).height();

		//header___スクロール量に応じた出し分け
		if(scrollY > 140){
			siteHeader.addClass('quiet');
			headerQuieteFlag = false;
		} else {
			siteHeader.removeClass('quiet');
			headerQuieteFlag = true;
		}

		//listのフェードイン
		$('.scroll-item-inited').each(function() {
			var elPosition = $(this).offset().top;
			if (scrollY > elPosition - windowH) {
				$(this).addClass('is-active');
			}
		});

	});

	// scrollY > 140の状態でのheaderの挙動を設定
	$(window).mousemove(function(e){
		var clientPosY = e.clientY;
		if(headerQuieteFlag == false){
			if(clientPosY < 68 ){
				siteHeader.removeClass('quiet');
			} else if(clientPosY > 140){
				siteHeader.addClass('quiet');
			}
		}
	});
  
  //【うまくいかなかった点】
  //マウスの位置が68px以下の位置（ページ上部）でスクロールすると、
  //headerが奇妙な動きをするので、解決方法を知りたい。

/* --------------------menuのマウスオーバー */
	$('.nav-item').hover(
		function(){
			$(this).children('.nav-child').show();
		},
		function(){
			$(this).children('.nav-child').hide();
		}
	);

/* --------------------footerの挙動 */
	$('#SiteFooter').hover(
		function(){
			$(this).addClass('is-active');
		},
		function(){
			$(this).removeClass('is-active');
		}
	);
	$('.button-kayac-projects').click(function(){
		$('#SiteFooter').toggleClass('show-project');
	});

});