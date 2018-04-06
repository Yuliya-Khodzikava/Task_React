import React, { Component } from 'react';
import styled from "styled-components";

import variables from '../../../resources/styles/variables';

import WhiteCircle1 from 'views/SVGImage_5/WhiteCircle1';
import CircleWithBorder1 from 'views/SVGImage_5/CircleWithBorder1';
import LightGrayCircle1 from 'views/SVGImage_5/LightGrayCircle1';

const TransparentCircle5 = styled.circle`
    fill: rgba(255,255,255, 0.1);
`;
const GreenCircle5 = styled.circle`
    fill: ${variables.green_circle_fill};
`;
const CheckMark5 = styled.polyline`
    fill: none;
    stroke: ${variables.white_checkmark_stroke};
    stroke-width: 2;
`;

class WholeSvg_5 extends Component {

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
                <WhiteCircle1 />
                <CircleWithBorder1 />
                <LightGrayCircle1 />
                <TransparentCircle5 r="24" cx="75" cy="220" onClick={this.handleClick} stroke={this.state.stroke} strokeWidth={this.state.strokeWidth} />
                <GreenCircle5 r="7" cx="92" cy="205" display={this.state.display} />
                <CheckMark5 points="88,204 91,207 96,201" display={this.state.display} />
            </React.Fragment>
        );
    }
}

export default WholeSvg_5;