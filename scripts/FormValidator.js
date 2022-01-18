// Form Validation class code

// "config" = array of selectors & "formElement" = form
export class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
  }

  enableValidation() {
    this.setEventListeners();
  }

  // add event listener function: it will use parameters form and settings.
  // select all of the inputs
  /// want to select submit button in ths fx too
  /// add a part that has a condition where there is an error and what to do then
  /// add button disable toggle
  setEventListeners() {
    this._inputs = this._formElement.querySelectorAll(
      this._config.inputSelector
    );
    this._submitBtn = this._formElement.querySelector(
      this._config.submitButtonSelector
    );
    //checks in put validity & check all inputs for validity
    this._inputs.forEach((input) => {
      input.addEventListener("input", (evt) => {
        this.checkInputValidity(input, this._formElement);
        this.updateSubmitButton();
      });
    });
  }

  updateSubmitButton() {
    const hasErrors = this._checkFieldsValidity(this._inputs);
    this.setSubmitButtonState(hasErrors);
  }

  // toggles the button between disabled and enabled
  setSubmitButtonState(hasErrors) {
    this._submitBtn.disabled = hasErrors;
  }

  disableSubmitButton() {
    this._submitBtn.disabled = true;
  }

  // turn inputs into an array, take some input; return solution if input is invalid
  _checkFieldsValidity() {
    return Array.from(this._inputs).some((input) => !input.validity.valid);
  }

  // removes/hides errors if inputs are valid
  checkInputValidity(input) {
    if (input.validity.valid) {
      this.removeErrorStyles(input);
      this.hideErrorMessage(input);
    } else {
      this.addErrorStyles(input);
      this.showErrorMessage(input);
    }
  }

  removeErrorStyles(input) {
    input.classList.remove(this._config.inputHasError);
  }

  hideErrorMessage(input) {
    const errorMessageElement = this._formElement.querySelector(`.${input.id}-error`);
    errorMessageElement.classList.remove(this._config.errorTextVisible);
  }

  addErrorStyles(input) {
    input.classList.add(this._config.inputHasError);
  }

  showErrorMessage(input) {
    const errorMessageElement = this._formElement.querySelector(`.${input.id}-error`);
    errorMessageElement.textContent = input.validationMessage;
    errorMessageElement.classList.add(this._config.errorTextVisible);
  }

  resetValidation () {
    this.updateSubmitButton();

    this._inputs.forEach((input) => {
      this.hideErrorMessage(input);
      this.removeErrorStyles(input);
    })
  }
}

// to check to see if something is being grabbed correctly
/// via dev tools: i.e. type "input.id" to see which input function is grabbing
