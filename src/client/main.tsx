import * as React from 'react';
import { render } from 'react-dom';

import { createStore } from 'redux';
import reducers from './reducers';
import State from './state/State';

import { Provider } from 'react-redux';
import App from './components/app/App';

require('./main.less');

let store = createStore<State>(reducers, {
    playerid: '' + Math.random(),
    page: 'login'
});

document.addEventListener('DOMContentLoaded', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('container')
    );
});
