import * as http from 'http';

import app from './expressApplication';

const server = http.createServer(app);
export default server;
