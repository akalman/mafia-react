import { DAY_CONDEMNATION } from '../../../game-states'

export default () => {
   return (state) => {
     return Object.assign({ }, state, {
       state: DAY_CONDEMNATION
     });
   };
};
