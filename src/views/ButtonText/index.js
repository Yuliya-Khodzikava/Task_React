import React, { Component } from 'react';

import LabelTextTop from 'views/LabelTextTop';
import LabelTextRight from 'views/LabelTextRight';
import LabelTextLeft from 'views/LabelTextLeft';

class ButtonText extends Component {

    render() {
        return (
            <React.Fragment>

                <LabelTextTop />
                <LabelTextRight />
                <LabelTextLeft />

                <text className="push-text" x="443" y="382" fill="#fbfbfb">PUSH</text>
            </React.Fragment>
        );
    }
}

export default ButtonText;