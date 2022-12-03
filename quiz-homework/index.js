// var startButton = document.querySelector("#generate");
var selectA = document.querySelector("#a")
var selectB = document.querySelector("#b")
var selectC = document.querySelector("#c")
var selectD = document.querySelector("#d")

startBox = document.getElementById("start-box")
startButton = document.getElementById("start-button")
quizBox = document.getElementById("quiz-box")
question = document.getElementById("question")

var answers = ["A", "B", "C", "D"]
var userChoice = "";
var time;
var addTime;

const questions = [
    {
        question: "First Question",
        answer1: "answer one",
        answer2: "answer two",
        answer3: "answer three",
        answer4: "answer four",
        
        correct: "A"
    },
    {
        question: "Second Question",
        answer1: "answer one",
        answer2: "answer two",
        answer3: "answer three",
        answer4: "answer four",
        
        correct: "B"
    },
    {
        question: "Third Question",
        answer1: "answer one",
        answer2: "answer two",
        answer3: "answer three",
        answer4: "answer four",
        
        correct: "C"
    },
    {
        question: "Fourth Question",
        answer1: "answer one",
        answer2: "answer two",
        answer3: "answer three",
        answer4: "answer four",
        
        correct: "D"
    },
    {
        question: "Fifth Question",
        answer1: "answer one",
        answer2: "answer two",
        answer3: "answer three",
        answer4: "answer four",
        
        correct: "A"
    }
]
function zero() {
    question.textContent = questions[0].question
}
function one() {
question.textContent = questions[1].question
}
function two() {
    question.textContent = questions[2].question
}
function three() {
    question.textContent = questions[3].question
}
function four() {
    question.textContent = questions[4].question
}
// 

function init() {
    getHigh();
}


function startQuiz() {
    startBox.style.display = "none"
    quizBox.style.display = "block"
}

startButton.addEventListener("click", startQuiz)