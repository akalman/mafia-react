import { DAY_CONDEMNATION } from '../game-states';

export default (state, action) => {
  if (state.state !== DAY_CONDEMNATION) {
    return state;
  }

  const newState = Object.assign({ }, state, {
    votes: Object.assign({ }, state.votes, {
      [action.sender]: action.target
    })
  });

  if (!action.target) {
    delete newState.votes[action.sender];
  }

  return newState;
}
