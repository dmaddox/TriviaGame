//all questions & answers
var qa = [
	{
		name: "q1",
		question: "What is April’s legal married name?",
		choice: ["April Dwyer", "April Roberta Ludgate", "April Roberta Ludgate-Dwyer", "April Satan-Sebastian"],
		answer: "April Dwyer"
	}, {
		name: "q2",
		question: "What kind of car does Donna drive?",
		choice: ["Jaguar", "Rolls Royce", "Mercedes-Benz", "Ferrari"],
		answer: "Mercedes-Benz"
	}, {
		name: "q3",
		question: "Which ’90s supermodel plays Jerry’s wife?",
		choice: ["Claudia Schiffer", "Christie Brinkley", "Linda Evangelista", "Stephanie Seymour"],
		answer: "Christie Brinkley"
	}, {
		name: "q4",
		question: "Where was Leslie Knope born?",
		choice: ["Eagleton", "Pawnee", "Indianapolis", "On the steps of the Lincoln Memorial in Washington, D.C."],
		answer: "Eagleton"
	}, {
		name: "q5",
		question: "What is Andy’s alter-ego?",
		choice: ["Burt Macklin, FBI", "Randy Handler, CIA", "Jack Thrifty, DEA", "Paula Hart, PTA"],
		answer: "Burt Macklin, FBI"
	}, {
		name: "q6",
		question: "What is the name of the land/pit that started it all?",
		choice: ["Lot 59", "Lot 17", "Lot 33", "Lot 48"],
		answer: "Lot 48"
	}, {
		name: "q7",
		question: "Which of the following is not one of Andy’s band names?",
		choice: ["Scarecrow Boat", "Flames for Flames", "Nothing Rhymes With Orange", "Kitten Catastrophe"],
		answer: "Kitten Catastrophe"
	}, {
		name: "q8",
		question: "How does Jerry check his email?",
		choice: ["He calls his wife, who checks it for him and reads the messages aloud", "He uses AOL, which he can only access via a dial-up connection", "He goes to AltaVista and types in \“please go to Yahoo.com\"", "He has literally never checked his email"],
		answer: "He goes to AltaVista and types in \“please go to Yahoo.com\""
	}, {
		name: "q9",
		question: "Which of the following is not one of Tom’s business ideas?",
		choice: ["Disco Dairy, basically just butter with glitter in it", "Snail Mail, an escargot delivery service", "Eclipse, a nightclub that’s only open for one hour, two times a year, with a cover charge of $5,000", "Loubabytins, high heels for babies"],
		answer: "Loubabytins, high heels for babies"
	}, {
		name: "q10",
		question: "When Ron says, 'Give me all the bacon and eggs you have,' what does he mean?",
		choice: ["\"Give me a lot of bacon and eggs.\"", "\"Give me enough bacon and eggs for a dozen men.\"", "\"Give me all the bacon and eggs you have.\"", "\"Give me bacon and eggs until I keel over and pass out at this table.\""],
		answer: "\"Give me all the bacon and eggs you have.\""
	}];

//initialize timer variable & score variables
var timer = 60;
var correct = 0;
var wrong = 0;
var unanswered = 0;
var questionCount = 0;

//declare a variable so that we can clear the setInterval function
var intervalId;

//Hide #quiz-screen by default
$("#quiz-screen").hide();

//Start button event listener
$("#btnStart").on("click", function() {
	//calls the start function
	start();
});

//Submit button event listener -- using $(document) since the #submit button is created dynamically
$(document).on("click", "#submit", stop);

				
//display the quiz
function displayQuiz() {
	$("#quiz-screen").append("<form id='quiz'>");
	//pose each question
	for (i = 0; i < qa.length; i++) {
		//store which question of the object in a variable called thisQuestion
		var thisQuestion = qa[i];
		//create a new ul and save it in a title variable
		var title = $("<ul>");
		//add a class to the ul
		title.attr("class", thisQuestion.name);
		//update the title ul to have a header & pose the question
		title.html("<h3>" + thisQuestion.question + "</h3>");
		
		//present each answer
		for (j = 0; j < qa[0].choice.length; j++) {
			
			//create a new li an save it in a question variable
			var question = $("<li>");
			//add the question to the li element
			question.text(thisQuestion.choice[j]);
			//create a radio element
			var addRadio = $("<input type='radio'>");
			//add a name attribute to the radio element, naming it after the question name
			addRadio.attr("name", thisQuestion.name);
			//add a class attribute to the radio element, naming it after the question name
			addRadio.attr("value", thisQuestion.choice[j]);
			//add a class attribute to the radio element, naming it after the question name
			addRadio.attr("id", thisQuestion.name);
			//prepend the radio button to the li element
			addRadio.attr("class", "radio");
			//prepend the radio button to the li element
			question.prepend(addRadio);
			//append the questions after the title
			title.append(question);
		
		};
		$("#quiz").append(title);
	};
	//add the submit button 
	$("#quiz").append("<input type='submit' value='Submit Answers' id='submit'>");
};

//define a start() function that will begin the timer that counts down from x seconds
function start() {
	intervalId = setInterval(decrement, 1000);
	$("#starter-screen").hide();
	$("#quiz-screen").show();
	displayQuiz();
};

//define a decrement() function that will display the timer's countdown
function decrement() {
  timer--;
  $("#time-left").html(timer);
  if (timer === 0) {
    stop();
  };
};

//define a stop() funtion that will stop the timer & display the results screen
function stop() {
	// stop timer
 	clearInterval(intervalId);
 	//calculate results
 	calcResults();
};

//calculate results function
function calcResults() {
	for (k = 1; k < qa.length + 1; k ++) {
		var userGuess = $('input[name=q' + k + ']:checked').val();
		
		if (userGuess === qa[k-1].answer) {
			
			correct ++; 
		} else if (userGuess === undefined) {
			unanswered++; 
		} else {
			
			wrong ++;
		}
	}
	$("#quiz-screen").html("<h2>Times Up!</h2><span id='scorecard'>Scorecard</span><h3>Correct Answers: " + correct + "</h3><h3>Wrong Answers: " + wrong + "</h3><h3>Unanswered: " + unanswered + "</h3>");
 	
};

