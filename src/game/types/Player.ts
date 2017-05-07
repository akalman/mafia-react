import Role from './Role';

type Player = {
    playerId: string;
    name: string;
    ready: boolean;
    state: 'alive' | 'dead';
    role: Role;
};
export default Player;
