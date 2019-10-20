$(document).ready(function(){
    
var timer = $('.timer-color');
var p = $('.card-text');
var btn = $('.btn');

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

//function to store current score
function scoreTracker(){
    var score = 0;
    if (count >= 0){
        score++;
    }
}

//Game objective text on landing page
p.text("Quiz objective is to answer as many questions correctly, if incorrect answers is selected timer will decrement 5 seconds");


//jQuery event listener to start timer and quiz
btn.click(function () {

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
    
    var count = 75; //store starting value of timer.
    var stopTimer = 0; // value which timer must end

    //Test to check for value of 0 for timer
    if (count >= stopTimer) {
        var myCounter = setInterval(function () {
            count--;
            timer.text('Timer: ' + count);

            if (count === 0) {
                // function call to stop timer at 0 and takes in argument of myCounter variable set to setInterval()
                stopFunction(myCounter);
            }
            
        }, 1000)
        
        //hides unwanted elements from the questions screen
        $("h5").hide();
        $(".card-text").hide();
        $(".submit").hide();
        
        //changes card-header class to read "Question: 1", create an <h2> element addClass to <h2>, adds first question to newly created element.
        $(".card-header h1").text("Question 1:");
        createEl("<h2>");
        $("h2").addClass("questions-title");
        $(".questions-title").text(questions[0].title);

       var choices = questions[0].choices; 

       $.each(choices,function(index, value){
        createEl("<a>")
        $("<a>").append(".card-body");
        $("<a>").text(value);
       })
      

          

     

            
        }
    })
});