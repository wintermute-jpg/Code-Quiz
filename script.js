
//DOM Elements
var startContent = document.getElementById('startScreen');
var qBody = document.getElementById("quizBody");
var sBtn = document.getElementById('startBtn');
var output = document.getElementById("timeRem");
var choiceBtn = document.createElement("button");
choiceBtn.setAttribute("class", "Btns");
var qContent = document.getElementById("question");
var qContainer = document.getElementById("choicesContainer");

//Active Quiz Tracking
var qNumber= 0;
var answer= '';
var sec = 75;


function startQuiz() {
    //start timer
    myTimer();
    //clear content 
    startContent.setAttribute("class", "hide");
    //show questions content
    qBody.removeAttribute("class", "hide");
    //call question
    newQuestion();
}

function newQuestion(){
        //get question from array
        var currentQuestion = questions[qNumber];
        //append question info to HTML
        qContent.textContent=currentQuestion.title;
        console.log(currentQuestion)
        answer = currentQuestion.answer;
        //answer loop
        currentQuestion.choices.forEach(function(data, i){
            //create buttons
            console.log(data, i);
            var choiceBtn = document.createElement("button");
            choiceBtn.setAttribute("class", "Btn");
            choiceBtn.setAttribute("value", "data");
            choiceBtn.addEventListener("click", checkAnswer());
            choiceBtn.textContent= questions[qNumber].choices[i];
            qContainer.appendChild(choiceBtn);
        });
    };


function checkAnswer(){
    //let target = event.target;    
    console.log(this.textContent);
    //if(target.textContent === answer){
       // qNumber ++;
        //newQuestion();
    //}

}
//document.getElementsByClassName("Btn").onclick = function(event){
  //  let target = event.target;
   // console.log(target.value);
   // if(target.textContent === answer){
     //   qNumber ++;
       // newQuestion();
    //} 
//}
    



    
//$("#Btns").addEventListener("click", function(){
        //if(choiceBtn.textContent === answer){
          //  qNumber++;
            //newQuestion();
       // }
    //});

//for(var q = 0; q<questions[qNumber].choices.length; q++){
        //var choiceBtn = document.createElement("button");
        //choiceBtn.textContent=questions[qNumber].choices[q];
        //qContainer.appendChild(choiceBtn)
        
       // cContainer.append(choice)
        

//ability to submit answers onclick   

//for(var q = 0; q<questions[qNumber].choices.length; q++){
        //var choice = document.createElement("button");
        //choice.innerText=questions[qNumber].choices[q];
       // qContent.appendChild(choice);    
        //}
    //make it so that when the correct button is pressed the qNumber increases
    //in addition any incorrect clicks will decrease the timer.

function myTimer() {
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


