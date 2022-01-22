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
