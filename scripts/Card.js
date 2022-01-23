import { imageCardPopup, popupImageElement, popupCaption } from "./index.js";
import { openPopup } from "./utils.js";
export class Card {
  constructor({data, handleCardClick}, template) {
    this._template = template;
    this._data = data;
    this._handleCardClick = handleCardClick;
  }

  render() {
    this._card = this._template.content.cloneNode(true);
    this._imgElement = this._card.querySelector(".element__image");
    this._titleElement = this._card.querySelector(".element__title");
    this._deleteButton = this._card.querySelector(".delete-button");
    this._likeButton = this._card.querySelector(".like-button");


    this._imgElement.src = this._data.url;
    this._imgElement.alt = this._data.title;
    this._titleElement.textContent = this._data.title;

    // click on img to open img modal (causes initial cards not to show up)
    this._setEventListeners();
   
    return this._card;
  }

  _setEventListeners() {
    this._imgElement.addEventListener("click", (data) => {
      this._handleCardClick(data);
    });

    this._deleteButton.addEventListener("click", () => {
      this._deleteButton.closest(".element").remove();
    });

    // like/unlike button
    this._likeButton.addEventListener("click", () => {
      this._likeButton.classList.toggle("like-button_active");
    });
  }
}
