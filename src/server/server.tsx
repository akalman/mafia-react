import * as express from 'express';
import * as path from 'path';
import * as http from 'http';
import * as WebSocket from 'ws';
import * as aws from 'aws-sdk';
import * as url from 'url';
import { createStore } from 'redux';

import WebS from './WebSocket';
import ServerState from './state/State';
import reducers from './reducers';

let store = createStore<ServerState>(reducers, {
    games: [],
    normalizedGames: { },
    gameEvents: { },
    playerToGame: { },
    gameToPlayers: { }
});

var app = express();
const server = http.createServer(app);

const webs = new WebS(server, store.dispatch);

app.use(express.static(path.join(__dirname, 'client')))

server.listen(3001, function listening() {
  console.log('Listening on %d', server.address().port);
});

aws.config.update({ region: "us-west-2" });
let db = new aws.DynamoDB.DocumentClient();
db.put(
    {
        TableName: 'mafia-react-dev-adam',
        Item: {
            GameId: '12345',
            some: 'shit here 2',
            howMuch: 9001,
            testList: ['first item', 2, '3rd item']
        }
    },
    (err, data) => console.log('wrote stuff to aws')
);
