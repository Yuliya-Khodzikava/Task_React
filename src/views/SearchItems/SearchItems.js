import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setSearchText} from '../../actions/findItem';

import './SearchItems.scss';
import '../SearchField/SearchField.scss';

import SearchButton from 'views/SearchButton/SearchButton.js';
import SearchText from 'views/SearchText/SearchText.js';
//import SearchField from 'views/SearchField/SearchField.js';
import SearchFilter from 'views/SearchFilter/SearchFilter.js';
import SearchAdditionalItems from 'views/SearchAdditionalItems/SearchAdditionalItems.js';
import ResultsCount from 'views/ResultsCount/ResultsCount.js';

class SearchItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
//            searchItems: this.props.items,
//            inputValue: '',
            sortColorDate: '#000',
            sortColorRate: '#000'
        };
//        this.handleChange = this.handleChange.bind(this);
        this.handleSortDate = this.handleSortDate.bind(this);
        this.handleSortRate = this.handleSortRate.bind(this);
    }
//    handleChange(event){
//        let val = event.target.value.toLowerCase();
//        var filteredList = this.props.items.filter((item) => {
//            return item.genre.toLowerCase().search(val)!== -1;
//        });
//
//        this.setState({searchItems: filteredList, inputValue: event.target.value});
//    }

//    findItem() {
//        this.props.setSearchText(this.searchInput.value);
//    }
    handleSortDate(){
        var sortingListDate = this.props.searchItems.sort( (a,b) => {
            return a.date > b.date;
        });

        this.setState({searchItems: sortingListDate, sortColorDate: '#e50914', sortColorRate: '#000'});
    }
    handleSortRate(){
        var sortingListRate = this.props.searchItems.sort( (a,b) => {
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
                        <input type="text" ref={(input) => { this.searchInput = input }}
                        //onChange={this.findItem.bind(this)}
                        placeholder="Type here" className="c-search_field_input" />
                    </div>

                    {SearchButton}
                    <SearchFilter />
                </div>

                <SearchAdditionalItems sortingDate={this.handleSortDate}
                sortingRate={this.handleSortRate}
                sortingColorDate={{color: this.state.sortColorDate}}
                sortingColorRate={{color: this.state.sortColorRate}} />

                <div className="c-results_body">
                    <div className="c-results_body--smaller-container">
                        {this.props.searchItems.map( (item, index) =>
                            <div key={index} className="c-movie_item">
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

function mapStateToProps(state) {
	return {
		searchItems: state.movies,
//		.filter( item => {
//            return item.title.toLowerCase().includes(state.filter.toLowerCase());
//        })
	};
}
function matchDispatchToProps(dispatch) {
	return bindActionCreators({setSearchText: setSearchText}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(SearchItems);