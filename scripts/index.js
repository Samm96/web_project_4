import { FormValidator } from "./FormValidator.js";
import { Card } from "./Card.js";
import Section from "./Section.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";

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

const validationConfig = {
  formSelector: ".popup-form__input-container",
  inputSelector: ".popup-form__input",
  submitButtonSelector: ".submit-button",
  inactiveButtonClass: "popup-form__submit-button_type_disabled",
  errorTextSelector: ".popup-form__error-text",
  inputHasError: "popup-form__input_has_error",
  errorTextVisible: "popup-form__error-text_visible",
};

const imagePopup = new PopupWithImage ("image-popup");

const createCard = (data) => {
  const card = new Card ({
    data,
    handleCardClick: () => {
      imagePopup.open(data);
    },
  },
  cardTemplate
  );
  return card.render();
}

const cardList = new Section({
  items: initialCards,
  renderer: (data) => {
    cardList.addItem(createCard(data));
  },
}, "elements");

const userInfo = new UserInfo({
  nameSelector: "profile__name",
  descriptionSelector: "profile__description", 
});

const editProfilePopupForm = new PopupWithForm({
  popupSelector: "edit-popup-form",
  handleFormSubmit: (data) => {
    userInfo.setUserInfo(data);
  }
});

const createCardPopupForm = new PopupWithForm({
  popupSelector: "create-popup-form",
  handleFormSubmit: (data) => {
    cardList.addItem(createCard(data));
  }
});

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

editProfileButton.addEventListener("click", () => {
  editProfilePopupForm.open();
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  editProfileValidator.resetValidation();
});

addCardButton.addEventListener("click", () => {
  createCardForm.reset();
  createCardValidator.resetValidation();
  createCardPopupForm.open();
});

cardList.renderItem(initialCards);
imagePopup.setEventListeners();
editProfilePopupForm.setEventListeners();
createCardPopupForm.setEventListeners();

export {
  imageCardPopup,
  createCardPopup,
  editProfilePopup,
  inputName,
  inputJob,
  profileJob,
  profileName,
  popupImageElement,
  popupCaption
};
