import React from 'react';

import api from '../api';

const INITIALIZE = () => ({ type: 'INITIALIZE' });
const GAME_STARTED = () => ({
  type: 'GAME_STARTED',
  players: [ '1', '2', '3', '4', '5' ]
});
const PLAYER_READY = (a) => ({
  type: 'PLAYER_READY',
  sender: a
});
const SET_ACUSATION_TARGET = (a, b) => ({
  type: 'SET_ACUSATION_TARGET',
  sender: a,
  target: b
});
const FORCE_END = () => ({ type: 'FORCE_END'});

export default class DebugEventSender extends React.PureComponent {

  constructor() {
    super();
    this.state = {
      message: '',
      PLAYER_READY_VALUE: '1',
      ACUSER: '1',
      ACUSEE: false
    }
  }

  render() {
    return (
      <div>
        <div>Debug Event Sender</div>
        {
        // <div>
        //   <textarea style={ { height: 200, width: 400 } }
        //             value={ this.state.message }
        //             onChange={ e => this.setState({ message: e.target.value }) } />
        // </div>
        // <div>
        //   <button type="button"
        //           onClick={ () => api.send(JSON.parse(this.state.message)) }>
        //     Send
        //   </button>
        // </div>
        }
        <div>
          <button type="button" onClick={ () => api.send(INITIALIZE()) }>
            INITIALIZE
          </button>
        </div>
        <div>
          <button type="button" onClick={ () => api.send(GAME_STARTED()) }>
            GAME_STARTED
          </button>
        </div>
        <div>
          <select value={ this.state.PLAYER_READY_VALUE } onChange={ e => this.setState({ PLAYER_READY_VALUE: e.target.value }) }>
            <option value="1">Player 1</option>
            <option value="2">Player 2</option>
            <option value="3">Player 3</option>
            <option value="4">Player 4</option>
            <option value="5">Player 5</option>
          </select>
          <button type="button" onClick={ () => api.send(PLAYER_READY(this.state.PLAYER_READY_VALUE)) }>
            PLAYER_READY
          </button>
          <button type="button"
                  onClick={ () => ['1', '2', '3', '4', '5'].forEach(player => api.send(PLAYER_READY(player))) }>
            ALL PLAYER_READY
          </button>
        </div>
        <div>
          <select value={ this.state.ACUSER } onChange={ e => this.setState({ ACUSER: e.target.value }) }>
            <option value="1">Player 1</option>
            <option value="2">Player 2</option>
            <option value="3">Player 3</option>
            <option value="4">Player 4</option>
            <option value="5">Player 5</option>
          </select>
          <select value={ this.state.ACUSEE } onChange={ e => this.setState({ ACUSEE: e.target.value == 'false' ? false : e.target.value }) }>
            <option value="1">Player 1</option>
            <option value="2">Player 2</option>
            <option value="3">Player 3</option>
            <option value="4">Player 4</option>
            <option value="5">Player 5</option>
            <option value="false">None</option>
          </select>
          <button type="button" onClick={ () => { if (this.state.ACUSER !== this.state.ACUSEE) api.send(SET_ACUSATION_TARGET(this.state.ACUSER, this.state.ACUSEE)); } }>
            SET_ACUSATION_TARGET
          </button>
        </div>
        <div>
          <button type="button" onClick={ () => api.send(FORCE_END()) }>
            FORCE_END
          </button>
        </div>
      </div>
    );
  }

}
