import 'reflect-metadata';
import cors from 'cors';
import path from 'path';
import express, { Express } from 'express';
import { env } from './env';
import routes from './api/routes';
import { logger } from './common/utils/logger.util';

const { port } = env.app;

const app: Express = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '../../build', '/public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);

app.listen(port, async () => {
  logger.info(`Server is running at ${port}.`);
});

export default app;
