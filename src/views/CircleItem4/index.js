import React, { Component } from 'react';
import styled from "styled-components";

import variables from '../../resources/styles/variables';

const GrayCircle2 = styled.circle`
    fill: ${variables.gray_circle_fill};
`;
const GreenCircle4 = styled.circle`
    fill: ${variables.green_circle_fill};
`;
const CheckMark4 = styled.polyline`
    fill: none;
    stroke: ${variables.white_checkmark_stroke};
    stroke-width: 2;
`;

class CircleItem4 extends Component {

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
                <GrayCircle2 onClick={this.handleClick} r="24" cx="155" cy="150" stroke={this.state.stroke} strokeWidth={this.state.strokeWidth} />
                <GreenCircle4 r="7" cx="172" cy="133" display={this.state.display} />
                <CheckMark4 points="168,132 171,136 176,130" display={this.state.display} />
            </React.Fragment>
        );
    }
}

export default CircleItem4;