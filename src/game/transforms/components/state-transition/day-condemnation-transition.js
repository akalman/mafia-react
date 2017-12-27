import compose from '../../../../functional/compose';
import { NIGHT } from '../../../game-states';
import votes from '../../../vote-options';
import killPlayer from '../kill-player';
import checkGameState from '../check-game-end';


export default () => {
  return (state) => {
    let newState = Object.assign({ }, state, {
      state: NIGHT,
      votes: { },
      acused: ''
    });

    const guiltyVotes = Object.values(state.votes)
      .filter(vote => vote === votes.GUILTY)
      .length;
    const innocentVotes = Object.values(state.votes)
      .filter(vote => vote === votes.INNOCENT)
      .length;

    if (guiltyVotes > innocentVotes) {
      return compose (
        killPlayer(state.acused),
        checkGameState()
      )(newState);
    }

    return newState;
  };
};
