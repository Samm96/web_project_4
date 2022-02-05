import "./index.css";

import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithDeleteConfirm from "../components/PopupWithDeleteConfirm.js";
import Api from "../components/Api.js";

import { initialCards, validationConfig } from "../utils/Constants.js";

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
  },
});

const cardList = new Section(
  "elements"
);

api 
  .getInitialCardList()

  .then((cardData) => {
    cardData.forEach((data) => {
      cardList.addItem(createCard(data))
    })
  })
  .catch((err) =>
    console.log(`An error occurred adding the initial cards: ${err}`)
  );


const createCard = (data) => {
  const card = new Card(
    {
      data,
      handleCardClick: (data) => {
        imagePopup.open(data);
      },
      handleTrashClick: () => {
        deleteConfirmPopupForm.open();
      },
    },
    "card-template"
  );
  return card.createCard();
};

const imagePopup = new PopupWithImage("image-popup");

const userInfo = new UserInfo({
  nameSelector: "profile__name",
  descriptionSelector: "profile__description",
});

const editProfilePopupForm = new PopupWithForm({
  popupSelector: "edit-popup-form",
  handleFormSubmit: (data) => {
    api
      .setUserInfo({
        name: data.name,
        description: data.description,
      })

      .then((info) => {
        userInfo.setUserInfo({
          name: info.name,
          description: info.description,
        });
        editProfilePopupForm.close();
      })
      .catch((err) =>
        console.log(`An error occurred updating user information: ${err}`)
      )

      .finally(() => {
        //loading
      });
  },
});

const createCardPopupForm = new PopupWithForm({
  popupSelector: "create-popup-form",
  handleFormSubmit: (data) => {
    api
      .addCard(data)
      .then((cardData) => {
        cardList.addItem(createCard(cardData));
        createCardPopupForm.resetForm();
      })

      .catch((err) =>
        console.log(`An error had occurred while adding your card :( : ${err}`)
      )

      .finally(() => {
        //loading
      });
  },
});

//NOTE:: MAY NOT BE CORRECT
const deleteConfirmPopupForm = new PopupWithDeleteConfirm({
  popupSelector: "delete-confirmation-popup",
  handleDeleteCard: () => {
    const imgElement = document.querySelector(".element__image");
    api
      .removeCard({
        _id: imgElement.src,
      })
      .then(() => {
        deleteConfirmPopupForm.deleteCard();
      })
      .catch((err) =>
        console.log(`An error had occurred while trying to delete card: ${err}`)
      )
      .finally(() => {
        //loading
      });
  },
});

const profilePicPopupForm = new PopupWithForm({
  popupSelector: "profile-picture-popup",
  handleFormSubmit: () => {
    const picture = document.querySelector(".profile__image");
    api
      .updateProfilePicture({
        avatar: picture,
      })
      .then(() => {
        picture.src = inputPicture.value;
        profilePicPopupForm.resetForm();
      })
      .catch((err) =>
        console.log(`An error had occurred updating profile picture: ${err}`)
      )
      .finally(() => {
        //loading
      });
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

const profilePicValidator = new FormValidator(
  validationConfig,
  document.querySelector("#profile-picture-popup")
);
profilePicValidator.enableValidation();

editProfileButton.addEventListener("click", () => {
  editProfilePopupForm.open();
  const { name, description } = userInfo.getUserInfo();
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
});

imagePopup.setEventListeners();
editProfilePopupForm.setEventListeners();
createCardPopupForm.setEventListeners();
deleteConfirmPopupForm.setEventListeners();
profilePicPopupForm.setEventListeners();
