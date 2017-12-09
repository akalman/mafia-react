import stateTransition from './components/state-transition';

export default (state, action) => {
  if (['INTERMISSION'].includes(state.state)) {
    return state;
  }

  const readiedState = Object.assign({ }, state, {
    playerStates: Object.assign({ }, state.playerStates, {
      [action.sender]: Object.assign({ }, state.playerStates[action.sender], {
        ready: true
      })
    })
  });

  const allPlayersReady = Object.values(readiedState.playerStates)
    .every(playerState => playerState.ready);
  if (allPlayersReady) {
    return stateTransition()(readiedState);
  }

  return readiedState;
}
