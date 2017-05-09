import GameState from '../types/GameState';
import GameStarted from '../../events/GameStarted';
import Player from '../types/Player';

import createPlayers from '../functions/createPlayers';

const playersToLookup = (players: Player[]): { [playerId: string]: Player } => {
    let lookup: { [playerId: string]: Player } = { };
    players.forEach(p => lookup[p.playerId] = p);
    return lookup;
}

export default function gameStartedReducer(state: GameState, event: GameStarted): GameState {
    let players = createPlayers(event.playerIds);

    return {
        gameId: '' + Math.random(),
        ownerId: event.ownerId,
        phase: 'first-day',
        playerIds: players.map(p => p.playerId),
        players: playersToLookup(players),
        actions: { },
        messageIds: [ ],
        messages: { }
    };
}
