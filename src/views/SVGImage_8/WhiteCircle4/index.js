import React, { Component } from 'react';
import styled from "styled-components";

import variables from '../../../resources/styles/variables';

const WhiteCircleItem4 = styled.circle`
    fill: ${variables.white_circle_fill};
`;

class WhiteCircle4 extends Component {

    render() {
        return (
            <WhiteCircleItem4 r="24" cx="315" cy="220" />
        );
    }
}

export default WhiteCircle4;