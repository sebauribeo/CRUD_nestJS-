import * as fs from 'fs';
import { parse } from 'dotenv';
import { PostgresConfigKeys } from './model/model';

export default () => {
  let envConfig;
  const isDevelopment = process.env.NODE_ENV === undefined;
  if (isDevelopment) {
    const filePath = '.env';
    const exitsFile = fs.existsSync(filePath);

    if (!exitsFile) {
      console.log('The file .env does not exist!');
      process.exit(0);
    }
    envConfig = parse(fs.readFileSync(filePath));
  } else {
    envConfig = {
      [PostgresConfigKeys.POSTGRES_PORT]: process.env.POSTGRES_PORT,
      [PostgresConfigKeys.POSTGRES_HOST]: process.env.POSTGRES_HOST,
      [PostgresConfigKeys.POSTGRES_USERNAME]: process.env.POSTGRES_USERNAME,
      [PostgresConfigKeys.POSTGRES_PASSWORD]: process.env.POSTGRES_PASSWORD,
      [PostgresConfigKeys.POSTGRES_DATABASE]: process.env.POSTGRES_DATABASE,
      [PostgresConfigKeys.POSTGRES_SCHEMA]: process.env.POSTGRES_SCHEMA,
    };
  }
  return envConfig;
};
