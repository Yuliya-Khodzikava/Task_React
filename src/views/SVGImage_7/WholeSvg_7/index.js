import React, { Component } from 'react';

import styled from "styled-components";

import variables from '../../../resources/styles/variables';

import WhiteCircle3 from 'views/SVGImage_7/WhiteCircle3';
import CircleWithBorder3 from 'views/SVGImage_7/CircleWithBorder3';
import LightGrayCircle3 from 'views/SVGImage_7/LightGrayCircle3';

const TransparentCircle7 = styled.circle`
    fill: rgba(255,255,255, 0.1);
`;
const GreenCircle7 = styled.circle`
    fill: ${variables.green_circle_fill};
`;
const CheckMark7 = styled.polyline`
    fill: none;
    stroke: ${variables.white_checkmark_stroke};
    stroke-width: 2;
`;

class WholeSvg_7 extends Component {

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
                <WhiteCircle3 />
                <CircleWithBorder3 />
                <LightGrayCircle3 />
                <TransparentCircle7 r="24" cx="235" cy="220" onClick={this.handleClick} stroke={this.state.stroke} strokeWidth={this.state.strokeWidth} />
                <GreenCircle7 r="7" cx="253" cy="205" display={this.state.display} />
                <CheckMark7 points="248,204 252,207 257,201" display={this.state.display} />
            </React.Fragment>
        );
    }
}

export default WholeSvg_7;