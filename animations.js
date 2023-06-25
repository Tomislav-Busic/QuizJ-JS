export const animatonChoices = () => {
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

export const questionAnimation = () => {
  let text = document.getElementById("question").textContent;
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
};
