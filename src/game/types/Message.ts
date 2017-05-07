import Chatrooms from './Chatrooms';

type Message = {
    chatroom: Chatrooms;
    ownerId: string;
    message: string;
};
export default Message;
