// event handlers and the functions that opens/closes modals
const createSubmit = document.querySelector("#create-button");

function disableSubmitButton() {
    createSubmit.disabled = true;
  }

//This opens form
function openForm(popupForm) {
    popupForm.classList.add("popup-form_open");
    document.addEventListener("keydown", handlePressEscape);
    disableSubmitButton();
  }

  // closes form
function closeForm(popupForm) {
    popupForm.classList.remove("popup-form_open");
    document.removeEventListener("keydown", handlePressEscape);
  }

  //hit esc key to close modals

function handlePressEscape(event) {
    if (event.key === "Escape") {
      closeForm(document.querySelector(".popup-form_open"));
    }
  }


//Submit button & replacing input name/job
//add setSubmitButtonState(false) so that the button is disabled when opening form

function handleEditProfileFormSubmit(e) {
    e.preventDefault();
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
    closeForm(editProfilePopup);
  }
  
  //querySelector at end resets form
  //note: .reset() only works on <forms>
  function handleCreateCardFormSubmit(e) {
    e.preventDefault();
    const data = { url: inputImage.value, title: inputTitle.value };
    renderCard(data);
    closeForm(createCardPopup);
    document.querySelector("#create").reset();
  }

  export {openForm, closeForm, handlePressEscape, handleEditProfileFormSubmit, handleCreateCardFormSubmit};