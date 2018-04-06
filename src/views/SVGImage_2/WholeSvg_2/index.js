import React, { Component } from 'react';
import styled from "styled-components";

import variables from '../../../resources/styles/variables';

import WhiteRect2 from 'views/SVGImage_2/WhiteRect2';
import RectItems2 from 'views/SVGImage_2/RectItems2';
import CircleItem2 from 'views/SVGImage_2/CircleItem2';
import LabelText2 from 'views/SVGImage_2/LabelText2';

const TransparentSvg2 = styled.svg`
    fill: rgba(255,255,255, 0.1);
    width: 50;
    height: 50;
`;
const GreenCircle2 = styled.circle`
    fill: ${variables.green_circle_fill};
`;
const CheckMark2 = styled.polyline`
    fill: none;
    stroke: ${variables.white_checkmark_stroke};
    stroke-width: 2;
`;

class WholeSvg_2 extends Component {

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
            <TransparentSvg2 onClick={this.handleClick} stroke={this.state.stroke} strokeWidth={this.state.strokeWidth}>
                <WhiteRect2 />
                <CircleItem2 />
                <RectItems2 />
                <LabelText2 />
                <GreenCircle2 r="7" cx="180" cy="50" display={this.state.display} />
                <CheckMark2 points="176,49 179,53 184,47" display={this.state.display} />
            </TransparentSvg2>
        );
    }
}

export default WholeSvg_2;