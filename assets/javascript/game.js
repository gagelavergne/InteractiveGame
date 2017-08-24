$(document).ready(function() {

//Global Variables
var numberToGuess = [];
var wins = 0;
var loss = 0;
var totalScore = 0;
var crystal1 = 	Math.floor(Math.random() * (12-1) + 1);
var crystal2 = 	Math.floor(Math.random() * (12-1) + 1);
var crystal3 = 	Math.floor(Math.random() * (12-1) + 1);
var crystal4 = 	Math.floor(Math.random() * (12-1) + 1);

//Generates Random Number to achieve through guessing.

var randomNumber = Math.floor(Math.random() * 120 + 1);
console.log(randomNumber);
numberToGuess = randomNumber;

$("#numGuesses").html("Number to Guess: " + randomNumber);

//Generate key clicks for your Crystal images..	

	 $("#crystal1").click(function(){
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
		wins++;
		$("#numWins").html("Wins: " + wins);
		
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