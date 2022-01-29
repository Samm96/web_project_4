import "../pages/index.css";

import { FormValidator } from "./FormValidator.js";
import { Card } from "./Card.js";
import Section from "./Section.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";

import {
  editProfileButton,
  addCardButton,
  profileName,
  profileJob,
  inputName,
  inputJob,
  initialCards,
  validationConfig,
} from "./Constants.js";

const imagePopup = new PopupWithImage("image-popup");

const createCard = (data) => {
  const card = new Card(
    {
      data,
      handleCardClick: () => {
        imagePopup.open(data);
      },
    },
    "card-template"
  );
  return card.render();
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
  },
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
  createCardValidator.resetValidation();
  createCardPopupForm.open();
});

cardList.renderItem(initialCards);
imagePopup.setEventListeners();
editProfilePopupForm.setEventListeners();
createCardPopupForm.setEventListeners();
