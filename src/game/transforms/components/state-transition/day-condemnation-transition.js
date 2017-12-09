import { NIGHT } from '../../../game-states'

export default () => {
   return (state) => {
     return Object.assign({ }, state, {
       state: NIGHT
     });
   };
};
