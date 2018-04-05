import React, { Component } from 'react';
import styled from "styled-components";

import variables from '../../../resources/styles/variables';

const GrayCircle = styled.circle`
    fill: ${variables.gray_circle_fill};
`;
const GreenCircle3 = styled.circle`
    fill: ${variables.green_circle_fill};
`;
const CheckMark3 = styled.polyline`
    fill: none;
    stroke: ${variables.white_checkmark_stroke};
    stroke-width: 2;
`;

class CircleItem3 extends Component {

    constructor() {
        super();
        this.state = {
            stroke: "",
            strokeWidth: "",
            display: "none"
        };
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick() {
        this.setState({
            stroke: "#3dcd58",
            strokeWidth: "2",
            display: "block"
        })
    };

    render() {
        return (
            <React.Fragment>
                <GrayCircle onClick={this.handleClick} r="24" cx="75" cy="150" stroke={this.state.stroke} strokeWidth={this.state.strokeWidth} />
                <GreenCircle3 r="7" cx="92" cy="133" display={this.state.display} />
                <CheckMark3 points="88,132 91,136 96,130" display={this.state.display} />
            </React.Fragment>
        );
    }
}

export default CircleItem3;