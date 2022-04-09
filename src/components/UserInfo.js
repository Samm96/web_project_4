export default class UserInfo {
  constructor({ nameSelector, descriptionSelector, avatarSelector }) {
    this._nameElement = document.querySelector(`.${nameSelector}`);
    this._descriptionElement = document.querySelector(
      `.${descriptionSelector}`
    );
    this._avatarElement = document.querySelector(`.${avatarSelector}`);
  }
  //returns an object with info about the user
  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      about: this._descriptionElement.textContent,
      _id: this._userId,
      avatar: this._avatarElement.src,
    };
  }
  //takes new user data and adds it on the page
  setUserInfo({ name, about, _id, avatar }) {
    if (name) this._nameElement.textContent = name;
    if (about) this._descriptionElement.textContent = about;
    if (_id) this._id = _id;
    if (avatar) this._avatarElement.src = avatar;
  }
}
