enableValidation({
  formSelector: ".popup-form__input-container",
  inputSelector: ".popup-form__input",
  submitButtonSelector: ".submit-button",
  inactiveButtonClass: "popup-form__submit-button_type_disabled",
  errorTextSelector: ".popup-form__error-text",
  inputHasError: "popup-form__input_has_error",
  errorTextVisible: "popup-form__error-text_visible",
});

//select all of the forms and add event listener for each one
function enableValidation(settings) {
  const forms = document.querySelectorAll(settings.formSelector);
  forms.forEach((form) => {
    setEventListeners(form, settings);
  });
}

// add event listener function: it will use parameters form and settings.
// select all of the inputs
/// want to select submit button in ths fx too
/// add a part that has a condition where there is an error and what to do then
/// add button disable toggle
function setEventListeners(form, settings) {
  const inputs = form.querySelectorAll(settings.inputSelector);
  //checks in put validity & check all inputs for validity
  inputs.forEach((input) => {
    input.addEventListener("input", (evt) => {
      checkInputValidity(input, settings);
      const submitBtn = form.querySelector(settings.submitButtonSelector);
      const hasErrors = checkFieldsValidity (inputs);
      setSubmitButtonState (submitBtn, hasErrors);
    });
  });
}

// toggles the button between disabled and enabled
function setSubmitButtonState (submitBtn, hasErrors) {
  if (submitBtn.disabled = hasErrors) {
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
  }
}

// turn inputs into an array, take some input; return solution if input is invalid
function checkFieldsValidity (inputs) {
  Array.from(inputs).some((input) => !input.validity.valid);
}

// removes/hides errors if inputs are valid
function checkInputValidity(input, settings) {
  if (input.validity.valid) {
    removeErrorStyles(input, settings);
    hideErrorMessage(input, settings);
  } else {
    addErrorStyles(input, settings);
    showErrorMessage(input, settings);
  }
}

function removeErrorStyles(input, settings) {
  input.classList.remove(settings.inputHasError);
  const errorText = document.querySelectorAll(settings.errorTextSelector);
}

function hideErrorMessage (input, settings) {
  const errorMessageElement = document.querySelector(`.${input.id}-error`);
  errorMessageElement.classList.remove(settings.errorTextVisible);
}

function addErrorStyles(input, settings) {
    input.classList.add(settings.inputHasError);
}

function showErrorMessage (input, settings) {
  const errorMessageElement = document.querySelector(`.${input.id}-error`);
  errorMessageElement.textContent = input.validationMessage;
  errorMessageElement.classList.add(settings.errorTextVisible);
}

// to check to see if something is being grabbed correctly:
/// via dev tools: i.e. type "input.id" to see which input function is grabbing.