import * as React from 'react';
import { render } from 'react-dom';

import { createStore } from 'redux';
import mafiaApp from './reducers/mafiaApp';
import State from './state/State';

import { Provider } from 'react-redux';
import App from './components/app/AppAdapter';

require('./main.less');

let store = createStore<State>(mafiaApp, {
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
