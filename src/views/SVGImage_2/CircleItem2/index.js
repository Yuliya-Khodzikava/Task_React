import React, { Component } from 'react';
import styled from "styled-components";

import variables from '../../../resources/styles/variables';

const BlackCircle2 = styled.circle`
    fill: ${variables.black_circle_fill};
`;

class CircleItem2 extends Component {

    render() {
        return (

            <BlackCircle2 r="6" cx="155" cy="75" />

        );
    }
}

export default CircleItem2;