import React, { Component } from 'react';

class LabelTextTop extends Component {

    render() {
        return (
            <React.Fragment>
                <defs>
                    <path id="LabelTextTop" d="M417 318 C 449 285, 487 285, 516 314"/>
                </defs>
                <text x="41" fill="#fbfbfb">
                    <textPath href="#LabelTextTop">
                        label
                    </textPath>
                </text>
            </React.Fragment>
        );
    }
}

export default LabelTextTop;