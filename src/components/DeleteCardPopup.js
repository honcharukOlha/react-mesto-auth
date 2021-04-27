import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function DeleteCardPopup({ card, isOpen, onClose, onCardDelete, isSaving }) {
    // Подписка на контекст
    const currentUser = React.useContext(CurrentUserContext);

    function handleSubmit() {
        onCardDelete(card);
        currentUser.setState(true);
    }

    return (
        <PopupWithForm
            title="Вы уверены?"
            name="open_confirmation"
            buttonText={'Да'}
            isSaving={isSaving}
            isOpen={isOpen}
            onSubmit={handleSubmit}
            onClose={onClose}
        />
    );
}

export default DeleteCardPopup;
