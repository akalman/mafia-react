import endGameInError from './components/end-game-in-error';
import log from './components/log';
import { ALIVE } from '../character-states';
import { GAME_STARTED } from '../event-types';
import { NOT_STARTED, FIRST_DAY } from '../game-states';
import compose from '../../functional/compose';

export default (state, action) => {
  if (state.state !== NOT_STARTED) {
    return compose(
      log(`need to be in state ${ NOT_STARTED } to start game but state is ${ state.state }`),
      endGameInError()
    )(state);
  }

  if (action.players.length < 5) {
    return compose(
      log(`need 5 players to start a game but only have ${ action.players.length }`),
      endGameInError()
    )(state);
  }

  return Object.assign({ }, state, {
    state: FIRST_DAY,

    players: action.players.slice(),
    playerStates: action.players.reduce(
      (playerStates, player) => {
        playerStates[player] = {
          ready: false,
          characterState: ALIVE
        };

        return playerStates;
      },
      { }),

    actions: { },
    acusations: { },
    votes: { }

  });
}
