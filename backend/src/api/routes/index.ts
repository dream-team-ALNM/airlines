import { Express } from 'express';
import authRoute from './auth-route';
import airportsRoute from './airports-route';
import ticketRoute from './ticket-route';
import scheduleRoute from './schedule-route';

const routes = (app: Express): void => {
  app.use('/api/auth', authRoute);
  app.use('/api/airports', airportsRoute);
  app.use('/api/ticket', ticketRoute);
  app.use('/api/schedule', scheduleRoute);
};

export default routes;
