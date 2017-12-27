import React, { Component } from 'react';

import Main from 'views/Main';
import About from 'views/About';
import './LayoutMain.scss';

class LayoutMain extends Component {
    render() {
        return (
            <div className="app">
                <Main />
                <About />
            </div>
        );
    }
}

export default LayoutMain;