import React, { Component } from 'react';
import styled from "styled-components";

import variables from '../../../resources/styles/variables';

const TransparentCircle2 = styled.circle`
    fill: rgba(255,255,255, 0.1);
`;
const GreenCircle10 = styled.circle`
    fill: ${variables.green_circle_fill};
`;
const CheckMark10 = styled.polyline`
    fill: none;
    stroke: ${variables.white_checkmark_stroke};
    stroke-width: 2;
`;

class LabelTypeImageItems extends Component {

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
                <TransparentCircle2 onClick={this.handleClick} r="24" cx="316" cy="150" stroke={this.state.stroke} strokeWidth={this.state.strokeWidth} />
                <GreenCircle10 r="7" cx="335" cy="133" display={this.state.display} />
                <CheckMark10 points="331,132 334,136 339,130" display={this.state.display} />
            </React.Fragment>
        );
    }
}

export default LabelTypeImageItems;