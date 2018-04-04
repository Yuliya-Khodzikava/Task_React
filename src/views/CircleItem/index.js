import React, { Component } from 'react';
import styled from "styled-components";

import variables from '../../resources/styles/variables';

const BlackCircle = styled.circle`
    fill: ${variables.black_circle_fill};
`;

class CircleItem extends Component {

    render() {
        return (

            <BlackCircle r="6" cx="75" cy="75" />

        );
    }
}

export default CircleItem;