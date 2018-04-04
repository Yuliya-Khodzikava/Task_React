import React, { Component } from 'react';
import styled from "styled-components";

import variables from '../../resources/styles/variables';

const LabelRect3 = styled.rect`
    width: 34;
    height: 11;
    fill: ${variables.white_label_rect_fill};
    stroke: ${variables.label_rect_stroke};
    stroke-width: 1;
    stroke-dasharray: 2 1;
    stroke-dashoffset: 1;
`;

class RectItem3 extends Component {

    render() {
        return (
            <LabelRect3 x="58" y="144" />
        );
    }
}

export default RectItem3;