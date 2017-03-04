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
                <div>
                    <button onClick={this.createRoom}>Create Room</button>
                </div>
                <div>
                    <label>Username: <input type="text" /></label>
                    <label>Room Code <input type="text" /></label>
                    <button onClick={this.login}>Login</button>
                </div>
            </div>
        );
    }
}
