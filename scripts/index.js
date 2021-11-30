//popup-forms
const createCardPopup = document.querySelector("#create-popup-form");
const imgCardPopup = document.querySelector("#image-popup");
const editProfilePopup = document.querySelector("#edit-popup-form");
const popupForm = document.querySelectorAll(".popup-form");

//buttons
const editProfileButton = document.querySelector(".edit-button");
const formCloseButtons = document.querySelectorAll(".close-button");
const formSubmit = document.querySelector(".submit-button");
const createSubmit = document.querySelector("#create-button");
const addCardButton = document.querySelector(".add-button");

//
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__description");

//inputs
const inputName = document.querySelector("#name");
const inputJob = document.querySelector("#description");
const inputTitle = document.querySelector("#title");
const inputImg = document.querySelector("#image-link");

const element = document.querySelector(".element");

//cardtemplate
const cardTemplate = document.querySelector("#card-template");
const cardSection = document.querySelector(".elements");
const popupImageElement = imgCardPopup.querySelector("#imgPopupImg");
const popupCaption = imgCardPopup.querySelector(".popup-form__caption");

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

//This opens form
function openForm(popupForm) {
  popupForm.classList.add("popup-form_open");
}

// closes form
function closeForm(popupForm) {
  popupForm.classList.remove("popup-form_open");
}

formCloseButtons.forEach((formCloseButton) => {
  formCloseButton.addEventListener("click", (event) => {
    const popup = formCloseButton.closest(".popup-form");
    closeForm(popup);
  });
});

//close form by clicking anything but popup
editProfilePopup.addEventListener("mousedown", (e) => {
  if (e.target === editProfilePopup) {
    closeForm(editProfilePopup);
  }
});

//Submit button & replacing input name/job

function editProfileSubmitHandler(e) {
  e.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closeForm(editProfilePopup);
}

function createCardSubmitHandler(e) {
  e.preventDefault();
  const data = { url: inputImg.value, title: inputTitle.value };
  renderCard(data);
  closeForm(createCardPopup);
}

//functions called

editProfilePopup.addEventListener("submit", editProfileSubmitHandler);
createCardPopup.addEventListener("submit", createCardSubmitHandler);

editProfileButton.addEventListener("click", () => {
  inputName.placeholder = profileName.textContent;
  inputJob.placeholder = profileJob.textContent;
  openForm(editProfilePopup);
});

addCardButton.addEventListener("click", () => {
  openForm(createCardPopup);
});

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
    openForm(imgCardPopup);
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
