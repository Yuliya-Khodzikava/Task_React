import React, { Component } from 'react';
import styled from "styled-components";

import variables from '../../resources/styles/variables';
import theme from '../../resources/styles/theme';

//const theme = {
//  white_bg_color: '#fff',
//  header_button_bg_color: '#e5e5e5',
//  header_button3_bg_color: '#4a90e2',
//  header_button_font_color: '#545454',
//  header_button_font_size: '15px',
//  header_button3_font_color: '#fff'
//}

const HeaderStyles = styled.div`
    width: 1025px;
    height: 40px;
    background-color: ${theme.white_bg_color};
`;
const ButtonsStyles = styled.div`
    float: right;
    margin-top: 5px;
    margin-bottom: 5px;
`;
const Button = styled.button`
    width: 110px;
    height: 30px;
    border: none;
    background-color: ${theme.header_button_bg_color};
    margin-right: 13px;
    font-size: ${theme.header_button_font_size};
    color: ${theme.header_button_font_color};
    cursor: pointer;
`;
const Button2 = Button.extend`
    margin-right: 18px;
`;
const Button3 = Button.extend`
    margin-right: 8px;
    color: ${theme.header_button3_font_color};
    background-color: ${theme.header_button3_bg_color};
`;


class Header extends Component {

    render() {
        return (
            <HeaderStyles>
                <ButtonsStyles>
                    <Button>Export img</Button>
                    <Button2>Save draft</Button2>
                    <Button3>Complete</Button3>
                </ButtonsStyles>
            </HeaderStyles>
        );
    }
}

export default Header;