import React, { Component } from 'react';

import './SearchFilter.scss';

class SearchFilter extends React.Component {

    constructor() {
        super();
        this.state = {
            bgcolor: '#e50914',
            seccolor: 'rgba(255,255,255, 0.6)'
        };
        this.handleChangeGenre = this.handleChangeGenre.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
    }

    handleChangeGenre(event) {
        this.setState({
            seccolor: '#e50914',
            bgcolor: 'rgba(255,255,255, 0.6)'
        })
    }

    handleChangeTitle(event) {
        this.setState({
            seccolor: 'rgba(255,255,255, 0.6)',
            bgcolor: '#e50914'
        })
    }

    render() {
        return (
            <div className="c-search_filter">
                <p>SEARCH BY</p>
                <button ref="btn_title" style={{backgroundColor: this.state.bgcolor}} onClick={this.handleChangeTitle}>TITLE</button>
                <button ref="btn_genre" style={{backgroundColor: this.state.seccolor}} onClick={this.handleChangeGenre}>GENRE</button>
            </div>
        );
    }
}

export default SearchFilter;