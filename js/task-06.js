const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", onBlur);

function onBlur(text) {
  const inputValid = text.currentTarget;
  const inputValidation = Number(inputValid.dataset.length);
  if (inputValid.value.length === inputValidation) {
    inputValid.classList.remove("invalid");
    inputValid.classList.add("valid");
  } else {
    inputValid.classList.remove("valid");
    inputValid.classList.add("invalid");
  }
 
}