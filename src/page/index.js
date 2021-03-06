import "./index.css";

import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithDeleteConfirm from "../components/PopupWithDeleteConfirm.js";
import Api from "../components/Api.js";

import { validationConfig, renderLoading } from "../utils/Constants.js";

//buttons
const editProfileButton = document.querySelector("#edit-button");
const addCardButton = document.querySelector(".add-button");
const editProfilePicButton = document.querySelector("#edit-pic-button");
const createCardSubmitButton = document.querySelector("#create-button");
const editPopupSubmitButton = document.querySelector("#edit-submit");
const editProfilePicSubmitButton = document.querySelector("#profile-pic-button");

//inputs
const inputName = document.querySelector("#name");
const inputJob = document.querySelector("#about");

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: "9b991f86-368d-4ef3-963c-b91580821c46",
    "Content-Type": "application/json",
  },
});

//fetches the user's info including id. Declare let and set it as null, then change it's value in the api below

let userId = null;
const cardList = new Section("elements");

api.getAppInfo()
.then(([info, cardData]) => {
  userId = info._id;
  userInfo.setUserInfo(info);

  cardData.reverse();
  cardData.forEach((data) => {
    cardList.addItem(createCard(data));
  })
})
.catch(err => {
  console.log(`An error occurred getting user info and adding the initial cards: ${err}`);
});

const createCard = (data) => {
  const card = new Card(
    {
      currentId: userId,
      data,
      handleCardClick: () => {
        imagePopup.open({
          url: data.link,
          title: data.name,
        });
      },
      handleTrashClick: () => {
        deleteConfirmPopupForm.open(() => {
          api
            .removeCard({ _id: data._id })
            .then(() => {
              card.deleteCard();
              deleteConfirmPopupForm.close();
            })
            .catch((err) => {
              console.log(`There was an issue deleting this card: ${err}`);
            });
        });
      },
      handleLikeClick: () => {
        api.toggleLikeCardStatus(data._id, card.isLiked())
        .then((newData) => {
          card.setLikesInfo(newData.likes);
        })
        .catch((err) => {
          console.log(`There was an issue liking this card: ${err}`)
        })
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
  avatarSelector: "profile__image",
});

const editProfilePopupForm = new PopupWithForm({
  popupSelector: "edit-popup-form",
  handleFormSubmit: (data) => {
    renderLoading(editPopupSubmitButton, true);
    api
      .setUserInfo(data)
      .then((info) => {
        userInfo.setUserInfo(info);
        editProfilePopupForm.close();
      })
      .catch((err) => {
        console.log(`An error occurred updating user information: ${err}`)
      })

      .finally(() => {
        renderLoading(editPopupSubmitButton, false);
      });
  },
});

const createCardPopupForm = new PopupWithForm({
  popupSelector: "create-popup-form",
  handleFormSubmit: (data) => {
    renderLoading(createCardSubmitButton, true);
    api
      .addCard(data)
      .then((cardData) => {
        cardList.addItem(createCard(cardData));
        createCardPopupForm.close();
      })
      .catch((err) => {
        console.log(`An error had occurred while adding your card :( : ${err}`)
      })

      .finally(() => {
        renderLoading(createCardSubmitButton, false);
      });
  },
});


const deleteConfirmPopupForm = new PopupWithDeleteConfirm({
  popupSelector: "delete-confirmation-popup",
  handleDeleteCard: () => {},
});

const profilePicPopupForm = new PopupWithForm({
  popupSelector: "profile-picture-popup",
  handleFormSubmit: (data) => {
    renderLoading(editProfilePicSubmitButton, true);
    api
      .updateProfilePicture({
        avatar: data.url,
        _id: data._id
      })
      .then((info) => {
        userInfo.setUserInfo(info);
        profilePicPopupForm.close();
      })
      .catch((err) => {
        console.log(`An error had occurred updating profile picture: ${err}`)
      })
      .finally(() => {
        renderLoading(editProfilePicSubmitButton, false);
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
  const { name, about } = userInfo.getUserInfo();
  inputName.value = name;
  inputJob.value = about;
  editProfileValidator.resetValidation();
});

addCardButton.addEventListener("click", () => {
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