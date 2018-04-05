import React, { Component } from 'react';
import styled from "styled-components";

import variables from '../../../resources/styles/variables';

const LabelRect2 = styled.rect`
    width: 11;
    height: 34;
    fill: ${variables.gray_label_rect_fill};
    stroke: ${variables.label_rect_stroke};
    stroke-width: 1;
    stroke-dasharray: 2 1;
`;
const ExtendedLabelRect2 = LabelRect2.extend`
    stroke-dashoffset: 1;
`;

class RectItems2 extends Component {

    render() {
        return (
            <React.Fragment>
                <ExtendedLabelRect2 x="134" y="58" />
                <LabelRect2 x="165" y="58" />
            </React.Fragment>
        );
    }
}

export default RectItems2;