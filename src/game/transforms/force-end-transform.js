import endGameInError from './components/end-game-in-error';

export default (state, action) => {
  return endGameInError()(state);
}
