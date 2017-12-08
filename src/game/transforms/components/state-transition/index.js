import compose from '../../../../functional/compose';
import gameStates from '../../../game-states';
import resetReady from '../reset-ready';
import firstDayTransition from './first-day-transition';
import dayConversationTransition from './day-conversation-transition';
import nightTransition from './night-transition';

import log from '../log';

const transitionMap = {
  [gameStates.NOT_STARTED]: x => x,
  [gameStates.FIRST_DAY]: firstDayTransition(),
  [gameStates.DAY_CONVERSATION]: dayConversationTransition(),
  [gameStates.DAY_ACUSATION]: x => x,
  [gameStates.DAY_CONDEMNATION]: x => x,
  [gameStates.NIGHT]: nightTransition(),
  [gameStates.INTERMISSION]: x => x,
  [gameStates.FINISHED]: x => x
};

export default () => {
  console.log('making transition fn');
  return compose(
    state => transitionMap[state.state](state),
    resetReady());
};
