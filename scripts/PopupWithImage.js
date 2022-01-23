import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
    constructor(popupSelector, imageElement, imageCaption, imageTitle){
        super(popupSelector);

        this._imageElement = imageElement;
        this._imageTitle = imageTitle;
        this._imageCaption = imageCaption;
    }

    open () {
        this._imageElement = this._popupElement.querySelector(".popup-form__image").src;
        this._imageCaption = this._popupElement.querySelector(".popup-form__title").textContent;
        this._imageElement.alt = this._popupElement.querySelector(".popup-form__title").textContent;

        super.open();
    }
}