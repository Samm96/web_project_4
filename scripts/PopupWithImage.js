import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
    constructor({popupSelector}){
        super(popupSelector);

        this._imageElement = this._popupElement.querySelector(".popup-form__image");
        this._imageCaption = this._popupElement.querySelector(".popup-form__caption");
        this._imageTitle = this._popupElement.querySelector(".popup-form__title");
    }

    open () {
        this._imageElement = this._imageElement.src;
        this._imageCaption = this._imageTitle.textContent;
        super.open();
    }
}