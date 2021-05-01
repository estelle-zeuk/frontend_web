
function downloadVideo(){
	console.log("Download this video");


	var data = {"type": "download clicked"};
	window.postMessage(data, "*");
}

function downloadURI(event){
	event.preventDefault();
	event.stopPropagation();

	var url = "https://www.youtube.com/watch?v=" + window.ytplayer.config.args.video_id;  //event.currentTarget.getAttribute("href");
	var name = document.getElementsByTagName("title")[0].innerText;
	var data = {url:url, name:name, sender: "YTDL"};

	window.postMessage(data, "*");

	return false;
}




window.onload = () => {

	var videoUrl = window.ytplayer.config.args.video_id;

	console.log("Our extension has loaded");

	 console.log(videoUrl);

	 //var container = document.getElementById("menu-container");
	 var btn = document.createElement("button");
	 btn.className = "style-scope ytd-menu-renderer force-icon-button style-default size-default";
	 btn.setAttribute("role", "button");
	 btn.innerText = "Download";

	 //container.appendChild(btn);

	 document.getElementById("top-level-buttons").appendChild(btn);



	 btn.addEventListener("click", downloadURI);


	

}