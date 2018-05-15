import React, { Component } from 'react';

import './SearchField.scss';

class SearchField extends Component {

    render() {

        return (
            <div className="c-search_field">
                <input type="search" value={this.props.currentValue}
                onChange={this.props.handleChanges}
                placeholder="Type here" className="c-search_field_input" />
            </div>
        );
    }
}

export default SearchField;