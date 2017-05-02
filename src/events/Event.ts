import RoomRequested from './RoomRequested';
import RoomCreated from './RoomCreated';
import PlayerConnected from './PlayerConnected';

type Event = RoomRequested | RoomCreated | PlayerConnected;

export default Event;
