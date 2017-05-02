import { Reducer, combineReducers } from 'redux';

import ClientState from '../state/ClientState';

import page from './page';
import playerid from './playerid';

const reducers: Reducer<ClientState> = combineReducers<ClientState>({
    page: page,
    playerid: playerid
});

export default reducers;
