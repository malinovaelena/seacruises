import React from 'react';
//import Header from '../header';

export default class Main extends React.Component {
    render() {
        return (<div className="main">
            <h2 className="main__title">Каталог круизов</h2>
            <h3 className="main__subtitle">Сортировать круизы по <p className="main__filter">цене</p></h3>
            <div className="cards-container"></div>
            <button class="cards-list__show-more">Показать больше</button>
        </div>
        )
    }
};