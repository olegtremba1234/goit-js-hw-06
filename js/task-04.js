let counterValue = 0;
const buttonDecrement = document.querySelector("button[data-action='decrement']");
const buttonIncrement = document.querySelector("button[data-action='increment']");
const spanValue = document.querySelector("#value");

const clickDecrement = () => spanValue.textContent = counterValue -= 1;

const clickIncrement = () => spanValue.textContent = counterValue += 1;

buttonDecrement.addEventListener("click", clickDecrement);
buttonIncrement.addEventListener("click", clickIncrement); 