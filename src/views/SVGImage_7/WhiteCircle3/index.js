import React, { Component } from 'react';
import styled from "styled-components";

import variables from '../../../resources/styles/variables';

const WhiteCircleItem3 = styled.circle`
    fill: ${variables.white_circle_fill};
`;

class WhiteCircle3 extends Component {

    render() {
        return (
            <WhiteCircleItem3 r="24" cx="235" cy="220" />
        );
    }
}

export default WhiteCircle3;