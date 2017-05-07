import Phase from './Phase';
import Player from './Player';
import Action from './Action';
import Message from './Message';

type GameState = {
    gameId: string;
    ownerId: string;

    phase: Phase;

    playerIds: string[];
    players: { [playerId: string]: Player };

    actions: { [playerId: string]: Action };

    messageIds: string[];
    messages: { [messageId: string]: Message };
};

export default GameState;
