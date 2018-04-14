import React, { Component } from 'react';

import './ResultsFilter.scss';

class ResultsFilter extends React.Component {

    render() {
        return (
            <div className="c-results_filter">
                <p>rating</p>
                <p>release date</p>
                <p>Sort by</p>
            </div>
        );
    }
}

export default ResultsFilter;