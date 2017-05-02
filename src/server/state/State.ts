import GameState from '../../game/GameState';
import Event from '../../events/Event';

type ServerState = {
    games: string[];
    normalizedGames: { [gameid: string]: GameState };
    gameEvents: { [gameid: string]: Event[] };

    playerToGame: { [playerid: string]: string };
    gameToPlayers: { [gameid: string]: string[] };
}

export default ServerState;
