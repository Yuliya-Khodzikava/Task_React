// @flow

import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './SearchAdditionalItems.scss';

import ResultsCount from '../ResultsCount/ResultsCount.js';

class SearchAdditionalItems extends React.Component {

    render() {
        return (
            <div className="c-search_additional_items">
                <div className="c-search--margin">
                    <ResultsCount count={this.props.count}/>
                    <div className="c-results_filter">
                        <p onClick={this.props.sortingRate} className="c-results_filter_cursor">rating</p>
                        <p onClick={this.props.sortingDate} className="c-results_filter_cursor">release date</p>
                        <p>Sort by</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchAdditionalItems;