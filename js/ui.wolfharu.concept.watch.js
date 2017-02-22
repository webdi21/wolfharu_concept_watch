$(function() {
	var $el = $('#WolfharuWatch');
	var tempHtml = '', $hourHand, $minuteHand;
	tempHtml += '<div class="WolfharuWatchInner">';
	tempHtml += '	<div class="WolfharuWatchContent">';
	tempHtml += '		<strong><i></i></strong>';
	tempHtml += '		<em><i></i></em>';
	tempHtml += '		<span><i></i></span><span><i></i></span><span><i></i></span><span><i></i></span>';
	tempHtml += '	</div>';
	tempHtml += '</div>';
	
	$el.append(tempHtml);
	$hourHand = $el.find('strong');
	$minuteHand = $el.find('em');
	
	function fnWolfharuWatch() {
		var currentTime = new Date();
		var now = {};
		var angel = {};

		now.hours = currentTime.getHours();
		now.minutes = currentTime.getMinutes();
		now.seconds = currentTime.getSeconds();

		if ( now.hours > 12 ) {
			now.hours -= 12;
		}

		console.log(now.hours, now.minutes, now.seconds);

		angel.minutes = (360*now.minutes)/60 + now.seconds/10;
		angel.hours = (360*now.hours)/12 + now.minutes/2;

		$hourHand.css({'transform':'rotate('+angel.hours+'deg)'});
		$minuteHand.css({'transform':'rotate('+angel.minutes+'deg)'});
	}

	 fnWolfharuWatch();
	 setInterval(function() {
	 	 fnWolfharuWatch();
	 },1000);
	
});