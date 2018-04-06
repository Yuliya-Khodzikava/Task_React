import React, { Component } from 'react';
import styled from "styled-components";

import variables from '../../../resources/styles/variables';

const WhiteCircleItem2 = styled.circle`
    fill: ${variables.white_circle_fill};
`;

class WhiteCircle2 extends Component {

    render() {
        return (
            <WhiteCircleItem2 r="24" cx="155" cy="220" />
        );
    }
}

export default WhiteCircle2;