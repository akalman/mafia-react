import { Reducer } from 'redux';

import Event from '../../events/Event';

const playerid: Reducer<any> = (state: string, action: Event) => {
    switch (action.type) {
        case 'PlayerConnected':
            return action.playerid;
        default:
            return state;
    }
};

export default playerid;
