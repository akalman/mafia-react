import * as React from 'react';

require('./loginPage.less');

export default class LoginPage
        extends React.Component<{}, any> {

    createRoom(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
    }

    login(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
    }

    render() {
        return (
            <div className="login-page">
                <div className="create-room-button">
                    <button onClick={this.createRoom}>Create Room</button>
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
