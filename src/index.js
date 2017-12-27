import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import './index.scss';

import LayoutMain from 'views/LayoutMain';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={LayoutMain} />
        </Switch>
    </BrowserRouter>,
    document.getElementById("app")
)