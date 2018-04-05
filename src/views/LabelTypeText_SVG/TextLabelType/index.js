import React, { Component } from 'react';
import styled from "styled-components";

import variables from '../../../resources/styles/variables';

const TextLabelTypeItem = styled.text`
    fill: ${variables.black_text_fill};
    font-size: ${variables.label_type_font_size};
    font-weight: bold;
`;

class TextLabelType extends Component {

    render() {
        return (
            <TextLabelTypeItem x="230" y="156">T</TextLabelTypeItem>
        );
    }
}

export default TextLabelType;