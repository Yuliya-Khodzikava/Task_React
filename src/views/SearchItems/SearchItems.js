// @flow

import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {showMovies, setSearchType, setSearchText, requestMovies, sortMoviesByDate, sortMoviesByRate} from '../../actions/findItem';

import './SearchItems.scss';

import ResultsBody from '../ResultsBody/ResultsBody.js';
import SearchButton from '../SearchButton/SearchButton.js';
import SearchText from '../SearchText/SearchText.js';
import SearchField from '../SearchField/SearchField.js';
import SearchFilter from '../SearchFilter/SearchFilter.js';
import SearchAdditionalItems from '../SearchAdditionalItems/SearchAdditionalItems.js';
import ResultsCount from '../ResultsCount/ResultsCount.js';

class SearchItems extends React.Component {

    findItem(e) {
        this.props.setSearchText(e.target.value);
        //console.log(this.props.searchItems.searchText);
        this.props.requestMovies();
        console.log(e.target.value)
    }
    handleSortRate(){
        this.props.sortMoviesByRate();
    }
    handleSortDate(){
        this.props.sortMoviesByDate();
    }
    componentDidMount(){
        this.props.showMovies();
    }
    handleFilter(type) {
        //console.log(type);
        this.props.setSearchType(type);
    }

    render() {
        return (
            <div>
                <div className="c-search_items">
                    {SearchText}
                    <SearchField handleChanges={this.findItem.bind(this)} />
                    {SearchButton}
                    <SearchFilter handleFilter={this.handleFilter.bind(this)}
                    activeType={this.props.searchItems.searchType} />
                </div>
                <SearchAdditionalItems
                sortingDate={this.handleSortDate.bind(this)}
                sortingRate={this.handleSortRate.bind(this)}
                count={this.props.searchItems.searchResult.length} />
                <ResultsBody items={this.props.searchItems.searchResult} />
            </div>
        );
    }
}

function mapStateToProps(state) {
//console.dir(state);
	return {
		searchItems: state.items
	};
}
function matchDispatchToProps(dispatch) {
	//return bindActionCreators({showMovies: showMovies}, dispatch)
	return {
        showMovies: bindActionCreators(showMovies, dispatch),
        setSearchType: bindActionCreators(setSearchType, dispatch),
        setSearchText: bindActionCreators(setSearchText, dispatch),
        requestMovies: bindActionCreators(requestMovies, dispatch),
        sortMoviesByDate: bindActionCreators(sortMoviesByDate, dispatch),
        sortMoviesByRate: bindActionCreators(sortMoviesByRate, dispatch)
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(SearchItems);