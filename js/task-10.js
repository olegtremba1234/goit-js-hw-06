const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const buttons = {
  create: document.querySelector('[data-create]'),
  destroy: document.querySelector('[data-destroy]'),
};
const inputEl = document.querySelector('input');
const boxesEl = document.querySelector('#boxes');

const createBoxes = (amount) => {
  const newBoxes = [];
  amount = Number(inputEl.value);

  for (let i = Number(inputEl.min); i <= amount; i += Number(inputEl.step)){
    const size = 20 + i * 10;
    const newBox = document.createElement('div');
    newBox.style.backgroundColor = `${getRandomHexColor()}`;
    newBox.style.width = `${size}px`;
    newBox.style.height = `${size}px`;

    newBoxes.push(newBox);
  }

  boxesEl.append(...newBoxes);
};

const destroyBoxes = () => {
  boxesEl.innerHTML = '';
  inputEl.value = '';
};

buttons.create.addEventListener('click', createBoxes);
buttons.destroy.addEventListener('click', destroyBoxes);


