const inputArea = document.querySelector("#name-input")
const outputText = document.querySelector("#name-output")

const nameInput = (name) => {
    if (name.value === "") {
        outputText = "Anonymous"
    }
    outputText.textContent = name.currentTarget.value
}

inputArea.addEventListener("input", nameInput)