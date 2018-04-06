import React, { Component } from 'react';
import styled from "styled-components";

import variables from '../../../resources/styles/variables';

const CircleWithBorderItem4 = styled.circle`
    fill: none;
    stroke: ${variables.circle_stroke};
    stroke-width: 6;
    stroke-dasharray: 16 4;
    stroke-dashoffset: -12;
`;

class CircleWithBorder4 extends Component {

    render() {
        return (
            <CircleWithBorderItem4 r="13" cx="315" cy="220" />
        );
    }
}

export default CircleWithBorder4;