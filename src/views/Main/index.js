import React, { Component } from 'react';

import './Main.scss';

class Main extends Component {
    render() {
        return (
            <header className="c-header container">
                <div className="row">
                    <div className="c-header__menu col-12" id="menu">
                        <ul className="c-header__list cols col-5">
                           <div className="row">
                                <li className="cols col-9"><a href="#about">About us</a></li>
                                <li className="cols col-3"><a href="#work">Work</a></li>
                           </div>
                        </ul>
                        <div className="c-header__logo cols col-2">
                            <a href="/">
                                <img src="Logo.png" alt="LOGO"/>
                            </a>
                        </div>
                        <ul className="c-header__list cols col-5">
                          <div className="row">
                                <li className="list--left-align cols col-3"><a href="#shop">Shop</a></li>
                                <li className="list--left-align cols col-9"><a href="#contact">Contact</a></li>
                          </div>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
}

export default Main;