import React, { Component } from 'react';

import './App.scss';

import MainHeadSearch from 'views/MainHeadSearch';
import SearchAdditionalItems from 'views/SearchAdditionalItems';
import ResultsBody from 'views/ResultsBody';
import Footer from 'views/Footer';

class App extends React.Component {

    render() {
        return (
            <div className="app">
                <MainHeadSearch />
                <SearchAdditionalItems />
                <ResultsBody />
                <Footer />
            </div>
        );
    }
}

export default App;