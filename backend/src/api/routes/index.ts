import { Express } from 'express';
import authRoute from './auth-route';
import airportsRoute from './airports-route';
import ticketRoute from './ticket-route';

const routes = (app: Express): void => {
  app.use('/api/auth', authRoute);
  app.use('/api/airports', airportsRoute);
  app.use('/api/ticket', ticketRoute);
};

export default routes;
