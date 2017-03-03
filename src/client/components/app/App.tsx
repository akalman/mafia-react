import * as React from 'react';

import AppProps from './AppProps';
import TestComponent from '../testComponent/TestComponent';

export default class App
        extends React.Component<AppProps, any> {
    render() {
        switch (this.props.page) {
            case 'login':
            case 'lobby':
            case 'host':
            case 'game':
                return <TestComponent />
        }
    }
}