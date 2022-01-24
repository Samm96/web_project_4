import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
    open ({link, name}) {
        this._popupElement.querySelector(".popup-form__caption").textContent = name;
        const image = this._popupElement.querySelector(".popup-form__image");
        image.src = link;
        image.alt = this._popupElement.querySelector("#title");

        super.open();
    }
}