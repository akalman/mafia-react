import { connect } from 'react-redux';

import LoginPage from './LoginPage';

const LoginPageAdapter = connect(
    state => ({ playerid: state.playerid })
)(LoginPage);

export default LoginPageAdapter;