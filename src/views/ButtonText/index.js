import React, { Component } from 'react';

class ButtonText extends Component {

    render() {
        return (
            <React.Fragment>
                <text x="455" y="293" fill="#fbfbfb">label</text>
                <text x="558" y="360" fill="#fbfbfb" writingMode="tb">label</text>
                <text x="387" y="390" fill="#fbfbfb" transform="rotate(270,387,390)">label</text>
                <text className="push-text" x="443" y="382" fill="#fbfbfb">PUSH</text>
            </React.Fragment>
        );
    }
}

export default ButtonText;