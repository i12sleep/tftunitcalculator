//this function needs to take care of calculations
//for calculating the probabilities of getting a certain cost unit
// what we want to do here is to have a function that calculates
// the probability of getting a certain unit from the pool


function calculate() {
	let unit_cost = document.getElementById("unitCost");
	let gold = document.getElementById("amntOfGold");
	let wanted = document.getElementById("costOOP");
	let req = document.getElementById("reqOOP");

	//from these params we are able to calculate it
	if (unit_cost === null || gold === null ||
		wanted === null || req === null) {
		return console.log("Please ")
	}
}
