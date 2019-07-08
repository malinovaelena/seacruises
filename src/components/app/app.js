import React from 'react';
import Header from '../header';
import Main from '../main';
import Footer from '../footer';
//import Popup from '../pop-up';
//import ArrDataOfCards from '../generate-data';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Main />
                <Footer />
            </div>
        );
    };  
};
