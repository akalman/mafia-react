import clientRepository from './client-repository';
import store from './store';

store.subscribe(() => clientRepository.sendAll(JSON.stringify(store.getState())));

export default {
  setup: wss => {

    wss.on('connection', (ws, req) => {
      const id = clientRepository.add(ws);

      ws.on('message', msg => {
        console.log(`${id}: ${msg}`);
        store.dispatch(JSON.parse(msg));
      });

      ws.on('close', () => {
        clientRepository.remove(id);
      });
    });

  }
}
