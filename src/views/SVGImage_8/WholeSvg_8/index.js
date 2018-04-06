import React, { Component } from 'react';
import styled from "styled-components";

import variables from '../../../resources/styles/variables';

import WhiteCircle4 from 'views/SVGImage_8/WhiteCircle4';
import CircleWithBorder4 from 'views/SVGImage_8/CircleWithBorder4';
import LightGrayCircle4 from 'views/SVGImage_8/LightGrayCircle4';

const TransparentCircle8 = styled.circle`
    fill: rgba(255,255,255, 0.1);
`;
const GreenCircle8 = styled.circle`
    fill: ${variables.green_circle_fill};
`;
const CheckMark8 = styled.polyline`
    fill: none;
    stroke: ${variables.white_checkmark_stroke};
    stroke-width: 2;
`;

class WholeSvg_8 extends Component {

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
                <WhiteCircle4 />
                <CircleWithBorder4 />
                <LightGrayCircle4 />
                <TransparentCircle8 r="24" cx="315" cy="220" onClick={this.handleClick} stroke={this.state.stroke} strokeWidth={this.state.strokeWidth} />
                <GreenCircle8 r="7" cx="333" cy="205" display={this.state.display} />
                <CheckMark8 points="328,204 332,207 337,201" display={this.state.display} />
            </React.Fragment>
        );
    }
}

export default WholeSvg_8;