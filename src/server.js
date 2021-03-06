import path from 'path';
import Express from 'express';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route, Switch } from 'react-router-dom';

import App from './views/App/App';
import Movie from './views/Movie/Movie.js';
import NotFound from './views/NotFound/NotFound.js';

import allReducers from './reducers';

const app = Express();
const port = 3000;

app.get('/', handleRender);

function handleRender(req, res) {
    // Create a new Redux store instance
    const store = createStore(allReducers);

    // Render the component to a string
    const html = renderToString(
        <StaticRouter>
            <Provider store={store}>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/movies" component={Movie}/>
                    <Route path="/search" component={App}/>
                    <Route component={NotFound} />
                </Switch>
            </Provider>
        </StaticRouter>,
    );
    // Grab the initial state from our Redux store
    const preloadedState = store.getState();
    // Send the rendered page back to the client
    res.send(renderFullPage(html, preloadedState));
};

function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
    `
};

app.listen(port);