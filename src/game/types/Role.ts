import Roles from './Roles';
import ActionDetail from './ActionDetail';
import Teams from './Teams';
import Chatrooms from './Chatrooms';

type Role = {
    type: Roles;
    name: string;
    action: ActionDetail | null;
    team: Teams;
    chatroom: Chatrooms | null;
    visibleChatrooms: Chatrooms[];
};
export default Role;
