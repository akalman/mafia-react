import * as React from 'react';
import { connect } from 'react-redux';

import AppProps from './AppProps';
import TestComponent from '../testComponent/TestComponent';
import LoginPage from '../loginPage/LoginPage';

class App extends React.Component<AppProps, {}> {

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

const AppAdapter = connect(
    state => ({ page: state.page })
)(App);
export default AppAdapter;
