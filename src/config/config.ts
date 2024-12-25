import dotenv from 'dotenv';
import { env } from 'process';

dotenv.config();

export const config = {
  port: process.env.PORT || 8002, // eslint-disable-line no-undef
  env: env.NODE_ENV || 'development'
};
