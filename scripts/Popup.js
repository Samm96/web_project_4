export default class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(`#${popupSelector}`);
        this._handleEscClose = this._handleEscClose.bind(this);
        this._form = document.querySelector(".popup-form__input-container");
    }

    open () {
        this._popupElement.classList.add("popup-form_open");
        this._form.reset();
        document.addEventListener("keydown", this._handleEscClose); 
    }

    close () {
       this._popupElement.classList.remove("popup-form_open");
       document.removeEventListener("keydown", this._handleEscClose); 
    }

    _handleEscClose(e) {
        if (e.key === "Escape") {
            this.close();
        }
    }

    setEventListeners() {
        // if click outside popup, close popup.
        this._popupElement.addEventListener("click", (e) => {
            if (e.target === this._popupElement) {
                this.close();
            }
            // if click x button, close popup.
            if (e.target.classList.contains("close-button")) {
                this.close();
            }
        });
    }
}