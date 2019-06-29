import React from 'react';
import './card.css';

export default class Card extends React.Component {
    constructor({data}) {
        super();
        this.arrOfCards = data;
    }
    render() {
        const amountOfCards = 5;
        const  newarr = this.arrOfCards.slice(0, amountOfCards);
        return (
        newarr.map((item) => {
        console.log(item);
        return (<article className="card-item">
        <div className="cards-image__container">
            <img className="cards-image" src={require('./img/test.png')} alt="anapa"/>
        </div>
        <section className="card-item__description">
            <h4 className="description-name">{ item.name }</h4>
            <p className="track-shedule"><b>Маршрут:</b>{ item.tracking }</p>
            <p className="duration"><b>Продолжительность:</b>{item.hour} ч. {item.minutes} мин.</p>
            <p className="price">27 000 руб</p>
        </section>
    </article>)
        })
    )}
};