import React, { Component } from 'react';

import RectItems2 from 'views/RectItems2';
import RectMain2 from 'views/RectMain2';
import CircleItem2 from 'views/CircleItem2';
import LabelText2 from 'views/LabelText2';

class WholeSvg_2 extends Component {

    render() {
        return (
            <React.Fragment>
                <RectMain2 />
                <RectItems2 />
                <CircleItem2 />
                <LabelText2 />
            </React.Fragment>
        );
    }
}

export default WholeSvg_2;