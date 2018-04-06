import React, { Component } from 'react';
import styled from "styled-components";

import variables from '../../../resources/styles/variables';

const HoleDiameter16Circle = styled.circle`
    fill: none;
    stroke: ${variables.hole_diameter_stroke};
    stroke-width: 2;
`;
const HoleDiameter16Line = styled.polyline`
    stroke: ${variables.hole_diameter_stroke};
    stroke-width: 2;
`;

class HoleDiameter16 extends Component {

    render() {
        return (
            <React.Fragment>
                <HoleDiameter16Circle r="6" cx="75" cy="270" />
                <HoleDiameter16Line points="83,263 67,277" />
            </React.Fragment>
        );
    }
}

export default HoleDiameter16;