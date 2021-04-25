export class Api {
    constructor(options) {
        this.baseUrl = options.baseUrl;
        this.headers = options.headers;
    }

    getInitialCards() {
        return fetch(`${this.baseUrl}/cards`, {
            headers: this.headers,
        }).then(this._handleResult);
    }

    getUserInfo() {
        return fetch(`${this.baseUrl}/users/me`, {
            headers: this.headers,
        }).then(this._handleResult);
    }

    setUserInfo(newName, newAbout) {
        return fetch(`${this.baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                name: newName,
                about: newAbout,
            }),
        }).then(this._handleResult);
    }

    addNewCard(name, link) {
        return fetch(`${this.baseUrl}/cards`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                name: name,
                link: link,
            }),
        }).then(this._handleResult);
    }

    deleteCard(cardId) {
        return fetch(`${this.baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this.headers,
        }).then(this._handleResult);
    }

    toggleLike(cardId, isLike) {
        let method = 'PUT';
        if (!isLike) {
            method = 'DELETE';
        }
        return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
            method: method,
            headers: this.headers,
        }).then(this._handleResult);
    }

    changeAvatar(avatar) {
        return fetch(`${this.baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                avatar: avatar,
            }),
        }).then(this._handleResult);
    }

    _handleResult(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-20',
    headers: {
        authorization: '21eee041-fcae-490d-9803-798f90444675',
        'Content-Type': 'application/json',
    },
});

export default api;
