import Popup from "./Popup.js";

export default class PopupWithDeleteConfirm extends Popup {
    constructor({popupSelector}) {
        super(popupSelector);
    }

    setEventListeners() {
        const deleteConfirmButton = document.querySelector("#confirmation-button");

        deleteConfirmButton.addEventListener("click", () => {
            this.deleteCard();
            this.close();
        })
    }

    deleteCard() {
        const card = document.querySelector(".element");
        card.remove();
    }
}
