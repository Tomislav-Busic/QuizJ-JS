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
    animatonChoices();
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
  const timeLeft = (quizTime) => {
    let sec = Math.floor(quizTime % 60);
    let min = Math.floor(quizTime / 60) % 60;

    const formatTime = (time) => {
      return time < 10 ? `0${time}` : time;
    };

    return (counting.innerHTML = `
    TIME: ${formatTime(min)} : ${formatTime(sec)}
    `);
  };

  let quizTimer = setInterval(() => {
    if (quizTime <= 0) {
      clearInterval(quizTimer);
      showScores();
    } else if (quizTime <= quizTimeInMinutes / 60 / 4) {
      quizTime--;
      timeLeft(quizTime);
      counting.style.backgroundColor = "red";
      counting.classList.add("time-warning");
    } else if (quizTime <= quizTimeInMinutes / 60 / 2) {
      quizTime--;
      timeLeft(quizTime);
      counting.style.backgroundColor = "orangered";
    } else {
      quizTime--;
      timeLeft(quizTime);
    }
  }, 1000);
};

startCountDown();

const animatonChoices = () => {
  let buttons = document.getElementById("buttons");
  let button1 = document.getElementById("btn0");
  let button2 = document.getElementById("btn1");
  let button3 = document.getElementById("btn2");
  let button4 = document.getElementById("btn3");

  button1.classList.add("box1");
  button2.classList.add("box2");
  button3.classList.add("box3");
  button4.classList.add("box4");

  buttons.addEventListener("animationend", () => {
    button1.classList.remove("box1");
    button2.classList.remove("box2");
    button3.classList.remove("box3");
    button4.classList.remove("box4");
  });
};
