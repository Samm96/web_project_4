export class Card {
  constructor({ data, handleCardClick, handleTrashClick, currentId}, templateSelector) {
    this._template = document.querySelector(`#${templateSelector}`);
    this._data = data;
    this._handleCardClick = handleCardClick;
    this._handleTrashClick = handleTrashClick;
    this._currentId = currentId;
  }

  createCard() {
    this._card = this._template.content.cloneNode(true).querySelector(".element");
   
    const titleElement = this._card.querySelector(".element__title");
    const imgElement = this._card.querySelector(".element__image");

    const ownerId = this._data.owner._id;
    const trashButton = this._card.querySelector(".delete-button");

    if(this._currentId === ownerId) {
      trashButton.add();
    } else {
      trashButton.remove();
    }
debugger
    imgElement.src = this._data.link;
    imgElement.alt = this._data.name;
    titleElement.textContent = this._data.name;

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
