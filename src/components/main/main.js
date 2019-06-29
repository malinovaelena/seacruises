import React from 'react';
import Card from '../card';
import ArrDataOfCards from '../generate-data';
import './main.css';

export default class Main extends React.Component {
    constructor() {
        super();
        this.renderAmount = (amountForRender) => {
            for (let i = 0; i < amountForRender; i++) {
                return (<Card data = { ArrDataOfCards[i]}/>);
            };
        };
    }
    render() {
        return (<div className="main">
                <h2 className="main__title">Каталог круизов</h2>
                <h3 className="main__subtitle">Сортировать круизы по <b className="main__filter">цене</b></h3>
                <div className="cards-container">{<Card data = {ArrDataOfCards}/>}
                </div>
                <button className="cards-list__show-more">Показать больше</button>
                </div>
        )
    }
};