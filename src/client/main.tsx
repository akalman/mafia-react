import * as React from 'react';
import { render } from 'react-dom';

import { createStore } from 'redux';
import mafiaApp from './reducers/mafiaApp';
import State from './state/State';

import { Provider } from 'react-redux';
import App from './components/app/AppAdapter';

let store = createStore<State>(mafiaApp, {
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