import log from './log';

export default (transformName, transformType, actionType) => {
  const msg = `${ transformName } received action of type ${ actionType } instead of ${ transformType }`;
  return log(msg);
};
