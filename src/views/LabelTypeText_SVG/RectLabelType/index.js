import React, { Component } from 'react';
import styled from "styled-components";

import variables from '../../../resources/styles/variables';

const RectLabelTypeItem = styled.rect`
    width: 34;
    height: 23;
    fill: ${variables.white_label_rect_fill};
`;

class RectLabelType extends Component {

    render() {
        return (
            <RectLabelTypeItem x="218" y="139" />
        );
    }
}

export default RectLabelType;