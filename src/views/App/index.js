import React, { Component } from 'react';
import styled from "styled-components";

import Header from 'views/Header';
import LegendSizeTopPanel from 'views/LegendSizeTopPanel';

const Wrapper = styled.div`
    width: 1025px;
    height: 40px;
    background-color: $white-bg-color;
    margin: 0 auto;
`;

class App extends Component {
    render() {
        return (
            <Wrapper>
                <Header />
                <LegendSizeTopPanel />
            </Wrapper>
        );
    }
}

export default App;