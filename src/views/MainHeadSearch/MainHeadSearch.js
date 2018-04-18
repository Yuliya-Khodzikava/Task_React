import React, { Component } from 'react';

import './MainHeadSearch.scss';

import Header from 'views/Header/Header.js';
import SearchItems from 'views/SearchItems/SearchItems.js';

class MainHeadSearch extends React.Component {

    render() {
        return (
            <div className="c-main">
                <Header />
                <SearchItems />
            </div>
        );
    }
}

export default MainHeadSearch;