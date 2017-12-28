import rolesById from '../roles';
import actionTypes from '../action-types';

export default (state, action) => {
  const roleId = state.playerStates[action.sender].role;
  const role = rolesById[roleId];

  switch (role.action.type) {
    case actionTypes.NONE:
      return state;
    case actionTypes.UNARY:
      const legalTargets = role.action.targets(state, action.sender);
      if (!legalTargets.includes(action.target)) {
        return state;
      }

      return Object.assign({ }, state, {
        actions: Object.assign({ }, state.actions, {
          [action.sender]: {
            type: actionTypes.UNARY,
            effect: role.action.effect,
            target: action.target
          }
        })
      });
    default:
      return state;
  }
}
