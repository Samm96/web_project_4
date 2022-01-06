import { imageCardPopup, popupCaption, popupImageElement } from "./index.js";
import { openForm } from "./utils.js";
export class Card {
  constructor(template, data) {
    this._template = template;
    this._data = data;
  }

  render() {
    this._card = this._template.content.cloneNode(true);
    const imgElement = this._card.querySelector(".element__image");
    const titleElement = this._card.querySelector(".element__title");
    const deleteButton = this._card.querySelector(".delete-button");
    const likeButton = this._card.querySelector(".like-button");

    imgElement.src = this._data.url;
    imgElement.alt = this._data.title;
    titleElement.textContent = this._data.title;

    // click on img to open img modal (causes initial cards not to show up)
    imgElement.addEventListener("click", () => {
      popupImageElement.src = this._data.url;
      popupImageElement.alt = this._data.title;
      popupCaption.textContent = this._data.title;
      openForm(imageCardPopup);
    });

    deleteButton.addEventListener("click", () => {
      const item = deleteButton.closest(".element");
      item.remove();
    });

    // like/unlike button
    likeButton.addEventListener("click", () => {
      likeButton.classList.toggle("like-button_active");
    });
    return this._card;
  }
}
