import React, { Component } from 'react';
import styled from "styled-components";

import variables from '../../../resources/styles/variables';

import WhiteCircle2 from 'views/SVGImage_6/WhiteCircle2';
import CircleWithBorder2 from 'views/SVGImage_6/CircleWithBorder2';
import LightGrayCircle2 from 'views/SVGImage_6/LightGrayCircle2';

const TransparentCircle6 = styled.circle`
    fill: rgba(255,255,255, 0.1);
`;
const GreenCircle6 = styled.circle`
    fill: ${variables.green_circle_fill};
`;
const CheckMark6 = styled.polyline`
    fill: none;
    stroke: ${variables.white_checkmark_stroke};
    stroke-width: 2;
`;

class WholeSvg_6 extends Component {

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
                <WhiteCircle2 />
                <CircleWithBorder2 />
                <LightGrayCircle2 />
                <TransparentCircle6 r="24" cx="155" cy="220" onClick={this.handleClick} stroke={this.state.stroke} strokeWidth={this.state.strokeWidth} />
                <GreenCircle6 r="7" cx="172" cy="205" display={this.state.display} />
                <CheckMark6 points="168,204 171,207 176,201" display={this.state.display} />
            </React.Fragment>
        );
    }
}

export default WholeSvg_6;