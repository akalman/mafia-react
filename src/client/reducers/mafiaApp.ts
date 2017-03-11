import { Reducer, combineReducers } from 'redux';

import State from '../state/State';
import page from './page';
import playerid from './playerid';

const mafiaApp: Reducer<State> = combineReducers<State>({
    page: page,
    playerid: playerid
});

export default mafiaApp;