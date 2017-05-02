import Event from '../../events/Event';
import { RoomRequestEvent, isRoomRequestEvent } from '../../events/RoomRequestEvent';
import StateRepository from '../state/StateRepository';

let repository = new StateRepository();

export default function handleEvent(event: Event) {
    if (isRoomRequestEvent(event)) {
        repository.put({
            GameId: '' + Math.random(),
            ownerid: event.hostid,

            phase: 'unstarted',

            playerids: [],
            players: { },

            roleids: { },
            roles: { },

            actionids: { },
            actions: { },

            messageids: [],
            messages: {  }
        })
    }
}