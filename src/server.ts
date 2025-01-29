import express from 'express';
import cors from 'cors';
import { LoggerInstance } from './config/logger';

import { config } from './config/config';
import { router } from './routes';

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })
);

const port = config.port;

app.use(LoggerInstance.morganMiddleware);

app.use('/api/v1/', router);

app.listen(port, () => {
  LoggerInstance.info(`Server running at http://localhost:${port}`);
});
