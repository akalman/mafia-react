import eventTypes from '../event-types';

import forceEndTransform from './force-end-transform';
import gameStartedTransform from './game-started-transform';
import initializeTransform from './initialize-transform';
import playerReadyTransform from './player-ready-transform';
import setAcuseTransform from './set-acuse-transform';

const typeToTransformMap = {
  [eventTypes.FORCE_END]: forceEndTransform,
  [eventTypes.GAME_STARTED]: gameStartedTransform,
  [eventTypes.INITIALIZE]: initializeTransform,
  [eventTypes.PLAYER_READY]: playerReadyTransform,
  [eventTypes.SET_ACUSATION_TARGET]: setAcuseTransform
};

export default (state = { }, action) => {
  const transform = typeToTransformMap[action.type];
  return transform == null ? state : transform(state, action);
};
