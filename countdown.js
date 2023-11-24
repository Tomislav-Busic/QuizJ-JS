import { showScores } from "./app.js";

// ADD COUNTDOWN
let time = 20;
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
