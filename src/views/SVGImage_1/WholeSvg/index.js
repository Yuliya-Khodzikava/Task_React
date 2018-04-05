import React, { Component } from 'react';

import RectItems from 'views/SVGImage_1/RectItems';
import RectMain from 'views/SVGImage_1/RectMain';
import CircleItem from 'views/SVGImage_1/CircleItem';
import LabelText from 'views/SVGImage_1/LabelText';

class WholeSvg extends Component {

    render() {
        return (
            <React.Fragment>
                <RectMain />
                <RectItems />
                <CircleItem />
                <LabelText />
            </React.Fragment>
        );
    }
}

export default WholeSvg;