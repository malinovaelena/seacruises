import React from 'react';
import Card from '../card';
import ArrDataOfCards from '../generate-data';
import './main.css';

const sortCards = (filter,arr) => {
    const sorteredArr = arr.slice();
   if (filter === 'to-expensive') {
    sorteredArr.sort((a, b) => {
        return (parseInt(a.price)) - (parseInt(b.price));
    });
   } else if (filter === 'to-cheap') {
    sorteredArr.sort((a,b) => {
           return (parseInt(b.price)) - (parseInt(a.price))
       });
   } else if(filter === 'most-popular') {
    sorteredArr.sort((a,b) =>{
           return b.popular - a.popular
       });
   } else {
       return sorteredArr;
   }
   return sorteredArr;
};

export default class Main extends React.Component {
    constructor() {
        super();
        this.arrOfData = ArrDataOfCards;
    }
    state = {
        amountCards: 4,
        filter: 'none',
    }
    increaseAmountOfCards = () => { 
        this.setState({amountCards: this.state.amountCards + 2});
        if (this.state.amountCards === 8) {
            this.setState({amountCards: this.state.amountCards - 4});
        };
    };
    
    visibleCards = (arr,amountOfCards) => {
        const  arrOfVisibleCards = arr.slice(0, amountOfCards);
        return (arrOfVisibleCards.map((item) => {
                return <Card dataOfEachCard = {item} key = {item.id}/>
            })
        );
    };
    returnValue = () => {
        const arrOfOptions = document.querySelectorAll('option');
        for (let item of arrOfOptions) {
            if (item.selected) {
                this.setState({filter: item.value});
                return item.value;
            };
        };
    };
    
    render() {
        let { amountCards, filter} = this.state;
        return (<div className="main">
                <h2 className="main__title" id="tomain">Каталог круизов</h2>
                <h3 className="main__subtitle">Сортировать круизы по
                    <select className="main__filter" onClick={this.returnValue}>
                        <option value="none">по умолчанию</option>
                        <option value="to-expensive" className="price-cheap">цене (по возрастанию)</option>
                        <option value="to-cheap" className="price-expensive">цене (по убыванию)</option>
                        <option value="most-popular" className="card-popular">популярности</option>
                    </select>
                </h3>
                <div className="cards-container">{this.visibleCards(sortCards(filter,this.arrOfData),amountCards)}</div>
                <button className="cards-list__show-more" onClick={this.increaseAmountOfCards}>{amountCards >= 8 ?'Скрыть':'Показать больше'}</button>
                </div>)
    };
};