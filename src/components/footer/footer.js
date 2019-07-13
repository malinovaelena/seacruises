/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import './footer.css';

export default class Footer extends React.Component {
    render() {
        return (<footer className="footer">
            <ul className="footer-menu">
                <li className="footer-menu-item contacts">
                    <ul>
                        <li>Вход для партнеров</li>
                        <li>О компании</li>
                        <li>Контакты</li>
                    </ul>
                </li>
                <li className="footer-menu-item social">
                    <ul className="social-list">
                        <li>Будь на связи:</li>
                        <li>
                            <a className="social-item vk" href="#test"></a>
                            <a className="social-item ok" href="#test"></a>
                            <a className="social-item youtube" href="#test"></a>
                            <a className="social-item insta" href="#test"></a>
                        </li>
                    </ul>
                </li>
                <li className="footer-menu-item info">
                    <ul className="info-list">
                        <li><b>8 800 500 61 05</b></li>
                        <li>Круглосуточная поддержка</li>
                        <li>© 2016 OOO «Городские Круизы»</li>
                    </ul>
                </li>
            </ul>
        </footer>)
    }
};