import { env } from '../../env';
import connectionPool from './database';
import citySchema from '../schemas/city';
import { Connection } from 'mongoose';

let conn = null;
const { db } = env;

try {
  conn = connectionPool(`mongodb+srv://alnm:${db.password}@${db.cluster}`, 'airlines');
  conn.model('city', citySchema, 'city');
} catch (err) {
  console.error('Error occurred during an attempt to establish connection with the database');
  console.error(err);
}

export default conn as Connection;
