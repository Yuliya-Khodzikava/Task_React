import React, { Component } from 'react';
import styled from "styled-components";

import variables from '../../resources/styles/variables';

const TextRect2 = styled.text`
    fill: ${variables.text_fill};
`;

class LabelText2 extends Component {

    render() {
        return (
            <React.Fragment>
                <TextRect2 x="167" y="65" transform="rotate(90,167,65)">label</TextRect2>
                <TextRect2 x="142" y="83" transform="rotate(-90,142,83)">label</TextRect2>
            </React.Fragment>
        );
    }
}

export default LabelText2;