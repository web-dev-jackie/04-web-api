var startButton = document.querySelector("#generate");

var selectA = document.querySelector("#a");
var selectB = document.querySelector("#b");
var selectC = document.querySelector("#c");
var selectD = document.querySelector("#d");

startBox = document.getElementById("start-box");
startButton = document.getElementById("start-button");
quizBox = document.getElementById("quiz-box");
question = document.getElementById("question");
calculate = document.getElementById("countdownTimer")

var userChoice = "";

const questions = [
  {
    question: "First Question",
    answer1: "answer one",
    answer2: "answer two",
    answer3: "answer three",
    answer4: "answer four",

    correct: "A",
  },
  {
    question: "Second Question",
    answer1: "answer one",
    answer2: "answer two",
    answer3: "answer three",
    answer4: "answer four",

    correct: "B",
  },
  {
    question: "Third Question",
    answer1: "answer one",
    answer2: "answer two",
    answer3: "answer three",
    answer4: "answer four",

    correct: "C",
  },
  {
    question: "Fourth Question",
    answer1: "answer one",
    answer2: "answer two",
    answer3: "answer three",
    answer4: "answer four",

    correct: "D",
  },
  {
    question: "Fifth Question",
    answer1: "answer one",
    answer2: "answer two",
    answer3: "answer three",
    answer4: "answer four",

    correct: "A",
  },
];

    question.textContent = questions[0].question;

function startQuiz() {
  startBox.style.display = "none";
    quizBox.style.display = "block";
  countdown('01/19/2038 03:14:07 AM').style.display = "block";
  
       queue().style.display = "block";
}

function countdown(dateEnd) {
  var timer, days, hours, minutes, seconds;

  dateEnd = new Date(dateEnd);
  dateEnd = dateEnd.getTime();

  if ( isNaN(dateEnd) ) {
    return;
  }

  timer = setInterval(calculate, 1000);

  function calculate() {
    var dateStart = new Date();
    var dateStart = new Date(dateStart.getUTCFullYear(),
                             dateStart.getUTCMonth(),
                             dateStart.getUTCDate(),
                             dateStart.getUTCHours(),
                             dateStart.getUTCMinutes(),
                             dateStart.getUTCSeconds());
    var timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000)

    if ( timeRemaining >= 0 ) {
      days    = parseInt(timeRemaining / 86400);
      timeRemaining   = (timeRemaining % 86400);
      hours   = parseInt(timeRemaining / 3600);
      timeRemaining   = (timeRemaining % 3600);
      minutes = parseInt(timeRemaining / 60);
      timeRemaining   = (timeRemaining % 60);
      seconds = parseInt(timeRemaining);

      document.getElementById("days").innerHTML    = parseInt(days, 10);
      document.getElementById("hours").innerHTML   = ("0" + hours).slice(-2);
      document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
      document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
    } else {
      return;
    }
  }

  function display(days, hours, minutes, seconds) {}
}

startButton.addEventListener("click", startQuiz);