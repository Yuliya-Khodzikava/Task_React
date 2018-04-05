import React, { Component } from 'react';

import CircleLabelTypeImage from 'views/LabelTypeImage_SVG/CircleLabelTypeImage';
import RectLabelTypeImage from 'views/LabelTypeImage_SVG/RectLabelTypeImage';
import ImageIcon from 'views/LabelTypeImage_SVG/ImageIcon';
import LabelTypeImageItems from 'views/LabelTypeImage_SVG/LabelTypeImageItems';

class WholeLabelTypeImage extends Component {

    render() {
        return (
            <React.Fragment>
                <CircleLabelTypeImage />
                <RectLabelTypeImage />
                <ImageIcon />
                <LabelTypeImageItems />
            </React.Fragment>
        );
    }
}

export default WholeLabelTypeImage;