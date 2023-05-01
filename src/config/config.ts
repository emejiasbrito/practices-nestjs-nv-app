import * as dotenv from 'dotenv';
import { environments } from '../../environments';
import { registerAs } from '@nestjs/config';

const envFileDefault = '.env';
dotenv.config({
  path: envFileDefault,
});

/** indica el entorno de la aplicación */
const NODE_ENV = process.env.NODE_ENV || 'production';

/** se asigna en nombre del archivo .env con las variables de entorno a utilizar */
const envFilePath = environments[NODE_ENV] || envFileDefault;

/** se configura el path del archivo .env a utilizar */
if (envFilePath !== envFileDefault)
  dotenv.config({
    path: envFilePath,
  });

const postgres = {
  database: process.env.POSTGRES_DB,
  port: parseInt(process.env.POSTGRES_PORT, 10),
  password: process.env.POSTGRES_PASSWORD,
  username: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
};

const config = {
  NODE_ENV,
  envFilePath,
  postgres,
  apiKey: process.env.API_KEY,
};

export default registerAs('config', () => config);
