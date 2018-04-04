import React, { Component } from 'react';
import styled from "styled-components";

import variables from '../../resources/styles/variables';

const TextRect = styled.text`
    fill: ${variables.text_fill};
`;

class LabelText extends Component {

    render() {
        return (
            <React.Fragment>
                <TextRect x="66" y="61.5">label</TextRect>
                <TextRect x="66" y="93.5">label</TextRect>
            </React.Fragment>
        );
    }
}

export default LabelText;