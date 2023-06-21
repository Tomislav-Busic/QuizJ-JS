// DISPLAY QUESTION

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
let questions = [
  new Question(
    "Hyper Text Markup Language Stands For?",
    ["JQuery", "XHTML", "CSS", "HTML"],
    "HTML"
  ),
  new Question(
    "Cascading Style sheet Stands For?",
    ["HTML", "JQuery", "CSS", "XML"],
    "CSS"
  ),
  new Question(
    "Which is a JavaScript Framework?",
    ["React", "Laravel", "Django", "Sass"],
    "React"
  ),
  new Question(
    "Which is a backend Language?",
    ["PHP", "HTML", "React", "All"],
    "PHP"
  ),
  new Question(
    "Which is best for Artificial intelligence?",
    ["React", "Laravel", "Python", "Sass"],
    "Python"
  ),
];

let quiz = new Quiz(questions);

displayQuestion();
