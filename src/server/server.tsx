import * as express from 'express';
import * as path from 'path';
import * as aws from 'aws-sdk';

import app from './util/ExpressApplication';
import server from './util/HttpServer';

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
