import { DAY_CONDEMNATION, NIGHT } from '../../../game-states';
import { ALIVE } from '../../../character-states';

export default () => {
  return (state) => {
    let playerMap = state.players.reduce(
      (acc, curr) => Object.assign(acc, { [curr]: 0 }),
      {});

    Object.values(state.acusations).forEach(acusation => {
      playerMap[acusation] = playerMap[acusation] + 1;
    });

    let mostVoted = Object.keys(playerMap)
      .reduce((acc, curr) => playerMap[curr] > playerMap[acc] ? curr : acc);

    const alivePlayerCount = state.players
      .filter(player => state.playerStates[player].characterState === ALIVE)
      .length;

    return (playerMap[mostVoted] > alivePlayerCount / 2) ?
      Object.assign({ }, state, {
        state: DAY_CONDEMNATION,
        acusations: { },
        acused: mostVoted
      }) :
      Object.assign({ }, state, {
        state: NIGHT,
        acusations: { }
      });
  };
};
