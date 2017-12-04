import React from 'react';

import api from '../api';

export default class DebugEventSender extends React.PureComponent {

  constructor() {
    super();
    this.state = {
      message: ''
    }
  }

  render() {
    return (
      <div>
        <div>Debug Event Sender</div>
        <div>

          <input type="text"
                 value={ this.state.message }
                 onChange={ e => this.setState({ message: e.target.value }) } />

          <button type="button"
                  onClick={ () => api.send(this.state.message) }>
            Send
          </button>

        </div>
      </div>
    );
  }

}
