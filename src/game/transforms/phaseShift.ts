import GameState from '../types/GameState';
import Phase from '../types/Phase';

import * as assign from 'object-assign';

import setPlayerState from './setPlayerState';

const nextPhase: { [a: string]: Phase } = {
    'first-day': 'night',
    'conversation': 'accusation',
    'accusation': 'lynching',
    'lynching': 'night',
    'night': 'conversation'
};

export default function phaseShift(): (x: GameState) => GameState {
    return (state: GameState): GameState => {
        let s = state;
        s.playerIds.forEach(playerId => setPlayerState(playerId, false)(state));

        return assign({ }, state, { phase: nextPhase[state.phase] });
    }
}
