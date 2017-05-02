import ServerState from '../state/ServerState';
import RoomRequested from '../../events/RoomRequested';

import GameState from '../../game/GameState';

import store from '../util/ReduxStore';

const roomRequestedHandler = (state: ServerState, event: RoomRequested) => {
    let gameid = '' + Math.random();
    let gameState: GameState = {
        GameId: gameid,
        ownerid: event.hostid,

        phase: 'unstarted',

        playerids: [],
        players: { },

        roleids: { },
        roles: { },

        actionids: { },
        actions: { },

        messageids: [],
        messages: {  }
    };

    return {
        games: state.games.concat([ gameid ]),
        normalizedGames: { ...state.normalizedGames, [gameid]: gameState },
        gameEvents: { ...state.gameEvents, [gameid]: [ ] },
        playerToGame: { ...state.playerToGame, [event.hostid]: gameid },
        gameToPlayers: { ...state.gameToPlayers, [gameid]: [ event.hostid ] }
    };
}

export default roomRequestedHandler;
