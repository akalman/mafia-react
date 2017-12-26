import teams from './teams';
import actionTypes from './action-types';

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
    effect: MAFIOSO_ID
  }
};
