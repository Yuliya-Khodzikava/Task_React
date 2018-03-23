import React, { Component } from 'react';

class LabelTextLeft extends Component {

    render() {
        return (
            <React.Fragment>
                <defs>
                    <path id="LabelTextLeft" d="M378 325 C 399 360, 399 394, 378 427"/>
                </defs>
                <text x="40" fill="#fbfbfb" transform="rotate(180,390,379)">
                    <textPath href="#LabelTextLeft">
                        label
                    </textPath>
                </text>
            </React.Fragment>
        );
    }
}

export default LabelTextLeft;