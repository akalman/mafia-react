import * as express from 'express';
import * as path from 'path';

import app from './util/expressApplication';
import server from './util/httpServer';

app.use(express.static(path.resolve(__dirname, '../output/client')))

server.listen(3001, function listening() {
  console.log('Listening on %d', server.address().port);
});
