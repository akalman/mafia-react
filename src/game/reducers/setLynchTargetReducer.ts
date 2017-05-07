import GameState from '../types/GameState';
import SetLynchTarget from '../../events/SetLynchTarget';

import * as assign from 'object-assign';

import sequence from '../functions/sequence';
import iffn from '../functions/iffn';
import setPlayerState from '../transforms/setPlayerState';
import phaseShift from '../transforms/phaseShift';

export default function gameStartedReducer(state: GameState, event: SetLynchTarget): GameState {
    return sequence(
        setPlayerState(event.playerId, true),
        iffn<GameState>(
            (state: GameState): boolean => {
                let votes: { [playerId: string]: number } = { };
                state.playerIds.forEach(playerId => {
                    let vote = state.actions[playerId]
                    if (!!vote && vote.type === 'lynch-vote') {
                        votes[vote.targetId] = (votes[vote.targetId] || 0) + 1;
                    }
                });
                return false;
            },
            phaseShift())
    )(state);
}
