import React from 'react
import { hydrate } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
​import { BrowserRouter } from 'react-router-dom'

import App from 'views/App/App'
import allReducers from './reducers'

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;
​
// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;
​
// Create Redux store with initial state
const store = createStore(allReducers, preloadedState);
​
hydrate(
    <Provider store={store}>
      <App Router={BrowserRouter} />
    </Provider>,
  document.getElementById('app')
)