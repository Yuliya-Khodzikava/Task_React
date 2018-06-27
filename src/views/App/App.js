// @flow

import React, { Component } from 'react';
import './App.scss';

import MainHeadSearch from '../MainHeadSearch/MainHeadSearch.js';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary.js';
import Footer from '../Footer/Footer.js';

class App extends React.Component {

    render() {
        return (
            <ErrorBoundary>
                <div className="app">
                    <MainHeadSearch />
                    <Footer />
                </div>
            </ErrorBoundary>
        );
    }
}

export default App;