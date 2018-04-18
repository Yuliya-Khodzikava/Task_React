import React, { Component, PureComponent } from 'react';

import './SearchField.scss';

class SearchField extends PureComponent {

    constructor() {
        super();
        this.state = {
          inputValue: ''
        };
        this.handleChange = this.handleChange.bind(this);
      }
      handleChange(event){
        this.setState({
          inputValue: event.target.value
        })
      }

    render() {

        return (
            <div className="c-search_field">
                <input type="search" value={this.state.inputValue} onChange={this.handleChange} placeholder="Type here" />
            </div>
        );
    }
}

export default SearchField;