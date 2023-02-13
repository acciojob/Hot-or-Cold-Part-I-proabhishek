
var btn = document.getElementById("btn");
var numPtag = document.getElementById("num");
var res = document.getElementById("respond");
var inputValue = document.getElementById("guess").value;


function checkGame () {
	var diff = Number(inputValue) - Number(numPtag.value);
	if(Math.abs(diff) <= 5) {
	res.textContent = "Hot";
	}
	else {
		res.textContent = "cold";
	}
}

checkGame();

function generateRandomNumber() {
    var no = Math.floor(Math.random() * 54) - 14;
	numPtag.textContent = no;
	checkGame();
}

btn.addEventListener("click", generateRandomNumber);