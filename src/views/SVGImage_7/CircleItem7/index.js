import React, { Component } from 'react';
import styled from "styled-components";

import variables from '../../../resources/styles/variables';

const WhiteCircle3 = styled.circle`
    fill: ${variables.white_circle_fill};
`;
const CircleWithBorder3 = styled.circle`
    fill: none;
    stroke: ${variables.circle_stroke};
    stroke-width: 6;
    stroke-dasharray: 15 4 15 4 15 27;
    stroke-dashoffset: -34;
`;
const LightGrayCircle3 = styled.circle`
    fill: ${variables.light_gray_circle_fill};
`;
const GreenCircle7 = styled.circle`
    fill: ${variables.green_circle_fill};
`;
const CheckMark7 = styled.polyline`
    fill: none;
    stroke: ${variables.white_checkmark_stroke};
    stroke-width: 2;
`;

class CircleItem7 extends Component {

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
                <WhiteCircle3 onClick={this.handleClick} r="24" cx="235" cy="220" stroke={this.state.stroke} strokeWidth={this.state.strokeWidth} />
                <CircleWithBorder3 onClick={this.handleClick} r="13" cx="235" cy="220" />
                <LightGrayCircle3 onClick={this.handleClick} r="8" cx="235" cy="220" />
                <GreenCircle7 r="7" cx="253" cy="205" display={this.state.display} />
                <CheckMark7 points="248,204 252,207 257,201" display={this.state.display} />
            </React.Fragment>
        );
    }
}

export default CircleItem7;