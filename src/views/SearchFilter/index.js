import React, { Component } from 'react';

import './SearchFilter.scss';

class SearchFilter extends React.Component {

    render() {
        return (
            <div className="c-search_filter">
                <p>SEARCH BY</p>
                <button>TITLE</button>
                <button>GENRE</button>
            </div>
        );
    }
}

export default SearchFilter;