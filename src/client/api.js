import uuid from 'uuid/v4';

const socket = new WebSocket('ws://localhost:3000');
const listeners = { };

const register = callback => {
  const id = uuid();

  listeners[id] = callback;

  return () => { delete listeners[id]; }
}

const onReady = callback => {
  socket.addEventListener('open', function (event) {
    callback();
  });
}

socket.addEventListener('message', function (event) {
    Object.keys(listeners).forEach(id => {
      listeners[id](event.data);
    });
});

export default {
  send: msg => socket.send(msg),
  onReady: onReady,
  register: register
}
