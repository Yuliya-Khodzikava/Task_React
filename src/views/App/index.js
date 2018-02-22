import React, { Component } from 'react';
import styled, { ThemeProvider } from "styled-components";

import variables from '../../resources/styles/variables';
import theme from '../../resources/styles/theme';

import Header from 'views/Header';
import LegendSizeTopPanel from 'views/LegendSizeTopPanel';

const Wrapper = styled.div`
    width: 1025px;
    height: 40px;
    background-color: ${theme.white_bg_color};
    margin: 0 auto;
`;

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={variables}>
                <Wrapper>
                    <Header />
                    <LegendSizeTopPanel />
                </Wrapper>
            </ThemeProvider>
        );
    }
}

export default App;