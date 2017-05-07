import { Reducer, combineReducers } from 'redux';
import ServerState from '../state/ServerState';
import Event from '../../events/Event';

const reducers: Reducer<ServerState> = (state: ServerState, event: Event) => {
    switch (event.type) {
        default:
            return state;
    }
}

export default reducers;
