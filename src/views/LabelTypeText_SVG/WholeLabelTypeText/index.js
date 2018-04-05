import React, { Component } from 'react';

import CircleLabelType from 'views/LabelTypeText_SVG/CircleLabelType';
import RectLabelType from 'views/LabelTypeText_SVG/RectLabelType';
import TextLabelType from 'views/LabelTypeText_SVG/TextLabelType';
import LabelTypeTextItems from 'views/LabelTypeText_SVG/LabelTypeTextItems';

class WholeLabelTypeText extends Component {

    render() {
        return (
            <React.Fragment>
                <CircleLabelType />
                <RectLabelType />
                <TextLabelType />
                <LabelTypeTextItems />
            </React.Fragment>
        );
    }
}

export default WholeLabelTypeText;