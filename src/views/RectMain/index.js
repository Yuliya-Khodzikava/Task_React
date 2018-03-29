import React, { Component } from 'react';

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
                <rect onClick={this.handleClick} x="50" y="50" width="50" height="50" fill="#fff" stroke={this.state.stroke} strokeWidth={this.state.strokeWidth} />
                <circle r="7" cx="100" cy="50" fill="#3dcd58" display={this.state.display} />
                <polyline points="96,49 99,53 104,47" fill="none" stroke="#fff" strokeWidth="2" display={this.state.display} />
            </React.Fragment>
        );
    }
}

export default RectMain;