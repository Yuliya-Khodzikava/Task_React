import React, { Component } from 'react';

import './App.scss';

import WholeSvg from 'views/WholeSvg';

class App extends Component {

    render() {
        return (
            <svg width="100%" height="100%">

                <WholeSvg />

            </svg>
        );
    }
}

export default App;