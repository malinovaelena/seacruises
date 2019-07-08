import React from 'react';
import './card.css';
import PopUp from '../pop-up';

export default class Card extends React.Component {
    constructor({dataOfEachCard}) {
        super();
        this.arrOfCards = dataOfEachCard;
    }
    state = {
        isModalOpen: false,
        isPositionFixed:'card-item',
    }
    toggleModal = () => {
        this.setState({ isModalOpen: !this.state.isModalOpen});
        console.log(this.state.isModalOpen,'state.isModalOpen');
    };

    consolelogstate = () => {
        console.log('consolelogstate + card',this.state.pop);
    }
    addClass = () => {
        if (this.state.isModalOpen === true) {
            console.log(this.state.isPositionFixed);
            this.setState({ isPositionFixed:'card-item fixstate'});
        }
        //return this.state.isPositionFixed;
    }
    render() {
            return (<article className={this.state.isPositionFixed} key = {this.arrOfCards.id}>
                {this.state.isModalOpen === true? <PopUp dataof = {this.arrOfCards} consol={this.toggleModal}/>:''}
        <div className="cards-image__container">
            <img className="cards-image" src={require ('./img/' + this.arrOfCards.pic)} alt="anapa"/>
        </div>
        <section className="card-item__description">
            <h4 className="description-name" onClick={this.toggleModal}>{ this.arrOfCards.name }<b className="arrow-right"></b></h4>
            
            <p className="track-shedule"><b>Маршрут: </b>{ this.arrOfCards.tracking }</p>
            <p className="duration"><b>Продолжительность: </b>{this.arrOfCards.hour} ч. {this.arrOfCards.minutes} мин.</p>
            <p className="price">27 000 руб</p>
        </section>
    </article>)
    };
};
//perem = {this.state.isModalOpen}