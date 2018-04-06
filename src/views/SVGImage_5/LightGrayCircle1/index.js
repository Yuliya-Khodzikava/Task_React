import React, { Component } from 'react';
import styled from "styled-components";

import variables from '../../../resources/styles/variables';

const LightGrayCircleItem1 = styled.circle`
    fill: ${variables.light_gray_circle_fill};
`;

class LightGrayCircle1 extends Component {

    render() {
        return (
            <LightGrayCircleItem1 r="8" cx="75" cy="220" />
        );
    }
}

export default LightGrayCircle1;