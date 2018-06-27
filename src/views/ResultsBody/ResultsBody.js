// @flow

import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './ResultsBody.scss';

class ResultsBody extends React.Component {

    render() {
        return (
            <div className="c-results_body">
                <div className="c-results_body--smaller-container">
                    {this.props.items.map( (item, index) => {
                        if (item.id === "3") {
                            return (<div key={index} className="c-movie_item">
                                        <nav>
                                           <Link to={`/movies/${item.id}`}><img src={item.img}/></Link>
                                        </nav>
                                        <div className="c-movie_item_info">
                                           <p className="c-movie_item_title">{item.title}</p>
                                           <p className="c-movie_item_date">{item.date}</p>
                                           <p className="c-movie_item_genre">{item.genre}</p>
                                        </div>
                                    </div>);
                        } else {
                            return (<div key={index} className="c-movie_item">
                                        <nav>
                                          <Link to="/nothing_found"><img src={item.img}/></Link>
                                        </nav>
                                        <div className="c-movie_item_info">
                                          <p className="c-movie_item_title">{item.title}</p>
                                          <p className="c-movie_item_date">{item.date}</p>
                                          <p className="c-movie_item_genre">{item.genre}</p>
                                        </div>
                                    </div>);
                        }
                    }
                    )}
                </div>
            </div>
        );
    }
}

export default ResultsBody;