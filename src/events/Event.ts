import GameStarted from './GameStarted';
import PlayerReady from './PlayerReady';
import SetLynchTarget from './SetLynchTarget';
import MessageSent from './MessageSent';

type Event = GameStarted | PlayerReady | SetLynchTarget | MessageSent;

export default Event;
