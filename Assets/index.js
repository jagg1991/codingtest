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