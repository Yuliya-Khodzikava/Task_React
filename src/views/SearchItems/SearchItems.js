import React, { Component } from 'react';

import './SearchItems.scss';

import SearchButton from 'views/SearchButton/SearchButton.js';
import SearchText from 'views/SearchText/SearchText.js';
//import SearchField from 'views/SearchField/SearchField.js';
import SearchFilter from 'views/SearchFilter/SearchFilter.js';
import SearchAdditionalItems from 'views/SearchAdditionalItems/SearchAdditionalItems.js';
//import ResultsBody from 'views/ResultsBody/ResultsBody.js';
import ResultsCount from 'views/ResultsCount/ResultsCount.js';

class SearchItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchItems: this.props.items,
            inputValue: '',
            sortColorDate: '#000',
            sortColorRate: '#000'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSortDate = this.handleSortDate.bind(this);
        this.handleSortRate = this.handleSortRate.bind(this);
    }

    handleChange(event){
        let val = event.target.value.toLowerCase();
        var filteredList = this.props.items.filter((item) => {
            return item.title.toLowerCase().search(val)!== -1;
        });

        this.setState({searchItems: filteredList, inputValue: event.target.value});
    }

    handleSortDate(){
        var sortingListDate = this.props.items.sort( (a,b) => {
            return a.date > b.date;
        });

        this.setState({searchItems: sortingListDate, sortColorDate: '#e50914', sortColorRate: '#000'});
    }

    handleSortRate(){
        var sortingListRate = this.props.items.sort( (a,b) => {
            return a.rating > b.rating;
        });

        this.setState({searchItems: sortingListRate, sortColorDate: '#000', sortColorRate: '#e50914'});
    }

    render() {
        return (
            <div>
                <div className="c-search_items">
                    {SearchText}

                    <div className="c-search_field">
                        <input type="search" value={this.state.inputValue} onChange={this.handleChange} placeholder="Type here" />
                    </div>

                    {SearchButton}
                    <SearchFilter />
                </div>

                <div className="c-search_additional_items">
                    <div className="c-search--margin">
                        <ResultsCount />
                        <div className="c-results_filter">
                            <p onClick={this.handleSortRate} style={{color: this.state.sortColorRate}} className="c-results_filter_cursor">rating</p>
                            <p onClick={this.handleSortDate} style={{color: this.state.sortColorDate}} className="c-results_filter_cursor">release date</p>
                            <p>Sort by</p>
                        </div>
                    </div>
                </div>

                <div className="c-results_body">
                    <div className="c-results_body--smaller-container">
                        {this.state.searchItems.map( item =>
                            <div className="c-movie_item">
                                <img src={item.img} />
                                <div className="c-movie_item_info">
                                    <p className="c-movie_item_title">{item.title}</p>
                                    <p className="c-movie_item_date">{item.date}</p>
                                    <p className="c-movie_item_genre">{item.genre}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        );
    }
}

export default SearchItems;