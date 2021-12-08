import { env } from '../../env';
import connectionPool from './database';
import {
  airportsSchema,
  planesSchema,
  scheduleSchema,
  ticketSchema,
  userSchema,
} from '../schemas';

import { Connection } from 'mongoose';

let conn = null;
const { db } = env;

try {
  conn = connectionPool(
    `mongodb+srv://alnm:${db.password}@${db.cluster}`,
    'airlines',
  );
  conn.model('user', userSchema, 'user');
  conn.model('airports', airportsSchema, 'airports');
  conn.model('planes', planesSchema, 'planes');
  conn.model('schedule', scheduleSchema, 'schedule');
  conn.model('ticket', ticketSchema, 'ticket');
} catch (err) {
  console.error(
    'Error occurred during an attempt to establish connection with the database',
  );
  console.error(err);
}

export default conn as Connection;
