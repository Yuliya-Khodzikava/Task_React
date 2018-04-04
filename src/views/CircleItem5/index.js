import React, { Component } from 'react';
import styled from "styled-components";

import variables from '../../resources/styles/variables';

const WhiteCircle = styled.circle`
    fill: ${variables.white_circle_fill};
`;
const CircleWithBorder = styled.circle`
    fill: none;
    stroke: ${variables.circle_stroke};
    stroke-width: 6;
    stroke-dasharray: 15 55;
    stroke-dashoffset: 17;
`;
const LightGrayCircle = styled.circle`
    fill: ${variables.light_gray_circle_fill};
`;
const GreenCircle5 = styled.circle`
    fill: ${variables.green_circle_fill};
`;
const CheckMark5 = styled.polyline`
    fill: none;
    stroke: ${variables.white_checkmark_stroke};
    stroke-width: 2;
`;

class CircleItem5 extends Component {

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
                <WhiteCircle onClick={this.handleClick} r="24" cx="75" cy="220" stroke={this.state.stroke} strokeWidth={this.state.strokeWidth} />
                <CircleWithBorder onClick={this.handleClick} r="13" cx="75" cy="220" />
                <LightGrayCircle onClick={this.handleClick} r="8" cx="75" cy="220" />
                <GreenCircle5 r="7" cx="92" cy="205" display={this.state.display} />
                <CheckMark5 points="88,204 91,207 96,201" display={this.state.display} />
            </React.Fragment>
        );
    }
}

export default CircleItem5;