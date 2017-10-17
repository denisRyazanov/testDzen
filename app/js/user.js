
$( document ).ready(function() {
	$('.single-item').slick({
		dots: true,
		arrows: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1
	});
});

$(document).ready(function() {
	$('.btnFirst').mouseover(function() {
		$('.first').addClass('active');
	});
	$('.btnFirst').mouseout(function() {
		$('.first').removeClass('active');
	});
	$('.btnSecond').mouseover(function() {
		$('.second').addClass('active');
	});
	$('.btnSecond').mouseout(function() {
		$('.second').removeClass('active');
	});
	$('.btnThird').mouseover(function() {
		$('.third').addClass('active');
	});
	$('.btnThird').mouseout(function() {
		$('.third').removeClass('active');
	});
});