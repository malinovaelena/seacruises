import React from 'react';
import './card.css';
import PopUp from '../pop-up';

export default class Card extends React.Component {
    constructor({data,change}) {
        super();
        this.arrOfCards = data;
        this.change = change;
    }
    functionPopup = () => {
        console.log(this.arrOfCards);
        return (<PopUp dataofEachCard = {this.arrOfCards}/>);
    };
    state = {
        popup: false,
    }
    
    changestate = () => {
        console.log('i change state on true!!!!!!!');
        this.setState({popup: true});
    }
    render() {
            return (<article className="card-item">
        <div className="cards-image__container">
            <img className="cards-image" src={require ('./img/' + this.arrOfCards.pic)} alt="anapa"/>
        </div>
        <section className="card-item__description">
            <h4 className="description-name" onClick={this.change}>{ this.arrOfCards.name }<b className="arrow-right"></b></h4>
            
            <p className="track-shedule"><b>Маршрут: </b>{ this.arrOfCards.tracking }</p>
            <p className="duration"><b>Продолжительность: </b>{this.arrOfCards.hour} ч. {this.arrOfCards.minutes} мин.</p>
            <p className="price">27 000 руб</p>
        </section>
    </article>)
    };
};