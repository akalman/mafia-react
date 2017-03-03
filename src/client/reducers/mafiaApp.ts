import { Reducer, combineReducers } from 'redux';

import State from '../state/State';
import page from './page';

const mafiaApp: Reducer<State> = combineReducers<State>({
    page: page
});

export default mafiaApp;