import React, { Component } from 'react';
import styled from "styled-components";

import variables from '../../../resources/styles/variables';

const TransparentCircle = styled.circle`
    fill: rgba(255,255,255, 0.1);
`;
const GreenCircle9 = styled.circle`
    fill: ${variables.green_circle_fill};
`;
const CheckMark9 = styled.polyline`
    fill: none;
    stroke: ${variables.white_checkmark_stroke};
    stroke-width: 2;
`;

class LabelTypeTextItems extends Component {

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
                <TransparentCircle onClick={this.handleClick} r="24" cx="235" cy="150" stroke={this.state.stroke} strokeWidth={this.state.strokeWidth} />
                <GreenCircle9 r="7" cx="254" cy="133" display={this.state.display} />
                <CheckMark9 points="250,132 253,136 258,130" display={this.state.display} />
            </React.Fragment>
        );
    }
}

export default LabelTypeTextItems;