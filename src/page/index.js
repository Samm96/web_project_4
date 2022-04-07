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

//inputs
const inputName = document.querySelector("#name");
const inputJob = document.querySelector("#about");
const inputPicture = document.querySelector("#profile-pic");

const profilePicture = document.querySelector(".profile__image");

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: "9b991f86-368d-4ef3-963c-b91580821c46",
    "Content-Type": "application/json",
  },
});

//fetches the user's info including id. Declare let and set it as null, then change it's value in the api below

let userId = null;

api.getUserInfo().then((info) => {
  userId = info._id;
  userInfo.setUserInfo(info);
});

//

const cardList = new Section("elements");

api
  .getInitialCardList()

  .then((cardData) => {
    cardData.reverse();
    cardData.forEach((data) => {
      cardList.addItem(createCard(data));
    });
  })
  .catch((err) =>
    console.log(`An error occurred adding the initial cards: ${err}`)
  );

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
          card.toggleLike();
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
    renderLoading(editProfilePicButton, true);
    api
      .setUserInfo({
        name: data.name,
        about: data.about,
        avatar: data.avatar,
      })

      .then((info) => {
        userInfo.setUserInfo({
          name: info.name,
          about: info.about,
          avatar: info.avatar,
        });
        editProfilePopupForm.close();
        editProfileValidator.resetValidation();
      })
      .catch((err) => {
        console.log(`An error occurred updating user information: ${err}`)
        editProfilePopupForm.open();
      })

      .finally(() => {
        renderLoading(editProfilePicButton, false);
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
        createCardValidator.resetValidation();
      })

      .catch((err) => {
        console.log(`An error had occurred while adding your card :( : ${err}`)
        createCardPopupForm.open();
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
    renderLoading(editPopupSubmitButton, true);
    api
      .updateProfilePicture({
        avatar: data,
      })
      .then(() => {
        profilePicture.src = inputPicture.value;
        profilePicPopupForm.close();
        profilePicValidator.resetValidation();
      })
      .catch((err) => {
        console.log(`An error had occurred updating profile picture: ${err}`)
        profilePicPopupForm.open();
      })
      .finally(() => {
        renderLoading(editPopupSubmitButton, false);
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
});

addCardButton.addEventListener("click", () => {
  createCardPopupForm.open();
});

editProfilePicButton.addEventListener("click", () => {
  profilePicPopupForm.open();
});

imagePopup.setEventListeners();
editProfilePopupForm.setEventListeners();
createCardPopupForm.setEventListeners();
deleteConfirmPopupForm.setEventListeners();
profilePicPopupForm.setEventListeners();

api.getAppInfo().then(([userInfoData, cardsData]) => {
  userInfo.setUserInfo(userInfoData);
});
