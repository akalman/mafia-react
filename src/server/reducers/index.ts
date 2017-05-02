import { Reducer, combineReducers } from 'redux';
import ServerState from '../state/ServerState';
import Event from '../../events/Event';

import roomRequestedHandler from './roomRequestedHandler';

const reducers: Reducer<ServerState> = (state: ServerState, event: Event) => {
    switch (event.type) {
        case 'RoomRequested':
            return roomRequestedHandler(state, event);
        default:
            return state;
    }
}

export default reducers;
