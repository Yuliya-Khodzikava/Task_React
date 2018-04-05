import React, { Component } from 'react';

import RectItem3 from 'views/SVGImage_3/RectItem3';
import CircleItem3 from 'views/SVGImage_3/CircleItem3';
import LabelText3 from 'views/SVGImage_3/LabelText3';

class WholeSvg_3 extends Component {

    render() {
        return (
            <React.Fragment>
                <CircleItem3 />
                <RectItem3 />
                <LabelText3 />
            </React.Fragment>
        );
    }
}

export default WholeSvg_3;