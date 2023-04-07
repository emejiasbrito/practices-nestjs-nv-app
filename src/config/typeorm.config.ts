import { DataSource } from 'typeorm';
import config from '../config/config';

const { database, port, password, username, host } = config().postgres;
const PostgresDataSource = new DataSource({
  type: 'postgres',
  host,
  port,
  username,
  password,
  database,
  synchronize: false,
  logging: true,
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/database/migrations/*-migration.ts'],
});

export default PostgresDataSource;
