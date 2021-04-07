

/*var btn = document.getElementById('go-btn');

function btnClicked(){
	console.log("Button clicked!");
	
	var customText = document.getElementsByClassName("my-input");
	var textArea = document.getElementsByClassName("my-textarea");

	var results = document.getElementById("text");

	console.log(textArea);

	results.innerHTML = "Hello, " + customText[0].value + "<br>";
	results.innerHTML += "Message: " + textArea[0].value;
}




btn.addEventListener("click", btnClicked);

function saySomething(phrase){
	console.log("You said: " + phrase);
}
var p = "Jesus loves you!"
saySomething(p);


function getPhrase(params){

	var l=0;


	if (typeof params.phrase !== "undefined") {
		l = params.phrase.length;
	}
	
	
	if (typeof params.another !== "undefined") {
		l += params.another.length;
	}


	return l;
}

var p1 = "God has a wonderful plan for you!";
var p2 = "God is love";

var phraseT = getPhrase({ another:p2});
console.log(phraseT);


function missinno(numbers){
	var missing = -1;

	for (var i = 0; i <= numbers.length; i++) {
		if (numbers.indexOf(i) === -1) {
			missing = i;
		}
	}

	return missing
}

var numbers = [9, 1, 4, 8, 3, 7, 5, 2, 10];

console.log(missinno(numbers));*/


class Animal{

	constructor(name, height, weight){
		console.log("Animal created: ", name);
		this.name = name;
		this.height = height;
		this.weight = weight;
	}

	nameLength(){
		return this.name.length;
	}

}


class Dog extends Animal{
	constructor(name, height, weight, barkVolume, leashColor, speed){
		super(name, height, weight);

		this.barkVolume = barkVolume;
		this.leashColor = leashColor;
		this.speed = speed;
	}

	bark(){
		if(this.barkVolume > 50){
			console.log(this.name, "barks loudly! (Volume: ", this.barkVolume, ")");
		} else {
			console.log(this.name, "barks timidly. (Volume: ", this.barkVolume, ")");
		}
	}
}

class Fish extends Animal{

	constructor(name, height, weight, swimSpeed){
		super(name, height, weight);
		this.swimSpeed = swimSpeed;
	}

	swim(chaserSpeed){
		if(this.barkVolume > 50){
			console.log(this.name, "swims around quickly. (Speed: ", this.swimSpeed, ")");
		} else{
			console.log(this.name, "swims around slowly. (Speed: ", this.swimSpeed, ")");
		}

		if (this.swimSpeed > chaserSpeed) {
			console.log(this.name, "got away!");

		}else {
			console.log(this.name, "was caught");
		}
	}
}

var doggy = new Dog("Rex", 24, 36, 66, "purple", 52);

var nemo = new Fish("Nemo", 6, 4, 26);

doggy.bark();

nemo.swim(doggy.speed);



