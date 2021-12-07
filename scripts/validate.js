enableValidation({
  formSelector: ".popup-form__input-container",
  inputSelector: ".popup-form__input",
  submitButtonSelector: ".popup-form__submit-button",
  inactiveButtonClass: "popup-form__submit-button_type_disabled",
  errorTextSelector: ".popup-form__error-text",
});

const errorMessage = {
    error1: "Please fill out this field.",
    error2: "Please enter a web address."
};

errorMessage.error1;
errorMessage.error2;

function enableValidation(settings) {
  const forms = document.querySelectorAll(settings.formSelector);
  forms.forEach((form) => {
    setEventListeners(form, settings);
  });
}

function setEventListeners(form, settings) {
  const input = form.querySelectorAll(settings.inputSelector);
  //checks in put validity & check all inputs for validity
  input.forEach((input) => {
    input.addEventListener("input", (evt) => {
      checkInputValidity(input);
    });
  });
}

function checkInputValidity(input) {
  if (input.validity.valid) {
    removeErrorStyles(input);
    hideErrorMessage();
  } else {
    addErrorStyles(input);
    showErrorMessage();
  }
}

function removeErrorStyles(input) {
    input.classList.remove("popup-form__input_has_error");
}

function addErrorStyles(input) {
    input.classList.add("popup-form__input_has_error");
}

function showErrorMessage () {
    
}

function hideErrorMessage() {

}
