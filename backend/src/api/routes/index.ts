import { Express } from 'express';
import authRoute from './auth-route';
import airportsRoute from './airports-route';
import ticketRoute from './ticket-route';
import scheduleRoute from './schedule-route';
import accountRoute from './account-route';
import planesRoute from './planes-route';

const routes = (app: Express): void => {
  app.use('/api/auth', authRoute);
  app.use('/api/airports', airportsRoute);
  app.use('/api/ticket', ticketRoute);
  app.use('/api/schedule', scheduleRoute);
  app.use('/api/account', accountRoute);
  app.use('/api/planes', planesRoute);
};

export default routes;
