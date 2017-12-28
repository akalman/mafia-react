import teams from './teams';
import actionTypes from './action-types';
import { ALIVE } from './character-states';

const VILLAGER_ID = 'VILLAGER';
export const VILLAGER = {
  type: VILLAGER_ID,
  team: teams.TOWN,
  action: {
    type: actionTypes.NONE,
    effect: VILLAGER_ID
  }
};

const MAFIOSO_ID = 'MAFIOSO';
export const MAFIOSO = {
  type: MAFIOSO_ID,
  team: teams.MAFIA,
  action: {
    type: actionTypes.UNARY,
    effect: MAFIOSO_ID,
    targets: (state, actor) => {
      return state.players
        .filter(player => player !== actor)
        .filter(player => state.playerStates[player].characterState === ALIVE)
        .filter(player => rolesById[state.playerStates[player].role].team !== teams.MAFIA);
    }
  }
};

const rolesById = {
  [VILLAGER_ID]: VILLAGER,
  [MAFIOSO_ID]: MAFIOSO
};

export default rolesById;
