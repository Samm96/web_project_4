export class Card {
  constructor({ data, handleCardClick, handleTrashClick}, templateSelector) {
    this._template = document.querySelector(`#${templateSelector}`);
    this._data = data;
    this._handleCardClick = handleCardClick;
    this._handleTrashClick = handleTrashClick;
  }

  createCard() {
    this._card = this._template.content.cloneNode(true).querySelector(".element");
   
    const titleElement = this._card.querySelector(".element__title");
    const imgElement = this._card.querySelector(".element__image");

    imgElement.src = this._data.link;
    imgElement.alt = this._data.title;
    titleElement.textContent = this._data.title;

    // click on img to open img modal (causes initial cards not to show up)
    this._setEventListeners();
    return this._card;
  }

  _updateLikeCount() {
    this._liked = this._card.querySelector(".like-button__counter");
    this._liked.textContent = this._liked.length;
  }

  _setEventListeners() {  
    const imgElement = this._card.querySelector(".element__image");

    imgElement.addEventListener("click", (data) => {
      this._handleCardClick(data);
    });

    this._card.querySelector("#delete-card-button").addEventListener("click", () => {
      this._handleTrashClick();
    });

    // like/unlike button
    this._card.querySelector(".like-button").addEventListener("click", () => {
      this._toggleLike();
    });
  }

  _toggleLike() {
    this._card.querySelector(".like-button").classList.add("like-button_active");
    this._updateLikeCount();
  }
}
