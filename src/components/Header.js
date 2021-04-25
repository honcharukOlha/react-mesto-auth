import '../index.css';
import logo from '../../src/images/logo.svg';
import line from '../../src/images/Line.svg';
import close from '../../src/images/Close-icon.svg';
import { Route, Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import React from 'react';

function Header({ userData, onSignOut, isOpen, onExitButton }) {
    const mobileVersion = useMediaQuery({ query: '(max-width: 768px)' });
    const [state, setState] = React.useState(false);

    const handleClick = () => {
        setState(!state);
    };

    function handleLoginContainer() {
        return (
            <div
                className={`header__container ${
                    isOpen
                        ? 'header__container_opened'
                        : isOpen && mobileVersion
                }`}
            >
                <p className="header__button_email">{userData.email}</p>
                <button className="header__button">
                    <Link
                        to="/sign-in"
                        onClick={onSignOut}
                        className="header__button_text"
                    >
                        Выйти
                    </Link>
                </button>
            </div>
        );
    }

    function handleMobileVersion() {
        if (state) {
            <button
                className="header__button-line"
                onClick={handleClick}
                isOpen={handleLoginContainer()}
            >
                <img src={line} className="header__line" alt="Линия" />
                <img src={line} className="header__line" alt="Линия" />
                <img src={line} className="header__line" alt="Линия" />
            </button>;
        } else {
            <button className="header__button-close" onClick={handleClick}>
                <img src={close} className="header__close" alt="Закрыть" />
            </button>;
        }
    }

    return (
        <header className="header">
            <img src={logo} className="header__logo" alt="Логотип сайта" />
            <Route exact path="/sign-in">
                <button className="header__button">
                    <Link to="/sign-up" className="header__button_text">
                        Регистрация
                    </Link>
                </button>
            </Route>
            <Route exact path="/sign-up">
                <button className="header__button">
                    <Link to="/sign-in" className="header__button_text">
                        Войти
                    </Link>
                </button>
            </Route>
            <Route exact path="/"></Route>
            <Route exact path="/main">
                {mobileVersion ? (
                    handleMobileVersion()
                ) : (
                    <button className="header__button header__button_wrap">
                        <p className="header__button_email">{userData.email}</p>
                        <Link
                            to="/sign-in"
                            onClick={onSignOut}
                            className="header__button_text"
                        >
                            Выйти
                        </Link>
                    </button>
                )}
            </Route>
        </header>
    );
}

export default Header;
