
//initialize timer variable & score variables
var timer = 5;
var correct = 0;
var wrong = 0;
var unanswered = 10;

//declare a variable so that we can clear the setInterval function
var intervalId;

$("#quiz-screen").hide();

//define a start() function that will begin the timer that counts down from x seconds
function start() {
	intervalId = setInterval(decrement, 1000);
}

//define a decrement() function that will display the timer's countdown
function decrement() {

  timer--;

  $("#time-left").html(timer);

  if (timer === 0) {

    stop();

    
  }
}


//define a stop() funtion that will stop the timer & display the results screen
function stop() {
	// stop timer
 	clearInterval(intervalId);
 	//display results on #results-screen--NEEDED--
 	$("#quiz-screen").html("<h2>Times Up!</h2><h3>Correct Answers: " + correct + "</h3><h3>Wrong Answers: " + wrong + "</h3><h3>Unanswered: " + unanswered + "</h3>");
 	console.log("Time Up!");
}


//run sixtySeconds when the user clicks #btnStart
$("#btnStart").on("click", function() {
	start();
	console.log("you hit start");
	$("#starter-screen").hide();
	$("#quiz-screen").show();
});

//submit button calls stop() function
$("#submit").on("click", function() {
	stop();
});


