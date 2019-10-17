/* PSEUDO CODE 

DISPLAY (use Bootstrap)

- <a> to view high scores at the top left of screen
- timer at top right of screen
- h1 for page title "Coding Quiz"
- p tag for game description
- button to start quiz
- h1 for questions
- unordered list of buttons for choices
- text box to enter initials
- submit button to submit initials

FUNCTIONALITY

- create highScores variable to store...high scores
- 

*/

var timer = document.querySelector('.timer-color');
var p = document.querySelector('.card-text');
var btn = document.querySelector('.btn');
var count = 5 //seconds;
var stopTimer = 0;
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
];

p.textContent = "Quiz objective is to answer as many questions correctly, if incorrect answers is selected timer will decrement 5 seconds";

//event listener to start timer and quiz
btn.addEventListener('click', function () {
    if (count >= stopTimer) {
        var myCounter = setInterval(function () {
            count--;
            timer.textContent = 'Timer: ' + count;

            //function to loop through questions array and console log them
            function getQuestions() {
                questions.forEach(function (item) {
                    this.questions.title;
                })
            };
            getQuestions(); //function call
            // var ulEl = document.querySelector('.list');
            var btnEl1 = document.querySelector('.choice1');
            var btnEl2 = document.querySelector('.choice2');
            var btnEl3 = document.querySelector('.choice3');
            var btnEl4 = document.querySelector('.choice4');

            btnEl1.textContent = questions[0].choices[0];
            btnEl2.textContent = questions[0].choices[1];
            btnEl3.textContent = questions[0].choices[2];
            btnEl4.textContent = questions[0].choices[3];
        }, 1000)
        //need to clearInterval at somepoint 
        // p.textContent = questions[0].title;




    }
});
// click event works but if clicked again, timer goes all "wonky"



