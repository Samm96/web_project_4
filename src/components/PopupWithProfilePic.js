import Popup from "./Popup.js";

export default class PopupWithProfilePic extends Popup {
    constructor({popupSelector, handleFormSubmit}) {
        super(popupSelector)
        this._form = this._popupElement.querySelector(".popup-form__input-container");
        this._formInput = this._popupElement.querySelector(".popup-form__input");
        this._handleFormSubmit = handleFormSubmit;
    }

    _getInputValue() {
        this._formValue = {};

        this._formValue[this._formInput.name] = this._formInput.value;

        return this._formValue;
    }

    setProfilePic() {
        return {
            url: this._formValue
        }
    }

    setEventListeners() {
        const editProfileImgButton = document.querySelector("#profile-pic-button");

        editProfileImgButton.addEventListener("click", () => {
            this.open();
        });

        this._popupElement.addEventListener("submit", (e) => {
            e.preventDefault();
            this._handleFormSubmit(this._getInputValue());
            this.close();
        });

    }

    resetForm() {
        this._form.reset();
    }
}