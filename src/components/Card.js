export class Card {
  constructor(
    { data, handleCardClick, handleTrashClick, handleLikeClick, currentId },
    templateSelector
  ) {
    this._template = document.querySelector(`#${templateSelector}`);
    this._data = data;
    this._handleCardClick = handleCardClick;
    this._handleTrashClick = handleTrashClick;
    this._handleLikeClick = handleLikeClick;
    this._currentId = currentId;
  }

  createCard() {
    this._card = this._template.content
      .cloneNode(true)
      .querySelector(".element");

    this._titleElement = this._card.querySelector(".element__title");
    this._imgElement = this._card.querySelector(".element__image");
    this._trashButton = this._card.querySelector(".delete-button");
    this._likesCounter = this._card.querySelector(".like-button__counter");
    this._likeButton = this._card.querySelector(".like-button");


    this._ownerId = this._data.owner._id;

    if (this._currentId !== this._ownerId) {
      this._trashButton.classList.add("delete-button_hidden");
    }

    this.setLikesInfo(this._data.likes);

    this._imgElement.src = this._data.link;
    this._imgElement.alt = this._data.name;
    this._titleElement.textContent = this._data.name;

    // click on img to open img modal (causes initial cards not to show up)
    this._setEventListeners();
    return this._card;
  }

  setLikesInfo(likes) {
    this._likes = likes;
    this._updateLikeCount();
  }

  _updateLikeCount() {
    this._likesCounter.textContent = this._likes.length;

    const isHearted = this._likes.some((like) => like._id === this._currentId);
    this._likeButton.classList.toggle("like-button_active", isHearted);
  }

  _setEventListeners() {
    this._imgElement.addEventListener("click", (data) => {
      this._handleCardClick(data);
    });

    this._trashButton.addEventListener("click", () => {
      if (this._currentId === this._ownerId) {
        this._trashButton.classList.remove("delete-button_hidden");
        this._handleTrashClick();
      }
    });

    // like/unlike button
    this._likeButton.addEventListener("click", () => {
      this._handleLikeClick();
    });
  }

  deleteCard() {
    this._card.remove();
  }

  isLiked() {
    const buttonStatus = this._likeButton
      .classList.contains("like-button_active");

    if (buttonStatus === true) {
      return false;
    } else if (buttonStatus === false) {
      return true;
    }
  }
}
