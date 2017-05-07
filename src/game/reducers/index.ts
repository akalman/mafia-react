import { Reducer, combineReducers } from 'redux';
import GameState from '../types/GameState';
import Event from '../../events/Event';

import gameStartedReducer from './gameStartedReducer';
import playerReadyReducer from './playerReadyReducer';

const reducers: Reducer<GameState> = (state: GameState, event: Event) => {
    switch (event.type) {
        case 'GameStarted':
            return gameStartedReducer(state, event);
        case 'PlayerReady':
            return playerReadyReducer(state, event);
        default:
            return state;
    }
}

export default reducers;
