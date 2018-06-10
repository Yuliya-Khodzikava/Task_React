import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './NotFound.scss';

class NotFound extends React.Component {

    render() {
        return (
            <div className="not_found">
                <h1>404 page not found</h1>
                <p>We are sorry but the page you are looking for does not exist.</p>
            </div>
        );
    }
}

export default NotFound;