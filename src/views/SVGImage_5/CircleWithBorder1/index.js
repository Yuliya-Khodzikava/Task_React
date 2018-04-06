import React, { Component } from 'react';
import styled from "styled-components";

import variables from '../../../resources/styles/variables';

const CircleWithBorderItem1 = styled.circle`
    fill: none;
    stroke: ${variables.circle_stroke};
    stroke-width: 6;
    stroke-dasharray: 15 55;
    stroke-dashoffset: 17;
`;

class CircleWithBorder1 extends Component {

    render() {
        return (
            <CircleWithBorderItem1 r="13" cx="75" cy="220" />
        );
    }
}

export default CircleWithBorder1;