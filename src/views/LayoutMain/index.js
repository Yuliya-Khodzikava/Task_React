import React, { Component } from 'react';

import './LayoutMain.scss';

import Header from 'views/Header';
import LegendSizeTopPanel from 'views/LegendSizeTopPanel';

class LayoutMain extends Component {
    render() {
        return (
            <div className="application">
                <Header />
                <LegendSizeTopPanel />
            </div>
        );
    }
}

export default LayoutMain;