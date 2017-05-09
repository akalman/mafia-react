import GameState from '../types/GameState';
import Action from '../types/Action';

import * as assign from 'object-assign';

export default function setPlayerAction(playerId: string, value: Action | null): (x: GameState) => GameState {
    return (state: GameState): GameState => {
        return assign({ }, state, {
            actions: assign({ }, state, {
                [playerId]: !!value ? value : undefined
            })
        });
    }
}
