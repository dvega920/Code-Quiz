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

var timer = $('.timer-color');
var p = $('.card-text');
var btn = $('.btn');
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

function stopFunction(x) {
    clearInterval(x);
}

p.text("Quiz objective is to answer as many questions correctly, if incorrect answers is selected timer will decrement 5 seconds");

//event listener to start timer and quiz
btn.on('click', function () {

    if (count >= stopTimer) {
        var myCounter = setInterval(function () {
            count--;
            timer.text('Timer: ' + count);

            if (count === 0) {
                // clearInterval(myCounter);
                stopFunction(myCounter);
            }
        }, 1000)
        $(".card-title").text('Question: 1');
        p.text("Commonly used data types DO NOT include:");
    }
});
