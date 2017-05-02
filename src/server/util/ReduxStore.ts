import { createStore } from 'redux';

import ServerState from '../state/ServerState';
import reducers from '../reducers';

const store = createStore<ServerState>(reducers, {
    games: [],
    normalizedGames: { },
    gameEvents: { },
    playerToGame: { },
    gameToPlayers: { }
});
export default store;
