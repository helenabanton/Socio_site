$(document).ready(function() {

//* Sticky nav *//
	
	$('.js--sticky').waypoint(function(direction){
		if (direction=="down"){
			$('nav').addClass('sticky');
		}else {
			$('nav').removeClass('sticky');
		}							   
	}, {
		offset:'60px;'
	});
	
//* arrow *//
	
	$('.js--arrow').click(function(){
		$('html,body').animate({scrollTop: $('.js--sticky').offset().top}, 1000);
	});
	
	
//*  progress bar  *//
	$('.js--step-1').click(function(){
		if($('.js--step-2').hasClass('active')){
			$('.js--step-2').removeClass('active');
		}
		if($('.js--step-3').hasClass('active')){
			$('.js--step-3').removeClass('active');
		}
		if($('.js--step-4').hasClass('active')){
			$('.js--step-4').removeClass('active');
		}
		if($('.js--step-5').hasClass('active')){
			$('.js--step-5').removeClass('active');
		}

		$('.js--text-step-1').fadeIn(100);
		document.querySelector('.js--text-step-2').style.display='none';
		document.querySelector('.js--text-step-3').style.display='none';
		document.querySelector('.js--text-step-4').style.display='none';
		document.querySelector('.js--text-step-5').style.display='none';
	});

	$('.js--step-2').click(function(){
		if(!$('.js--step-2').hasClass('active')){
			$('.js--step-2').addClass('active');
		}
		if($('.js--step-3').hasClass('active')){
			$('.js--step-3').removeClass('active');
		}
		if($('.js--step-4').hasClass('active')){
			$('.js--step-4').removeClass('active');
		}
		if($('.js--step-5').hasClass('active')){
			$('.js--step-5').removeClass('active');
		}
		document.querySelector('.js--text-step-1').style.display='none';
		$('.js--text-step-2').fadeIn(100);
		document.querySelector('.js--text-step-3').style.display='none';
		document.querySelector('.js--text-step-4').style.display='none';
		document.querySelector('.js--text-step-5').style.display='none';
	});

	$('.js--step-3').click(function(){
		if(!$('.js--step-2').hasClass('active')){
			$('.js--step-2').addClass('active');
		}
		if(!$('.js--step-3').hasClass('active')){
			$('.js--step-3').addClass('active');
		}
		if($('.js--step-4').hasClass('active')){
			$('.js--step-4').removeClass('active');
		}
		if($('.js--step-5').hasClass('active')){
			$('.js--step-5').removeClass('active');
		}
		document.querySelector('.js--text-step-1').style.display='none';
		document.querySelector('.js--text-step-2').style.display='none';
		$('.js--text-step-3').fadeIn(100);
		document.querySelector('.js--text-step-4').style.display='none';
		document.querySelector('.js--text-step-5').style.display='none';
	});

	$('.js--step-4').click(function(){
		if(!$('.js--step-2').hasClass('active')){
			$('.js--step-2').addClass('active');
		}
		if(!$('.js--step-3').hasClass('active')){
			$('.js--step-3').addClass('active');
		}
		if(!$('.js--step-4').hasClass('active')){
			$('.js--step-4').addClass('active');
		}
		if($('.js--step-5').hasClass('active')){
			$('.js--step-5').removeClass('active');
		}
		document.querySelector('.js--text-step-1').style.display='none';
		document.querySelector('.js--text-step-2').style.display='none';
		document.querySelector('.js--text-step-3').style.display='none';
		$('.js--text-step-4').fadeIn(100);
		document.querySelector('.js--text-step-5').style.display='none';
	});

	$('.js--step-5').click(function(){
		if(!$('.js--step-2').hasClass('active')){
			$('.js--step-2').addClass('active');
		}
		if(!$('.js--step-3').hasClass('active')){
			$('.js--step-3').addClass('active');
		}
		if(!$('.js--step-4').hasClass('active')){
			$('.js--step-4').addClass('active');
		}
		if(!$('.js--step-5').hasClass('active')){
			$('.js--step-5').addClass('active');
		}
		document.querySelector('.js--text-step-1').style.display='none';
		document.querySelector('.js--text-step-2').style.display='none';
		document.querySelector('.js--text-step-3').style.display='none';
		document.querySelector('.js--text-step-4').style.display='none';
		$('.js--text-step-5').fadeIn(100);
	});

	
	//* mobile nav *//
	
	$('.js--nav-icon').click(function(){
		document.querySelector('.js--main-content').style.display='none';
		document.querySelector('.js--s-mobile').style.display='block';
	});
	
	$('.js--nav-out').click(function(){
		document.querySelector('.js--main-content').style.display='block';
		document.querySelector('.js--s-mobile').style.display='none';
	});
});
