import endGameInError from './components/end-game-in-error';
import log from './components/log';
import { ALIVE } from '../character-states';
import { GAME_STARTED } from '../event-types';
import { NOT_STARTED, FIRST_DAY } from '../game-states';
import compose from '../../functional/compose';

export default (state, action) => {
  const readiedState = Object.assign({ }, state, {
    playerStates: Object.assign({ }, state.playerStates, {
      [action.sender]: Object.assign({ }, state.playerStates[action.sender], {
        ready: true
      })
    })
  });

  return readiedState;
}
