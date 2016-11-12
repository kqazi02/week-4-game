$(document).ready(function(){

	//Declare all the global variables here

	var randNum;
	var wins;
	var losses;
	var totalScore;
	var buttonValues;

	//===================================

	//Write functions below
	function startGame(){

		wins = 0;
		losses = 0;
		totalScore = 0;
		buttonValues = [];
		randNum = 0;


		function reset(){

			randNum = Math.floor(Math.random()*101) + 19;

			totalScore = 0;

			for (var i = 0; i < 4; i++){

				var randomVal = Math.floor(Math.random()*12)+1;
				buttonValues[i] = randomVal;

			}

		}; //reset function ends here

		function display(){

			$("#randNum").html(randNum);
			$("#winsLosses").html("<p>Wins: " + wins + "</p><br>"
				+ "<p>Losses: " + losses + "</p>");
			$("#totalScore").html(totalScore);

		}; //display function ends here

		function checkScore(){
			if (totalScore === randNum){
			wins++;
			reset();
			}
			else if (totalScore > randNum){
			losses++;
			reset();
			}
			
		}

		reset();

		display();


	//===================================
		
	//Code game play below
		$("#diamond").on("click", function(){
			var diamondValue = buttonValues[0];
			totalScore += diamondValue;
			checkScore();
			display();
			console.log(buttonValues);
			}); //diamond button coding ends here

		$("#diaspore").on("click", function(){
			var diasporeValue = buttonValues[1];
			totalScore += diasporeValue;
			checkScore();
			display();
			console.log(buttonValues);
		}); //diamond button coding ends here

		$("#sapphire").on("click", function(){
			var sapphireValue = buttonValues[2];
			totalScore += sapphireValue;
			checkScore();
			display();
			console.log(buttonValues);
		}); //diamond button coding ends here

		$("#gem").on("click", function(){
			var gemValue = buttonValues[3];
			totalScore += gemValue;
			checkScore();
			display();
			console.log(buttonValues);
		}); //diamond button coding ends here


	}; //start game function ends here

	startGame();

}); //document ready function ends here
