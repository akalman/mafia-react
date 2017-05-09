import Chatrooms from './Chatrooms';

type Message = {
    chatroom: Chatrooms;
    ownerId: string;
    message: string;
    messageId: string;
};
export default Message;
