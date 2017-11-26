$("document").ready(function() {

	//Generate a number for the user to guess
	var numberToGuess = Math.floor(Math.random() * 150);
	console.log(numberToGuess);

	//Write to the document the number to guess
	$("#number").text(numberToGuess);

	//Create a variable to keep track of the user's score
	var counter = 0;

	//Create array for the stone values
	var values = [1, 2, 5, 10, 20, 50];

	//Create array for IDs of stones
	var stoneIDs = [

		"power",
		"mind",
		"reality",
		"soul",
		"space",
		"time"

	];

	var imageByID;

	//Give values to stones
	for (i = 0; i < values.length; i++) {

		$(".stone").attr("data-stonevalue", values[i]);
			
	};

	// //Assign values to the stones
	// for (i = 0; i < length.stoneValues; i++) {
	// 	$(".stone").attr("data-value", stoneValues[i]);
	// 	console.log($(this).data("value"));
		
	// }








});