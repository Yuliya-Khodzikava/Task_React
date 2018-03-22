import React, { Component } from 'react';

import './App.scss';

import CircleBottom from 'views/CircleBottom';
import CircleLightBorder from 'views/CircleLightBorder';
import CircleDarkBorder from 'views/CircleDarkBorder';
import CircleOrange from 'views/CircleOrange';
import ButtonText from 'views/ButtonText';
import ButtonTextRect from 'views/ButtonTextRect';

class App extends Component {

    render() {
        return (
            <svg width="100%" height="100%">
                <CircleBottom />
                <CircleLightBorder />
                <CircleDarkBorder />
                <CircleOrange />
                <ButtonText />
                <ButtonTextRect />
            </svg>
        );
    }
}

export default App;