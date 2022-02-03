import "./index.css";

import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithDeleteConfirm from "../components/PopupWithDeleteConfirm.js";
import Api from "../components/Api.js";

import {
  initialCards,
  validationConfig,
} from "../utils/Constants.js";

//buttons
const editProfileButton = document.querySelector("#edit-button");
const addCardButton = document.querySelector(".add-button");
const editProfilePicButton = document.querySelector("#profile-pic-button");



//inputs
const inputName = document.querySelector("#name");
const inputJob = document.querySelector("#description");
const inputPicture = document.querySelector("#profile-pic");


const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: "9b991f86-368d-4ef3-963c-b91580821c46",
    "Content-Type": "application/json",
  }
})


const imagePopup = new PopupWithImage("image-popup");

const createCard = (data) => {
  const card = new Card(
    {
      data,
      handleCardClick: () => {
        imagePopup.open(data)
      },
      handleTrashClick: () => {
        deleteConfirmPopupForm.open();
      }
    },
    "card-template"
  );
  return card.createCard();
};

const cardList = new Section(
  {
    items: initialCards,
    renderer: (data) => {
      cardList.addItem(createCard(data));
    },
  },
  "elements"
);

const userInfo = new UserInfo({
  nameSelector: "profile__name",
  descriptionSelector: "profile__description",
});

const editProfilePopupForm = new PopupWithForm({
  popupSelector: "edit-popup-form",
  handleFormSubmit: (data) => {
    userInfo.setUserInfo(data);
  },
});

const createCardPopupForm = new PopupWithForm({
  popupSelector: "create-popup-form",
  handleFormSubmit: (data) => {
    cardList.addItem(createCard(data));
    createCardPopupForm.resetForm();
  },
});

const deleteConfirmPopupForm = new PopupWithDeleteConfirm({
  popupSelector: "delete-confirmation-popup"
});

const profilePicPopupForm = new PopupWithForm({
  popupSelector: "profile-picture-popup",
  handleFormSubmit: () => {
    const picture = document.querySelector(".profile__image");
    picture.src = inputPicture.value;
    profilePicPopupForm.resetForm();
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

const profilePicValidator = new FormValidator(
  validationConfig,
  document.querySelector("#profile-picture-popup")
);
profilePicValidator.enableValidation();

editProfileButton.addEventListener("click", () => {
  editProfilePopupForm.open();
  const {name, description} = userInfo.getUserInfo();
  inputName.value = name;
  inputJob.value = description;
  editProfileValidator.resetValidation();
});

addCardButton.addEventListener("click", () => {
  createCardPopupForm.resetForm();
  createCardValidator.resetValidation();
  createCardPopupForm.open();
});

editProfilePicButton.addEventListener("click", () => {
  profilePicValidator.resetValidation();
  profilePicPopupForm.open();
})


cardList.renderItem(initialCards);
imagePopup.setEventListeners();
editProfilePopupForm.setEventListeners();
createCardPopupForm.setEventListeners();
deleteConfirmPopupForm.setEventListeners();
profilePicPopupForm.setEventListeners();