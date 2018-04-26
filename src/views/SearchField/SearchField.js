//import React, { Component, PureComponent } from 'react';
//
//import './SearchField.scss';
//
//class SearchField extends PureComponent {
//
//    constructor() {
//        super();
//        this.state = {
//            items: this.props.MovieItems.title,
//            inputValue: ''
//        };
//        this.handleChange = this.handleChange.bind(this);
//    }
//    handleChange(event){
//        var filteredList = this.props.MovieItems.title.filter((item) => {
//            return item.toLowerCase().search(event.target.value.toLowerCase())!== -1;
//        });
//
//        this.setState({items: filteredList, inputValue: event.target.value});
//    }
//
//    render() {
//
//        return (
//            <div className="c-search_field">
//                <input type="search" value={this.state.inputValue} onChange={this.handleChange} placeholder="Type here" />
//            </div>
//        );
//    }
//}
//
//export default SearchField;