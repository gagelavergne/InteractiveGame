$(document).ready(function() {

var numberToGuess = [];
var wins = 0;
var loss = 0;
var totalScore = 0;
var crystal1 = 	Math.floor(Math.random() * (12-1) + 1);
var crystal2 = 	Math.floor(Math.random() * (12-1) + 1);
var crystal3 = 	Math.floor(Math.random() * (12-1) + 1);
var crystal4 = 	Math.floor(Math.random() * (12-1) + 1);


randomNumberGen(){
var randomNumber = Math.floor(Math.random() * 120 + 1);
console.log(randomNumber);
numberToGuess = randomNumber;

$("#numGuesses").html("Number to Guess: " + randomNumber);
}
	

	 $("#crystal1").click(function(){
 	var randomOnClick = Math.floor((Math.random() * 12) + 1);
 	console.log(randomOnClick);
 	totalScore = totalScore + randomOnClick;
 	$("#currentNum").html("Current Number: " + totalScore);
 	
	if (totalScore > randomNumber){
		alert("You Lose!");
		loss++;
		$("#numLosses").html("Losses: " + loss);
		randomNumberGen();
	}
	else if ( totalScore == numberToGuess){
		alert("You Win!");
		wins++;
		$("#numWins").html("Wins: " + wins);
		randomNumberGen(); 
	}
 	});


 $("#crystal2").click(function(){
 	var randomOnClick = Math.floor((Math.random() * 12) + 1);
 	console.log(randomOnClick);
 	totalScore = totalScore + randomOnClick;
 	$("#currentNum").html("Current Number: " + totalScore);
	if (totalScore > randomNumber){
		alert("You Lose!");
		loss++;
		$("#numLosses").html("Losses: " + loss);

	}
	else if ( totalScore == numberToGuess){
		alert("You Win!"); 
		win++;
		$("#numWins").html("Wins: " + wins);
	}
	});

 
 $("#crystal3").click(function(){
 	var randomOnClick = Math.floor((Math.random() * 12) + 1);
 	console.log(randomOnClick);
 	totalScore = totalScore + randomOnClick;
 	$("#currentNum").html("Current Number: " + totalScore);
	if (totalScore > randomNumber){
		alert("You Lose!");
		loss++;
		$("#numLosses").html("Losses: " + loss);
	}
	else if ( totalScore == numberToGuess){
		alert("You Win!");
		win++;
		$("#numWins").html("Wins: " + wins); 
	}
	});

 
 $("#crystal4").click(function(){
 	var randomOnClick = Math.floor((Math.random() * 12) + 1);
 	console.log(randomOnClick);
 	totalScore = totalScore + randomOnClick;
 	$("#currentNum").html("Current Number " + totalScore);
	if (totalScore > randomNumber){
		alert("You Lose!");
		loss++;
		$("#numLosses").html("Losses: " + loss);
	}
	else if ( totalScore == numberToGuess){
		alert("You Win!"); 
		win++;
		$("#numWins").html("Wins: " + wins);	
	}
	});

});