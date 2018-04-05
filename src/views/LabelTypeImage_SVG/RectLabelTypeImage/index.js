import React, { Component } from 'react';
import styled from "styled-components";

import variables from '../../../resources/styles/variables';

const RectLabelTypeItem2 = styled.rect`
    width: 34;
    height: 23;
    fill: ${variables.white_label_rect_fill};
`;

class RectLabelTypeImage extends Component {

    render() {
        return (
            <RectLabelTypeItem2 x="299" y="139" />
        );
    }
}

export default RectLabelTypeImage;