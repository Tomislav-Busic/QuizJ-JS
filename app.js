// DISPLAY QUESTION
const displayQuestion = () => {
  if (Quiz.isEnded()) {
    showScores();
  } else {
    // show question
    let questionElement = document.getElementById("question");
    questionElement.innerHTML = Quiz.getQuestionIndex().text;

    // show options
    let choices = Quiz.getQuestionIndex().choices;
    for (let i = 0; i < choices.length; i++) {
      let choiceElement = socument.getElementById("choice" + i);
      choiceElement.innerHTML = choices[i];
      guess("btn", choices[i]);
    }

    showProgress();
  }
};

const guess = (id, guess) => {};
