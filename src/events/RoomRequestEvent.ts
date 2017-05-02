import Event from './Event';

interface RoomRequestEvent {
    type: 'RoomRequestEvent';
    hostid: string;
}

function isRoomRequestEvent(event: Event): event is RoomRequestEvent {
    return event.type === 'RoomRequestEvent';
}

export default RoomRequestEvent;
export { RoomRequestEvent, isRoomRequestEvent };
