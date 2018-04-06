import React, { Component } from 'react';
import styled from "styled-components";

import variables from '../../../resources/styles/variables';

const CircleWithBorderItem2 = styled.circle`
    fill: none;
    stroke: ${variables.circle_stroke};
    stroke-width: 6;
    stroke-dasharray: 15 26;
    stroke-dashoffset: -33;
`;

class CircleWithBorder2 extends Component {

    render() {
        return (
            <CircleWithBorderItem2 r="13" cx="155" cy="220" />
        );
    }
}

export default CircleWithBorder2;