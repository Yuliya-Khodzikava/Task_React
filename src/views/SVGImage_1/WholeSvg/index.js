import React, { Component } from 'react';
import styled from "styled-components";
import variables from '../../../resources/styles/variables';

import WhiteRect from 'views/SVGImage_1/WhiteRect';
import RectItems from 'views/SVGImage_1/RectItems';
import CircleItem from 'views/SVGImage_1/CircleItem';
import LabelText from 'views/SVGImage_1/LabelText';

const TransparentSvg = styled.svg`
    background: rgba(255,255,255, 0.1);
    width: 50;
    height: 50;
`;
const GreenCircle = styled.circle`
    fill: ${variables.green_circle_fill};
`;
const CheckMark = styled.polyline`
    fill: none;
    stroke: ${variables.white_checkmark_stroke};
    stroke-width: 2;
`;
class WholeSvg extends Component {

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
            <TransparentSvg onClick={this.handleClick} stroke={this.state.stroke} strokeWidth={this.state.strokeWidth}>
                    <WhiteRect />
                    <CircleItem />
                    <RectItems />
                    <LabelText />
                    <GreenCircle r="7" cx="100" cy="50" display={this.state.display} />
                    <CheckMark points="96,49 99,53 104,47" display={this.state.display} />
            </TransparentSvg>
        );
    }
}

export default WholeSvg;