var video;

window.addEventListener("load", function() {
	// console.log("Good job opening the window")
	video = document.querySelector("#player1");

});

document.querySelector("#play").addEventListener("click", function() {
	// console.log("Play Video");
	video.play();
	// console.log("Video volume is " + video.volume);
	document.querySelector("#volume").innerHTML = (video.volume * 100) + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.95;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 1.05;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime < video.duration - 15) {
		video.currentTime += 15;
	}
	else {
		video.currentTime = 0;
	}
	console.log("New video location is " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) {
		video.muted = true;
		// console.log("Video volume is " + video.volume);
		this.innerHTML = "Unmute";
	}
	else {
		video.muted = false;
		this.innerHTML = "Mute";
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	document.querySelector("#volume").innerHTML = this.value + "%";
	video.volume = this.value / 100;
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool")
});