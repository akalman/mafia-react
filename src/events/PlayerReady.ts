import Phase from '../game/types/Phase';

type PlayerReady = {
    type: 'PlayerReady',
    playerId: string,
    phase: Phase
};
export default PlayerReady;
