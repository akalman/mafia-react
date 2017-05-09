import { Reducer, combineReducers } from 'redux';
import GameState from '../types/GameState';
import Event from '../../events/Event';

import gameStartedReducer from './gameStartedReducer';
import playerReadyReducer from './playerReadyReducer';
import messageSentReducer from './messageSentReducer';
import setLynchTargetReducer from './setLynchTargetReducer';

const reducers: Reducer<GameState> = (state: GameState, event: Event) => {
    switch (event.type) {
        case 'GameStarted':
            return gameStartedReducer(state, event);
        case 'PlayerReady':
            return playerReadyReducer(state, event);
        case 'MessageSent':
            return messageSentReducer(state, event);
        case 'SetLynchTarget':
            return setLynchTargetReducer(state, event);
        default:
            return state;
    }
}

export default reducers;
