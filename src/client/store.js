import { createStore } from 'redux';

const reducer = (state = { }, action) => {
  return action.state;
}

export default createStore(reducer);
