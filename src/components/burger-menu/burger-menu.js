import React from 'react';
import './burger-menu.css';

export default class BurgerMenu extends React.Component {
    state = {
        open: false
    };
    onBtnClickHandler = () => {
        this.setState((state) => {
            return {
                open: !state.open
            };
        });
    };
    render () {
        const { open } = this.state;
        let classNames = "burger-menu";
        if (open) {
            classNames += "  open"
        }
        return (
            <div className="burger-menu__button" onClick={ this.onBtnClickHandler }>
                <ul className={ classNames }>
                    <li>Популярные рейсы</li>
                    <li>Расписание рейсов</li>
                    <li>Забронированные рейсы</li>
                    <li>Вход для партнеров</li>
                    <li>О компании</li>
                    <li>Контакты</li>
                </ul>
            </div>
        )
    }
};
//const { onBtnClickHandler } = this.props;