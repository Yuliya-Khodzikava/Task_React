import React, { Component } from 'react';

class CircleItem3 extends Component {

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
                <circle onClick={this.handleClick} r="24" cx="75" cy="150" fill="#d9d9d9" stroke={this.state.stroke} strokeWidth={this.state.strokeWidth} />
                <circle r="7" cx="92" cy="133" fill="#3dcd58" display={this.state.display} />
                <polyline points="88,132 91,136 96,130" fill="none" stroke="#fff" strokeWidth="2" display={this.state.display} />
            </React.Fragment>
        );
    }
}

export default CircleItem3;