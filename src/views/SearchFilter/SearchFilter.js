import React, { Component } from 'react';

import './SearchFilter.scss';

class SearchFilter extends React.Component {

    render() {
        return (
            <div id="c-search_filter" className="c-search_filter">
                <p>SEARCH BY</p>
                <button className={this.props.activeType === 'title' ? 'btn active' : 'btn'} onClick={() => this.props.handleFilter('title')}>TITLE</button>
                <button className={this.props.activeType === 'genre' ? 'btn active' : 'btn'} onClick={() => this.props.handleFilter('genre')}>GENRE</button>
            </div>
        );
    }
}

export default SearchFilter;