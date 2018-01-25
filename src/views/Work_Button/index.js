import React, { Component } from 'react';
import './Work_Button.scss';

class Button extends Component {

    render() {
        return (
            <div className="c-work__button">
                <button onClick={this.props.callback}>Discover our works</button>
            </div>
        );
    }
}

export default Button;