type State = {
    phase: 'conversation' | 'accusation' | 'lynching' | 'night';

    playerids: string[],
    players: { [playerid: string]: Player },

    roleids: { [playerid: string] : string },
    roles: { [roleid: string]: Role }

    actionids: { [playerid: string] : string },
    actions: { [actionid: string]: Action },

    messageids: string[],
    messages: { [messageid: string]: Message }
};

type Player = {
    id: string;
    name: string;
};

type Role = {
    id: string;
    kind: Roles;
    name: string;
    action: ActionDetails;
    team: Teams;
    chatroom: Chatrooms;
    visibleChatrooms: Chatrooms[];
};

type ActionDetails = {
    type: 'boolean' | 'unary' | 'binary';
    priority: number;
};

type Action = BooleanAction | UnaryAction | BinaryAction;
type BooleanAction = { id: string, ownerid: string, kind: Roles, priority: number };
type UnaryAction = { id: string, ownerid: string, kind: Roles, priority: number, targetid: string };
type BinaryAction = { id: string, ownerid: string, kind: Roles, priority: number, targetoneid: string, targettwoid: string };

type Message = {
    chatroom: Chatrooms;
    ownerid: string;
    message: string;
};

enum Teams {
    Town,
    Mafia
};

enum Chatrooms {

};

enum Roles {

};