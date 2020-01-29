var qContent = document.getElementById('quizBody');
var qNumber= 0;
var answer= '';
function quiz() {
    var sBtn = document.getElementById('startBtn');
    myTimer();
    qContent.innerHTML = '';   
    sBtn.style.display = 'none';

    var newQ = document.createElement("h2");
    newQ.innerText=questions[qNumber].title;
    qContent.appendChild(newQ);
    answer = questions[qNumber].answer;

    for(var q = 0; q<questions[qNumber].choices.length; q++){
        var choice = document.createElement("button");
        choice.innerText=questions[qNumber].choices[q];
        qContent.appendChild(choice);
        }
    }

function myTimer() {
    var sec = 75;
    var output = document.getElementById("timeRem");
    setInterval(function() {
        sec--;
        if (sec <= 0) {
            stopInterval();
            alert("Time is up!");
        } else {
            output.innerText = sec;
        }}, 1000);       
}


var questions = [
    {
        title:"Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"

    },
    {
        title:"The condition in an if / else statement is enclosed within _____.",
        choices: ["quotes", "curly brackets", "paranthesis", "square brackets"],
        answer: "parentheses"
    },
]


