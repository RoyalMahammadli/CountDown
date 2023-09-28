const hourInp1 = document.querySelector("#hInp1");
const hourInp2 = document.querySelector("#hInp2");
const minuteInp1 = document.querySelector("#mInp1");
const minuteInp2 = document.querySelector("#mInp2");
const secondInp1 = document.querySelector("#sInp1");
const secondInp2 = document.querySelector("#sInp2");
const playBtn = document.querySelector("#playBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const refreshBtn = document.querySelector("#refreshBtn");
const allInputs = document.querySelectorAll("input");
const controlButtons = document.querySelector("#ctrl");
const p = document.querySelector("#txt");
let myInterval;

const startNumb = 9;
secondInp2.value = startNumb;
secondInp1.value = 0;
minuteInp1.value = 0;
minuteInp2.value = 0;
hourInp1.value = 0;
hourInp2.value = 0;

//Start function
function startCountDown() {
  if (allInputs.value != 0) secondInp2.value -= 1;

  if (secondInp2.value < 0 && secondInp1.value != 0) {
    secondInp1.value -= 1;
    secondInp2.value = startNumb;
  }
  function refreshSeconds() {
    if (
      secondInp1.value <= 0 &&
      secondInp2.value < 0 &&
      minuteInp2.value != 0
    ) {
      minuteInp2.value -= 1;
      secondInp1.value = 5;
      secondInp2.value = startNumb;
    } else if (
      secondInp1.value == 0 &&
      secondInp2.value < 0 &&
      minuteInp2.value == 0 &&
      minuteInp1.value != 0
    ) {
      minuteInp1.value -= 1;
      minuteInp2.value = startNumb;
      secondInp2.value = startNumb;
      secondInp1.value = 5;
    } else if (
      secondInp2.value < 0 &&
      secondInp1.value == 0 &&
      minuteInp1.value == 0 &&
      minuteInp2.value == 0 &&
      hourInp2.value != 0
    ) {
      hourInp2.value -= 1;
      minuteInp1.value = 5;
      minuteInp2.value = startNumb;
      secondInp1.value = 5;
      secondInp2.value = startNumb;
    } else if (
      secondInp2.value < 0 &&
      secondInp1.value == 0 &&
      minuteInp1.value == 0 &&
      minuteInp2.value == 0 &&
      hourInp2.value == 0
    ) {
      hourInp1.value -= 1;
      hourInp2.value = startNumb;
      minuteInp1.value = 5;
      minuteInp2.value = startNumb;
      secondInp1.value = 5;
      secondInp2.value = startNumb;
    } else if (
      secondInp2.value == 0 &&
      secondInp1.value == 0 &&
      minuteInp1.value == 0 &&
      minuteInp2.value == 0 &&
      hourInp2.value == 0 &&
      hourInp1.value == 0
    ) {
      clearInterval(myInterval);
      controlButtons.classList.add("none");
      p.classList.remove('none')
     
    }
  }
  refreshSeconds();
}

//Start button
playBtn.addEventListener("click", () => {
  myInterval = setInterval(startCountDown, 1000);
});

//Pause button
pauseBtn.addEventListener("click", () => {
  clearInterval(myInterval);
});
//Refresh button
refreshBtn.addEventListener("click", () => {
  location.reload();
});
