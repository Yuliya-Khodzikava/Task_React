import React, { Component } from 'react';
import styled from "styled-components";

import variables from '../../../resources/styles/variables';

const WhiteRectItem2 = styled.rect`
    width: 50;
    height: 50;
    fill: ${variables.white_rect_fill};
`;

class WhiteRect2 extends Component {

    render() {
        return (
            <WhiteRectItem2 x="130" y="50" />
        );
    }
}

export default WhiteRect2;