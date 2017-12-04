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
          <textarea style={ { height: 200 } }
                    value={ this.state.message }
                    onChange={ e => this.setState({ message: e.target.value }) } />
        </div>
        <div>
          <button type="button"
                  onClick={ () => api.send(JSON.parse(this.state.message)) }>
            Send
          </button>
        </div>
      </div>
    );
  }

}
