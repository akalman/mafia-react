import GameState from '../types/GameState';
import SetLynchTarget from '../../events/SetLynchTarget';
import { LynchVote } from '../types/Action';

import * as assign from 'object-assign';

import sequence from '../functions/sequence';
import iffn from '../functions/iffn';
import setPlayerAction from '../transforms/setPlayerAction';
import phaseShift from '../transforms/phaseShift';

function reduceVotes(votes: { [targetId: string]: number }, action: LynchVote)
    : { [targetId: string]: number } {

    votes[action.targetId] = (votes[action.targetId] || 0) + 1;
    return votes;
}

function getMaxVotedTarget(votes: { [targetId: string]: number })
    : { targetId: string, votes: number} | null {

    let voteList: { targetId: string, votes: number}[] = [ ];
    for (let targetId in votes) {
        voteList.push({ targetId: targetId, votes: votes[targetId] });
    }

    voteList.sort((a, b) => a.votes - b.votes);
    return voteList.pop() || null;
}

export default function setLynchTargetReducer(state: GameState, event: SetLynchTarget): GameState {
    let action: LynchVote | null = !!event.targetId ? {
        type: 'lynch-vote',
        actorId: event.playerId,
        targetId: event.targetId
    } : null;

    return sequence(
        setPlayerAction(event.playerId, action),
        iffn<GameState>(
            (state: GameState): boolean => {
                let totalsLookup = state.playerIds
                    .map(playerId => state.actions[playerId])
                    .filter(action => action && action.type === 'lynch-vote')
                    .reduce(reduceVotes, { });

                let target = getMaxVotedTarget(totalsLookup);
                if (target == null) {
                    return false;
                }

                return target.votes > state.playerIds.length;
            },
            phaseShift())
    )(state);
}
