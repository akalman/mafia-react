import { combineReducers } from 'redux';

import gameReducer from '../game/transforms';

export default combineReducers({
  game: gameReducer
});
