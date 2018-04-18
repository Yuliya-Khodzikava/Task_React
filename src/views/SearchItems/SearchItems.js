import React, { Component } from 'react';

import './SearchItems.scss';

import SearchButton from 'views/SearchButton/SearchButton.js';
import SearchText from 'views/SearchText/SearchText.js';
import SearchField from 'views/SearchField/SearchField.js';
import SearchFilter from 'views/SearchFilter/SearchFilter.js';

class SearchItems extends React.Component {

    render() {
        return (
            <div className="c-search_items">
                {SearchText}
                <SearchField />
                {SearchButton}
                <SearchFilter />
            </div>
        );
    }
}

export default SearchItems;