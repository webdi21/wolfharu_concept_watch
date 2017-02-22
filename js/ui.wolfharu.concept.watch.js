$(function() {
	var $el = $('#WolfharuWatch');
	var tempHtml = '', $hourHand, $minuteHand, $watchText;
	tempHtml += '<div class="WolfharuWatchInner">';
	tempHtml += '	<div class="WolfharuWatchContent">';
	tempHtml += '		<strong class="hourHand"><i></i></strong>';
	tempHtml += '		<em class="minuteHand"><i></i></em>';
	//tempHtml += '		<span class="watchText"><em></em> <em></em><i>:</i><em></em><i>:</i><em></em></span>';
	tempHtml += '		<span class="hourLine"><i></i></span><span class="hourLine"><i></i></span><span class="hourLine"><i></i></span><span class="hourLine"><i></i></span>';
	tempHtml += '	</div>';
	tempHtml += '</div>';
	
	$el.append(tempHtml);
	$hourHand = $el.find('strong.hourHand');
	$minuteHand = $el.find('em.minuteHand');
	//$watchText = $el.find('span.watchText > em');
	
	function fnWolfharuWatch() {
		var currentTime = new Date();
		var now = {};
		var nownum = {};
		var angel = {};

		nownum.division = 'AM';
		nownum.hours = now.hours = currentTime.getHours();
		nownum.minutes = now.minutes = currentTime.getMinutes();
		nownum.seconds = now.seconds = currentTime.getSeconds();
		
		if ( now.hours >= 12 ) {
			nownum.division = 'PM';
		}

		if ( now.hours > 12 ) {
			now.hours -= 12;
			nownum.hours -= 12;
		}
		
		angel.minutes = (360*now.minutes)/60 + now.seconds/10;
		angel.hours = (360*now.hours)/12 + now.minutes/2;
		
		if ( nownum.hours < 10 ) {
			nownum.hours = '0'+nownum.hours;
		}
		if ( nownum.minutes < 10 ) {
			nownum.minutes = '0'+nownum.minutes;
		}
		if ( nownum.seconds < 10 ) {
			nownum.seconds = '0'+nownum.seconds;
		}
		
		//$watchText.eq(0).text(nownum.division);
		//$watchText.eq(1).text(nownum.hours);
		//$watchText.eq(2).text(nownum.minutes);
		//$watchText.eq(3).text(nownum.seconds);

		$hourHand.css({'transform':'rotate('+angel.hours+'deg)'});
		$minuteHand.css({'transform':'rotate('+angel.minutes+'deg)'});
	}

	 fnWolfharuWatch();
	 setInterval(function() {
	 	 fnWolfharuWatch();
	 },1000);
	
});