import compose from '../../../../functional/compose';
import gameStates from '../../../game-states';
import resetReady from '../reset-ready';
import firstDayTransition from './first-day-transition';
import dayConversationTransition from './day-conversation-transition';
import dayAcusationTransition from './day-acusation-transition';
import dayCondemnationTransition from './day-condemnation-transition';
import nightTransition from './night-transition';

import log from '../log';

const transitionMap = {
  [gameStates.NOT_STARTED]: x => x,
  [gameStates.FIRST_DAY]: firstDayTransition(),
  [gameStates.DAY_CONVERSATION]: dayConversationTransition(),
  [gameStates.DAY_ACUSATION]: dayAcusationTransition(),
  [gameStates.DAY_CONDEMNATION]: dayCondemnationTransition(),
  [gameStates.NIGHT]: nightTransition(),
  [gameStates.INTERMISSION]: x => x,
  [gameStates.FINISHED]: x => x
};

export default () => {
   return compose(
    state => transitionMap[state.state](state),
    resetReady());
};
