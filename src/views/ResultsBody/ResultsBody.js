import React, { Component } from 'react';

import './ResultsBody.scss';

class ResultsBody extends React.Component {

    render() {
        return (
            <div className="c-results_body">
                {this.props.items.map( item =>
                    <div className="c-movie_item">
                        <img src={item.img} alt="IMAGE"/>
                        <div className="c-movie_item_info">
                            <p className="c-movie_item_title">{item.title}</p>
                            <p className="c-movie_item_date">{item.date}</p>
                            <p className="c-movie_item_genre">{item.genre}</p>
                        </div>
                     </div>
                )}
            </div>
        );
    }
}

export default ResultsBody;