import PlayerRef from './types/PlayerRef';

type GameStarted = {
    type: 'GameStarted';
    ownerId: string;
    playerIds: PlayerRef[];
};
export default GameStarted;
