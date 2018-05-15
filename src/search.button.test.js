import React from 'react';

const buttonItem = require('./views/SearchButton/SearchButton.js');

it('should render a button', () => {
    const tree = renderer
        .create(<buttonItem />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});