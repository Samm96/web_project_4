const editProfilePopup = document.querySelector('#edit-popup-form');
const editProfileButton = document.querySelector('.edit-button');
const formCloseButton = document.querySelector('.close-button');
const formSubmit = document.querySelector('.submit-button');


//This opens and closes form
editProfileButton.addEventListener('click', () => {
    editProfilePopup.classList.add('popup-form_open');
})
formCloseButton.addEventListener('click', () => {
    editProfilePopup.classList.remove('popup-form_open');
})
//close form by clicking anything but popup
editProfilePopup.addEventListener('click', (e) => {
    if(e.target === editProfilePopup){
        editProfilePopup.classList.remove('popup-form_open');
    }
})


//This makes the formCloseButton change color when hovered over
formCloseButton.addEventListener('mouseover', () => {
    formCloseButton.classList.add('close-button_hover');
})
formCloseButton.addEventListener('mouseout', () => {
    formCloseButton.classList.remove('close-button_hover');
})


//This makes the editProfileButton change color when hovered over
editProfileButton.addEventListener('mouseover', () => {
    editProfileButton.classList.add('edit-button_hover');
})
editProfileButton.addEventListener('mouseout', () => {
        editProfileButton.classList.remove('edit-button_hover');
})

//This makes the formSubmit change color when hovered over
formSubmit.addEventListener('mouseover', () => {
    formSubmit.classList.add('submit-button_hover');
})
formSubmit.addEventListener('mouseout', () => {
    formSubmit.classList.remove('submit-button_hover');
})


//Submit button & saving new input name to page

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__description');

const inputName = document.querySelector('#name');
const inputJob = document.querySelector('#description');

function handleProfileSubmit(e) {
    e.preventDefault();
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
}

formSubmit.addEventListener('submit', handleProfileSubmit);

function toggleForm () {
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
    editProfilePopup.classList.remove('popup-form_open');
}