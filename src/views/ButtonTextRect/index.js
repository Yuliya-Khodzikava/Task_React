import React, { Component } from 'react';

class ButtonTextRect extends Component {

    render() {
        return (
            <React.Fragment>
                <rect width="81" height="33" x="431" y="359" fill="none" stroke="#000" strokeWidth="1" />
                <rect width="7" height="7" x="427" y="372" fill="#fff" />
                <rect width="7" height="7" x="508" y="372" fill="#fff" />
            </React.Fragment>
        );
    }
}

export default ButtonTextRect;