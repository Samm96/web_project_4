import {
  editProfilePopup,
  createCardPopup,
  inputName,
  inputJob,
  profileName,
  profileJob,
  renderCard
} from "./index.js";

// event handlers and the functions that opens/closes modals
const inputTitle = document.querySelector("#title");
const inputImage = document.querySelector("#image-link");

//This opens form
function openPopup(popupForm) {
  popupForm.classList.add("popup-form_open");
  document.addEventListener("keydown", handlePressEscape);
}

// closes form
function closePopup(popupForm) {
  popupForm.classList.remove("popup-form_open");
  document.removeEventListener("keydown", handlePressEscape);
}

//hit esc key to close modals

function handlePressEscape(event) {
  if (event.key === "Escape") {
    closePopup(document.querySelector(".popup-form_open"));
  }
}

//Submit button & replacing input name/job
//add setSubmitButtonState(false) so that the button is disabled when opening form

function handleEditProfileFormSubmit(e) {
  e.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closePopup(editProfilePopup);
}

//note: .reset() only works on <forms>
function handleCreateCardFormSubmit(e) {
  e.preventDefault();
  const data = { url: inputImage.value, title: inputTitle.value };
  renderCard(data);
  closePopup(createCardPopup);
}

export {
  openPopup,
  closePopup,
  handlePressEscape,
  handleEditProfileFormSubmit,
  handleCreateCardFormSubmit,
};
