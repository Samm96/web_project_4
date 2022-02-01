import Popup from "./Popup.js";

class PopupWithProfilePic extends Popup {
    constructor({inputSelector, popupSelector}) {
        super(popupSelector);

        this._input = this._popupElement.querySelector(`.${inputSelector}`);
    }

    _getImageValue() {
        return { 
            url: this._input.src,
        };
    }

    setProfilePicture({ url }) {
        this._input.src = url;
    }
}