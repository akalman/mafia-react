import * as React from 'react';

import AppProps from './AppProps';
import TestComponent from '../testComponent/TestComponent';
import LoginPage from '../loginPage/LoginPage';

export default class App
        extends React.Component<AppProps, any> {

    render() {
        switch (this.props.page) {
            case 'login':
                return <LoginPage />;
            case 'lobby':
            case 'host':
            case 'game':
                return <TestComponent />;
        }
    }
}