import { DEAD } from '../../character-states';

export default (player) => {
  return (state) => {
    return Object.assign({ }, state, {
      playerStates: Object.assign({ }, state.playerStates, {
        [player]: Object.assign({ }, state.playerStates[player], {
          characterState: DEAD
        })
      })
    });
  };
};
