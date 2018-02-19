import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import './index.scss';

import App from 'views/App';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
        </Switch>
    </BrowserRouter>,
    document.getElementById("app")
)