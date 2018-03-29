import React, { Component } from 'react';

import RectItems from 'views/RectItems';
import RectMain from 'views/RectMain';
import CircleItem from 'views/CircleItem';
import LabelText from 'views/LabelText';

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