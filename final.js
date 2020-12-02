var readlineSync = require("readline-sync");

var score = 0;

var userName = readlineSync.question("Enter your name ");

console.log("Welcome "+ userName + " Let's see if you know sadath ?");

var highScores =[
  {
    name :"Sadath",
    score: 5,
  }

]

function play(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("Right");
    score = score + 1;
  }
  else{
    console.log("Wrong");
    score = score - 1;
  }

  console.log("Current score is : ",score);
  console.log("-------------");
}

var questions = [
  {
    question : "Where do i live ? ",
    answer : "bangarpet",
  },
  {
    question : "My Favorite superhero ? ",
    answer : "ironman",
  },
  {
    question : "Where do i Study ? ",
    answer : "presidency",
  },
  {
    question : "What Am i Studying ? ",
    answer : "Engineering",
  },
  {
    question : "My dream company ? ",
    answer : "microsoft",
  },
]

for(var i = 0; i < questions.length;i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}

console.log("Your final score is",score);
console.log("Checkout the highest scores :",highScores);