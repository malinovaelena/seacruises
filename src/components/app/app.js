import React from 'react';
import Header from '../header';
import Main from '../main';
//import ArrDataOfCards from '../generate-data';

export default class App extends React.Component {
    render() {
        //console.log(ArrDataOfCards);
        return (
            <div>
                
                <Header/>
                <Main />
            </div>
        );
    };
    
};
