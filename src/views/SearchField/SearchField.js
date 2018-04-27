import React, { Component } from 'react';

import './SearchField.scss';

class SearchField extends Component {

    render() {

        return (
            <div className="c-search_field">
                <input type="search" value={this.props.currentValue} onChange={this.props.handleChanges} placeholder="Type here" />
            </div>
        );
    }
}

export default SearchField;