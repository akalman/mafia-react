import { NOT_STARTED } from '../game-states';
import { NONE } from '../game-results';

export default (state, action) => {
  return {
    state: NOT_STARTED,
    result: NONE,

    players: [ ],
    playerStates: { },

    actions: { },
    acusations: { },
    votes: { },

    acused: '',

    logs: [ ]
  };
}
