import * as express from 'express';
import * as path from 'path';
import * as http from 'http';
import * as WebSocket from 'ws';
import * as url from 'url';

var app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.static(path.join(__dirname, 'client')))

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        console.log('received: %s', message);
    });

    ws.send('something');
});

app.listen(3000);