import GameState from '../types/GameState';
import Phase from '../types/Phase';

import * as assign from 'object-assign';

import setPlayerState from './setPlayerState';
import setPlayerAction from './setPlayerAction';

const nextPhase: { [a: string]: Phase } = {
    'first-day': 'night',
    'conversation': 'accusation',
    'accusation': 'night',
    'night': 'conversation'
};

export default function phaseShift(): (x: GameState) => GameState {
    return (state: GameState): GameState => {
        let s = state;
        s.playerIds.forEach(playerId => s = setPlayerState(playerId, false)(s));
        s.playerIds.forEach(playerId => s = setPlayerAction(playerId, null)(s));

        return assign({ }, s, { phase: nextPhase[state.phase] });
    }
}
