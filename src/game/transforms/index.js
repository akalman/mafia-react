import eventTypes from '../event-types';

import forceEndTransform from './force-end-transform';
import gameStartedTransform from './game-started-transform';
import initializeTransform from './initialize-transform';
import playerReadyTransform from './player-ready-transform';
import setActionTransform from './set-action-transform';
import setAcuseTransform from './set-acuse-transform';
import setCondemnTransform from './set-condemn-transform';

const typeToTransformMap = {
  [eventTypes.FORCE_END]: forceEndTransform,
  [eventTypes.GAME_STARTED]: gameStartedTransform,
  [eventTypes.INITIALIZE]: initializeTransform,
  [eventTypes.PLAYER_READY]: playerReadyTransform,
  [eventTypes.SET_ACTION_TARGET]: setActionTransform,
  [eventTypes.SET_ACUSATION_TARGET]: setAcuseTransform,
  [eventTypes.SET_CONDEMNATION_VOTE]: setCondemnTransform
};

export default (state = { }, action) => {
  const transform = typeToTransformMap[action.type];
  return transform == null ? state : transform(state, action);
};
