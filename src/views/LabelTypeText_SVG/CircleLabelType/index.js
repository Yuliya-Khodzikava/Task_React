import React, { Component } from 'react';
import styled from "styled-components";

import variables from '../../../resources/styles/variables';

const CircleLabelTypeItem = styled.circle`
    fill: ${variables.gray_circle_fill};
`;

class CircleLabelType extends Component {

    render() {
        return (
            <CircleLabelTypeItem  r="24" cx="235" cy="150" />
        );
    }
}

export default CircleLabelType;