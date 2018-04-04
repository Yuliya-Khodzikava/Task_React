import React, { Component } from 'react';
import styled from "styled-components";

import variables from '../../resources/styles/variables';

const WhiteRect = styled.rect`
    width: 50;
    height: 50;
    fill: ${variables.white_rect_fill};
`;
const GreenCircle = styled.circle`
    fill: ${variables.green_circle_fill};
`;
const CheckMark = styled.polyline`
    fill: none;
    stroke: ${variables.white_checkmark_stroke};
    stroke-width: 2;
`;

class RectMain extends Component {

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
                <WhiteRect onClick={this.handleClick} x="50" y="50" stroke={this.state.stroke} strokeWidth={this.state.strokeWidth} />
                <GreenCircle r="7" cx="100" cy="50" display={this.state.display} />
                <CheckMark points="96,49 99,53 104,47" display={this.state.display} />
            </React.Fragment>
        );
    }
}

export default RectMain;