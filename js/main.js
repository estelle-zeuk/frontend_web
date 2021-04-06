var isPremiumUser = false;

if (isPremiumUser == true) {
	console.log("Thanks for being a loyal customer")

} else{
	console.log("You should subscribe to our premium service")
}


var myAge = 28;

if (myAge < 1) {
	console.log("You are a baby.")
} else if (myAge < 3) {
	console.log("You are a todder.")
} else if (myAge < 10) {
	console.log("You are a big kid")
} else if (myAge <= 19) {
	console.log("You are a teenager")
} else if (myAge < 40) {
	console.log("You are an adult")
} else {
	console.log("You must be old, you are not in our records")
}


for (var i = 0; i < 10; i++) {
	console.log("Current i value is ", i);
}

function myFunction(){
	console.log("My name is Estelle");
}

myFunction();


function printName(name, age){
	console.log("Hello ", name, " You are ", age);
}

printName("Essy", 28);



var btn = document.getElementById('go-btn');

function btnClicked(){
	console.log("Button clicked!");
	btn.removeEventListener("click", btnClicked);
	document.getElementById("text").innerHTML = "Don't click again";

}



btn.addEventListener("click", btnClicked);