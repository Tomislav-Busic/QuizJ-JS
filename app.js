// DISPLAY QUESTION
import questionsData from "./questions.json" assert { type: "json" };

class Quiz {
  constructor(_questions) {
    this.score = 0;
    this.questions = _questions;
    this.questionIndex = 0;
  }

  getQuestionIndex() {
    return this.questions[this.questionIndex];
  }

  guess(answer) {
    if (this.getQuestionIndex().isCorrectAnswer(answer)) {
      this.score++;
    }
    this.questionIndex++;
  }

  isEnded() {
    return this.questionIndex === this.questions.length;
  }
}

class Question {
  constructor(_text, _choices, _answer) {
    this.text = _text;
    this.choices = _choices;
    this.answer = _answer;
  }

  isCorrectAnswer(choice) {
    return this.answer === choice;
  }
}

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
  console.log(questions);
  return questions;
};

let quiz = new Quiz(questions());

displayQuestion();
