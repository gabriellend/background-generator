// ELEMENTS
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.querySelector(".random");

// FUNCTIONS
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function generateRandomGradient(event) {
	var random1 = '#' + Math.floor(Math.random()*16777215).toString(16);
	var random2 = '#' + Math.floor(Math.random()*16777215).toString(16);
	console.log(random1)
	color1.setAttribute('value', random1);
	color2.setAttribute('value', random2);
	setGradient();
}

// EVENT LISTENERS
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener('click', generateRandomGradient)

// INITIALIZE BACKGROUND GRADIENT
setGradient();