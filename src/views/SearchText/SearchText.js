import React, { Component } from 'react';

import './SearchText.scss';

function DisplayText(props) {
    return <p className="c-search_text">{props.text}</p>;
};

const SearchText = <DisplayText text="FIND YOUR MOVIE" />;

export default SearchText;