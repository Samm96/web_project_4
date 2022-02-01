import Popup from "./Popup.js";

class PopupWithDeleteConfirm extends Popup {
    constructor() {
        super(popupSelector);
    }
    
    setEventListeners() {
        const element = document.querySelector(".element");

        this._popupElement.querySelector("#confirmation-button").addEventListener("click", () => {
            element.remove();
        });
    }
}