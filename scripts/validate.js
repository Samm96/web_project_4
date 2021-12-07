enableValidation({
  formSelector: ".popup-form__input-container",
  inputSelector: ".popup-form__input",
  submitButtonSelector: ".popup-form__submit-button",
  inactiveButtonClass: "popup-form__submit-button_type_disabled",
  errorTextSelector: ".popup-form__error-text"
});

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
  } else {
    addErrorStyles(input);
  }
}

function removeErrorStyles(input) {
  input.classList.remove("popup-form__input_has_error");
  const errorText = document.querySelectorAll(settings.errorTextSelector);
  errorText.classList.remove("popup-form__error-text_visible");
}

function addErrorStyles(input, errorText) {
    input.classList.add("popup-form__input_has_error");
    errorText.classList.add("popup-form__error-text_visible");
}

