import http from 'http';
import { HttpError } from 'http-errors';
import pino from 'pino';
import app from './app';
import { PORT } from './configs';
import logger from './libs/logger';

const normalizePort = (val: string): string | number | boolean => {
  const portOrPipe = parseInt(val, 10);

  if (isNaN(portOrPipe)) {
    // named pipe
    return val;
  }

  if (portOrPipe >= 0) {
    // port number
    return portOrPipe;
  }

  return false;
};

const port = normalizePort(PORT);
app.set('port', port);
const server: http.Server = http.createServer(app);

const onError = (error: HttpError) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind: string =
    typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr?.port;
  logger.info(`Data Server is listening on ${bind}`);
};

const main = async () => {
  server.listen(port);
  server.on('error', onError);
  server.on('listening', onListening);
};

main().catch((error: Error) => logger.error(error));

process.on('unhandledRejection', (error) => {
  throw error;
});

process.on(
  'uncaughtException',
  pino.final(
    logger,
    (error: Error, finalLogger: pino.Logger<pino.LoggerOptions>) => {
      finalLogger.error(error, 'uncaughtException');
      process.exit(1);
    }
  )
);
