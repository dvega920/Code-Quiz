$(document).ready(function(){
    
var timer = $('.timer-color');
var p = $('.card-text');
var btn = $('.btn');
var count = 75; //seconds
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

//function to stop and clear timer
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
        
        //Sets the first question and series of options
        $(".card-title").text('Question: 1');
        p.text("Commonly used data types DO NOT include:");
        
        //Need to create an element to store the choices
        $(".submit").text('Submit');

    }
})
});