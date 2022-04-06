import Popup from "./Popup.js";

export default class PopupWithDeleteConfirm extends Popup {
  constructor({ popupSelector }) {
    super(popupSelector);

    this._handleDeleteCard = this._handleDeleteCard;
  }

  open(deleteCard) {
    super.open();
    this.deleteCard = deleteCard;
  }

  setEventListeners() {
    super.setEventListeners();

    const deleteConfirmButton = document.querySelector("#confirmation-button");

    deleteConfirmButton.addEventListener("click", () => {
      this.deleteCard();
      this.close();
    });
  }
}
