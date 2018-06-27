// @flow

import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Header from '../Header/Header.js';
import './Movie.scss';

class Movie extends React.Component {
    render() {
        return (
            <div className="c-movie">
                <div className="c-movie--dark">
                    <Header />
                    <nav>
                       <Link to="/search"><button>SEARCH</button></Link>
                    </nav>
                    <div className="c-movie_items">
                        <div className="c-movie_image"></div>
                        <div className="c-movie_description">
                            <h2>PULP FICTION</h2>
                            <div>4.1</div>
                            <h3>Oscar-winning Movies</h3>
                            <p className="c-movie_date">1994</p>
                            <p className="c-movie_time">154 min</p>
                            <p className="c-movie_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada dictum sollicitudin. Quisque aliquam dapibus magna at mollis. Phasellus fringilla ullamcorper quam, posuere posuere quam tempor ut. Curabitur porttitor ultrices iaculis. Duis egestas elementum tellus et interdum. In non massa in metus tempus sollicitudin et a orci. Fusce commodo vel quam sit amet faucibus. Vivamus suscipit enim vestibulum purus scelerisque pulvinar.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Movie;