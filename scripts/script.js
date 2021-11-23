//popup-forms
const createCardPopup = document.querySelector('#create-popup-form');
const imgCardPopup = document.querySelector('#image-popup');
const editProfilePopup = document.querySelector('#edit-popup-form');


//buttons
const editProfileButton = document.querySelector('.edit-button');
const formCloseButtons = document.querySelectorAll('.close-button');
const formSubmit = document.querySelector('.submit-button');
const createSubmit = document.querySelector('#create-button');
const buttonTrash = document.querySelectorAll('.delete-button');
const buttonLike = document.querySelectorAll('.like-button');

//
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__description');


//inputs 
const inputName = document.querySelector('#name');
const inputJob = document.querySelector('#description');
const inputTitle = document.querySelector('#title');
const inputImg = document.querySelector('#image-link');


//cardtemplate
const cardTemplate = document.querySelector("#card-template");
const cardSection = document.querySelector(".elements");


//loop for initial cards
const initialCards = [
    {
      title: "Palm Springs Aerial Tramway",
      url: "images/Palm-Springs-Aerial-Tramway-colorfix.jpg"
    },
    {
      title: "Cedar Point, OH",
      url: "images/Corkscrew_(Cedar_Point)_01.jpg"
    },
    {
      title: "N.A. Pow Wows",
      url: "images/jess-lindner-xegyDn1-SoY-unsplash-colorfix.jpg"
    },
    {
      title: "Colonial Williamsburg",
      url: "images/Colonial-Williamsburg-Virginiasizefix-2.jpg"
    },
    {
      title: "Old San Juan, Puerto Rico",
      url: "images/jennifer-chen-yXJiC2UjIBo-unsplash-colorfix.jpg"
    },
    {
      title: "Disney World",
      url: "images/sandro-gonzalez-dBEJG6hv224-unsplash.jpg"

    }
  ];



//This opens form
function openForm (editProfileButton) {
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
    editProfilePopup.classList.add('popup-form_open');
}

editProfileButton.addEventListener('click', openForm);

// closes form
function closeForm (editProfileButton) {
    editProfilePopup.classList.remove('popup-form_open');
}

formCloseButtons.forEach((formCloseButton) => {
  formCloseButton.addEventListener('click', (event) => {
    const popup = formCloseButton.closest('.popup-form');
    closeForm(popup);
  });
})


//close form by clicking anything but popup
editProfilePopup.addEventListener('mousedown', (e) => {
    if(e.target === editProfilePopup){
        closeForm(editProfilePopup);
    }
})


//Submit button & replacing input name/job

function editProfileSubmitHandler(e) {
    e.preventDefault();
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
    closeForm(editProfilePopup);
}

editProfilePopup.addEventListener('submit', editProfileSubmitHandler);
//


// function to create the card
function createCard(data) {
  const card = cardTemplate.content.querySelector('.element').cloneNode('true');
  const imgElement = card.querySelector('.element__image');
  const titleElement = card.querySelector('.element__title');

  imgElement.src = data.url;
  titleElement.textContent = data.title;
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