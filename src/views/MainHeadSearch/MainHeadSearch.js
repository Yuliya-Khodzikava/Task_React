import React, { Component } from 'react';

import './MainHeadSearch.scss';

import Header from 'views/Header/Header.js';
import SearchItems from 'views/SearchItems/SearchItems.js';

const MovieItems = [
    {img: require('../../resources/img/killbill2.jpg'), title: 'KILL BILL: VOL. 2', date: '2004', genre: 'Action and Adventure', rating: '5'},
    {img: require('../../resources/img/killbill1.jpg'), title: 'KILL BILL: VOL. 1', date: '2003', genre: 'Action and Adventure', rating: '4'},
    {img: require('../../resources/img/pulpfiction.jpg'), title: 'PULP FICTION', date: '1994', genre: 'Oscar-winning movie', rating: '4.1'},
    {img: require('../../resources/img/JackieBrown.png'), title: 'JACKIE BROWN', date: '1997', genre: 'Dramas', rating: '5.5'},
    {img: require('../../resources/img/reservoirdogs.jpg'), title: 'RESERVOIR DOGS', date: '1992', genre: 'Independent Movies', rating: '3.2'},
    {img: require('../../resources/img/fourrooms.jpg'), title: 'FOUR ROOMS', date: '1993', genre: 'Comedies', rating: '3'},
    {img: require('../../resources/img/django.jpg'), title: 'DJANGO UNCHAINED', date: '2013', genre: 'Dramas', rating: '7'}
];

class MainHeadSearch extends React.Component {

    render() {
        return (
            <div className="c-main">
                <div className="c-main--dark">
                    <Header />
                    <SearchItems items={MovieItems} />
                </div>
            </div>
        );
    }
}

export default MainHeadSearch;