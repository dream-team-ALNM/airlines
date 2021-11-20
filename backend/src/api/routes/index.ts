import { Express } from 'express';
import authRoute from './auth-route';
import airportsRoute from './airports-route';

const routes = (app: Express): void => {
  app.use('/api/auth', authRoute);
  app.use('/api/airports', airportsRoute);
};

export default routes;
