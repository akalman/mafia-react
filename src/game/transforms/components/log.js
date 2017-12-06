export default msg => {
  return state => {
    return Object.assign({}, state, {
      logs: state.logs.concat([ msg ])
    });
  };
};
