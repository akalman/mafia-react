import * as express from 'express';
import * as path from 'path';
import * as http from 'http';
import * as WebSocket from 'ws';
import * as aws from 'aws-sdk';
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