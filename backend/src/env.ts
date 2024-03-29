import * as dotenv from 'dotenv';
import { getOsEnv } from './common/helpers/path.helper';

dotenv.config();

export const env = {
  app: {
    port: getOsEnv('PORT'),
    secretKey: getOsEnv('APP_SECRET'),
  },

  db: {
    cluster: getOsEnv('CLUSTER'),
    password: getOsEnv('DB_PASSWORD'),
  },
} as const;
