export class Card {
  constructor({ data, handleCardClick }, templateSelector) {
    this._template = document.querySelector(`#${templateSelector}`);
    this._data = data;
    this._handleCardClick = handleCardClick;
  }

  createCard() {
    this._card = this._template.content.cloneNode(true).querySelector(".element");
   
    const titleElement = this._card.querySelector(".element__title");
    const imgElement = this._card.querySelector(".element__image");

    imgElement.src = this._data.url;
    imgElement.alt = this._data.title;
    titleElement.textContent = this._data.title;

    // click on img to open img modal (causes initial cards not to show up)
    this._setEventListeners();

    return this._card;
  }

  _setEventListeners() {  
    const imgElement = this._card.querySelector(".element__image");

    imgElement.addEventListener("click", (data) => {
      this._handleCardClick(data);
    });

    this._card.querySelector(".delete-button").addEventListener("click", () => {
      this._deleteCard();
    });

    // like/unlike button
    this._card.querySelector(".like-button").addEventListener("click", () => {
      this._toggleLike();
    });
  }

  _toggleLike() {
    this._card.querySelector(".like-button").classList.toggle("like-button_active");
  }

  _deleteCard() {
    this._card.remove();
  }
}
