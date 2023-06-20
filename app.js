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
  }
};
