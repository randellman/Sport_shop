function makeTimer() {

	var endTime = new Date("December 31, 2020 8:00:00");			
	endTime = (Date.parse(endTime) / 1000);

	var now = new Date();
	now = (Date.parse(now) / 1000);

	var timeLeft = endTime - now;

	var days = Math.floor(timeLeft / 86400); 
	var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
	var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
	var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

	if (hours < "10") { hours = "0" + hours; }
	if (minutes < "10") { minutes = "0" + minutes; }
	if (seconds < "10") { seconds = "0" + seconds; }

	$("#timer__hours").html(hours + "<span class = 'timer__dots'>....</span>" + "<span class = 'timer__text'>Hours</span>");
	$("#timer__minutes").html(minutes + "<span class = 'timer__dots'>....</span>" + "<span class = 'timer__text'>Minutes</span>");
	$("#timer__seconds").html(seconds + "<span class = 'timer__dots'>....</span>" + "<span class = 'timer__text'>Seconds</span>");		

}

setInterval(function() { makeTimer(); }, 1000);
