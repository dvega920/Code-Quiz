var $timer = $('.timer-color');
var $p = $('.card-text');
var $btn = $('.btn');
var currentIndex = 0;
var penalty = 5;
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


//function to stop and clear timer. Takes in argument "x" which will pass "myCounter" which is the variable that stores the setInterval(). 
function stopFunction(x) {
    clearInterval(x);
}

//function to create a new element
function createEl(el) {
    var newEl = $(el);
    newEl.text("");
    $(".card-body").append(el);
}

function getQuestions() {
    questions.forEach(function (item) {
        $(".card-body").html("<a>" + item.title);
    })
}

//Game objective text on landing page
$p.text("Quiz objective is to answer as many questions correctly before time runs out, if incorrect answer is selected timer will decrement 5 seconds");


function startQuiz() {
    var count = 75; //store starting value of timer.
    var stopTimer = 0; // value which timer must end

    //hides unwanted elements from the questions screen
    $("h5").hide();
    $(".card-text").hide();
    $(".submit").hide();

    //Test to check for value of 0 for timer
    if (count >= stopTimer) {
        var myCounter = setInterval(function () {
            count--;
            $timer.text('Timer: ' + count);

            if (count === 0) {
                // function call to stop timer at 0 and takes in argument of myCounter variable set to setInterval()
                stopFunction(myCounter);
            }
        }, 1000)
    }
    createEl("<h4>");
    $("h4").addClass("question1");
    $(".question1").append(questions[0].title);

    createEl("<a href=\"\#\" class=\"choice1\">\"");
    $(".choice1").append(questions[0].choices)
}

$btn.click(function () {
    startQuiz();
})