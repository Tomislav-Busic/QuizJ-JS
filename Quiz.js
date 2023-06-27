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
    this.animatonChoices();
    this.questionAnimation();
  }

  isEnded() {
    return this.questionIndex === this.questions.length;
  }

  // animation for question
  questionAnimation() {
    let text = document.getElementById("question");
    let textStr = text.textContent;
    let splitText = textStr.split("");
    let char = 0;

    text.textContent = "";

    splitText.forEach((element) => {
      text.innerHTML += "<span>" + element + "</span>";
    });

    const onTick = () => {
      const span = text.querySelectorAll("span")[char];

      if (char === splitText.length) {
        clearInterval(timer);
      } else {
        char++;
        span.classList.add("fade");
      }
    };
    let timer = setInterval(onTick, 20);
  }

  // animations for choices
  animatonChoices() {
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
  }
}
