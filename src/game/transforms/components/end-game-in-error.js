import { FINISHED } from '../../game-states';
import { ERROR } from '../../game-results';

export default () => {
  return state => {
    return Object.assign({}, state, {
      state: FINISHED,
      result: ERROR
    });
  };
};
