import React from 'react';
// import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Todos from './index';

import store from './store/createStore';

export default (
  <Provider store={store}>
    <Todos />
  </Provider>
);
