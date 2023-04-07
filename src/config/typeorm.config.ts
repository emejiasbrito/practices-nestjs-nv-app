import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { environments } from '../../environments';

dotenv.config({
  path:
    environments[process.env.NODE_ENV ? process.env.NODE_ENV : 'dev'] || '.env',
});

const PostgresDataSource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT, 10),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: false,
  logging: true,
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/database/migrations/*-migration.ts'],
});

export default PostgresDataSource;
