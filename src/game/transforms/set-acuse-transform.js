import { DAY_ACUSATION } from '../game-states';

export default (state, action) => {
  if (state.state !== DAY_ACUSATION) {
    return state;
  }

  const newState = Object.assign({ }, state, {
    acusations: Object.assign({ }, state.acusations, {
      [action.sender]: action.target
    })
  });

  if (!action.target) {
    delete newState.acusations[action.sender];
  }

  return newState;
}
