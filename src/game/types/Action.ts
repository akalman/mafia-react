import ActionDetail from './ActionDetail';

type LynchVote = {
    type: 'lynch-vote';
    actorId: string;
    targetId: string;
}

type BooleanAction = {
    type: 'boolean';
    details: ActionDetail;
    actorId: string;
};

type UnaryAction = {
    type: 'unary';
    details: ActionDetail;
    actorId: string;
    targetId: string;
};

type Action = BooleanAction | UnaryAction | LynchVote;
export default Action;
