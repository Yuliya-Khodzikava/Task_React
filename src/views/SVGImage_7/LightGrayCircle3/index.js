import React, { Component } from 'react';
import styled from "styled-components";

import variables from '../../../resources/styles/variables';

const LightGrayCircleItem3 = styled.circle`
    fill: ${variables.light_gray_circle_fill};
`;

class LightGrayCircle3 extends Component {

    render() {
        return (
            <LightGrayCircleItem3 r="8" cx="235" cy="220" />
        );
    }
}

export default LightGrayCircle3;