import React, { Component } from 'react';

import './App.scss';

import MainHeadSearch from 'views/MainHeadSearch/MainHeadSearch.js';
import SearchAdditionalItems from 'views/SearchAdditionalItems/SearchAdditionalItems.js';
import ResultsBody from 'views/ResultsBody/ResultsBody.js';
import Footer from 'views/Footer/Footer.js';

const MovieItems = [
    {img: '', title: 'KILL BILL: VOL. 2', date: '2004', genre: 'Action and Adventure'},
    {img: '', title: 'PULP FICTION', date: '1994', genre: 'Oscar-winning movies'},
    {img: '', title: 'KILL BILL: VOL. 2', date: '2004', genre: 'Action and Adventure'},
    {img: '', title: 'PULP FICTION', date: '1994', genre: 'Oscar-winning movies'},
    {img: '', title: 'KILL BILL: VOL. 2', date: '2004', genre: 'Action and Adventure'},
    {img: '', title: 'PULP FICTION', date: '1994', genre: 'Oscar-winning movies'},
    {img: '', title: 'KILL BILL: VOL. 2', date: '2004', genre: 'Action and Adventure'}
];

class App extends React.Component {

    render() {
        return (
            <div className="app">
                <MainHeadSearch />
                <SearchAdditionalItems />
                <ResultsBody MovieItems={MovieItems} />
                <Footer />
            </div>
        );
    }
}

export default App;