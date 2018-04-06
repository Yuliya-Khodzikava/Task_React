import React, { Component } from 'react';
import styled from "styled-components";

import variables from '../../../resources/styles/variables';

const HoleDiameter22Circle = styled.circle`
    fill: none;
    stroke: ${variables.hole_diameter_stroke};
    stroke-width: 2;
`;
const HoleDiameter22Line = styled.polyline`
    stroke: ${variables.hole_diameter_stroke};
    stroke-width: 2;
`;

class HoleDiameter22 extends Component {

    render() {
        return (
            <React.Fragment>
                <HoleDiameter22Circle r="7" cx="156" cy="270" />
                <HoleDiameter22Line points="165,262 147,278" />
            </React.Fragment>
        );
    }
}

export default HoleDiameter22;