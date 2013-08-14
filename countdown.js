$(document).ready(function() {
	var endTime = new Date();
	endTime.setFullYear(2014);
	endTime.setMonth(0);
	endTime.setDate(1);
	endTime.setHours(0);
	endTime.setMinutes(0);

	var id = setInterval(function() {
		var startTime = new Date();
		
		var msec = endTime.getTime() - startTime.getTime();
		
		var sec = Math.floor(msec / 1000);
		var min = Math.floor(sec / 60);
		var hour = Math.floor(min / 60);
		var day = Math.floor(hour / 24);
		
		sec = sec % 60;
		min = min % 60;
		hour = hour % 24;
		
		if (sec < 10) {
			sec = '0' + sec;
		}
		if (min < 10) {
			min = '0' + min;
		}
		if (hour < 10) {
			hour = '0' + hour;
		}
		
		if (msec - 1000 < 0) {
			clearInterval(id);
		}
				
		$('#timer').text(day + ':' + hour + ':' + min + ':' + sec);
	}, 1000);
});