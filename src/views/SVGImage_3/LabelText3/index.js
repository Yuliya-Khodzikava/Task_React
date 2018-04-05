import React, { Component } from 'react';
import styled from "styled-components";

import variables from '../../../resources/styles/variables';

const TextRect3 = styled.text`
    fill: ${variables.text_fill};
`;

class LabelText3 extends Component {

    render() {
        return (
            <TextRect3 x="66" y="152">label</TextRect3>
        );
    }
}

export default LabelText3;