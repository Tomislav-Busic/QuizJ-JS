// DISPLAY QUESTION
import questionsData from "./questions.json" assert { type: "json" };

const displayQuestion = () => {
  if (quiz.isEnded()) {
    showScores();
  } else {
    // show question
    let questionElement = document.getElementById("question");
    questionElement.innerHTML = quiz.getQuestionIndex().text;

    // show options
    let choices = quiz.getQuestionIndex().choices;
    for (let i = 0; i < choices.length; i++) {
      let choiceElement = document.getElementById("choice" + i);
      choiceElement.innerHTML = choices[i];
      guess("btn" + i, choices[i]);
    }

    showProgress();
  }
};

const guess = (id, guess) => {
  let button = document.getElementById(id);
  button.onclick = () => {
    quiz.guess(guess);
    displayQuestion();
  };
};

const showProgress = () => {
  let currentQuestionNumber = quiz.questionIndex + 1;
  let progressElement = document.getElementById("progress");

  progressElement.innerHTML = `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
};

const showScores = () => {
  let quizEndHTML = `
        <h1>Quiz completed</h1>
        <h2 id="score">You Scored: ${quiz.score} of ${quiz.questions.length}</h2>
        <div class="quiz-repeat">
            <a href="index.html">Take Quiz Again</a>
        </div> 
    `;

  let quizElement = document.getElementById("quiz");
  quizElement.innerHTML = quizEndHTML;
};

// CREATE QIUZ QUESTIONS
const questions = () => {
  let questions = questionsData.questions.map(
    (question) =>
      new Question(question.question, question.choices, question.answer)
  );
  return questions;
};

let quiz = new Quiz(questions());

displayQuestion();

// ADD COUNTDOWN
let time = 10;
let quizTimeInMinutes = time * 60 * 60;
let quizTime = quizTimeInMinutes / 60;

let counting = document.getElementById("count-down");

const startCountDown = () => {
  let quizTimer = setInterval(() => {
    if (quizTime <= 0) {
      clearInterval(quizTimer);
      showScores();
    } else {
      quizTime--;
      let sec = Math.floor(quizTime % 60);
      let min = Math.floor(quizTime / 60) % 60;
      counting.innerHTML = `TIME: ${min} : ${sec}`;
    }
  }, 1000);
};

startCountDown();

let changeColor = setInterval(() => {
  if (quizTime <= quizTimeInMinutes / 2) {
    counting.style.backgroundColor = "green";
  } else if (quizTime <= quizTimeInMinutes / 4) {
    counting.style.backgroundColor = "red";
  }
}, 1000);

changeColor;
