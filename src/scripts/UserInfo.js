export default class UserInfo {
    constructor({ nameSelector, descriptionSelector }) {
        this._name = document.querySelector(`.${nameSelector}`);
        this._description = document.querySelector(`.${descriptionSelector}`);
    };
//returns an object with info about the user
    getUserInfo() {
        return ({
            name: this._name.textContent,
            description: this._description.textContent,
        });
    }
//takes new user data and adds it on the page
    setUserInfo({ name, description }) {
        this._name.textContent = name;
        this._description.textContent = description;
    }
}