import React from 'react';
import Card from '../card';
import ArrDataOfCards from '../generate-data';
import PopUp from '../pop-up';
import './main.css';


export default class Main extends React.Component {
    constructor() {
        super();
        this.superddata = ArrDataOfCards;
    }
    
    state = {
        amountCard: 4,
        popup: false,
    }
    increaseAmountOfCards = () => { 
        this.setState({amountCard: this.state.amountCard + 2});
        console.log(this.state.amountCard,'state');
        if (this.state.amountCard === 8) {
            console.log(this.state.amountCard,'if === ready!!!!!!');
            this.setState({amountCard: this.state.amountCard - 4});
        };
    };
    openPopp = (perem) => {
        console.log('function for opening popup!!!',perem);
        if (perem === true) {
            return (<PopUp dataofEachCard = {this.superddata[1]} close = {this.closepopap}/>);
        }
    };
    changestate = () => {
        console.log('i change state on true!!!!!!!');
        this.setState({popup: true});
    };
    closepopap = () => {
        this.setState({popup:false});
    }
    readynewCards = (arr,amountOfCards) => {
        const  newarr = arr.slice(0, amountOfCards);
        return (
            newarr.map((item) => {
                console.log(item);
                return <Card data = {item} change={this.changestate}/>//передаем состояние в карточку
            })
        );
    };
    newclassname = (perem) => {
        if (perem === true) {
            return 'notscroll';
        }
    };
    
    render() {
        let { amountCard, popup } = this.state;
        let visibleItems = this.superddata.slice(0, amountCard);
        console.log(visibleItems,'visibleItems');
        console.log(amountCard,'amountCard');
        return (<div className="main" id={this.newclassname(popup)}>
                {this.openPopp(popup)}
                <h2 className="main__title" onClick={this.changestate}>Каталог круизов</h2>
                <h3 className="main__subtitle">Сортировать круизы по <b className="main__filter">цене</b></h3>
                <div className="cards-container" >{this.readynewCards(this.superddata,amountCard)}
                </div>
                <button className="cards-list__show-more" onClick={this.increaseAmountOfCards}>{amountCard >= 8 ?'Скрыть':'Показать больше'}</button>
                
                </div>
        )
    };
};
//<PopUp dataofEachCard = {this.superddata[0]}/>