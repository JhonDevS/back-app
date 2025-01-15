import dotenv from 'dotenv';
import { env } from 'process';

dotenv.config();

export const config = {
  port: env.PORT || 8002,
  env: env.NODE_ENV || 'development',
  urlSupaBase: env.SUPABASE_URL || '',
  keySupaBase: env.supabaseKey || ''
};
