$(function() {
	
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

		angel.minutes = (360*now.minutes)/60;
		angel.hours = (360*now.hours)/12 + angel.minutes/60;

		$('#WolfharuWatch strong').css({'transform':'rotate('+angel.hours+'deg)'});
		$('#WolfharuWatch em').css({'transform':'rotate('+angel.minutes+'deg)'});
	}

	 fnWolfharuWatch();
	 setInterval(function() {
	 	 fnWolfharuWatch();
	 },1000);
	
});