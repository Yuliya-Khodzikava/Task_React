import React, { Component } from 'react';

import './SearchItems.scss';

import SearchButton from 'views/SearchButton';
import SearchText from 'views/SearchText';
import SearchField from 'views/SearchField';
import SearchFilter from 'views/SearchFilter';

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