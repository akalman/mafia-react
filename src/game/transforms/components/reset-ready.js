import { ALIVE } from '../../character-states';

export default msg => {
  return state => {
    let outputState = state

    state.players
      .filter(player => state.playerStates[player].characterState === ALIVE)
      .forEach(player => {
        outputState = Object.assign({ }, outputState, {
          playerStates: Object.assign({ }, outputState.playerStates, {
            [player]: Object.assign({ }, outputState.playerStates[player], {
              ready: false
            })
          })
        })
      });

    return outputState;
  };
};
