// StopWatch

const stopWatch = document.querySelector('.stopWatch');
const startButton = document.querySelector('.startButton')
const pauseButton = document.querySelector('.pauseButton');
const continueButton = document.querySelector('.continueButton');
const restartButton = document.querySelector('.restartButton');

let seconds = 0,
	minutes = 0,
	hours = 0;

const startTime = () => {
	seconds += 1;
	if(seconds === 60){
		seconds = 0;
		minutes += 1;

		if(minutes === 60){
			minutes = 0;
			hours += 1;
		}
	}

	const secondText = seconds < 10 ? '0' + seconds.toString() : seconds;
	const minuteText = minutes < 10 ? '0' + minutes.toString() : minutes;
	const hourText = hours < 10 ? '0' + hours.toString() : hours;

	stopWatch.textContent = hourText + ':' + minuteText + ':' + secondText;
};

let intervalId;
startButton.addEventListener('click', () => {
	intervalId = setInterval(startTime, 1000);
});

pauseButton.addEventListener('click', () => {
	clearInterval(intervalId);
});

continueButton.addEventListener('click', () => {
	clearInterval(intervalId);
	intervalId = setInterval(startTime, 1000);
});

restartButton.addEventListener('click', () => {
	clearInterval(intervalId);
	seconds = 0, minutes = 0, hours = 0;
	intervalId = setInterval(startTime, 1000);
});