
s = document.createElement("script");
s.src = chrome.extension.getURL("src/youtubed.js");

/*s.onload = function(){
	this.remove();
}*/

//document.head.appendchild(s);

//document.getElementsByTagName("body")[0].appendChild(s);

(document.head || document.documentElement).appendChild(s);


window.addEventListener("message", function(e){
	console.log("download:", e);
	//var ext = e.data.type.split("/")[1].split(";")[0];
	var fn = e.data.name; //+ "." + ext;


	console.log(fn);

	chrome.runtime.sendMessage({name: fn, url: e.data.url}, function(res){
		console.log(res);
	});
	//chrome.downloads.download({url: e.data.url, filename: fn});
});