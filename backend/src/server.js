#!/usr/bin/env node

import getApp from './app.js';
import config from './middleware/config';
import winstonLogger from './middleware/winston-logger';
import http from 'http';

const normalizePort = (val) => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const onError = (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      winstonLogger.error('Bind requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      winstonLogger.error('Bind is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  winstonLogger.info('Server started to listen...');
};

async function getServer() {
  try {
    const app = await getApp();
    const server = http.createServer(app);

    const port = normalizePort(config.http_server_port);
    app.set('port', port);

    server.listen(process.env.PORT || port);
    server.on('error', onError);
    server.on('listening', onListening);

    return server;
  } catch (error) {
    winstonLogger.error(error);

    return null;
  }
}

if (config.node_env !== 'test') {
  getServer();
}

export default getServer;
