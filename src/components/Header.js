import '../index.css';
import logo from '../../src/images/logo.svg';
import line from '../../src/images/Line.svg';
import close from '../../src/images/Close-icon.svg';
import { Route, Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import React from 'react';

function Header({ userData, onSignOut }) {
    const mobileVersion = useMediaQuery({ query: '(max-width: 768px)' });
    const [state, setState] = React.useState(true);

    const handleClick = () => {
        setState(!state);
    };

    function handleMobileVersion() {
        if (state) {
            return (
                <button className="header__button-line" onClick={handleClick}>
                    <img src={line} className="header__line" alt="Линия" />
                    <img src={line} className="header__line" alt="Линия" />
                    <img src={line} className="header__line" alt="Линия" />
                </button>
            );
        } else {
            return (
                <>
                    <div className="header__container">
                        <p className="header__button_email header__email">
                            {userData.email}
                        </p>
                        <button className="header__button header__button_mobile">
                            <Link
                                to="/sign-in"
                                onClick={onSignOut}
                                className="header__button_text header__button_mobile-text"
                            >
                                Выйти
                            </Link>
                        </button>
                    </div>
                    <button
                        className="header__button-close"
                        onClick={handleClick}
                    >
                        <img
                            src={close}
                            className="header__close"
                            alt="Закрыть"
                        />
                    </button>
                </>
            );
        }
    }

    return (
        <header
            className={`header ${
                !state && mobileVersion ? 'header_mobile' : ''
            }`}
        >
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
