import React from 'react';
import Card from '../card';
import ArrDataOfCards from '../generate-data';
import './main.css';


export default class Main extends React.Component {
    constructor() {
        super();
        this.superddata = ArrDataOfCards;
    }
    readynewCards = (arr,amountOfCards) => {
        const  newarr = arr.slice(0, amountOfCards);
        return (
            newarr.map((item) => {
                console.log(item);
                return <Card data = {item}/>
            })
        );
    };
    showMoreCards = () => {
        //this.readynewCards(this.superddata.slice(0,7));
        let rrr = this.superddata.slice(0,7);
        return (
            rrr.map((item) => {
                console.log(item,'showMoreCards');
                return <Card data = {item}/>
            })
        )
    };
    /*
    const showMoreCards = (cards) => {
    console.log('showMoreCards');
    renderFilms(cards.slice(0, cardToRenderPosition));
    if (cardToRenderPosition >= cards.length) {
    showMoreButton.removeEventListener(`click`, onShowMoreButtonClick);
    showMoreButton.classList.add(`visually-hidden`);
    }
    cardToRenderPosition += AMOUNT_FOR_RENDER_CARDS;
    };
    */
    
    state = {
        amountCard: 2,
    }
    increaseAmountOfCards = () => { //увеличить стейт 
        this.setState({amountCard: this.state.amountCard + 1});
        console.log(this.state.amountCard,'increaseAmountOfCards');
    };
    
    render() {
        let { amountCard } = this.state;
        let visibleItems = this.superddata.slice(0, amountCard);
        console.log(visibleItems,'visibleItems');
        return (<div className="main">
                <h2 className="main__title">Каталог круизов</h2>
                <h3 className="main__subtitle">Сортировать круизы по <b className="main__filter">цене</b></h3>
                <div className="cards-container" onClick={this.increaseAmountOfCards}>{<Card data = { visibleItems }/>}
                </div>
                <button className="cards-list__show-more">Показать больше</button>
                </div>
        )
    }
};
