import * as http from 'http';

import app from './ExpressApplication';

const server = http.createServer(app);
export default server;
