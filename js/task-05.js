const inputArea = document.querySelector("#name-input")
const outputText = document.querySelector("#name-output")

inputArea.addEventListener("input", (nameInput) => {
    outputText.textContent = nameInput.currentTarget.value;

    if (nameInput.currentTarget.value === '') {
        outputText.textContent = 'Anonymous';
    }
});
