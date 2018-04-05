import React, { Component } from 'react';
import styled from "styled-components";

import variables from '../../../resources/styles/variables';

const WhiteCircle2 = styled.circle`
    fill: ${variables.white_circle_fill};
`;
const CircleWithBorder2 = styled.circle`
    fill: none;
    stroke: ${variables.circle_stroke};
    stroke-width: 6;
    stroke-dasharray: 15 26;
    stroke-dashoffset: -33;
`;
const LightGrayCircle2 = styled.circle`
    fill: ${variables.light_gray_circle_fill};
`;
const GreenCircle6 = styled.circle`
    fill: ${variables.green_circle_fill};
`;
const CheckMark6 = styled.polyline`
    fill: none;
    stroke: ${variables.white_checkmark_stroke};
    stroke-width: 2;
`;

class CircleItem6 extends Component {

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
                <WhiteCircle2 onClick={this.handleClick} r="24" cx="155" cy="220" stroke={this.state.stroke} strokeWidth={this.state.strokeWidth} />
                <CircleWithBorder2 onClick={this.handleClick} r="13" cx="155" cy="220" />
                <LightGrayCircle2 onClick={this.handleClick} r="8" cx="155" cy="220" />
                <GreenCircle6 r="7" cx="172" cy="205" display={this.state.display} />
                <CheckMark6 points="168,204 171,207 176,201" display={this.state.display} />
            </React.Fragment>
        );
    }
}

export default CircleItem6;