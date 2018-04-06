import React, { Component } from 'react';
import styled from "styled-components";

import variables from '../../../resources/styles/variables';

const GrayCircleItem2 = styled.circle`
    fill: ${variables.gray_circle_fill};
`;

class GrayCircle2 extends Component {

    render() {
        return (
            <GrayCircleItem2 r="24" cx="155" cy="150" />
        );
    }
}

export default GrayCircle2;