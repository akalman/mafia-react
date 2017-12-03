import express from 'express';
import http from 'http';
import path from 'path';

import WebSocket from 'ws';

import game from './server/game';

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.get('/', (req, res) => {
  res.sendFile(path.resolve('output', 'index.html'));
});
app.use('/static', express.static(path.resolve('output', 'static')));

game.setup(wss);

server.listen(3000);

console.log('mafia server started.');
console.log('load the page in your browser via localhost:3000');
console.log();
