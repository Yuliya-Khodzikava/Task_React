import React, { Component } from 'react';

import './App.scss';

import MainHeadSearch from 'views/MainHeadSearch/MainHeadSearch.js';


import Footer from 'views/Footer/Footer.js';

//const MovieItems = [
//    {img: '../../resources/img/killbill2.jpg', title: 'KILL BILL: VOL. 2', date: '2004', genre: 'Action and Adventure'},
//    {img: '../../resources/img/killbill1.jpg', title: 'KILL BILL: VOL. 1', date: '2003', genre: 'Action and Adventure'},
//    {img: '../../resources/img/pulpfiction.jpg', title: 'PULP FICTION', date: '1994', genre: 'Oscar-winning movie'},
//    {img: '../../resources/img/JackieBrown.png', title: 'JACKIE BROWN', date: '1997', genre: 'Dramas'},
//    {img: '../../resources/img/reservoirdogs.jpg', title: 'RESERVOIR DOGS', date: '1992', genre: 'Independent Movies'},
//    {img: '../../resources/img/fourrooms.jpg', title: 'FOUR ROOMS', date: '1993', genre: 'Comedies'},
//    {img: '../../resources/img/django.jpg', title: 'DJANGO UNCHAINED', date: '2013', genre: 'Dramas'}
//];

class App extends React.Component {

    render() {
        return (
            <div className="app">
                <MainHeadSearch />


                <Footer />
            </div>
        );
    }
}

export default App;