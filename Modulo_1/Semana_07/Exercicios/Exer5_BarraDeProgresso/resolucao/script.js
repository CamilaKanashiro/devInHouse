const progressbar = document.querySelector('.progress-bar');
let value = 0;

const progressBar = setInterval (() => {
	if (value < 100) {
		value++;	
		progressbar.style.setProperty('--progress', value);
	} else {
		alert("Concluído!");
		clearInterval(progressBar);
	}
}, 1000);