import express, { Request, Response } from 'express';
import { LoggerInstance } from './config/logger';

import { config } from './config/config';

const app = express();
const port = config.port;

app.use(LoggerInstance.morganMiddleware);

app.get('/', (_: Request, res: Response) => {
  res.send('Hello, TypeScript Express!');
});

app.listen(port, () => {
  LoggerInstance.info(`Server running at http://localhost:${port}`);
});
