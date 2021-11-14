const editProfilePopup = document.querySelector('#edit-popup-form');
const editProfileButton = document.querySelector('.edit-button');
const formCloseButton = document.querySelector('.close-button');
const formSubmit = document.querySelector('.submit-button');

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__description');

const inputName = document.querySelector('#name');
const inputJob = document.querySelector('#description');


//This opens form
function toggleForm () {
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
    editProfilePopup.classList.add('popup-form_open');
}

editProfileButton.addEventListener('click', toggleForm);


// closes form
formCloseButton.addEventListener('click', () => {
    editProfilePopup.classList.remove('popup-form_open');
})


//close form by clicking anything but popup
editProfilePopup.addEventListener('mousedown', (e) => {
    if(e.target === editProfilePopup){
        editProfilePopup.classList.remove('popup-form_open');
    }
})


//Submit button & replacing input name/job

function handleProfileSubmit(e) {
    e.preventDefault();
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
    editProfilePopup.classList.remove('popup-form_open');
}

editProfilePopup.addEventListener('submit', handleProfileSubmit);