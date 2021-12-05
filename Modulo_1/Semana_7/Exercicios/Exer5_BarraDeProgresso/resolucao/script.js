const progressbar = document.querySelector('.progress-bar');
let value = 0;

setInterval (() => {
	if (value < 100) {
		value++;
		console.log(value);
		progressbar.style.setProperty('--progress', value);
		if (value == 100) {
			alert("Concluído!");
		}
	}
}, 1000);