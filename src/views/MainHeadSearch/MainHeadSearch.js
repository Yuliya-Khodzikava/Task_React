import React, { Component } from 'react';

import './MainHeadSearch.scss';

import Header from '../Header/Header.js';
import SearchItems from '../SearchItems/SearchItems.js';

class MainHeadSearch extends React.Component {

    render() {
        return (
            <div className="c-main">
                <div className="c-main--dark">
                    <Header />
                    <SearchItems />
                </div>
            </div>
        );
    }
}

export default MainHeadSearch;