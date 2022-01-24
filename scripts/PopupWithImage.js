import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
    open ({url, title}) {
        this._popupElement.querySelector(".popup-form__caption").textContent = title;
        this._popupElement.querySelector(".popup-form__image").src = url;
        this._popupElement.querySelector(".popup-form__image").alt = title;

        super.open();
    }
}