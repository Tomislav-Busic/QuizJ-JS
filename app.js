// DISPLAY QUESTION
let quiz = new Quiz();

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
      let choiceElement = socument.getElementById("choice" + i);
      choiceElement.innerHTML = choices[i];
      guess("btn", choices[i]);
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

const showProgress = () => {};
