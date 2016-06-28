import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from './components/app';

import { Provider } from "react-redux";
import { reducers } from './reducers'

import { applyMiddleware, createStore } from "redux";

const promiseMiddleware         = require('redux-promise');
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(
  (
    <Provider store={createStoreWithMiddleware(reducers)}>
      <App />
    </Provider>
  ),
  document.getElementById('root')
);
