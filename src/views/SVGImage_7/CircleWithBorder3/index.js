import React, { Component } from 'react';
import styled from "styled-components";

import variables from '../../../resources/styles/variables';

const CircleWithBorderItem3 = styled.circle`
    fill: none;
    stroke: ${variables.circle_stroke};
    stroke-width: 6;
    stroke-dasharray: 15 4 15 4 15 27;
    stroke-dashoffset: -34;
`;

class CircleWithBorder3 extends Component {

    render() {
        return (
            <CircleWithBorderItem3 r="13" cx="235" cy="220" />
        );
    }
}

export default CircleWithBorder3;