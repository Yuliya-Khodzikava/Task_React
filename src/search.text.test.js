import React from 'react';

const searchText = require('./views/SearchText/SearchText.js');

it('should render a text', () => {
    const textSearch = shallow(
        <searchText text="FIND YOUR MOVIE" />
    );
    expect(textSearch.prop('text')).toEqual('FIND YOUR MOVIE');
});