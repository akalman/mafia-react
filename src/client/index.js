import React from 'react';
import { Provider } from 'react-redux'
import { render } from 'react-dom';

import api from './api';
import App from './app';
import store from './store';

api.onReady(() => api.send({ type: 'client-connected' }));
api.register(data => store.dispatch({ type: 'UPDATE_STATE', state: data }));

const root = document.getElementById('react-root');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
)
