import React, { Component } from 'react';
import styled from "styled-components";

import variables from '../../resources/styles/variables';
import theme from '../../resources/styles/theme';

const LegendSizeTopPanelStyles = styled.div`
    width: 735px;
    height: 48px;
    background: ${theme.legendSizeTopPanel_bg_color};
`;

class LegendSizeTopPanel extends Component {

    render() {
        return (
            <LegendSizeTopPanelStyles />
        );
    }
}

export default LegendSizeTopPanel;