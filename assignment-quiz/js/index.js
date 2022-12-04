var startButton = document.querySelector("#start-button");
var countdownTimer = document.querySelector("#start-button")

var selectA = document.querySelector("#a");
var selectB = document.querySelector("#b");
var selectC = document.querySelector("#c");
var selectD = document.querySelector("#d");

startBox = document.getElementById("start-box");
startButton = document.getElementById("start-button");
quizBox = document.getElementById("quiz-box");
question = document.getElementById("question");
// countdownTimer = document.getElementById("countdown-timer")

const questions = [
  {
    question: "First Question",
    answer1: "answer one",
    answer2: "answer two",
    answer3: "answer three",
    answer4: "answer four",

    correct: "selectA",
  },
  {
    question: "Second Question",
    answer1: "answer one",
    answer2: "answer two",
    answer3: "answer three",
    answer4: "answer four",

    correct: "selectB"
  },
  {
    question: "Third Question",
    answer1: "answer one",
    answer2: "answer two",
    answer3: "answer three",
    answer4: "answer four",

    correct: "selectC",
  },
  {
    question: "Fourth Question",
    answer1: "answer one",
    answer2: "answer two",
    answer3: "answer three",
    answer4: "answer four",

    correct: "selectD",
  },
  {
    question: "Fifth Question",
    answer1: "answer one",
    answer2: "answer two",
    answer3: "answer three",
    answer4: "answer four",

    correct: "selectA",
  },
];
  
question.textContent = questions[0].question;

function startQuiz() {
  startBox.style.display = "none";
  quizBox.style.display = "block";
  // countdownTimer.style.display = "block";
}
//   (Math.ceil(Math.random() * 5))

// function countdownTimer() {
// // Using built-in methods
// const start = new Date();

// // The event to time goes here:
// doSomethingForALongTime();
// const end = new Date();
// const elapsed = end.getTime() - start.getTime(); // elapsed time in milliseconds

// }

startButton.addEventListener("click", startQuiz);
startButton.addEventListener("click", countdownTimer);
