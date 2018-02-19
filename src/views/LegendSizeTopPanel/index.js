import React, { Component } from 'react';
import styled from "styled-components";

const LegendSizeTopPanelStyles = styled.div`
    width: 735px;
    height: 48px;
    background: #f3f3f3;
`;

class LegendSizeTopPanel extends Component {

    render() {
        return (
            <LegendSizeTopPanelStyles />
        );
    }
}

export default LegendSizeTopPanel;