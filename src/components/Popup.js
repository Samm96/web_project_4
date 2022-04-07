export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(`#${popupSelector}`);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popupElement.classList.add("popup-form_open");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove("popup-form_open");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(e) {
    if (e.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    // if click outside popup or click on x button, close popup.
    this._popupElement.addEventListener("mousedown", (e) => {
      if (
        e.target === this._popupElement ||
        e.target.classList.contains("close-button")
      ) {
        this.close();
      }
    });
  }
}
