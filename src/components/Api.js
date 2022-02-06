export default class Api {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

// used to get the server response
    _handleServerResponse(res) {
        return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
    }
    
//used to request user info
    getUserInfo() {
        fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers,})
        .then(this._handleServerResponse);
    }

//used to insert user info
    setUserInfo({name, description}) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name,
                description
            }),
        })
        .then(this._handleServerResponse);
    }

 // used to insert profile pic   
    updateProfilePicture({avatar}) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar,
            }),
        })
        .then(this._handleServerResponse);
    }

  // used to get initial cards from server  
    getInitialCardList() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers,
        })
            .then(this._handleServerResponse)
    }

// used to add cards to page
    addCard({title, link}) {
        return fetch(`${this._baseUrl}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                title,
                link,
            })
        })
            .then(this._handleServerResponse)
    }

// removes cards
    removeCard({_id}) {
        return fetch(`${this._baseUrl}/cards/cardId`, {
            method: "DELETE",
            headers: this._headers,
            body: JSON.stringify({
                _id,
            })
        })
        .then(this._handleServerResponse)
    }

    
    toggleLikeCardStatus(cardId, like) {
        return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
            method: like ? "PUT" : "DELETE",
            headers: this._headers,
        })
        .then(this._handleServerResponse)
    }

}