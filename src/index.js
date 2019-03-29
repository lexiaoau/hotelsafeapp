import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';

import { changePin } from './reducers'

import './index.scss';

import App from './App';
import * as serviceWorker from './serviceWorker';

console.log("index js")
const logger = createLogger()

const store = createStore(changePin, applyMiddleware(logger))
console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
