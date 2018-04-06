import React, { Component } from 'react';
import styled from "styled-components";

import variables from '../../../resources/styles/variables';

const LightGrayCircleItem2 = styled.circle`
    fill: ${variables.light_gray_circle_fill};
`;

class LightGrayCircle2 extends Component {

    render() {
        return (
            <LightGrayCircleItem2 r="8" cx="155" cy="220" />
        );
    }
}

export default LightGrayCircle2;