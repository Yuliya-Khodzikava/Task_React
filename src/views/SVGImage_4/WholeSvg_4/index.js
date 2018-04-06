import React, { Component } from 'react';
import styled from "styled-components";

import variables from '../../../resources/styles/variables';

import RectItems4 from 'views/SVGImage_4/RectItems4';
import GrayCircle2 from 'views/SVGImage_4/GrayCircle2';
import LabelText4 from 'views/SVGImage_4/LabelText4';

const TransparentCircle4 = styled.circle`
    fill: rgba(255,255,255, 0.1);
`;
const GreenCircle4 = styled.circle`
    fill: ${variables.green_circle_fill};
`;
const CheckMark4 = styled.polyline`
    fill: none;
    stroke: ${variables.white_checkmark_stroke};
    stroke-width: 2;
`;

class WholeSvg_4 extends Component {

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
                <GrayCircle2 />
                <RectItems4 />
                <LabelText4 />
                <TransparentCircle4 onClick={this.handleClick} r="24" cx="155" cy="150" stroke={this.state.stroke} strokeWidth={this.state.strokeWidth} />
                <GreenCircle4 r="7" cx="172" cy="133" display={this.state.display} />
                <CheckMark4 points="168,132 171,136 176,130" display={this.state.display} />
            </React.Fragment>
        );
    }
}

export default WholeSvg_4;