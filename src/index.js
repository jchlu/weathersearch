import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import ReduxPromise from 'redux-promise'

import App from './components/app'
import reducers from './reducers/'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

ReactDOM.render(
  <Provider store={createStore(reducers, composeEnhancers(
    applyMiddleware(ReduxPromise)
  ))}>
    <App />
  </Provider>
  , document.getElementById('app'))
