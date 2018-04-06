import React, { Component } from 'react';
import styled from "styled-components";

import variables from '../../../resources/styles/variables';

const LabelRect = styled.rect`
    width: 34;
    height: 11;
    fill: ${variables.gray_label_rect_fill};
    stroke: ${variables.label_rect_stroke};
    stroke-width: 1;
    stroke-dasharray: 2 1;
`;
const LabelRect2 = LabelRect.extend`
    stroke-dashoffset: 1;
`;

class RectItems extends Component {

    render() {
        return (
            <React.Fragment>
                <LabelRect2 x="58" y="53" />
                <LabelRect x="58" y="85" />
            </React.Fragment>
        );
    }
}

export default RectItems;