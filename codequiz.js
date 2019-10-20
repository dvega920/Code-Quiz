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

// console.log(questions[0].choices);

//function to stop and clear timer
function stopFunction(x) {
    clearInterval(x);
}

//function to create a new element
function createEl(el) {
    var newEl = $(el);
    newEl.text("");
    $(".card-body").append(el);
}

p.text("Quiz objective is to answer as many questions correctly, if incorrect answers is selected timer will decrement 5 seconds");


// console.log(questions[0].choices.length);


//event listener to start timer and quiz

btn.click(function () {

    if (count >= stopTimer) {
        var myCounter = setInterval(function () {
            count--;
            timer.text('Timer: ' + count);

            if (count === 0) {
                // clearInterval(myCounter);
                stopFunction(myCounter);
            }
        }, 1000)
        
        //removes unwanted elements
        $("h5").remove();
        $(".card-text").remove();
        $(".submit").remove();
        
        //Sets the first question and series of options
        $(".card-header h1").text("Question 1:");
        createEl("<h2>");
        $("h2").addClass("questions-title");
        $(".questions-title").text(questions[0].title);

        
        //Loop to iterate through choices for questions array at index 0
        for (var i = 0; i < questions[0].choices.length; i++) {
            // console.log(questions[0].choices.length);
            createEl("<a href=\"\#\" class=" + "choice-" + i + ">");
            $('a').addClass("btn btn-primary choicesProp")
            // console.log(questions[0].choices[i]);
            $(".choice-" + i).text(questions[0].choices[i]);
            createEl("<br>");
            $(".choice-" + i).append("<br>");
        }


    }
})
});