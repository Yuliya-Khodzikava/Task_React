import React, { Component } from 'react';

import './App.scss';

import WholeSvg from 'views/WholeSvg';
import WholeSvg_2 from 'views/WholeSvg_2';

class App extends Component {

    render() {
        return (
            <svg width="100%" height="100%">

                <WholeSvg />
                <WholeSvg_2 />

            </svg>
        );
    }
}

export default App;