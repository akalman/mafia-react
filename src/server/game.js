import clientRepository from './client-repository';

export default {
  setup: wss => {

    wss.on('connection', (ws, req) => {
      const id = clientRepository.add(ws);

      ws.on('message', msg => {
        clientRepository.sendAll(msg);
      });

      ws.on('close', () => {
        clientRepository.remove(id);
      })
    });

  }
}
