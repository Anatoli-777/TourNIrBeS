jQuery(document).ready(function($){

	$(window).show(function(event){

			$('.tdiv').css({
				'transform' : 'translateX(0px)',
				'transition' : '0.5s'
			});
	});
	$(window).scroll(function(event){
		if($(this).scrollTop()> 380){
		$('.mimg img').css({
			'transform' : 'translateX(0px)',
			'transition' : '1s'
		});
		}else{
			$('.mimg img').css({
				'transform' : 'translateX(-90px)',
			})
		}
	});

	// $(window).scroll(function(event){
	// 	if($(this).scrollTop()> 580){
	// 		$('.cont').show(1000)
	// 	}else{
	// 		$('.cont').hide(1000)
	// 	}
	// })
	$('svg').click(function(event){
		$('html,body').animate({
		scrollTop : 0
	},1000);
	})
})