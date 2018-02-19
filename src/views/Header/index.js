import React, { Component } from 'react';
import styled from "styled-components";
import { ThemeProvider } from 'styled-components';

//import { renderSync } from 'sass-extract';

const theme = {
  white_bg_color: '#fff',
  header_button_bg_color: '#e5e5e5',
  header_button3_bg_color: '#4a90e2',
  header_button_font_color: '#545454',
  header_button_font_size: '15px',
  header_button3_font_color: '#fff'
}

//const theme = renderSync(
//  { file: '../../resources/styles/variables.scss' },
//  { plugins: ['sass-extract-js'] }
//);

const HeaderStyles = styled.div`
    width: 1025px;
    height: 40px;
    background-color: ${props => props.theme.white_bg_color};
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
    background-color: ${props => props.theme.header_button_bg_color};
    margin-right: 13px;
    font-size: ${props => props.theme.header_button_font_size};
    color: ${props => props.theme.header_button_font_color};
    cursor: pointer;
`;
const Button2 = Button.extend`
    margin-right: 18px;
`;
const Button3 = Button.extend`
    margin-right: 8px;
    color: ${props => props.theme.header_button3_font_color};
    background-color: ${props => props.theme.header_button3_bg_color};
`;


class Header extends Component {

    render() {
        return (
            <ThemeProvider theme={theme}>
                <HeaderStyles>
                    <ButtonsStyles>
                        <Button>Export img</Button>
                        <Button2>Save draft</Button2>
                        <Button3>Complete</Button3>
                    </ButtonsStyles>
                </HeaderStyles>
            </ThemeProvider>
        );
    }
}

export default Header;