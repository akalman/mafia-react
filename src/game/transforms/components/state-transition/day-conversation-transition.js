import { DAY_ACUSATION } from '../../../game-states'

export default () => {
   return (state) => {
     return Object.assign({ }, state, {
       state: DAY_ACUSATION
     });
   };
};
