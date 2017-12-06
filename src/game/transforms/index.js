import eventTypes from '../event-types';

import forceEndTransform from './force-end-transform';
import gameStartedTransform from './game-started-transform';
import initializeTransform from './initialize-transform';

const typeToTransformMap = {
  [eventTypes.FORCE_END]: forceEndTransform,
  [eventTypes.GAME_STARTED]: gameStartedTransform,
  [eventTypes.INITIALIZE]: initializeTransform
};

export default (state = { }, action) => {
  const transform = typeToTransformMap[action.type];
  return transform == null ? state : transform(state, action);
};
