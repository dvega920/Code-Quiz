/*the value of timer is 15 seconds times length of questions array*/
var timer = 15 * questions.length;

var countdown = setInterval(function () {
    console.log(timer - 1);

}, 1000)