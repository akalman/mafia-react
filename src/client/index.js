import React from 'react';
import ReactDom from 'react-dom';

import api from './api';
import App from './app';

api.onReady(() => api.send({ type: 'client-connected' }));
api.register(data => alert(JSON.stringify(data)));

const root = document.getElementById('react-root');
ReactDom.render(<App />, root);
