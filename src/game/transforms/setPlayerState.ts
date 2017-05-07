import GameState from '../types/GameState';

import * as assign from 'object-assign';

export default function setPlayerState(playerId: string, value: boolean): (x: GameState) => GameState {
    return (state: GameState): GameState => {
        return assign({ }, state, {
            players: assign({ }, state, {
                [playerId]: assign({ }, state, { ready: value })
            })
        });
    }
}
