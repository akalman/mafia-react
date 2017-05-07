import Role from '../types/Role';
import Roles from '../types/Roles';
import ActionDetail from '../types/ActionDetail';
import Teams from '../types/Teams';
import Chatrooms from '../types/Chatrooms';

const Villager: Role = {
    type: Roles.Villager,
    name: 'Villager',
    action: null,
    team: Teams.Town,
    chatroom: null,
    visibleChatrooms: [ ]
}
export default Villager;
