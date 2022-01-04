import { FormValidator } from "./FormValidator.js";
import { openForm, closeForm, handlePressEscape, handleEditProfileFormSubmit, handleCreateCardFormSubmit } from "./utils.js";

//popup-forms
const createCardPopup = document.querySelector("#create-popup-form");
const imageCardPopup = document.querySelector("#image-popup");
const editProfilePopup = document.querySelector("#edit-popup-form");
const popupForms = document.querySelectorAll(".popup-form");

//buttons
const editProfileButton = document.querySelector(".edit-button");
const formCloseButtons = document.querySelectorAll(".close-button");
const addCardButton = document.querySelector(".add-button");

//
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__description");

//inputs
const inputName = document.querySelector("#name");
const inputJob = document.querySelector("#description");
const inputTitle = document.querySelector("#title");
const inputImage = document.querySelector("#image-link");

const element = document.querySelector(".element");

//cardtemplate
const cardTemplate = document.querySelector("#card-template");
const cardSection = document.querySelector(".elements");
const popupImageElement = imageCardPopup.querySelector("#imgPopupImg");
const popupCaption = imageCardPopup.querySelector(".popup-form__caption");

//loop for initial cards
const initialCards = [
  {
    title: "Palm Springs Aerial Tramway",
    url: "images/Palm-Springs-Aerial-Tramway-colorfix.jpg",
  },
  {
    title: "Cedar Point, OH",
    url: "images/Corkscrew_(Cedar_Point)_01.jpg",
  },
  {
    title: "N.A. Pow Wows",
    url: "images/jess-lindner-xegyDn1-SoY-unsplash-colorfix.jpg",
  },
  {
    title: "Colonial Williamsburg",
    url: "images/Colonial-Williamsburg-Virginiasizefix-2.jpg",
  },
  {
    title: "Old San Juan, Puerto Rico",
    url: "images/jennifer-chen-yXJiC2UjIBo-unsplash-colorfix.jpg",
  },
  {
    title: "Disney World",
    url: "images/sandro-gonzalez-dBEJG6hv224-unsplash.jpg",
  },
];


formCloseButtons.forEach((formCloseButton) => {
  formCloseButton.addEventListener("click", (event) => {
    const popup = formCloseButton.closest(".popup-form");
    closeForm(popup);
  });
});

//close form by clicking anything but popup
popupForms.forEach((popupForm) => {
  popupForm.addEventListener("mousedown", (e) => {
    if (e.target === popupForm) {
      closeForm(popupForm);
      popupForm.removeEventListener("mousedown", closeForm);
    }
  });
});




//functions called

editProfilePopup.addEventListener("submit", handleEditProfileFormSubmit);
createCardPopup.addEventListener("submit", handleCreateCardFormSubmit);

editProfileButton.addEventListener("click", () => {
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  openForm(editProfilePopup);
});

addCardButton.addEventListener("click", () => {
  openForm(createCardPopup);
});

const validationConfig = {
  formSelector: ".popup-form__input-container",
  inputSelector: ".popup-form__input",
  submitButtonSelector: ".submit-button",
  inactiveButtonClass: "popup-form__submit-button_type_disabled",
  errorTextSelector: ".popup-form__error-text",
  inputHasError: "popup-form__input_has_error",
  errorTextVisible: "popup-form__error-text_visible",
}

const editProfileValidator = new FormValidator(validationConfig, document.querySelector("#edit-popup-form"));
editProfileValidator.enableValidation();

// function to create the card
function createCard(data) {
  const card = cardTemplate.content.querySelector(".element").cloneNode("true");
  const imgElement = card.querySelector(".element__image");
  const titleElement = card.querySelector(".element__title");
  const deleteButton = card.querySelector(".delete-button");
  const likeButton = card.querySelector(".like-button");

  imgElement.src = data.url;
  imgElement.alt = data.title;
  titleElement.textContent = data.title;

  // click on img to open img modal (causes initial cards not to show up)
  imgElement.addEventListener("click", () => {
    popupImageElement.src = data.url;
    popupImageElement.alt = data.title;
    popupCaption.textContent = data.title;
    openForm(imageCardPopup);
  });

  deleteButton.addEventListener("click", () => {
    const item = deleteButton.closest(".element");
    item.remove();
  });

  // like/unlike button
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("like-button_active");
  });

  return card;
}

// function to put card in
function addCardToPage(card) {
  cardSection.prepend(card);
}

// function to both create card and put card in HTML
function renderCard(data) {
  addCardToPage(createCard(data));
}

// instead of calling function one by one, loop over initial cards array
initialCards.forEach((cardData) => {
  renderCard(cardData);
});
