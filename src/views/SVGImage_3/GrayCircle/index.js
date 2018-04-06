import React, { Component } from 'react';
import styled from "styled-components";

import variables from '../../../resources/styles/variables';

const GrayCircleItem = styled.circle`
    fill: ${variables.gray_circle_fill};
`;

class GrayCircle extends Component {

    render() {
        return (
            <GrayCircleItem r="24" cx="75" cy="150" />
        );
    }
}

export default GrayCircle;