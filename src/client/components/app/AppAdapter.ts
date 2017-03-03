import { connect } from 'react-redux';

import App from './App';

const AppAdapter = connect(state => ({
    page: state.page
}))(App);

export default AppAdapter;