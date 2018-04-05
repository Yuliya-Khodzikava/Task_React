import React, { Component } from 'react';
import styled from "styled-components";

import variables from '../../../resources/styles/variables';

const TextRect4 = styled.text`
    fill: ${variables.text_fill};
`;

class LabelText4 extends Component {

    render() {
        return (
            <React.Fragment>
                <TextRect4 x="146" y="147">label</TextRect4>
                <TextRect4 x="146" y="161">label</TextRect4>
            </React.Fragment>
        );
    }
}

export default LabelText4;