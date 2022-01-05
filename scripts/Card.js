import { imageCardPopup } from "./index.js";
import { openForm } from "./utils.js";
export class Card {
  constructor(template, data) {
    this._template = template;
    this._data = data;
  }

  render() {
    const card = this._template
      .cloneNode("true");
    const imgElement = card.querySelector(".element__image");
    const titleElement = card.querySelector(".element__title");
    const deleteButton = card.querySelector(".delete-button");
    const likeButton = card.querySelector(".like-button");
    const caption = card.querySelector(".popup-form__caption");

    imgElement.src = this._data.url;
    imgElement.alt = this._data.title;
    titleElement.textContent = this._data.title;

    // click on img to open img modal (causes initial cards not to show up)
    imgElement.addEventListener("click", () => {
      imgElement.src = this._data.url;
      imgElement.alt = this._data.title;
      caption.textContent = this._data.title;
      openForm(imageCardPopup);
    });

    deleteButton.addEventListener("click", () => {
      const item = this._deleteButton.closest(".element");
      item.remove();
    });

    // like/unlike button
    likeButton.addEventListener("click", () => {
      this._likeButton.classList.toggle("like-button_active");
    });
  }
}
