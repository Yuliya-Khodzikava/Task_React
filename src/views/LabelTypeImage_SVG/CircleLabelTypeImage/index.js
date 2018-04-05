import React, { Component } from 'react';
import styled from "styled-components";

import variables from '../../../resources/styles/variables';

const CircleLabelTypeItem2 = styled.circle`
    fill: ${variables.gray_circle_fill};
`;

class CircleLabelTypeImage extends Component {

    render() {
        return (
            <CircleLabelTypeItem2  r="24" cx="316" cy="150" />
        );
    }
}

export default CircleLabelTypeImage;