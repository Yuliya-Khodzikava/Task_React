import React, { Component } from 'react';

class LabelTextRight extends Component {

    render() {
        return (
            <React.Fragment>
                <defs>
                    <path id="LabelTextRight" d="M526 320 C 536 335, 580 377, 526 425"/>
                </defs>
                <text x="45" fill="#fbfbfb">
                    <textPath href="#LabelTextRight">
                        label
                    </textPath>
                </text>
            </React.Fragment>
        );
    }
}

export default LabelTextRight;