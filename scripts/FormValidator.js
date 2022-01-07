// Form Validation class code

// "config" = array of selectors & "formElement" = form
export class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
  }

  enableValidation() {
    this.setEventListeners(this.config);
  }

  // add event listener function: it will use parameters form and settings.
  // select all of the inputs
  /// want to select submit button in ths fx too
  /// add a part that has a condition where there is an error and what to do then
  /// add button disable toggle
  setEventListeners() {
    const inputs = this._formElement.querySelectorAll(
      this._config.inputSelector
    );
    //checks in put validity & check all inputs for validity
    inputs.forEach((input) => {
      input.addEventListener("input", (evt) => {
        this.checkInputValidity(input, this._formElement);
        const submitBtn = this._formElement.querySelector(
          this._config.submitButtonSelector
        );
        const hasErrors = this.checkFieldsValidity(inputs);
        this.setSubmitButtonState(submitBtn, hasErrors);
      });
    });
  }

  // toggles the button between disabled and enabled
  setSubmitButtonState(submitBtn, hasErrors) {
    submitBtn.disabled = hasErrors;
  }

  // turn inputs into an array, take some input; return solution if input is invalid
  checkFieldsValidity(inputs) {
    return Array.from(inputs).some((input) => !input.validity.valid);
  }

  // removes/hides errors if inputs are valid
  checkInputValidity(input) {
    if (input.validity.valid) {
      this.removeErrorStyles(input, this._config);
      this.hideErrorMessage(input, this._config);
    } else {
      this.addErrorStyles(input, this._config);
      this.showErrorMessage(input, this._config);
    }
  }

  removeErrorStyles(input) {
    input.classList.remove(this._config.inputHasError);
    const errorText = document.querySelectorAll(this._config.errorTextSelector);
  }

  hideErrorMessage(input) {
    const errorMessageElement = document.querySelector(`.${input.id}-error`);
    errorMessageElement.classList.remove(this._config.errorTextVisible);
  }

  addErrorStyles(input) {
    input.classList.add(this._config.inputHasError);
  }

  showErrorMessage(input) {
    const errorMessageElement = document.querySelector(`.${input.id}-error`);
    errorMessageElement.textContent = input.validationMessage;
    errorMessageElement.classList.add(this._config.errorTextVisible);
  }
}

// to check to see if something is being grabbed correctly
/// via dev tools: i.e. type "input.id" to see which input function is grabbing
