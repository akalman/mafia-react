import * as React from 'react';
import ws from '../../websocket';
import { connect } from 'react-redux';

import LoginPageProps from './LoginPageProps';
import RoomRequested from '../../../events/RoomRequested';

require('./loginPage.less');

class LoginPage extends React.Component<LoginPageProps, {}> {

    createRoom(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        let event: RoomRequested = {
            type: 'RoomRequested',
            hostid: this.props.playerid
        }
        ws.publish(event);
    }

    login(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
    }

    render() {
        return (
            <div className="login-page">
                <div className="create-room-button">
                    <button onClick={ e => { this.createRoom(e); } }>Create Room</button>
                </div>
                <div className="login-box">
                    <span className="login-box-title">Join Existing Game</span>
                    <label>Username: <input type="text" /></label>
                    <label>Room Code <input type="text" /></label>
                    <div className="login-button-container">
                        <button className="login-button" onClick={this.login}>Login</button>
                    </div>
                </div>
            </div>
        );
    }
}

const LoginPageAdapter = connect(
    state => ({ playerid: state.playerid })
)(LoginPage);
export default LoginPageAdapter;
