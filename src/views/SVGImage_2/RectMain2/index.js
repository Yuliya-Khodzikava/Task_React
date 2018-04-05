import React, { Component } from 'react';
import styled from "styled-components";

import variables from '../../../resources/styles/variables';

const WhiteRect2 = styled.rect`
    width: 50;
    height: 50;
    fill: ${variables.white_rect_fill};
`;
const GreenCircle2 = styled.circle`
    fill: ${variables.green_circle_fill};
`;
const CheckMark2 = styled.polyline`
    fill: none;
    stroke: ${variables.white_checkmark_stroke};
    stroke-width: 2;
`;

class RectMain2 extends Component {

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
                <WhiteRect2 onClick={this.handleClick} x="130" y="50" stroke={this.state.stroke} strokeWidth={this.state.strokeWidth} />
                <GreenCircle2 r="7" cx="180" cy="50" display={this.state.display} />
                <CheckMark2 points="176,49 179,53 184,47" display={this.state.display} />
            </React.Fragment>
        );
    }
}

export default RectMain2;