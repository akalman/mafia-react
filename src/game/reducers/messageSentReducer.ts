import GameState from '../types/GameState';
import MessageSent from '../../events/MessageSent';

import * as assign from 'object-assign';

import sequence from '../functions/sequence';
import iffn from '../functions/iffn';
import setPlayerState from '../transforms/setPlayerState';
import phaseShift from '../transforms/phaseShift';

export default function messageSentReducer(state: GameState, event: MessageSent): GameState {
    let chatroom = state.players[event.playerId].role.chatroom;
    if (chatroom === null) {
        return state;
    }

    let message = {
        chatroom: chatroom,
        ownerId: event.playerId,
        message: event.message,
        messageId: '' + Math.random()
    };

    return assign({ }, state, {
        messageIds: state.messageIds.slice(0).concat([ message.messageId ]),
        messages: assign({ }, state.messages, {
            [message.messageId]: message
        })
    });
}
