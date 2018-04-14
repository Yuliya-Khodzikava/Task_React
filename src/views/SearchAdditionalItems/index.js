import React, { Component } from 'react';

import './SearchAdditionalItems.scss';

import ResultsCount from 'views/ResultsCount';
import ResultsFilter from 'views/ResultsFilter';

class SearchAdditionalItems extends React.Component {

    render() {
        return (
            <div className="c-search_additional_items">
                <div className="c-search--margin">
                    <ResultsCount />
                    <ResultsFilter />
                </div>
            </div>
        );
    }
}

export default SearchAdditionalItems;