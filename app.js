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
    return this.getQuestionIndex === this.questions.length;
  }
}
