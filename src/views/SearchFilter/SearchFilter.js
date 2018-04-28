import React, { Component } from 'react';

import './SearchFilter.scss';

class SearchFilter extends React.Component {

    handleFilter() {
        // Get the container element
        var btnContainer = document.getElementById("c-search_filter");

        // Get all buttons with class="btn" inside the container
        var btns = btnContainer.getElementsByClassName("btn");

        // Loop through the buttons and add the active class to the current/clicked button
        for (var i = 0; i < btns.length; i++) {
          btns[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
          });
        }
    }

    render() {
        return (
            <div id="c-search_filter" className="c-search_filter">
                <p>SEARCH BY</p>
                <button className="btn active" onClick={this.handleFilter}>TITLE</button>
                <button className="btn" onClick={this.handleFilter}>GENRE</button>
            </div>
        );
    }
}

export default SearchFilter;