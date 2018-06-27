// @flow

import React from 'react';
import ReactDOM, { hydrate } from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch, browserHistory } from 'react-router-dom';

import App from 'views/App/App';
import Movie from 'views/Movie/Movie.js';
import NotFound from 'views/NotFound/NotFound.js';

import './index.scss';

import allReducers from './reducers';

//const store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

// Create Redux store with initial state
const store = createStore(allReducers, preloadedState, composeWithDevTools(applyMiddleware(thunk)));

hydrate(
    <BrowserRouter history={browserHistory}>
        <Provider store={store}>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/movies" component={Movie}/>
                <Route path="/search" component={App}/>
                <Route component={NotFound} />
            </Switch>
        </Provider>
    </BrowserRouter>,
  document.getElementById("app")
);