const getRandomHexColor = () =>  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const bodyEl = document.querySelector("body");

const changeColorEl = document.querySelector(".change-color");

const colorEl = document.querySelector(".color");

const changeBgColorRandom = () => {
  bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  colorEl.textContent = getRandomHexColor();
}

changeColorEl.addEventListener("click", changeBgColorRandom);