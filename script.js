// JQUERY
$(function() {
	
	var 
	images = ['https://images4.alphacoders.com/602/thumb-1920-602788.png'];

	
	
	
	
	setTimeout(function() {
		$('.logoContainer').transition({scale: 1}, 1000, 'ease');
		setTimeout(function() {
			$('.logoContainer .logo').addClass('loadIn');
			setTimeout(function() {
				$('.logoContainer .text').addClass('loadIn');
				setTimeout(function() {
					$('.acceptContainer').transition({height: '431.5px'});
					setTimeout(function() {
						$('.acceptContainer').addClass('loadIn');
						setTimeout(function() {
							$('.formDiv, form h1').addClass('loadIn');
						}, 500)
					}, 500)
				}, 500)
			}, 500)
		}, 1000)
	}, 10)
	
	
	
	
	$('#btn').click(function() {
	 document.location = 'http://google.com/';
	});
	

	
	
});
