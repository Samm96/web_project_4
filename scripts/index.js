import { FormValidator } from "./FormValidator.js";
import {
  openPopup,
  closePopup,
  handleEditProfileFormSubmit,
  handleCreateCardFormSubmit,
} from "./utils.js";
import { Card } from "./Card.js";
import Section from "./Section.js";
import Popup from "./Popup.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithFrom.js";

//popup-forms
const createCardPopup = document.querySelector("#create-popup-form");
const imageCardPopup = document.querySelector("#image-popup");
const editProfilePopup = document.querySelector("#edit-popup-form");
const popupForms = document.querySelectorAll(".popup-form");

const popupImageElement = imageCardPopup.querySelector("#imgPopupImg");
const popupCaption = imageCardPopup.querySelector(".popup-form__caption");
const createCardForm = document.querySelector("#create");


//buttons
const editProfileButton = document.querySelector(".edit-button");
const addCardButton = document.querySelector(".add-button");

//
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__description");

//inputs
const inputName = document.querySelector("#name");
const inputJob = document.querySelector("#description");

//cardtemplate
const cardTemplate = document.querySelector("#card-template");
const cardSection = document.querySelector(".elements");

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


//functions called

editProfileButton.addEventListener("click", () => {
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  openPopup(editProfilePopup);
  editProfileValidator.resetValidation();
});

addCardButton.addEventListener("click", () => {
  createCardForm.reset();
  createCardValidator.resetValidation();
  openPopup(createCardPopup);
});

const validationConfig = {
  formSelector: ".popup-form__input-container",
  inputSelector: ".popup-form__input",
  submitButtonSelector: ".submit-button",
  inactiveButtonClass: "popup-form__submit-button_type_disabled",
  errorTextSelector: ".popup-form__error-text",
  inputHasError: "popup-form__input_has_error",
  errorTextVisible: "popup-form__error-text_visible",
};


const editProfileValidator = new FormValidator(
  validationConfig,
  document.querySelector("#edit-popup-form")
);
editProfileValidator.enableValidation();

const createCardValidator = new FormValidator(
  validationConfig,
  document.querySelector("#create-popup-form")
);
createCardValidator.enableValidation();

// function to both create card and put card in HTML
function renderCard(data) {
  const card = new Card(cardTemplate, data);
  addCardToPage(card.render());
}

// function to put card in
function addCardToPage(card) {
  cardSection.prepend(card);
}

// instead of calling function one by one, loop over initial cards array
initialCards.forEach((cardData) => {
  renderCard(cardData);
});

export {
  imageCardPopup,
  createCardPopup,
  editProfilePopup,
  inputName,
  inputJob,
  profileJob,
  profileName,
  renderCard,
  popupImageElement,
  popupCaption
};
