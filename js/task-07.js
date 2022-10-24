const slider = document.querySelector("#font-size-control");
const textSize = document.querySelector("#text");
slider.addEventListener("input", sliderMove);

function sliderMove(el) {
  textSize.style.fontSize = `${el.target.value}px`;
}