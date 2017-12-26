import { NIGHT } from '../../../game-states';
import votes from '../../../vote-options';

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
      //TODO: kill player and check for game end
      console.log('killing player goes here')
    }

    return newState;
  };
};
