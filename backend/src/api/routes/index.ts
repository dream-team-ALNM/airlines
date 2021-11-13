import { Express } from 'express';
import authRoute from './auth-route';

const routes = (app: Express): void => {
  app.use('/api/auth', authRoute);
};

export default routes;
