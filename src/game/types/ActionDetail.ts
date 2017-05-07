import Roles from './Roles';

type ActionDetail = {
    role: Roles | 'lynch-target' | 'verdict';
    type: 'boolean' | 'unary';
    priority: number;
};
export default ActionDetail;
