const editProfilePopup = document.querySelector('#edit-popup-form');
const editProfileButton = document.querySelector('.edit-button');

const formCloseButton = document.querySelector('.close-button');

editProfileButton.addEventListener('click', () => {
    editProfilePopup.classList.add('popup-form_open');
})

formCloseButton.addEventListener('click', () => {
    editProfilePopup.classList.remove('popup-form_open');
})