import { ALIVE } from '../../character-states';
import { FINISHED } from '../../game-states';

export default () => {
  return (state) => {
    const teamsLeft = state.players
      .filter(player => state.playerStates[player].characterState == ALIVE)
      .map(player => state.playerStates[player].role.team)
      .reduce((acc, curr) => Object.assign(acc, { [curr]: true }), { });

    if (Object.keys(teamsLeft).length > 1) {
      return state;
    }

    return Object.assign({}, state, {
      state: FINISHED
    });
  };
};
