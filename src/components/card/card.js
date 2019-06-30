import React from 'react';
import './card.css';

export default class Card extends React.Component {
    constructor({data}) {
        super();
        this.arrOfCards = data;
    }
    render() {
        return (<article className="card-item">
        <div className="cards-image__container">
            <img className="cards-image" src={require('./img/test.png')} alt="anapa"/>
        </div>
        <section className="card-item__description">
            <h4 className="description-name">{ this.arrOfCards.name }</h4>
            <p className="track-shedule"><b>Маршрут:</b>{ this.arrOfCards.tracking }</p>
            <p className="duration"><b>Продолжительность:</b>{this.arrOfCards.hour} ч. {this.arrOfCards.minutes} мин.</p>
            <p className="price">27 000 руб</p>
        </section>
    </article>)
    }
};