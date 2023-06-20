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
