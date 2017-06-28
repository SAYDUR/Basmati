$(function(){

	$('.toggler').click(function(){
		$(this).toggleClass('open');
		$('.nav ul').toggleClass('openToggel');
    $('.blob').toggleClass('fadeInDown');
	});

});
