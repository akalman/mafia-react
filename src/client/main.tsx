import * as React from 'react';
import * as ReactDOM from 'react-dom';
import TestComponent from './components/TestComponent';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <TestComponent />,
        document.getElementById('container')
    );
});