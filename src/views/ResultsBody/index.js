import React, { Component } from 'react';

import './ResultsBody.scss';

function DisplayMovieItem(props) {
    return <div className="c-movie_item">
                <img src={props.img} alt="IMAGE"/>
                <div className="c-movie_item_info">
                    <p className="c-movie_item_title">{props.title}</p>
                    <p className="c-movie_item_date">{props.date}</p>
                    <p className="c-movie_item_genre">{props.genre}</p>
                </div>
            </div>;
};

class ResultsBody extends React.Component {

    render() {
        return (
            <div className="c-results_body">
                <DisplayMovieItem img="" title="KILL BILL: VOL. 2" date="2004" genre="Action & Adventure" />
                <DisplayMovieItem img="" title="PULP FICTION" date="1994" genre="Oscar-winning movies" />
                <DisplayMovieItem img="" title="KILL BILL: VOL. 2" date="2004" genre="Action & Adventure" />
                <DisplayMovieItem img="" title="PULP FICTION" date="1994" genre="Oscar-winning movies" />
                <DisplayMovieItem img="" title="KILL BILL: VOL. 2" date="2004" genre="Action & Adventure" />
                <DisplayMovieItem img="" title="PULP FICTION" date="1994" genre="Oscar-winning movies" />
                <DisplayMovieItem img="" title="KILL BILL: VOL. 2" date="2004" genre="Action & Adventure" />
            </div>
        );
    }
}

export default ResultsBody;