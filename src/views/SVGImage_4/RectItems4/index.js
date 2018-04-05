import React, { Component } from 'react';
import styled from "styled-components";

import variables from '../../../resources/styles/variables';

const LabelRect4 = styled.rect`
    width: 34;
    height: 11;
    fill: ${variables.white_label_rect_fill};
    stroke: ${variables.label_rect_stroke};
    stroke-width: 1;
    stroke-dasharray: 2 1;
`;
const ExtendedLabelRect4 = LabelRect4.extend`
    stroke-dashoffset: 1;
`;

class RectItems4 extends Component {

    render() {
        return (
            <React.Fragment>
                <ExtendedLabelRect4 x="138" y="139" />
                <LabelRect4 x="138" y="153" />
            </React.Fragment>
        );
    }
}

export default RectItems4;