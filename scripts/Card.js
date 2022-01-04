// Card class code
import { imageCardPopup } from "./index";
const cardTemplate = document.querySelector("#card-template");
const likeButton = document.querySelector(".like-button");


function toggleLike() {
    likeButton.classList.toggle(".like-button_active");
};

class Card {
    constructor (data) {
        this.image = image;
        this.title = title;
        this.deleteButton = deleteButton;
        this.likeButton = like;
        this.isDeleted = false; // need function
        this.isLiked = false; // need function
    }

    _getTemplate() {
        const cardElement = cardTemplate
            .content
            .querySelector(".element")
            .cloneNode("true");

        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();

        this._element.querySelector(".element__image").src = this.image;
        this._element.querySelector(".element__image").alt = this.title;
        this._element.querySelector(".element__title").textContent = this.title;
        this._element.querySelector(".delete-button") = this.deleteButton;
        this._element.querySelector(".like-button") = this.like;

        return this._element;
    }

    _setEventListeners() {
        this._element.querySelector(".delete-button").addEventListener("click", () => {
            this.handleClick();
        });
        this._element.querySelector(".like-button").addEventListener("click", () => {
            this.handleClick();
        });
        this._element.querySelector(".element__image").addEventListener("click", () => {
            this.handleClick();
        });
    }

    _handleClick() {
        const item = document.querySelector(".delete-button").closest(".element");
        const image = document.querySelector(".element__image");

        if (item) {
            item.remove();
        } else if (this.isLiked === "true") {
            toggleLike();
        } else if (image) {
            openForm(imageCardPopup);
        }
    }
}


