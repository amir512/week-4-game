$("document").ready(function() {
	//Generate a number for the user to guess
	var numberToGuess = Math.floor(Math.random() * 150);
	console.log(numberToGuess);

	$("#number").text(numberToGuess);

	//Create a variable to keep track of the users score
	var counter = 0;

	//Create variable to keep track of users wins
	var wins = 0;

	//Create variable to keep track of users losses
	var losses = 0;

	//Create array for stone values
	var values = [1, 2, 5, 10, 20, 50];

	//Create array for images
	var images = [

		"assets/images/powerStone_purple.jpg",
		"assets/images/mindStone_yellow.jpg",
		"assets/images/realityStone_red.jpg",
		"assets/images/soulStone_orange.jpg",
		"assets/images/spaceStone_blue.jpg",
		"assets/images/timeStone_green.jpg"
	];


//Create button to reset the game
var reset = $("<button><h2>Reset</h2></button>");
reset.addClass("reset");
$("#scoreBoard").append(reset);

	

//Create stone images (with values) on the page
for (i = 0; i < images.length; i++) {

	var imageStone = $("<img>");
	imageStone.addClass("stone");
	imageStone.attr("src", images[i]);
	imageStone.attr("data-stonevalue", values[i]);
	$("#rowOfStones").append(imageStone);
};

//Create function to register user guesses
	$(".stone").on("click", function() {

		var stonevalue = $(this).attr("data-stonevalue");
		console.log(stonevalue);
		stonevalue = parseInt(stonevalue);
		counter += stonevalue;
		$("#userScore").text("Your total is: " + counter);

		if (counter == numberToGuess) {
			alert("You guessed right!");
			wins++;
			document.getElementById("userWins").innerHTML = "Wins: " + wins; 
		};

		if (counter > numberToGuess) {
			alert("You loose! You went over! Sad!");
			losses++;
			document.getElementById("userLosses").innerHTML = "Losses: " + losses;
		};
	});

//Create function to reset the game and clear the user's guess
	$(".reset").on("click", function() {

		numberToGuess = Math.floor(Math.random() * 150);
		$("#number").text(numberToGuess);
		counter = 0;
		$("#userScore").text("Your total is: " + counter);
	});
});