import Popup from "./Popup.js";

export default class PopupWithDeleteConfirm extends Popup {
    constructor({popupSelector}) {
        super(popupSelector);
    }
    
    setEventListeners() {
        super.setEventListeners();
        //this._popupElement.querySelector("#confirmation-button").addEventListener("click", this.deleteCard());
    }

    //deleteCard() {
        //document.querySelector(".element").closest(".element");
    //}
}

// esc button isn't closing this modal