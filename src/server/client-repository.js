import uuid from 'uuid/v4';

const clientsById = { };

const add = client => {
  const id = uuid();

  clientsById[id] = client;

  return id;
}

const remove = id => {
  delete clientsById[id];
}

const sendAll = msg => {
  Object.keys(clientsById).forEach(id => {
    clientsById[id].send(msg);
  });
}


export default {
  add,
  remove,
  sendAll
}
