
const quizData = [
    {
        question: "what is the full form of DOM?",
        options: ["Directive Object Methods", "Document Object Model", "Determine Obeject Methods", "Document Of Model"],
        correct: "Document Object Model"
    },
    {
        question: "which file name belongs to javascript?",
        options: ["file.html", "file.css", "file.jss", "file.js"],
        correct: "file.js"
    },
    {
        question: "How to print javascript code?",
        options: ["console.dir(hello!)", "console.log(hello!)", "console.logg(hello!)", "console.let(hello!)"],
        correct: "console.log(hello!)"
    },
    {
        question: "which tag is used to link javascript file to html file ?",
        options: ["print tag","script tag","link tag","create tag"],
        correct: "script tag"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionData = quizData[currentQuestionIndex];
    document.getElementById("question").textContent = questionData.question;
    const answersList = document.getElementById("answers");
    answersList.innerHTML = '';
    questionData.options.forEach(option => {
        const li = document.createElement("li");
        li.innerHTML = `<label><input type="radio" name="answer" value="${option}"> ${option}</label>`;
        answersList.appendChild(li);
    });
}

function nextQuestion() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
        alert("Please select an answer.");
        return;
    }

    if (selectedAnswer.value === quizData[currentQuestionIndex].correct) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("score").textContent = score;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("quiz").style.display = "block";
    document.getElementById("result").style.display = "none";
    loadQuestion();
}

// Initialize the quiz
loadQuestion();