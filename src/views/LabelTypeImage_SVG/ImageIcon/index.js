import React, { Component } from 'react';
import styled from "styled-components";

import variables from '../../../resources/styles/variables';

const CircleImageIcon = styled.circle`
    fill: ${variables.image_icon_fill};
`;
const PolygonImageIcon1 = styled.polygon`
    fill: ${variables.image_icon_fill};
`;
const PolygonImageIcon2 = styled.polygon`
    fill: ${variables.image_icon_fill};
`;

class ImageIcon extends Component {

    render() {
        return (
            <React.Fragment>
                <CircleImageIcon r="2.5" cx="312" cy="144" />
                <PolygonImageIcon1 points="304,159 310,148 316,159" />
                <PolygonImageIcon2 points="309,159 319,146 327,159" />
            </React.Fragment>
        );
    }
}

export default ImageIcon;