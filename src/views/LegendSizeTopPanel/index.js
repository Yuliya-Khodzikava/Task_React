import React, { Component } from 'react';
import styled from "styled-components";

import './LegendSizeTopPanel.scss';

class LegendSizeTopPanel extends Component {

    render() {

        const LegendSizeTopPanel = styled.div`
            width: 735px;
            height: 48px;
            background: #f3f3f3;
        `;

        return (

            <LegendSizeTopPanel />

        );
    }
}

export default LegendSizeTopPanel;