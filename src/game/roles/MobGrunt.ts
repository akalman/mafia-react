import Role from '../types/Role';
import Roles from '../types/Roles';
import ActionDetail from '../types/ActionDetail';
import Teams from '../types/Teams';
import Chatrooms from '../types/Chatrooms';

const MobGrunt: Role = {
    type: Roles.MobGrunt,
    name: 'Mob Grunt',
    action: null,
    team: Teams.Mafia,
    chatroom: Chatrooms.Mafia,
    visibleChatrooms: [ Chatrooms.Mafia ]
}
export default MobGrunt;
