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


var count = 5 //seconds;
var timer = document.querySelector('.timer-color');
var reset = 0;
var btn = document.querySelector('.btn');

//event listener to start timer
btn.addEventListener('click', function () {
    var myCounter = setInterval(function () {
        count--;
        timer.textContent = 'Timer: ' + count;
    }, 1000)
})
// click event works but if clicked again, timer goes all "wonky"

