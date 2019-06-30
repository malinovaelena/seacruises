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

    render() {
        let zero = 1;
        let item = () => {
            zero = zero + 5;
            console.log(zero,'ZERO');
        };
        let we = () => {
            console.log(zero,'ZERO');
        }
            //с помощью клика увечичивать переменную которая будет ответстна за массив1!!!
        //переписать функцию по поводу раскладки массива. В контейнере должно быть - визибл айтемс
        //заебись все работает1!!!В ВОСКРЕСЕНЬЕ СДЕЛАТЬ ЭТО (ПОКАЗ НОВЫХ КАРТОЧЕК) ПЛЮС ФУТЕР !!!
        return (<div className="main">
                <h2 className="main__title">Каталог круизов</h2>
                <h3 className="main__subtitle">Сортировать круизы по <b className="main__filter">цене</b></h3>
                <div className="cards-container" onClick={we}>{this.readynewCards(ArrDataOfCards,4)}
                </div>
                <button className="cards-list__show-more" onClick={item}>Показать больше</button>
                </div>
        )
    }
};
