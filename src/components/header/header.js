import React from 'react';
import './header.css';

export default class Header extends React.Component {
    render() {
        return (
           <header>
               <nav className="main-nav header-top">
                   <ul className="burger-menu">
                   <li>Популярные рейсы</li>
                   <li>Расписание рейсов</li>
                   <li>Забронированные рейсы</li>
                   <li>Вход для партнеров</li>
                   <li>О компании</li>
                   <li>Контакты</li>
                    </ul>
               <ul className="menu">
                   <li>Личный кабинет</li>
                   <li>Рубль</li>
                   <li>RU</li>
                   <li>8-800-500-61-01</li>
               </ul>
               </nav>
               <div className="header-middle">
                   <a className="header__logo" href="#">
                       <img src="" alt=""/>
                   </a>
                   <h3>Морские прогулки</h3>
                   <h2>по черному морю</h2>
                   <a href="#" className="header-middle__button">Выбрать круиз</a>
               </div>
           </header>
        )
    }
};