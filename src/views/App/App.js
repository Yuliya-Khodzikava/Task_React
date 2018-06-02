import React, { Component } from 'react';

import './App.scss';

import MainHeadSearch from 'views/MainHeadSearch/MainHeadSearch.js';
import ErrorBoundary from 'views/ErrorBoundary/ErrorBoundary.js';

import Footer from 'views/Footer/Footer.js';

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