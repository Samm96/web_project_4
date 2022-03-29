export default class UserInfo {
  constructor({ nameSelector, descriptionSelector }) {
    this._nameElement = document.querySelector(`.${nameSelector}`);
    this._descriptionElement = document.querySelector(`.${descriptionSelector}`);
  }
  //returns an object with info about the user
  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      about: this._descriptionElement.textContent,
      id: this._userId
    };
  }
  //takes new user data and adds it on the page
  setUserInfo({ name, about, id }) {
    this._nameElement.textContent = name;
    this._descriptionElement.textContent = about;
    this._userId = id;
  }
}
