"use strict"

var simonSequence = [];
var userIndex = [];
var buttons = $('.button');
var buttonNumber; 
var score = 0;
var level = 0;

function animateColor(color_num)
{
	$('[data-number="' + color_num + '"]').animate(
	{
		opacity: 1.0
	}, 500).animate(
	{
		opacity: 0.5
	}, 500);
}

function randomColor()
{
	buttonNumber = Math.floor(Math.random() * 4);
	return buttonNumber;
}

function addNewNumber()
{
	if (level != 0)
	{
		increaseScore(); 
	}
	userIndex = [];
	simonSequence.push(randomColor());
	increaseLevel(simonSequence);
}

function displaySequence()
{
	simonSequence.forEach(function (color_num, index)
	{
		setTimeout(function()
		{
			$('#sound' + color_num).get(0).play();
			animateColor(color_num)	
		}, (1000 * (index + 1)))
	})
}

function newGame()
{
	addNewNumber();
	displaySequence(); 
}

//start game function when you click start game button
$('.start').click(function()
{
	$(this).attr("disabled", true);
	newGame();
});				

$('.button').click(function()
{
	checkSequence($(this).data('number'));
});	

function checkSequence(userNumber)
{
	userIndex.push(userNumber);
	animateColor(userNumber);
	$('#sound' + userNumber).get(0).play();
	if (userIndex[userIndex.length-1] != simonSequence[userIndex.length-1])
	{
		alert("end game");
		$('.start').attr("disabled", false);
		score = 0; 
		level = 0;
		simonSequence = [];
		$("#score").text(score);
		$("#level").text(level);
	}
	else 
	{
		validated();
	}
}

function validated ()
{
	if (userIndex.length == simonSequence.length){
		addNewNumber();
		displaySequence();
	}
}

//function to increment score and level
//function increaseScore(simonSequence)

function increaseLevel(simonSequence)
{
	level = (simonSequence.length);
	$("#level").text(level);
}

function increaseScore()
{
	score += 1;
	$("#score").text(score);
}



//functions should try and do just one thing... 

//-- Done
	//console.log(this);
	//console.log("start");
	//function to light up first light
	//console.log(button);
	//console.log(buttons[buttonNumber]);//random number between 1-4
	//randomColor.push(); // capture to a variable and push onto array
	//function to generate number and add to sequence for math.random
	//function to add # to simon sequence
	//function to start game
	//loop thru simonSequence 
	//call light up function inside setTimeout
	//delay for timeout 1000 * (index + 1) for each round
	//function to check user input against simon sequence
	//checking each time they re clicked - call animate function
	//call and display- set timeout increase delay by same amount of time.. +  1 second for each extra level
	//set timeOut inside a function to call over and over again...
	//I am going to animate every time simon goes, and every time I go. Use same function for simon and player
	//Animate function called within the simon function. Create one function and call that function in the next function. 
	//function for display seq. 
	//then make function to take a random number and know what to do with it. 
	//if they get the sequence right, continue the loop- where my loop will be
	//clear sequence, reset score, and start new game
	//function to end the game, reset game, score and level
	//function for incorrect sequence and end of game
	//function to start game over
	// function clearSequence()

