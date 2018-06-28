// @flow

import React, { Component } from 'react';
import styled from "styled-components";
//import './App.scss';

import MainHeadSearch from '../MainHeadSearch/MainHeadSearch.js';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary.js';
import Footer from '../Footer/Footer.js';

class App extends React.Component {

    render() {
        return (
            <ErrorBoundary>
                <AppWrapper>
                    <MainHeadSearch />
                    <Footer />
                </AppWrapper>
            </ErrorBoundary>
        );
    }
}

const AppWrapper = styled.div`
  font-family: Geneva, Arial, Helvetica, sans-serif;
`;

export default App;