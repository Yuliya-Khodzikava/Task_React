import React, { Component } from 'react';
import styled from "styled-components";

import variables from '../../../resources/styles/variables';

const WhiteCircle4 = styled.circle`
    fill: ${variables.white_circle_fill};
`;
const CircleWithBorder4 = styled.circle`
    fill: none;
    stroke: ${variables.circle_stroke};
    stroke-width: 6;
    stroke-dasharray: 16 4;
    stroke-dashoffset: -12;
`;
const LightGrayCircle4 = styled.circle`
    fill: ${variables.light_gray_circle_fill};
`;
const GreenCircle8 = styled.circle`
    fill: ${variables.green_circle_fill};
`;
const CheckMark8 = styled.polyline`
    fill: none;
    stroke: ${variables.white_checkmark_stroke};
    stroke-width: 2;
`;

class CircleItem8 extends Component {

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
                <WhiteCircle4 onClick={this.handleClick} r="24" cx="315" cy="220" stroke={this.state.stroke} strokeWidth={this.state.strokeWidth} />
                <CircleWithBorder4 onClick={this.handleClick} r="13" cx="315" cy="220" />
                <LightGrayCircle4 onClick={this.handleClick} r="8" cx="315" cy="220" />
                <GreenCircle8 r="7" cx="333" cy="205" display={this.state.display} />
                <CheckMark8 points="328,204 332,207 337,201" display={this.state.display} />
            </React.Fragment>
        );
    }
}

export default CircleItem8;