import { DAY_CONVERSATION } from '../../../game-states'

export default () => {
   return (state) => {
     return Object.assign({ }, state, {
       state: DAY_CONVERSATION
     });
   };
};
