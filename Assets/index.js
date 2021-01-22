// creating variables for the start button, questions box, choices, and the timer
var startButton = document.querySelector("#startButton");
var questionBox = document.querySelector("#questionsBox");
var choiceButton = document.querySelector("#choices");
var timeEl = document.querySelector(".timer");

var questionCount = 0;
var timeLeft = 45;
var score = 0;
var correctAnswer;

//creating object array for the questions, answers, and the correct answer. 
var questions = [

    {
        q: 'What is a boolean?',
        a: ['A red ballon', 'a true or false statement', 'a variable', 'a statement'],

        correct: 'a true or false statement',
    },
    {
        q: 'what is a variable',
        a: ['the nouns of JavaScript', 'a true statement', 'a false statement', 'an array'],
        correct: '',
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
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        timeLeft--;
        timeEl.textContent = timeLeft;
        var h1El = document.createElement("h1");
        var btEl = document.createElement("button");
        questionBox.appendChild(h1El);
        choiceButton.appendChild(btEl);

        for (i = 0; i < questions.length; i++)

            if (secondsLeft === 0) {
                // Stops execution of action at set interval
                clearInterval(timerInterval);
                // Calls function to create and append image
                sendMessage();
            }

    }, 1000);
});

function sendMessage() {
    timeEl.textContent = " ";
    mainEl.appendChild(imgEl);

}

setTime();
