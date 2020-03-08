



// List of Featured streams
var stream1 = "https://player.twitch.tv/?channel=method&autoplay=false";
var stream2 = "https://player.twitch.tv/?channel=esl_csgo&autoplay=false";
var stream3 = "https://player.twitch.tv/?channel=ellesmere_gaming&autoplay=false";
var stream4 = "https://player.twitch.tv/?channel=lec&autoplay=false";
var stream5 = "https://player.twitch.tv/?channel=riotgamesjp&autoplay=false";





window.onload = replaceSrc;


//Picks a randomly selected stream from the above list
var streamList = [stream1, stream2, stream3, stream4, stream5];
var randomStream = streamList[Math.floor(Math.random() * streamList.length)];

function replaceSrc() {
	document.getElementById("streamFrame").src = randomStream;
}