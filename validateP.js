///// coding seminar notes


//for each form get:
///inputs
///add event listener to each input
///check validity of that input
///check validity of all inputs
///change the disabled status of submit button

enableValidation({
    formSelector: ".popup-form__input-container",
    inputSelector: ".popup-form__input",
    errorTextSelector: ".popup-form__error-text",
});

function enableValidation(settings) {
    const forms = document.querySelectorAll(settings.formSelector);
    forms.forEach((form) => {
        setEventListeners(forms);
    })
}

function setEventListeners(form) {
    const inputs = form.querySelectorAll(settings.inputSelector);
    inputs.forEach((input) => {
        input.addEventListener("input", (event) => {
            checkInputValidity(input);

        })
    })
}

function checkInputValidity(input) {
    if(input.validity.valid) {
        removeErrorStyles(input)
    } else {
        addErrorStyles(input)
    }
}

function removeErrorStyles() {
    input.classList.remove('popup-form__error-text_visible');
}

function addErrorStyles(input) {
    input.classList.add('popup-form__error-text_visible');
}