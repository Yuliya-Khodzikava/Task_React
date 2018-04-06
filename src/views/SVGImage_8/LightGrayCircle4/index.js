import React, { Component } from 'react';
import styled from "styled-components";

import variables from '../../../resources/styles/variables';

const LightGrayCircleItem4 = styled.circle`
    fill: ${variables.light_gray_circle_fill};
`;

class LightGrayCircle4 extends Component {

    render() {
        return (
            <LightGrayCircleItem4 r="8" cx="315" cy="220" />
        );
    }
}

export default LightGrayCircle4;