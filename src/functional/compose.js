export default (...fns) => {
  return input => {
    let output = input;
    fns.forEach(fn => { output = fn(output); });
    return output;
  };
};
