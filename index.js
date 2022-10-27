var readlineSync = require("readline-sync");
var score = 0;

var questions = [{
  question: "Where do I live? ",
  answer : "noida"
},{
  question: "What is his higher Qualification? ",
  answer : "bca"
},{
  question: "What is his hobby? ",
  answer : "coding" 
},{
  question: "What does he want to became? ",
  answer : "web developer" 
},{
  question: "Who is his favoriter Teacher/Trainer? ",
  answer : "tanay pratap" 
},{
   question: "What is his favoriter school? ",
  answer : "neogcamp" 
}];

function welcome() {
 var userName = readlineSync.question("What's your name? ");
  console.log("\n");
  console.log("Welcome "+ userName + " to DO YOU KNOW Atiqur Rahman?");
  console.log("\n");
}
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    
    score = score + 1;
   
  
    
  } else {
    console.log("wrong!");
   
   
  }
  
  
  console.log("current score: " + score);
  console.log("\n");
  

}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
    
  }
  console.log("The Final Score is "  + score);
}

welcome();
game();



