const editPopupForm = document.querySelector('edit-popup-form');
const formCloseButton = document.querySelector('.close-button');

const popupFormOpen = document.querySelector('.edit-button');

formCloseButton.addEventListener('click', () => {
    formCloseButton.classList.remove('.popup-form_open');
})

popupFormOpen.addEventListener('click', () => {
    popupFormOpen.classList.add('.popup-form_open');
})