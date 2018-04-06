import React, { Component } from 'react';
import styled from "styled-components";

import variables from '../../../resources/styles/variables';

const HoleDiameter30Circle = styled.circle`
    fill: none;
    stroke: ${variables.hole_diameter_stroke};
    stroke-width: 2;
`;
const HoleDiameter30Line = styled.polyline`
    stroke: ${variables.hole_diameter_stroke};
    stroke-width: 2;
`;

class HoleDiameter30 extends Component {

    render() {
        return (
            <React.Fragment>
                <HoleDiameter30Circle r="8" cx="237" cy="270" />
                <HoleDiameter30Line points="247,261 227,279" />
            </React.Fragment>
        );
    }
}

export default HoleDiameter30;