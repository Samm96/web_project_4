const editProfilePopup = document.querySelector('#edit-popup-form');
const editProfileButton = document.querySelector('.edit-button');
const formCloseButton = document.querySelector('.close-button');


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