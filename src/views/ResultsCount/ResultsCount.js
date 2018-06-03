import React, { Component } from 'react';

import './ResultsCount.scss';

class ResultsCount extends React.Component {

    render() {
        return (
            <div className="c-results_count">
                <p>{this.props.count} movies found</p>
            </div>
        );
    }
}

export default ResultsCount;