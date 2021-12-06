enableValidation({
    formSelector: ".popup-form__input-container",
    inputSelector: ".popup-form__input",
    submitButtonSelector: ".popup-form__submit-button",
    inactiveButtonClass: "popup-form__submit-button_type_disabled",
    errorClass: "popup-form__error-text"
});

function enableValidation(settings) {
    const forms = document.querySelectorAll(settings.formSelector);
    forms.forEach((form) => {
        setEventListeners(forms);
    })
}
