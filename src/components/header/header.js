import React from 'react';
import BurgerMenu from '../burger-menu';
import './header.css';

class Header extends React.Component {
    state = {
        openlogin: false,
        openLang: false,
        openCurrency: false
    };
    onMenuLogin = () => {
        this.setState((state) => {
            return {
                openlogin: !state.openlogin
            };
        })
    };
    onMenuItemCurrency = () => {
        this.setState((state) => {
            return {
                openCurrency: !state.openCurrency
            };
        });
    }
    onMenuItemLang = () => {
        this.setState((state) => {
            return {
                openLang: !state.openLang,
            };
        });
    }
    render() {
        const { openlogin , openLang , openCurrency } = this.state;
        let classNames = {
            logIn:"log-in__menu",
            currency:"currency__menu",
            lang:"lang__menu",
        }

        if (openlogin) {
            classNames.logIn += " open";
        } else if (openCurrency) {
            classNames.currency += " open";
        } else if (openLang) {
            classNames.lang += "  open";
        }
        return (
           <header className="header">
               <nav className="header-top main-nav">
                   <BurgerMenu/>
                    <ul className="menu">
                        <li className="menu-item log-in" onMouseOver = { this.onMenuLogin } onMouseOut = { this.onMenuLogin }>Личный кабинет
                            <ul className={classNames.logIn} >
                                <li>Вход</li>
                                <li>Регистрация</li>
                            </ul>
                        </li>
                        <li className="menu-item currency" onMouseOver = { this.onMenuItemCurrency } onMouseOut = { this.onMenuItemCurrency }>Рубль
                            <ul className={classNames.currency}>
                                <li>Euro</li>
                                <li>Dollar</li>
                            </ul>
                        </li>
                        <li className="menu-item lang" onMouseOver = { this.onMenuItemLang } onMouseOut = { this.onMenuItemLang } >Ru
                            <ul className={classNames.lang}>
                                <li>En</li>
                            </ul>
                        </li>
                        <li className="menu-item telephone">8-800-500-61-01<br/><b>Круглосуточная поддержка</b></li>
                    </ul>
               </nav>
               <div className="header-middle">
                   <a className="header__logo" href="https://yandex.ru">
                      <img src="https://s4.aconvert.com/convert/p3r68-cdx67/cb04a-0b7eq.svg" alt=""/>
                   </a>
                   <h3>Морские прогулки</h3>
                   <h2>по черному морю</h2>
                   <a href="https://yandex.ru" className="header-middle__button">Выбрать круиз</a>
               </div>
           </header>
        )
    }
};
export default Header;
///подумать над классами!!! как лучше!!!! 