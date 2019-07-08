import React from 'react';
import ReactDOM from 'react-dom';
import './pop-up.css';
const modalRoot = document.getElementById('modal-root');

export default class PopUp extends React.Component {
    constructor({dataof, consol}) {
        super();
        this.arrOfCards = dataof;
        this.clickinconsol = consol;
    }
    state = {
        amountPic:4
    }
    image = (per) => {
        let newArr = [];
        for (let i = 0; i < per; i++) {
            console.log('image',i);
            newArr.push(<img className='mini-img' src={require ('../card/img/anapa.jpg')} alt="anapa"/>)
        };
        return newArr;
    }
    render() {
        return ReactDOM.createPortal(<div className="popup-wrapper">
            <div className="popup-window">
                <div className="popup-pictures">
                    <div className="popup__main-pic"><img src={require ('../card/img/' + this.arrOfCards.pic)} alt="anapa"/></div>
                    <div className="popup__all-pics">{this.image(this.state.amountPic)}</div>
                </div>
                <div className="popup-info">
                    <h4 className="popup__description-name">{ this.arrOfCards.name }</h4>
                    <p className="track-shedule"><b>Маршрут: </b>{ this.arrOfCards.tracking }</p>
                    <p className="duration"><b>Продолжительность: </b>{this.arrOfCards.hour} ч. {this.arrOfCards.minutes} мин.</p>
                    <p className="description" ><b>Расписание: </b> 
Отправление из Сочи: ежедневно в 10:00, 11:40, 13:20, 15:00, 16:40
Отправление из Абрау-Дюрсо: ежедневно 
в 12:25, 14:05, 15:45, 17:25, 19:05  
Продолжительность: 11 часов 0 мин., из которых 10 часов - морская прогулка (туда и обратно), от 1 часа 30 мин. - свободное время в Ласточкином гнезде
Причал отправления/прибытия: набережная Ленина, причал №8, теплоход "Азов"
                    </p>
                    <p className="price">27 000 руб</p>
                    <button className="popup__card-booking" onClick={this.clickinconsol}>Забронировать</button>
                </div>
            </div>
        </div>, modalRoot);
    }
};