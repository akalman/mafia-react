import GameState from '../types/GameState';
import PlayerReady from '../../events/PlayerReady';

import * as assign from 'object-assign';

import sequence from '../functions/sequence';
import iffn from '../functions/iffn';
import setPlayerState from '../transforms/setPlayerState';
import phaseShift from '../transforms/phaseShift';

export default function playerReadyReducer(state: GameState, event: PlayerReady): GameState {
    if (state.phase !== event.phase) {
        return state;
    }

    return sequence(
        setPlayerState(event.playerId, true),
        iffn<GameState>(
            (state: GameState): boolean => state.playerIds.every(playerId => state.players[playerId].ready),
            phaseShift())
    )(state);
}
