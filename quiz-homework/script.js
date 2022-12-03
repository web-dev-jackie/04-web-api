var startButton = document.querySelector("#generate");

startBox = document.getElementById("start-box")
startButton = document.getElementById("start-button")
quizBox = document.getElementById("quiz-box")
question = document.getElementById("question")


const questions = [
    {
        question: "First Question",
        answer1: "answer one",
        // etc
        correct: "answer one"
    },
    {
        question: "Second Question",
        answer1: "answer one",
        // etc
    },
]
question.textContent = questions[1].question

function startQuiz() {
    startBox.style.display = "none"
    quizBox.style.display = "block"

}

startButton.addEventListener("click", startQuiz)