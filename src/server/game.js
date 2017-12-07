import clientRepository from './client-repository';
import store from './store';

store.subscribe(() => clientRepository.sendAll(JSON.stringify(store.getState())));

export default {
  setup: wss => {

    wss.on('connection', (ws, req) => {
      const id = clientRepository.add(ws);

      ws.on('message', msg => {
        console.log(`${id}: ${msg}`);

        // TODO: don't allow client to override sender
        // this is dependent on games being created with proper player ids
        const event = JSON.parse(msg);
        event.sender = event.sender || id;

        store.dispatch(event);
      });

      ws.on('close', () => {
        clientRepository.remove(id);
      });
    });

  }
}
