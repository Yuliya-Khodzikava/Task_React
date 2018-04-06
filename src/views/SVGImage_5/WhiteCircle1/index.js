import React, { Component } from 'react';
import styled from "styled-components";

import variables from '../../../resources/styles/variables';

const WhiteCircleItem1 = styled.circle`
    fill: ${variables.white_circle_fill};
`;

class WhiteCircle1 extends Component {

    render() {
        return (
            <WhiteCircleItem1 r="24" cx="75" cy="220" />
        );
    }
}

export default WhiteCircle1;