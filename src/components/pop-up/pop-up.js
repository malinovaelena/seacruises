import React from 'react';
import ReactDOM from 'react-dom';
import './pop-up.css';
const modalRoot = document.getElementById('modal-root');

export default class PopUp extends React.Component {
    constructor({itemArrOfData, closePerem}) {
        super();
        this.dataItem = itemArrOfData;
        this.closePopup = closePerem;
        this.amountOfPic = 4;
    }
    images = (perem) => {
        let arrOfPic = [];
        for (let i = 0; i < perem; i++) {
            arrOfPic.push(<img className='mini-img' src={require ('../card/img/anapa.jpg')} alt="anapa"/>)
        };
        return arrOfPic;
    }
    render() {
        return ReactDOM.createPortal(<div className="popup-wrapper">
            <div className="popup-window">
                <div className="popup-close" onClick={this.closePopup}>X</div>
                <div className="popup-pictures">
                    <div className="popup__main-pic"><img src={require ('../card/img/' + this.dataItem.pic)} alt="anapa"/></div>
                    <div className="popup__all-pics">{this.images(this.amountOfPic)}</div>
                </div>
                <div className="popup-info">
                    <h4 className="popup__description-name">{ this.dataItem.name }</h4>
                    <p className="track-shedule"><b>Маршрут: </b>{ this.dataItem.tracking }</p>
                    <p className="duration"><b>Продолжительность: </b>{this.dataItem.hour} ч. {this.dataItem.minutes} мин.</p>
                    <p className="description" ><b>Расписание: </b>{this.dataItem.description}</p>
                    <p className="price">{this.dataItem.price} руб</p>
                    <button className="popup__card-booking" onClick={this.closePopup}>Забронировать</button>
                </div>
            </div>
        </div>, modalRoot);
    }
};