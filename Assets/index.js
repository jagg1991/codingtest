// creating variables for the start button, questions box, choices, and the timer
var startButton = document.querySelector("#startButton");
var questionBox = document.querySelector("#questionsBox");
var choiceButton = document.querySelector("#choices");
var timeEl = document.querySelector(".timer");
var corEl = document.querySelector("#cor");
var inCorEl = document.querySelector("in-cor")

var questionCount = 0;
var timeLeft = 45;
var score = 0;
var correctAnswer;
var corAnswer = 0;
var inCorAnswer = 0;


var h1El = document.createElement("h1");
var btEl1 = document.createElement("button");
var btEl2 = document.createElement("button");
var btEl3 = document.createElement("button");
var btEl4 = document.createElement("button");
var h2El = document.createElement("h2");

//creating object array for the questions, answers, and the correct answer. 
var objects = [

    {
        q: 'What is a boolean?',
        a: ['A red ballon', 'a true or false statement', 'a variable', 'a statement'],

        correct: 'a true or false statement',
    },
    {
        q: 'what is a variable',
        a: ['the nouns of JavaScript', 'a true statement', 'a false statement', 'an array'],
        correct: 'the nouns of JavaScript',
    },
    {
        q: 'What does an prompt do?',
        a: ['Makes things move faster', 'makes things move slower', 'loops', 'a pop up with a text box'],
        correct: 'a pop up with a text box',
    },
    {
        q: 'What goes inside the brackets in an array?',
        a: ['a boolean', 'a statement', 'indexes', 'more brackets'],
        correct: 'indexes',
    },



];


startButton.addEventListener("click", function setTime() {

    questionBox.appendChild(h1El);
    choiceButton.appendChild(btEl1);
    choiceButton.appendChild(btEl2);
    choiceButton.appendChild(btEl3);
    choiceButton.appendChild(btEl4);
    choiceButton.appendChild(h2El);
    // Sets interval in variable
    sendMessage();
    var timerInterval = setInterval(function () {
        timeLeft--;
        timeEl.textContent = timeLeft;

        if (timeLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);

            // Calls function to create and append image
            //sendMessage();
        }

    }, 1000);
});

function sendMessage() {

    if (questionCount >= objects.length) {
        return console.log("Game Over!")
    }
    h1El.textContent = objects[questionCount].q;
    btEl1.textContent = objects[questionCount].a[0];
    btEl2.textContent = objects[questionCount].a[1];
    btEl3.textContent = objects[questionCount].a[2];
    btEl4.textContent = objects[questionCount].a[3];
    correctAnswer = objects[questionCount].correct;
    questionCount++; //increasing index of object
}

//setTime();


choiceButton.addEventListener("click", function (event) {

    var element = event.target;
    if (element.matches("button")) {
        var userChoice = event.target.textContent;
        if (userChoice === correctAnswer) {
            timeLeft += 10;
            h2El.textContent = "Correct!"
            sendMessage();
        }
        else {
            timeLeft -= 10;
            h2El.textContent = "Incorrect!"
            sendMessage();
        }



    }
});