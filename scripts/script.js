const editProfilePopup = document.querySelector('#edit-popup-form');
const editProfileButton = document.querySelector('.edit-button');
const formCloseButton = document.querySelector('.close-button');
const formSubmit = document.querySelector('.submit-button');

//Not sure if right... check later
const createSubmit = document.querySelector('#create-button');
const createCardPopup = document.querySelector('#create-popup-form');
const imgCardPopup = document.querySelector('#image-popup-form');
//

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__description');

const inputName = document.querySelector('#name');
const inputJob = document.querySelector('#description');

const inputTitle = document.querySelector('#title');
const inputImg = document.querySelector('#image-link');

const buttonTrash = document.querySelectorAll('.delete-button');
const buttonLike = document.querySelectorAll('.like-button');

const initialCards = [
    {
      name: "Disney World",
      link: "images/sandro-gonzalez-dBEJG6hv224-unsplash.jpg"
    },
    {
      name: "Old San Juan, Puerto Rico",
      link: "images/jennifer-chen-yXJiC2UjIBo-unsplash-colorfix.jpg"
    },
    {
      name: "Colonial Williamsburg",
      link: "images/Colonial-Williamsburg-Virginiasizefix-2.jpg"
    },
    {
      name: "N.A. Pow Wows",
      link: "images/jess-lindner-xegyDn1-SoY-unsplash-colorfix.jpg"
    },
    {
      name: "Cedar Point, OH",
      link: "images/Corkscrew_(Cedar_Point)_01.jpg"
    },
    {
      name: "Palm Springs Aerial Tramway",
      link: "images/Palm-Springs-Aerial-Tramway-colorfix.jpg"
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
    if (formCloseButton) {
        editProfilePopup.classList.remove('popup-form_open');
    }
}

formCloseButton.addEventListener('click', closeForm);


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